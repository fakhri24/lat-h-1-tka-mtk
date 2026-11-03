import { chromium } from 'playwright';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = './audit-screenshots';
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Server at ${url} did not start within ${timeoutMs}ms`);
}

async function runAudit() {
  const serverProc = spawn('npx', ['vite', '--port', '3010'], {
    stdio: 'pipe',
    shell: true,
  });

  try {
    await waitForServer('http://localhost:3010/');
    const browser = await chromium.launch({ headless: true });

    const viewports = [
      { name: '1080p (1920x1080)', width: 1920, height: 1080 },
      { name: 'WXGA+ (1440x900)', width: 1440, height: 900 },
      { name: 'HD (1366x768)', width: 1366, height: 768 },
    ];

    const overallResults = {};
    let totalScoreSum = 0;
    let testCount = 0;
    const issuesSummary = [];

    for (const vp of viewports) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      await page.goto('http://localhost:3010/', { waitUntil: 'networkidle' });

      const qResults = [];

      for (let q = 1; q <= 25; q++) {
        // Open Floating Menu and click question number q
        const menuTrigger = page.locator('[data-menu-trigger]');
        await menuTrigger.click();
        await page.waitForTimeout(40);

        const numBtn = page.locator('[data-number-grid] button', {
          hasText: new RegExp(`^${q}$`),
        });
        await numBtn.click();
        await page.waitForTimeout(80);

        // Evaluate metrics on the question view
        const data = await page.evaluate((num) => {
          const doc = document.documentElement;
          const body = document.body;
          const winH = window.innerHeight;
          const winW = window.innerWidth;

          // 1. Check outer scrollbars & clean screen
          const hasOuterScrollY = doc.scrollHeight > winH || body.scrollHeight > winH || window.scrollY > 0;
          const hasOuterScrollX = doc.scrollWidth > winW || body.scrollWidth > winW || window.scrollX > 0;
          const hasPermanentHeaderFooter = Boolean(document.querySelector('header, footer'));

          // 2. Check visual container metrics
          const photoContainer = document.querySelector('[data-photo-container]');
          let photoGridPct = 0;
          let svgRect = null;
          if (photoContainer) {
            const pRect = photoContainer.getBoundingClientRect();
            const gridParent = photoContainer.parentElement;
            if (gridParent) {
              const gRect = gridParent.getBoundingClientRect();
              photoGridPct = Math.round((pRect.width / gRect.width) * 100);
            }
            const svgEl = photoContainer.querySelector('svg');
            if (svgEl) {
              const sRect = svgEl.getBoundingClientRect();
              svgRect = { width: Math.round(sRect.width), height: Math.round(sRect.height) };
            }
          }

          // 3. Check typography & KaTeX
          const stimulusEl = document.querySelector('[data-stimulus]');
          const questionEl = document.querySelector('[data-question-text]');
          const stimulusFontSize = stimulusEl ? parseFloat(window.getComputedStyle(stimulusEl).fontSize) : 20;
          const questionFontSize = questionEl ? parseFloat(window.getComputedStyle(questionEl).fontSize) : 0;
          const questionFontWeight = questionEl ? window.getComputedStyle(questionEl).fontWeight : '400';
          const isQuestionBold = parseInt(questionFontWeight, 10) >= 600 || questionFontWeight === 'bold';

          const katexErrors = document.querySelectorAll('.katex-error').length;
          const katexCount = document.querySelectorAll('.katex').length;
          const hasRawDoubleAsterisk = body.innerText.includes('**');

          // 4. Inner text column scroll overflow check
          const textColumn = document.querySelector('[data-text-column]');
          let innerScrollExcess = 0;
          if (textColumn) {
            innerScrollExcess = Math.max(0, textColumn.scrollHeight - textColumn.clientHeight);
          }

          return {
            q: num,
            hasOuterScrollY,
            hasOuterScrollX,
            hasPermanentHeaderFooter,
            hasVisual: Boolean(photoContainer),
            photoGridPct,
            svgRect,
            stimulusFontSize,
            questionFontSize,
            isQuestionBold,
            katexErrors,
            katexCount,
            hasRawDoubleAsterisk,
            innerScrollExcess,
          };
        }, q);

        // Save screenshots for visual review on 1080p (clean question state)
        if (vp.width === 1920 && [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 23, 25].includes(q)) {
          await page.screenshot({
            path: path.join(SCREENSHOT_DIR, `q${q}_1080p.png`),
          });
        }

        // Test opening Pembahasan Modal on 1080p for ALL 25 questions
        let solutionModalWorks = true;
        let modalAudit = {
          modalKatexErrors: 0,
          modalHasRawAsterisk: false,
          offsideSteps: [],
        };
        if (vp.width === 1920) {
          await page.locator('[data-solution-trigger]').click();
          await page.waitForTimeout(80);
          solutionModalWorks = await page.locator('[data-solution-modal]').isVisible();

          if (solutionModalWorks) {
            modalAudit = await page.evaluate(() => {
              const modalEl = document.querySelector('[data-solution-modal]');
              if (!modalEl) {
                return { modalKatexErrors: 1, modalHasRawAsterisk: false, offsideSteps: [] };
              }
              const modalKatexErrors = modalEl.querySelectorAll('.katex-error').length;
              const modalHasRawAsterisk = modalEl.innerText.includes('**');
              const steps = Array.from(modalEl.querySelectorAll('[data-solution-step]'));
              const offsideSteps = [];
              steps.forEach((stepEl, idx) => {
                const sRect = stepEl.getBoundingClientRect();
                if (stepEl.scrollWidth > stepEl.clientWidth + 2) {
                  offsideSteps.push(`Step ${idx + 1} scrollWidth(${stepEl.scrollWidth}) > clientWidth(${stepEl.clientWidth})`);
                }
                const katexEls = stepEl.querySelectorAll('.katex-html');
                katexEls.forEach((kEl) => {
                  const kRect = kEl.getBoundingClientRect();
                  if (kRect.right > sRect.right + 2) {
                    offsideSteps.push(`Step ${idx + 1} KaTeX right(${Math.round(kRect.right)}) > step right(${Math.round(sRect.right)})`);
                  }
                });
              });
              return { modalKatexErrors, modalHasRawAsterisk, offsideSteps };
            });

            if ([2, 3, 4, 5, 6, 7, 8, 11, 12, 15, 17, 19, 20, 21, 22, 24, 25].includes(q)) {
              await page.screenshot({
                path: path.join(SCREENSHOT_DIR, `q${q}_solution_1080p.png`),
              });
              if (q === 11) {
                const steps = page.locator('[data-solution-step]');
                await steps.nth(2).scrollIntoViewIfNeeded();
                await page.waitForTimeout(50);
                await page.screenshot({
                  path: path.join(SCREENSHOT_DIR, `q11_solution_pilihan2_1080p.png`),
                });
                await steps.nth(3).scrollIntoViewIfNeeded();
                await page.waitForTimeout(50);
                await page.screenshot({
                  path: path.join(SCREENSHOT_DIR, `q11_solution_pilihan3_1080p.png`),
                });
              }
            }
          }

          await page.locator('[data-solution-modal] button').first().click();
          await page.waitForTimeout(60);
        }

        // Compute objective 1-10 score
        let score = 10;
        const deductions = [];

        if (data.hasOuterScrollY || data.hasOuterScrollX) {
          score -= 3;
          deductions.push('Outer scrollbar detected');
        }
        if (data.hasPermanentHeaderFooter) {
          score -= 2;
          deductions.push('Permanent header/footer detected');
        }
        if (data.stimulusFontSize < 20 || data.questionFontSize < 20) {
          score -= 2;
          deductions.push(`Font size < 20px (${data.questionFontSize}px)`);
        }
        if (!data.isQuestionBold) {
          score -= 1.5;
          deductions.push('Main question text is not bold');
        }
        if (data.katexErrors > 0 || modalAudit.modalKatexErrors > 0) {
          score -= 3;
          deductions.push(`${data.katexErrors + modalAudit.modalKatexErrors} KaTeX errors found`);
        }
        if (data.hasRawDoubleAsterisk || modalAudit.modalHasRawAsterisk) {
          score -= 2;
          deductions.push('Raw ** markdown characters leaked');
        }
        if (modalAudit.offsideSteps.length > 0) {
          score -= 2;
          deductions.push(`Solution offside overflow: ${modalAudit.offsideSteps.join('; ')}`);
        }
        if (data.hasVisual && data.photoGridPct < 50) {
          score -= 2;
          deductions.push(`Visual width ${data.photoGridPct}% < 50%`);
        }
        if (data.hasVisual && (!data.svgRect || data.svgRect.width < 350 || data.svgRect.height < 200)) {
          score -= 2;
          deductions.push(`SVG too small: ${JSON.stringify(data.svgRect)}`);
        }
        // Penalize inner scroll on 1080p or large inner scroll on 900p/768p
        if (vp.height >= 900 && data.innerScrollExcess > 10) {
          score -= 1.5;
          deductions.push(`Inner text scroll of ${data.innerScrollExcess}px on ${vp.name}`);
        } else if (vp.height === 768 && data.innerScrollExcess > 120) {
          score -= 1.0;
          deductions.push(`Large inner scroll (${data.innerScrollExcess}px) on 768p`);
        }
        if (!solutionModalWorks) {
          score -= 2;
          deductions.push('Solution modal failed to open');
        }

        data.score = Math.max(1, Number(score.toFixed(2)));
        data.deductions = deductions;
        if (deductions.length > 0) {
          issuesSummary.push(`[${vp.name}] Q${q}: ${deductions.join(', ')} (Score: ${data.score})`);
        }

        qResults.push(data);
        totalScoreSum += data.score;
        testCount++;
      }

      overallResults[vp.name] = qResults;
      await page.close();
    }

    await browser.close();

    const averageScore = Number((totalScoreSum / testCount).toFixed(2));
    console.log('====================================');
    console.log(`TOTAL TESTS EVALUATED : ${testCount}`);
    console.log(`AVERAGE AUDIT SCORE   : ${averageScore} / 10`);
    console.log('====================================');
    if (issuesSummary.length > 0) {
      console.log('ISSUES FOUND:');
      issuesSummary.forEach((iss) => console.log(' -', iss));
    } else {
      console.log('ZERO ISSUES FOUND ACROSS ALL 75 VIEWPORT-QUESTION TESTS!');
    }

    fs.writeFileSync(
      'audit_results.json',
      JSON.stringify({ averageScore, issuesSummary, overallResults }, null, 2)
    );
  } finally {
    serverProc.kill();
  }
}

runAudit().catch((err) => {
  console.error(err);
  process.exit(1);
});
