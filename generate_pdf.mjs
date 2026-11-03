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

async function generatePdf() {
  const serverProc = spawn('npx', ['vite', '--port', '3012'], {
    stdio: 'pipe',
    shell: true,
  });

  try {
    await waitForServer('http://localhost:3012/');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
      viewport: { width: 1000, height: 1400 },
      deviceScaleFactor: 2,
    });

    await page.goto('http://localhost:3012/?mode=pdf', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(400);

    // Audit each of the 4 A4 sheets for overflow
    const audit = await page.evaluate(() => {
      // Unlock html/body overflow so all 4 sheets are measurable
      document.documentElement.style.overflow = 'visible';
      document.documentElement.style.height = 'auto';
      document.body.style.overflow = 'visible';
      document.body.style.height = 'auto';

      const sheets = Array.from(document.querySelectorAll('[data-pdf-page]'));
      return sheets.map((sheet, idx) => {
        const sRect = sheet.getBoundingClientRect();
        const cols = Array.from(sheet.querySelectorAll('[data-pdf-col]'));
        const colMetrics = cols.map((col) => {
          const cRect = col.getBoundingClientRect();
          const qBlocks = Array.from(col.querySelectorAll('[data-pdf-question]'));
          const lastQ = qBlocks[qBlocks.length - 1];
          const lastQRect = lastQ ? lastQ.getBoundingClientRect() : cRect;
          const totalQHeight = qBlocks.reduce((acc, qEl) => acc + qEl.getBoundingClientRect().height, 0);
          return {
            side: col.getAttribute('data-pdf-col'),
            colHeight: Math.round(cRect.height),
            totalQHeight: Math.round(totalQHeight),
            freeSpacePx: Math.round(cRect.height - totalQHeight),
            overflowBottomPx: Math.max(0, Math.round(lastQRect.bottom - (sRect.bottom - 18))),
          };
        });
        return {
          page: idx + 1,
          sheetHeight: Math.round(sRect.height),
          colMetrics,
        };
      });
    });

    console.log('=== 4-PAGE A4 PDF LAYOUT AUDIT ===');
    console.log(JSON.stringify(audit, null, 2));

    // Screenshot each of the 4 pages for visual inspection
    for (let p = 1; p <= 4; p++) {
      const sheetLocator = page.locator(`[data-pdf-page="${p}"]`);
      await sheetLocator.Screenshot
      await sheetLocator.screenshot({
        path: path.join(SCREENSHOT_DIR, `pdf_page_${p}.png`),
      });
    }

    // Export vector PDF
    const publicPdfPath = path.resolve('./public/25-Soal-TKA-Matematika-Wajib-Gelombang-1.pdf');
    const rootPdfPath = path.resolve('./25-Soal-TKA-Matematika-Wajib-Gelombang-1.pdf');

    await page.pdf({
      path: publicPdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
      preferCSSPageSize: true,
    });

    fs.copyFileSync(publicPdfPath, rootPdfPath);
    const stat = fs.statSync(publicPdfPath);
    console.log(`PDF generated successfully: ${publicPdfPath} (${Math.round(stat.size / 1024)} KB)`);

    await browser.close();
  } finally {
    serverProc.kill();
  }
}

generatePdf().catch((err) => {
  console.error(err);
  process.exit(1);
});
