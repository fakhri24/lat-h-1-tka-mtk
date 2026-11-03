import { QuestionItem } from '../types/question';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    topic: 'Fungsi Linear',
    type: 'multiple-choice',
    storyContext:
      'Adinda sering menggunakan layanan ojek *online* untuk bepergian. Besarnya tarif perjalanan bergantung pada jarak yang ditempuh. Grafik berikut menunjukkan hubungan antara jarak tempuh $x$ (km) dan tarif perjalanan $y$ (rupiah).',
    questionText:
      'Suatu hari, Adinda membayar $\\text{Rp}45.000,00$ untuk perjalanan dari rumah ke perpustakaan. Jarak antara rumah dan perpustakaan tersebut adalah ....',
    visualId: 'soal-1',
    options: [
      { key: 'A', text: '$15\\text{ km}$' },
      { key: 'B', text: '$17,5\\text{ km}$' },
      { key: 'C', text: '$20\\text{ km}$' },
      { key: 'D', text: '$22,5\\text{ km}$' },
      { key: 'E', text: '$25\\text{ km}$' },
    ],
    solution: {
      answerSummary: 'C. $20\\text{ km}$',
      correctOptionKey: 'C',
      steps: [
        'Baca informasi langsung dari grafik (dalam satuan ribu rupiah):\nTarif awal saat jarak $x = 0\\text{ km}$ adalah $5\\text{ ribu rupiah}$ ($\\text{Rp}5.000,00$).\nSaat jarak $x = 1\\text{ km}$, biaya menjadi $7\\text{ ribu rupiah}$.\nArtinya, setiap bertambah $1\\text{ km}$, tarif naik tetap sebesar:\n$$\\begin{aligned}\n\\text{Kenaikan tarif per km} &= 7 - 5 \\\\\n&= 2\\text{ ribu rupiah/km}\n\\end{aligned}$$',
        'Total biaya yang dibayar Adinda adalah $\\text{Rp}45.000,00$ ($45\\text{ ribu rupiah}$).\nKurangi total biaya dengan tarif awal untuk memperoleh biaya perjalanan murni:\n$$\\begin{aligned}\n\\text{Biaya perjalanan} &= 45 - 5 \\\\\n&= 40\\text{ ribu rupiah}\n\\end{aligned}$$',
        'Hitung jarak tempuh dari rumah ke perpustakaan:\n$$\\begin{aligned}\n\\text{Jarak tempuh } (x) &= \\frac{\\text{Biaya perjalanan}}{\\text{Kenaikan tarif per km}} \\\\\n&= \\frac{40}{2} \\\\\n&= 20\\text{ km}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 2,
    topic: 'Kecukupan Data Geometri',
    type: 'multiple-choice',
    storyContext: 'Perhatikan permasalahan dalam kotak berikut!',
    boxedProblem: {
      title: 'Permasalahan Geometri:',
      text: 'Panjang sisi $AB$ dari jajar genjang $ABCD$ berikut adalah $11\\text{ cm}$.',
      footerQuestion: 'Berapakah keliling jajar genjang tersebut?',
    },
    questionText:
      'Putuskan apakah pernyataan $(1)$ dan pernyataan $(2)$ berikut cukup untuk menjawab permasalahan dalam kotak tersebut!\n\n$(1)$ Luas jajar genjang tersebut adalah $66\\text{ cm}^2$.\n$(2)$ Panjang diagonal terpendek dari jajar genjang tersebut, yakni $BD$, adalah $10\\text{ cm}$.',
    visualId: 'soal-2',
    options: [
      {
        key: 'A',
        text: 'Pernyataan $(1)$ SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan $(2)$ SAJA tidak cukup.',
      },
      {
        key: 'B',
        text: 'Pernyataan $(2)$ SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan $(1)$ SAJA tidak cukup.',
      },
      {
        key: 'C',
        text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.',
      },
      {
        key: 'D',
        text: 'Pernyataan $(1)$ SAJA cukup untuk menjawab pertanyaan dan pernyataan $(2)$ SAJA cukup.',
      },
      {
        key: 'E',
        text: 'Pernyataan $(1)$ dan pernyataan $(2)$ tidak cukup untuk menjawab pertanyaan.',
      },
    ],
    solution: {
      answerSummary: 'C. DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup',
      correctOptionKey: 'C',
      steps: [
        'Keliling jajar genjang $ABCD$ ditentukan oleh panjang alas $AB = 11\\text{ cm}$ dan sisi miring $AD$.\nArtinya, kita hanya perlu memastikan apakah panjang sisi miring $AD$ dapat ditentukan tanpa perlu menghitung angkanya.',
        '**Analisis Pernyataan (1) saja:**\nDiketahui luas jajar genjang.\nJika kita tarik garis tinggi $DE$ yang tegak lurus $AB$, maka panjang $DE$ dapat diketahui dari rumus luas.\nNamun, kemiringan sisi $AD$ belum diketahui sehingga panjang $AD$ belum dapat ditentukan $\\implies$ **Pernyataan (1) saja tidak cukup**.',
        '**Analisis Pernyataan (2) saja:**\nDiketahui panjang diagonal terpendek $BD$.\nKarena tinggi jajar genjang ($DE$) belum diketahui, maka panjang sisi miring $AD$ juga belum dapat ditentukan $\\implies$ **Pernyataan (2) saja tidak cukup**.',
        '**Analisis Pernyataan (1) dan (2) bersama-sama:**\n• Tarik garis tegak $DE \\perp AB$ sehingga membentuk segitiga siku-siku $\\triangle DEB$ dan $\\triangle AED$.\n• Karena tinggi $DE$ (dari pernyataan 1) dan sisi miring $BD$ (dari pernyataan 2) sudah diketahui, maka panjang alas $EB$ dapat dicari dengan Pythagoras.\n• Akibatnya, panjang $AE = AB - EB$ juga dapat diketahui.\n• Karena $AE$ dan $DE$ sudah diketahui pada segitiga siku-siku $\\triangle AED$, maka panjang sisi miring $AD$ dapat ditentukan dengan Pythagoras.\n\nDengan demikian, keliling jajar genjang pasti dapat terjawab $\\implies$ **Kedua pernyataan bersama-sama cukup (C)**.',
      ],
    },
  },
  {
    id: 3,
    topic: 'Barisan & Deret Aritmetika',
    type: 'multiple-choice',
    storyContext:
      'Sebuah perusahaan konveksi memproduksi kaus kaki secara bertahap. Setiap bulan, banyaknya kaus kaki yang diproduksi mengalami peningkatan dalam jumlah yang tetap. Rekap catatan jumlah produksi yang dibuat oleh perusahaan diberikan pada gambar berikut:',
    questionText:
      'Banyaknya kaus kaki yang diproduksi perusahaan tersebut tepat pada bulan ke-$9$ adalah ....',
    visualId: 'soal-3',
    options: [
      { key: 'A', text: '$90\\text{ pasang}$' },
      { key: 'B', text: '$130\\text{ pasang}$' },
      { key: 'C', text: '$140\\text{ pasang}$' },
      { key: 'D', text: '$410\\text{ pasang}$' },
      { key: 'E', text: '$630\\text{ pasang}$' },
    ],
    solution: {
      answerSummary: 'B. $130\\text{ pasang}$',
      correctOptionKey: 'B',
      steps: [
        'Produksi bulanan meningkat tetap sehingga membentuk deret aritmetika dengan rumus:\n$$S_n = \\frac{n}{2}(2a + (n-1)b)$$\nJabarkan informasi **Triwulan 1** ($3$ bulan pertama, $S_3 = 180$):\n$$\\begin{aligned}\nS_3 &= 180 \\\\\n\\frac{3}{2}(2a + 2b) &= 180 \\\\\n3(a + b) &= 180 \\\\\na + b &= 60 \\quad \\text{...(Persamaan 1)}\n\\end{aligned}$$',
        'Jabarkan informasi **Triwulan 1 & Triwulan 2** ($6$ bulan pertama, $S_6 = 450$):\n$$\\begin{aligned}\nS_6 &= 450 \\\\\n\\frac{6}{2}(2a + 5b) &= 450 \\\\\n3(2a + 5b) &= 450 \\\\\n2a + 5b &= 150 \\quad \\text{...(Persamaan 2)}\n\\end{aligned}$$',
        'Eliminasi variabel $a$ dari Persamaan 2 dan Persamaan 1:\n$$\\begin{alignedat}{3}\n2a + 5b &= 150 &\\quad &\\big|\\times 1\\big| &\\quad 2a + 5b &= 150 \\\\\na + b &= 60 &\\quad &\\big|\\times 2\\big| &\\quad \\underline{2a + 2b} &\\underline{\\;= 120} \\; - \\\\\n&&&& 3b &= 30 \\\\\n&&&& b &= 10\n\\end{alignedat}$$',
        'Substitusikan nilai $b = 10$ ke Persamaan 1 untuk mencari nilai $a$:\n$$\\begin{aligned}\na + b &= 60 \\\\\na + 10 &= 60 \\\\\na &= 60 - 10 \\\\\na &= 50\n\\end{aligned}$$',
        'Hitung banyak produksi tepat pada bulan ke-$9$ ($U_9$):\n$$\\begin{aligned}\nU_9 &= a + 8b \\\\\n&= 50 + 8(10) \\\\\n&= 50 + 80 \\\\\n&= 130\\text{ pasang}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 4,
    topic: 'Eksponen Pecahan',
    type: 'multiple-choice',
    storyContext:
      'Diketahui persamaan:\n$$a = 216^{\\frac{2}{3}} - 16^{\\frac{3}{2}}$$',
    questionText: 'Jika nilai $2a + b = -24$, maka nilai $b = \\dots$',
    options: [
      { key: 'A', text: '$216$' },
      { key: 'B', text: '$80$' },
      { key: 'C', text: '$32$' },
      { key: 'D', text: '$-80$' },
      { key: 'E', text: '$-264$' },
    ],
    solution: {
      answerSummary: 'C. $32$',
      correctOptionKey: 'C',
      steps: [
        'Ubah bilangan pokok menjadi bentuk bilangan berpangkat:\n$216 = 6^3$\n$16 = 4^2$',
        'Hitung nilai $a$ langkah demi langkah:\n$$\\begin{aligned}\na &= 216^{\\frac{2}{3}} - 16^{\\frac{3}{2}} \\\\\n&= (6^3)^{\\frac{2}{3}} - (4^2)^{\\frac{3}{2}} \\\\\n&= 6^2 - 4^3 \\\\\n&= 36 - 64 \\\\\n&= -28\n\\end{aligned}$$',
        'Substitusikan nilai $a = -28$ ke dalam persamaan $2a + b = -24$:\n$$\\begin{aligned}\n2a + b &= -24 \\\\\n2(-28) + b &= -24 \\\\\n-56 + b &= -24 \\\\\nb &= -24 + 56 \\\\\nb &= 32\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 5,
    topic: 'Sistem Pertidaksamaan Linear',
    type: 'multiple-choice',
    storyContext:
      'Suatu agen wisata menawarkan paket wisata selama $3$ hari $2$ malam. Dalam paket tersebut, total waktu kunjungan wisata maksimal $20$ jam (di luar waktu perjalanan dan istirahat). Agen menyediakan dua jenis destinasi wisata dengan rincian sebagai berikut:',
    questionText:
      'Agar paket tetap menarik, agen wisata tersebut mengharuskan dalam satu paket wisata memuat minimal $6$ lokasi wisata.\nVariasi destinasi wisata dalam setiap paket $3$ hari $2$ malam yang mungkin dilayani oleh agen wisata tersebut adalah ....',
    visualId: 'soal-5',
    options: [
      { key: 'A', text: '$4$ wisata alam dan $4$ wisata budaya' },
      { key: 'B', text: '$3$ wisata alam dan $5$ wisata budaya' },
      { key: 'C', text: '$3$ wisata alam dan $2$ wisata budaya' },
      { key: 'D', text: '$2$ wisata alam dan $9$ wisata budaya' },
      { key: 'E', text: '$2$ wisata alam dan $5$ wisata budaya' },
    ],
    solution: {
      answerSummary: 'E. $2$ wisata alam dan $5$ wisata budaya',
      correctOptionKey: 'E',
      steps: [
        'Misalkan:\n$x =$ banyak lokasi Wisata Alam (durasi $4\\text{ jam/lokasi}$)\n$y =$ banyak lokasi Wisata Budaya (durasi $2\\text{ jam/lokasi}$)',
        'Susun model pertidaksamaan dari kedua syarat:\n1) Syarat pertama: total lokasi wisata minimal $6$ lokasi\n$$x + y \\ge 6$$\n2) Syarat kedua: total durasi kunjungan maksimal $20$ jam\n$$4x + 2y \\le 20$$',
        'Uji kelima pilihan jawaban ke dalam tabel syarat berikut:\n| Pilihan | $(x, y)$ | Total Lokasi<br/>$(x + y \\ge 6)$ | Total Durasi<br/>$(4x + 2y \\le 20)$ | Kesimpulan |\n| :---: | :---: | :---: | :---: | :---: |\n| A | $(4, 4)$ | $4 + 4 = 8$<br/>(Memenuhi) | $4(4) + 2(4) = 24 > 20$<br/>(Tidak Memenuhi) | Tidak<br/>Memenuhi |\n| B | $(3, 5)$ | $3 + 5 = 8$<br/>(Memenuhi) | $4(3) + 2(5) = 22 > 20$<br/>(Tidak Memenuhi) | Tidak<br/>Memenuhi |\n| C | $(3, 2)$ | $3 + 2 = 5 < 6$<br/>(Tidak Memenuhi) | $4(3) + 2(2) = 16 \\le 20$<br/>(Memenuhi) | Tidak<br/>Memenuhi |\n| D | $(2, 9)$ | $2 + 9 = 11$<br/>(Memenuhi) | $4(2) + 2(9) = 26 > 20$<br/>(Tidak Memenuhi) | Tidak<br/>Memenuhi |\n| **E** | **$(2, 5)$** | **$2 + 5 = 7 \\ge 6$**<br/>**(Memenuhi)** | **$4(2) + 2(5) = 18 \\le 20$**<br/>**(Memenuhi)** | **Memenuhi** |',
      ],
    },
  },
  {
    id: 6,
    topic: 'Komposisi Fungsi Linear',
    type: 'true-false-table',
    storyContext:
      'Pada bidang koordinat Kartesius berikut, terdapat dua grafik fungsi linear, yaitu fungsi $f$ dan fungsi $g$.',
    questionText:
      'Berdasarkan grafik tersebut, manakah nilai komposisi fungsi $f$ dan $g$ yang benar?\nTentukan **Benar** atau **Salah** untuk setiap nilai komposisi fungsi berikut!',
    visualId: 'soal-6',
    trueFalseHeaders: ['Nilai Komposisi Fungsi', 'Benar', 'Salah'],
    statements: [
      '$(f \\circ g)(0) = 6$',
      '$(g \\circ f)(0) = 4$',
      '$(f \\circ g)(2) = 4$',
    ],
    solution: {
      answerSummary: 'Benar, Salah, Benar',
      correctTrueFalse: {
        0: 'Benar',
        1: 'Salah',
        2: 'Benar',
      },
      steps: [
        'Kita **tidak perlu** mencari rumus fungsi $f(x)$ maupun $g(x)$.\nCukup baca nilai titik koordinat yang dilalui grafik secara langsung:\n• Pada garis biru $f$: melalui $(0, 2)$, $(2, 4)$, dan $(4, 6)$ sehingga:\n$f(0) = 2$\n$f(2) = 4$\n$f(4) = 6$\n• Pada garis merah $g$: melalui $(0, 4)$ dan $(2, 2)$ sehingga:\n$g(0) = 4$\n$g(2) = 2$',
        '**Uji Pernyataan 1:**\n$$\\begin{aligned}\n(f \\circ g)(0) &= f(g(0)) \\\\\n&= f(4) \\\\\n&= 6 \\quad \\implies \\textbf{Benar}\n\\end{aligned}$$',
        '**Uji Pernyataan 2:**\n$$\\begin{aligned}\n(g \\circ f)(0) &= g(f(0)) \\\\\n&= g(2) \\\\\n&= 2 \\neq 4 \\quad \\implies \\textbf{Salah}\n\\end{aligned}$$',
        '**Uji Pernyataan 3:**\n$$\\begin{aligned}\n(f \\circ g)(2) &= f(g(2)) \\\\\n&= f(2) \\\\\n&= 4 \\quad \\implies \\textbf{Benar}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 7,
    topic: 'Teorema Pythagoras & Geometri Bidang',
    type: 'true-false-table',
    storyContext:
      'Galih membuat pesawat luncur (*glider*) dari bilah kayu balsa (total persediaan $100\\text{ cm}$) dengan kerangka sayap seperti pada gambar. Agar terbang optimal, panjang garis $DE$ minimal $22\\text{ cm}$ dan alas sayap $AC$ tetap $40\\text{ cm}$. Galih memodifikasi kerangka awal dengan mengubah $BC$ menjadi $20\\text{ cm}$ dan $CD$ menjadi $2\\text{ cm}$.',
    questionText:
      'Tentukan **Benar** atau **Salah** dampak modifikasi Galih untuk setiap pernyataan berikut!',
    visualId: 'soal-7',
    trueFalseHeaders: ['Pernyataan', 'Benar', 'Salah'],
    statements: [
      'Panjang kerangka sayap yang meruncing (garis $ED$) pada rancangan awal adalah $20\\text{ cm}$.',
      'Panjang kerangka sayap yang meruncing (garis $ED$) setelah dimodifikasi akan membuat pesawat terbang optimal.',
      'Total panjang bilah kayu yang terpakai akan menjadi berkurang dari total panjang kayu semula.',
    ],
    solution: {
      answerSummary: 'Salah, Benar, Benar',
      correctTrueFalse: {
        0: 'Salah',
        1: 'Benar',
        2: 'Benar',
      },
      steps: [
        '**Pernyataan 1 (Rancangan Awal):**\nPada segitiga siku-siku $EPD$ awal, diketahui:\n$EP = BE - CD = 12 - 4 = 8\\text{ cm}$\n$PD = BC = 15\\text{ cm}$\nMaka panjang $ED_{\\text{awal}}$ adalah:\n$$\\begin{aligned}\nED_{\\text{awal}} &= \\sqrt{EP^2 + PD^2} \\\\\n&= \\sqrt{8^2 + 15^2} \\\\\n&= \\sqrt{64 + 225} \\\\\n&= \\sqrt{289} \\\\\n&= 17\\text{ cm} \\neq 20\\text{ cm} \\quad \\implies \\textbf{Salah}\n\\end{aligned}$$',
        '**Pernyataan 2 (Setelah Modifikasi):**\nSetelah dimodifikasi dengan $BC = 20\\text{ cm}$ dan $CD = 2\\text{ cm}$, diperoleh:\n$EP_{\\text{baru}} = 12 - 2 = 10\\text{ cm}$\n$PD_{\\text{baru}} = 20\\text{ cm}$\nHitung panjang $ED_{\\text{baru}}$:\n$$\\begin{aligned}\nED_{\\text{baru}} &= \\sqrt{10^2 + 20^2} \\\\\n&= \\sqrt{100 + 400} \\\\\n&= \\sqrt{500}\\text{ cm}\n\\end{aligned}$$\nGunakan **apitan bilangan kuadrat sempurna** terdekat ($22^2 = 484$ dan $23^2 = 529$):\n$$\\begin{aligned}\n\\sqrt{484} &< \\sqrt{500} < \\sqrt{529} \\\\\n22\\text{ cm} &< ED_{\\text{baru}} < 23\\text{ cm}\n\\end{aligned}$$\nKarena $ED_{\\text{baru}} > 22\\text{ cm}$, maka pesawat terbang optimal $\\implies$ **Benar**.',
        '**Pernyataan 3 (Perubahan Total Panjang Kayu):**\nBandingkan penghematan dan penambahan panjang kayu akibat modifikasi:\n• Sisi atas $FE$ berkurang dari $25\\text{ cm}$ menjadi $20\\text{ cm}$ (hemat $5\\text{ cm}$).\n• Sisi ujung $CD$ berkurang dari $4\\text{ cm}$ menjadi $2\\text{ cm}$ (hemat $2\\text{ cm}$).\n• Total penghematan pada sisi lurus $= 5 + 2 = 7\\text{ cm}$.\n• Sedangkan sisi miring $ED$ bertambah dari $17\\text{ cm}$ menjadi $\\sqrt{500}\\text{ cm}$ (yang nilainya $< 23\\text{ cm}$), sehingga pertambahan panjang $ED$ pasti **kurang dari $6\\text{ cm}$**.\n\nKarena kayu yang dihemat ($7\\text{ cm}$) lebih besar daripada kayu yang bertambah ($< 6\\text{ cm}$), maka total panjang kayu yang terpakai menjadi **berkurang** $\\implies$ **Benar**.',
      ],
    },
  },
  {
    id: 8,
    topic: 'Sistem Persamaan Linear Tiga Variabel',
    type: 'multiple-choice',
    storyContext:
      'Seorang barista membuat tiga jenis minuman kopi yaitu *coffee latte*, *cappuccino*, dan *mochaccino*. Komposisi masing-masing minuman dalam $1$ porsi adalah:\n1. *Coffee Latte*: $1$ gelas kopi + $4$ gelas susu = $250\\text{ mL}$.\n2. *Cappuccino*: $1$ gelas kopi + $2$ gelas susu = $190\\text{ mL}$.\n3. *Mochaccino*: $1$ gelas kopi + $1$ gelas susu + $2$ gelas cokelat = $240\\text{ mL}$.',
    questionText:
      'Gelas takar untuk kopi, susu, dan cokelat yang digunakan memiliki volume yang berbeda. Dengan persediaan cokelat yang ada $(400\\text{ mL})$, berapa porsi *mochaccino* yang dapat dibuat oleh barista?',
    visualId: 'soal-8',
    options: [
      { key: 'A', text: '$4\\text{ porsi}$' },
      { key: 'B', text: '$5\\text{ porsi}$' },
      { key: 'C', text: '$6\\text{ porsi}$' },
      { key: 'D', text: '$10\\text{ porsi}$' },
      { key: 'E', text: '$12\\text{ porsi}$' },
    ],
    solution: {
      answerSummary: 'B. $5\\text{ porsi}$',
      correctOptionKey: 'B',
      steps: [
        'Misalkan:\n$K =$ volume $1$ gelas takar kopi (mL)\n$S =$ volume $1$ gelas takar susu (mL)\n$C =$ volume $1$ gelas takar cokelat (mL)',
        'Eliminasi variabel $K$ dari persamaan *Coffee Latte* dan *Cappuccino*:\n$$\\begin{aligned}\nK + 4S &= 250 \\\\\n\\underline{K + 2S} &\\underline{\\;= 190} \\; - \\\\\n2S &= 60 \\\\\nS &= 30\\text{ mL}\n\\end{aligned}$$',
        'Substitusikan nilai $S = 30$ ke persamaan *Cappuccino* untuk mencari $K$:\n$$\\begin{aligned}\nK + 2S &= 190 \\\\\nK + 2(30) &= 190 \\\\\nK + 60 &= 190 \\\\\nK &= 190 - 60 \\\\\nK &= 130\\text{ mL}\n\\end{aligned}$$',
        'Substitusikan $K = 130$ dan $S = 30$ ke persamaan *Mochaccino* untuk mencari kebutuhan cokelat per porsi ($2C$):\n$$\\begin{aligned}\nK + S + 2C &= 240 \\\\\n130 + 30 + 2C &= 240 \\\\\n160 + 2C &= 240 \\\\\n2C &= 240 - 160 \\\\\n2C &= 80\\text{ mL/porsi}\n\\end{aligned}$$',
        'Karena persediaan cokelat bubuk di meja adalah $400\\text{ mL}$, banyak porsi *mochaccino* yang dapat dibuat adalah:\n$$\\begin{aligned}\n\\text{Banyak porsi} &= \\frac{400\\text{ mL}}{80\\text{ mL/porsi}} \\\\\n&= 5\\text{ porsi}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 9,
    topic: 'Deret Geometri Tak Hingga',
    type: 'multiple-choice',
    storyContext:
      'Di sebuah laboratorium uji alat olahraga, sebuah sampel bola padel dijatuhkan dari ketinggian $240\\text{ cm}$ ke atas permukaan beton dan memantul berulang kali. Tinggi pantulan-pantulan berikutnya terus memendek secara proporsional dengan faktor pengali yang konstan dari tinggi pantulan sebelumnya hingga bola akhirnya berhenti.\n\nAlat perekaman mencatat total jarak lintasan vertikal seluruhnya dari awal dijatuhkan sampai berhenti adalah $720\\text{ cm}$.',
    questionText: 'Berapakah tinggi pantulan pertama bola tersebut?',
    visualId: 'soal-9',
    options: [
      { key: 'A', text: '$80\\text{ cm}$' },
      { key: 'B', text: '$96\\text{ cm}$' },
      { key: 'C', text: '$120\\text{ cm}$' },
      { key: 'D', text: '$144\\text{ cm}$' },
      { key: 'E', text: '$160\\text{ cm}$' },
    ],
    solution: {
      answerSummary: 'C. $120\\text{ cm}$',
      correctOptionKey: 'C',
      steps: [
        'Diketahui:\nTinggi awal bola dijatuhkan $(h_0) = 240\\text{ cm}$\nTotal panjang lintasan sampai berhenti $(S_{\\text{total}}) = 720\\text{ cm}$',
        'Gunakan hubungan total lintasan bola jatuh dengan rasio pantulan $r$:\n$$\\begin{aligned}\nS_{\\text{total}} &= h_0 \\cdot \\left(\\frac{1 + r}{1 - r}\\right) \\\\\n720 &= 240 \\cdot \\left(\\frac{1 + r}{1 - r}\\right) \\\\\n\\frac{720}{240} &= \\frac{1 + r}{1 - r} \\\\\n3 &= \\frac{1 + r}{1 - r} \\\\\n3(1 - r) &= 1 + r \\\\\n3 - 3r &= 1 + r \\\\\n2 &= 4r \\\\\nr &= \\frac{1}{2}\n\\end{aligned}$$',
        'Hitung tinggi pantulan pertama $(h_1)$:\n$$\\begin{aligned}\nh_1 &= h_0 \\times r \\\\\n&= 240 \\times \\frac{1}{2} \\\\\n&= 120\\text{ cm}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 10,
    topic: 'Geometri Bangun Ruang (Diagonal Bidang)',
    type: 'multiple-choice',
    storyContext:
      'Pak Hasan adalah seorang pengusaha akuarium di kotanya. Ia diminta untuk membuat $10$ akuarium berbentuk balok dengan ukuran panjang $150\\text{ cm}$, lebar $80\\text{ cm}$, dan tinggi $130\\text{ cm}$ seperti pada gambar.\n\nSetiap akuarium dipasang selang gelembung oksigen pada posisi melintang (diagonal) di dasar akuarium. Pak Hasan memiliki persediaan selang gelembung oksigen sepanjang $25\\text{ meter}$.',
    questionText:
      'Apabila setelah digunakan masih terdapat sisa, berapa panjang selang gelembung yang tersisa tersebut?',
    visualId: 'soal-10',
    options: [
      { key: 'A', text: '$2\\text{ m}$' },
      { key: 'B', text: '$8\\text{ m}$' },
      { key: 'C', text: '$11\\text{ m}$' },
      { key: 'D', text: '$13,5\\text{ m}$' },
      { key: 'E', text: '$14,5\\text{ m}$' },
    ],
    solution: {
      answerSummary: 'B. $8\\text{ m}$',
      correctOptionKey: 'B',
      steps: [
        'Ukuran dasar akuarium:\nPanjang $(p) = 150\\text{ cm}$\nLebar $(l) = 80\\text{ cm}$',
        'Gunakan **Tripel Pythagoras** dasar $(8, 15, 17)$ dengan faktor pengali $10$ untuk menentukan panjang diagonal alas $(d)$:\n$$\\begin{aligned}\n(80, \\; 150, \\; d) &= 10 \\times (8, \\; 15, \\; 17) \\\\\nd &= 10 \\times 17 \\\\\nd &= 170\\text{ cm} \\\\\nd &= 1,7\\text{ meter}\n\\end{aligned}$$',
        'Hitung total selang yang dibutuhkan untuk $10$ akuarium dan sisa selang:\n$$\\begin{aligned}\nL_{\\text{pakai}} &= 10 \\times 1,7\\text{ m} \\\\\n&= 17\\text{ m}\n\\end{aligned}$$\n$$\\begin{aligned}\nL_{\\text{sisa}} &= 25\\text{ m} - 17\\text{ m} \\\\\n&= 8\\text{ m}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 11,
    topic: 'Transformasi Geometri',
    type: 'complex-multiple-choice',
    storyContext:
      'Perhatikan posisi bangun datar segitiga $PQR$ dan bayangannya $P\'Q\'R\'$ pada bidang koordinat Kartesius berikut!',
    questionText:
      'Manakah di antara aturan berikut yang secara tepat menunjukkan transformasi posisi dari segitiga $PQR$ menjadi $P\'Q\'R\'$ pada bidang Kartesius tersebut?',
    note: 'Pilihlah semua jawaban yang benar! Jawaban benar lebih dari satu.',
    visualId: 'soal-11',
    checkboxOptions: [
      'Refleksi terhadap sumbu $Y$ dilanjutkan translasi $T = \\begin{pmatrix} -1 \\\\ -2 \\end{pmatrix}$.',
      'Rotasi $270^\\circ$ dengan pusat $O(0,0)$ dilanjutkan dilatasi faktor skala $1$ berpusat di $O(0,0)$.',
      'Rotasi $-90^\\circ$ dengan pusat di titik $Q$ dilanjutkan translasi $T = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$.',
      'Refleksi terhadap sumbu $X$ dilanjutkan rotasi sebesar $180^\\circ$ dengan pusat $O(0,0)$.',
    ],
    solution: {
      answerSummary: 'Pilihan 2 dan Pilihan 3',
      correctCheckboxIndices: [1, 2],
      steps: [
        'Titik sudut segitiga asal dan bayangannya pada grafik:\n$P(-4, 2) \\longrightarrow P\'(2, 4)$\n$Q(-2, 1) \\longrightarrow Q\'(1, 2)$\n$R(-1, 4) \\longrightarrow R\'(4, 1)$\nKita uji titik sampel $P(-4, 2)$ secara bertahap (satu proses per langkah).',
        '**Uji Pilihan 1:**\n• **Tahap 1 (Refleksi terhadap sumbu-$Y$):**\nMengubah $(x, y) \\to (-x, y)$, sehingga:\n$$P(-4, 2) \\xrightarrow{M_Y} P_1(4, 2)$$\n• **Tahap 2 (Translasi $T = \\binom{-1}{-2}$):**\n$$\\begin{aligned}\n\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} &= \\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} -1 \\\\ -2 \\end{pmatrix} \\\\\n&= \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}\n\\end{aligned}$$\nDiperoleh koordinat $(3, 0) \\neq P\'(2, 4) \\implies$ **Pilihan 1 Salah**.',
        '**Uji Pilihan 2:**\n• **Tahap 1 (Rotasi $270^\\circ$ pusat $O(0,0)$ dengan matriks):**\nKarena $\\cos 270^\\circ = 0$ dan $\\sin 270^\\circ = -1$, rumus matriks rotasinya adalah:\n$$\\begin{aligned}\n\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} &= \\begin{pmatrix} \\cos 270^\\circ & -\\sin 270^\\circ \\\\ \\sin 270^\\circ & \\cos 270^\\circ \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\\\\n&= \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}\n\\end{aligned}$$\nSubstitusikan ketiga titik sudut secara berurutan:\n• Untuk titik $P(-4, 2)$:\n$$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} -4 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} \\longrightarrow P_1(2, 4)$$\n• Untuk titik $Q(-2, 1)$:\n$$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\longrightarrow Q_1(1, 2)$$\n• Untuk titik $R(-1, 4)$:\n$$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix} \\longrightarrow R_1(4, 1)$$\n• **Tahap 2 (Dilatasi pusat $O(0,0)$ dengan faktor skala $k = 1$):**\nPerkalian dengan $k = 1$ mempertahankan koordinat tetap di $P\'(2,4)$, $Q\'(1,2)$, dan $R\'(4,1) \\implies$ **Pilihan 2 Benar**.',
        '**Uji Pilihan 3:**\n• **Tahap 1 (Rotasi $-90^\\circ$ dengan pusat $Q(-2, 1)$):**\nKarena $\\cos(-90^\\circ) = 0$ dan $\\sin(-90^\\circ) = -1$, rumus matriks rotasi terhadap pusat $Q(a,b) = (-2,1)$ adalah:\n$$\\begin{aligned}\n\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} &= \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} x - (-2) \\\\ y - 1 \\end{pmatrix} + \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} \\\\\n&= \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} x + 2 \\\\ y - 1 \\end{pmatrix} + \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix}\n\\end{aligned}$$\nSubstitusikan ketiga titik sudut secara berurutan:\n• Untuk titik $P(-4, 2)$:\n$$\\begin{aligned}\n\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} &= \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} \\\\\n&= \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} \\\\\n&= \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix} \\longrightarrow P_1(-1, 3)\n\\end{aligned}$$\n• Untuk titik $Q(-2, 1)$:\nKarena pusat rotasi berada di titik $Q$, maka bayangannya tetap di $Q_1(-2, 1)$.\n• Untuk titik $R(-1, 4)$:\n$$\\begin{aligned}\n\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} &= \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} \\\\\n&= \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} \\\\\n&= \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} \\longrightarrow R_1(1, 0)\n\\end{aligned}$$\n• **Tahap 2 (Dilanjutkan Translasi $T = \\binom{3}{1}$):**\n• Untuk titik $P_1(-1, 3)$:\n$$\\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} \\longrightarrow P\'(2, 4)$$\n• Untuk titik $Q_1(-2, 1)$:\n$$\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\longrightarrow Q\'(1, 2)$$\n• Untuk titik $R_1(1, 0)$:\n$$\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix} \\longrightarrow R\'(4, 1)$$\nKetiganya tepat menghasilkan $\\triangle P\'Q\'R\' \\implies$ **Pilihan 3 Benar**.',
        '**Uji Pilihan 4:**\n• **Tahap 1 (Refleksi terhadap sumbu-$X$):**\nMengubah $(x, y) \\to (x, -y)$, sehingga untuk $P(-4, 2)$:\n$$P(-4, 2) \\xrightarrow{M_X} P_1(-4, -2)$$\n• **Tahap 2 (Rotasi $180^\\circ$ pusat $O(0,0)$ dengan matriks):**\n$$\\begin{aligned}\n\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} &= \\begin{pmatrix} \\cos 180^\\circ & -\\sin 180^\\circ \\\\ \\sin 180^\\circ & \\cos 180^\\circ \\end{pmatrix} \\begin{pmatrix} -4 \\\\ -2 \\end{pmatrix} \\\\\n&= \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} -4 \\\\ -2 \\end{pmatrix} \\\\\n&= \\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}\n\\end{aligned}$$\nDiperoleh koordinat $(4, 2) \\neq P\'(2, 4) \\implies$ **Pilihan 4 Salah**.',
      ],
    },
  },
  {
    id: 12,
    topic: 'Statistika Data Berkelompok (Median)',
    type: 'multiple-choice',
    storyContext:
      'Diketahui data waktu tempuh siswa ke sekolah yang disajikan pada histogram berikut:',
    questionText: 'Berapakah median data tersebut?',
    visualId: 'soal-12',
    options: [
      { key: 'A', text: '$11,5\\text{ menit}$' },
      { key: 'B', text: '$17\\text{ menit}$' },
      { key: 'C', text: '$22\\text{ menit}$' },
      { key: 'D', text: '$24\\text{ menit}$' },
      { key: 'E', text: '$24,5\\text{ menit}$' },
    ],
    solution: {
      answerSummary: 'C. $22\\text{ menit}$',
      correctOptionKey: 'C',
      steps: [
        'Sajikan data dari histogram ke dalam tabel frekuensi $(f)$ dan frekuensi kumulatif $(f_{\\text{kum}})$:\n| Kelas Interval | Frekuensi<br/>$(f)$ | Frekuensi Kumulatif<br/>$(f_{\\text{kum}})$ |\n| :---: | :---: | :---: |\n| $10 - 14$ | $2$ | $2$ |\n| $15 - 19$ | $6$ | $8$ |\n| **$20 - 24$** | **$7$** | **$15$ (Kelas Median)** |\n| $25 - 29$ | $7$ | $22$ |\n| $30 - 34$ | $1$ | $23$ |\n| **Total $(n)$** | **$23$** | — |',
        'Tentukan letak kelas median dan unsur-unsurnya:\nLetak median $= \\frac{1}{2}n = \\frac{1}{2}(23) = 11,5$ (terletak pada kelas **$20 - 24$**)\nTepi bawah kelas median $(L) = 20 - 0,5 = 19,5$\nFrekuensi kumulatif sebelum kelas median $(F) = 8$\nFrekuensi kelas median $(f_m) = 7$\nPanjang kelas $(p) = 5$',
        'Hitung nilai Median $(\\text{Me})$:\n$$\\begin{aligned}\n\\text{Me} &= L + \\left(\\frac{\\frac{1}{2}n - F}{f_m}\\right) \\cdot p \\\\\n&= 19,5 + \\left(\\frac{11,5 - 8}{7}\\right) \\cdot 5 \\\\\n&= 19,5 + \\left(\\frac{3,5}{7}\\right) \\cdot 5 \\\\\n&= 19,5 + 0,5 \\cdot 5 \\\\\n&= 19,5 + 2,5 \\\\\n&= 22\\text{ menit}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 13,
    topic: 'Peluang Empirik & Frekuensi Harapan',
    type: 'multiple-choice',
    storyContext:
      'Seorang peneliti sedang mengamati perilaku suatu jenis kupu-kupu pada **bunga A** dan **bunga B** di dalam suatu taman mini buatan.\n\nHasil pengamatan terhadap $10$ sampel pertama menunjukkan bahwa peluang seekor kupu-kupu hinggap pada **bunga B** adalah $\\dfrac{2}{5}$. Berdasarkan data tersebut, peneliti menyatakan bahwa dari seluruh sampel kupu-kupu yang diamati, kemungkinan akan ada $60$ kupu-kupu yang hinggap pada **bunga B**.',
    questionText:
      'Berapakah jumlah kupu-kupu yang digunakan dalam penelitian tersebut?',
    visualId: 'soal-13',
    options: [
      { key: 'A', text: '$240\\text{ ekor}$' },
      { key: 'B', text: '$210\\text{ ekor}$' },
      { key: 'C', text: '$150\\text{ ekor}$' },
      { key: 'D', text: '$84\\text{ ekor}$' },
      { key: 'E', text: '$24\\text{ ekor}$' },
    ],
    solution: {
      answerSummary: 'C. $150\\text{ ekor}$',
      correctOptionKey: 'C',
      steps: [
        'Diketahui:\nPeluang kupu-kupu hinggap pada bunga B $(P(B)) = \\dfrac{2}{5}$\nFrekuensi harapan hinggap pada bunga B $(F_h(B)) = 60\\text{ ekor}$\nMisalkan $N =$ jumlah seluruh sampel kupu-kupu.',
        'Substitusikan ke dalam rumus frekuensi harapan:\n$$\\begin{aligned}\nF_h(B) &= P(B) \\times N \\\\\n60 &= \\frac{2}{5} \\times N \\\\\nN &= 60 \\times \\frac{5}{2} \\\\\nN &= 30 \\times 5 \\\\\nN &= 150\\text{ ekor}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 14,
    topic: 'Statistika Penyajian Data (Diagram Lingkaran)',
    type: 'multiple-choice',
    storyContext:
      'Di suatu sekolah, dilakukan pendataan kegiatan ekstrakurikuler yang diikuti siswa kelas X dan hasilnya disajikan pada tabel dan diagram lingkaran di samping.\n\nBanyak siswa yang mengikuti ekstrakurikuler **voli** adalah $18\\text{ siswa}$.',
    questionText:
      'Jika tidak ada siswa yang mengikuti ekstrakurikuler lebih dari satu, maka jumlah seluruh siswa yang mengikuti keempat ekstrakurikuler tersebut adalah ....',
    visualId: 'soal-14',
    options: [
      { key: 'A', text: '$385\\text{ siswa}$' },
      { key: 'B', text: '$235\\text{ siswa}$' },
      { key: 'C', text: '$227\\text{ siswa}$' },
      { key: 'D', text: '$215\\text{ siswa}$' },
      { key: 'E', text: '$120\\text{ siswa}$' },
    ],
    solution: {
      answerSummary: 'B. $235\\text{ siswa}$',
      correctOptionKey: 'B',
      steps: [
        'Hitung persentase siswa yang mengikuti **Voli** pada diagram lingkaran Olahraga:\n$$\\begin{aligned}\n\\%\\text{Voli} &= 100\\% - (10\\% + 35\\% + 40\\%) \\\\\n&= 100\\% - 85\\% \\\\\n&= 15\\%\n\\end{aligned}$$',
        'Karena $15\\%$ dari total siswa ekstrakurikuler Olahraga $(N_{\\text{Olahraga}})$ adalah $18\\text{ siswa}$, maka:\n$$\\begin{aligned}\n\\frac{15}{100} \\times N_{\\text{Olahraga}} &= 18 \\\\\nN_{\\text{Olahraga}} &= 18 \\times \\frac{100}{15} \\\\\nN_{\\text{Olahraga}} &= 18 \\times \\frac{20}{3} \\\\\nN_{\\text{Olahraga}} &= 120\\text{ siswa}\n\\end{aligned}$$',
        'Jumlahkan seluruh siswa dari keempat ekstrakurikuler:\n$$\\begin{aligned}\nN_{\\text{total}} &= \\text{Tari} + \\text{PMR} + \\text{Paskibraka} + \\text{Olahraga} \\\\\n&= 48 + 30 + 37 + 120 \\\\\n&= 235\\text{ siswa}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 15,
    topic: 'Kaidah Pencacahan (Kombinasi)',
    type: 'multiple-choice',
    storyContext:
      'Biro perjalanan Wisata Makmur *Tour* sedang merancang brosur paket perjalanan dengan memilih destinasi dari tiga kategori wisata pada gambar.\n\nDalam setiap paket wisata, setiap pelanggan akan mengunjungi:\n• $3$ destinasi wisata alam berbeda (dari $4$ pilihan),\n• $3$ destinasi wisata budaya berbeda (dari $5$ pilihan), dan\n• $2$ destinasi wisata kuliner berbeda (dari $5$ pilihan).',
    questionText:
      'Berdasarkan informasi yang diberikan, berapakah banyak paket wisata berbeda yang dapat dirancang oleh biro perjalanan Wisata Makmur *Tour*?',
    visualId: 'soal-15',
    options: [
      { key: 'A', text: '$24\\text{ paket}$' },
      { key: 'B', text: '$104\\text{ paket}$' },
      { key: 'C', text: '$400\\text{ paket}$' },
      { key: 'D', text: '$3.003\\text{ paket}$' },
      { key: 'E', text: '$28.800\\text{ paket}$' },
    ],
    solution: {
      answerSummary: 'C. $400\\text{ paket}$',
      correctOptionKey: 'C',
      steps: [
        '**1. Kategori Wisata Alam:**\nTerdapat $4$ destinasi wisata alam, dipilih $3$ destinasi:\n$$\\begin{aligned}\nC(4, 3) &= \\frac{4!}{3! \\cdot 1!} \\\\\n&= 4\\text{ cara}\n\\end{aligned}$$',
        '**2. Kategori Wisata Budaya:**\nTerdapat $5$ destinasi wisata budaya, dipilih $3$ destinasi:\n$$\\begin{aligned}\nC(5, 3) &= \\frac{5!}{3! \\cdot 2!} \\\\\n&= \\frac{5 \\times 4}{2 \\times 1} \\\\\n&= 10\\text{ cara}\n\\end{aligned}$$',
        '**3. Kategori Wisata Kuliner:**\nTerdapat $5$ destinasi wisata kuliner, dipilih $2$ destinasi:\n$$\\begin{aligned}\nC(5, 2) &= \\frac{5!}{2! \\cdot 3!} \\\\\n&= \\frac{5 \\times 4}{2 \\times 1} \\\\\n&= 10\\text{ cara}\n\\end{aligned}$$',
        '**Total Paket Wisata Berbeda (Aturan Perkalian):**\n$$\\begin{aligned}\n\\text{Total Paket} &= C(4, 3) \\times C(5, 3) \\times C(5, 2) \\\\\n&= 4 \\times 10 \\times 10 \\\\\n&= 400\\text{ paket}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 16,
    topic: 'Perbandingan Trigonometri Segitiga Siku-Siku',
    type: 'multiple-choice',
    storyContext:
      'Sebuah gedung bertingkat mengalami kebakaran. Seorang petugas pemadam kebakaran mengarahkan selang air dengan sudut elevasi $60^\\circ$ ke jendela lantai atas seperti terlihat pada gambar.\n\nTinggi posisi jendela tersebut dari ujung selang $(h)$ adalah $3\\sqrt{3}\\text{ meter}$.',
    questionText:
      'Jika semprotan air diasumsikan membentuk garis lurus, berapakah panjang lintasan semprotan air $(r)$ dari ujung selang hingga mencapai jendela tersebut?',
    visualId: 'soal-16',
    options: [
      { key: 'A', text: '$3\\text{ meter}$' },
      { key: 'B', text: '$4,5\\text{ meter}$' },
      { key: 'C', text: '$6\\text{ meter}$' },
      { key: 'D', text: '$6\\sqrt{3}\\text{ meter}$' },
      { key: 'E', text: '$9\\text{ meter}$' },
    ],
    solution: {
      answerSummary: 'C. $6\\text{ meter}$',
      correctOptionKey: 'C',
      steps: [
        'Diketahui unsur segitiga siku-siku pada gambar:\nSudut elevasi $(\\alpha) = 60^\\circ$\nSisi depan sudut $(h) = 3\\sqrt{3}\\text{ meter}$\nSisi miring lintasan air $= r$',
        'Gunakan perbandingan sinus $\\left(\\sin 60^\\circ = \\dfrac{\\text{depan}}{\\text{miring}}\\right)$:\n$$\\begin{aligned}\n\\sin 60^\\circ &= \\frac{h}{r} \\\\\n\\frac{1}{2}\\sqrt{3} &= \\frac{3\\sqrt{3}}{r} \\\\\nr &= \\frac{3\\sqrt{3}}{\\frac{1}{2}\\sqrt{3}} \\\\\nr &= 3 \\times 2 \\\\\nr &= 6\\text{ meter}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 17,
    topic: 'Peluang Kejadian Majemuk Bersyarat',
    type: 'multiple-choice',
    storyContext:
      'Sebuah UMKM keripik kentang mengemas produknya ke dalam dua jenis kardus besar (Kardus A dan Kardus B) yang masing-masing berisi rasa **Balado** (merah) dan **Barbeku** (kuning) seperti pada gambar.\n\nSeorang pekerja gudang secara tidak sengaja memindahkan $1$ kemasan secara acak dari Kardus A ke Kardus B. Sadar akan kekeliruan tersebut, pekerja lain langsung mengambil $1$ kemasan secara acak dari Kardus B untuk dikembalikan ke Kardus A.',
    questionText:
      'Berapakah peluang komposisi jumlah kemasan keripik kentang di Kardus B kembali seperti semula, sebelum terjadi kesalahan tersebut?',
    visualId: 'soal-17',
    options: [
      { key: 'A', text: '$\\dfrac{18}{45}$' },
      { key: 'B', text: '$\\dfrac{21}{45}$' },
      { key: 'C', text: '$\\dfrac{21}{40}$' },
      { key: 'D', text: '$\\dfrac{26}{45}$' },
      { key: 'E', text: '$\\dfrac{26}{40}$' },
    ],
    solution: {
      answerSummary: 'D. $\\dfrac{26}{45}$',
      correctOptionKey: 'D',
      steps: [
        'Komposisi awal masing-masing kardus:\n• **Kardus A:**\n$$6\\text{ Balado} + 4\\text{ Barbeku} = 10\\text{ kemasan}$$\n• **Kardus B:**\n$$5\\text{ Balado} + 3\\text{ Barbeku} = 8\\text{ kemasan}$$\n(Setelah menerima $1$ kemasan dari Kardus A, total isi Kardus B menjadi $9\\text{ kemasan}$).',
        '**Kasus 1 (Terpindah Balado dari A, lalu terambil Balado kembali dari B):**\nSaat $1$ kemasan Balado pindah ke Kardus B, jumlah Balado di Kardus B menjadi:\n$5 + 1 = 6\\text{ kemasan}$ (dari total $9\\text{ kemasan}$)\n$$\\begin{aligned}\nP_1 &= P(\\text{Balado dari A}) \\times P(\\text{Balado dari B}) \\\\\n&= \\frac{6}{10} \\times \\frac{6}{9} \\\\\n&= \\frac{36}{90}\n\\end{aligned}$$',
        '**Kasus 2 (Terpindah Barbeku dari A, lalu terambil Barbeku kembali dari B):**\nSaat $1$ kemasan Barbeku pindah ke Kardus B, jumlah Barbeku di Kardus B menjadi:\n$3 + 1 = 4\\text{ kemasan}$ (dari total $9\\text{ kemasan}$)\n$$\\begin{aligned}\nP_2 &= P(\\text{Barbeku dari A}) \\times P(\\text{Barbeku dari B}) \\\\\n&= \\frac{4}{10} \\times \\frac{4}{9} \\\\\n&= \\frac{16}{90}\n\\end{aligned}$$',
        '**Total Peluang Komposisi Kembali Seperti Semula:**\n$$\\begin{aligned}\nP_{\\text{total}} &= P_1 + P_2 \\\\\n&= \\frac{36}{90} + \\frac{16}{90} \\\\\n&= \\frac{52}{90} \\\\\n&= \\frac{26}{45}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 18,
    topic: 'Operasi Eksponen Pecahan & Fungsi',
    type: 'multiple-choice',
    storyContext:
      'Diketahui nilai:\n$$x = 125^{\\frac{2}{3}} \\cdot 32^{\\frac{3}{5}}$$',
    questionText: 'Maka nilai dari $f(x) = x - 150$ adalah ....',
    options: [
      { key: 'A', text: '$10$' },
      { key: 'B', text: '$30$' },
      { key: 'C', text: '$50$' },
      { key: 'D', text: '$80$' },
      { key: 'E', text: '$100$' },
    ],
    solution: {
      answerSummary: 'C. $50$',
      correctOptionKey: 'C',
      steps: [
        'Ubah bilangan pokok menjadi bentuk bilangan berpangkat:\n$125 = 5^3$\n$32 = 2^5$',
        'Hitung nilai $x$ secara bertahap:\n$$\\begin{aligned}\nx &= 125^{\\frac{2}{3}} \\cdot 32^{\\frac{3}{5}} \\\\\n&= (5^3)^{\\frac{2}{3}} \\cdot (2^5)^{\\frac{3}{5}} \\\\\n&= 5^2 \\cdot 2^3 \\\\\n&= 25 \\times 8 \\\\\n&= 200\n\\end{aligned}$$',
        'Substitusikan nilai $x = 200$ ke dalam fungsi $f(x) = x - 150$:\n$$\\begin{aligned}\nf(200) &= 200 - 150 \\\\\n&= 50\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 19,
    topic: 'Aljabar Fungsi Linear',
    type: 'multiple-choice',
    storyContext:
      'Berikut adalah gambar grafik fungsi linear $y = g(x)$ (garis biru) dan $y = f(x)$ (garis merah) pada bidang koordinat Kartesius:',
    questionText:
      'Jika garis biru $g(x)$ melalui titik $(7, 23)$ dan $(10, 32)$, maka nilai dari $(f - g)(16)$ adalah ....',
    visualId: 'soal-19',
    options: [
      { key: 'A', text: '$11$' },
      { key: 'B', text: '$13$' },
      { key: 'C', text: '$15$' },
      { key: 'D', text: '$17$' },
      { key: 'E', text: '$19$' },
    ],
    solution: {
      answerSummary: 'C. $15$',
      correctOptionKey: 'C',
      steps: [
        'Kita **tidak perlu** mencari rumus fungsi $f(x)$ maupun $g(x)$ satu per satu.\nCukup hitung selisih nilai kedua fungsi pada titik absis yang diketahui di grafik:\n• Saat $x = 7$:\n$$\\begin{aligned}\n(f - g)(7) &= f(7) - g(7) \\\\\n&= 26 - 23 \\\\\n&= 3\n\\end{aligned}$$\n• Saat $x = 10$:\n$$\\begin{aligned}\n(f - g)(10) &= f(10) - g(10) \\\\\n&= 39 - 32 \\\\\n&= 7\n\\end{aligned}$$',
        'Karena $f$ dan $g$ keduanya fungsi linear, maka setiap $x$ bertambah $+3$,\nnilai $(f - g)(x)$ selalu bertambah tetap sebesar $+4$:\n$$\\begin{aligned}\n(f - g)(7) &= 3 \\\\\n(f - g)(10) &= 3 + 4 = 7 \\\\\n(f - g)(13) &= 7 + 4 = 11 \\\\\n(f - g)(16) &= 11 + 4 = 15\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 20,
    topic: 'Operasi Hitung Bilangan Real',
    type: 'multiple-choice',
    questionText:
      'Hasil dari operasi $3,5 : \\dfrac{7}{2} - 140\\% + 0,25 \\times \\dfrac{1}{5}$ adalah ....',
    options: [
      { key: 'A', text: '$-0,45$' },
      { key: 'B', text: '$-0,35$' },
      { key: 'C', text: '$-0,03$' },
      { key: 'D', text: '$0,10$' },
      { key: 'E', text: '$0,91$' },
    ],
    solution: {
      answerSummary: 'B. $-0,35$',
      correctOptionKey: 'B',
      steps: [
        'Sederhanakan masing-masing bagian operasi ke dalam bentuk desimal satu per baris:\n• Suku pertama (pembagian):\n$$\\begin{aligned}\n3,5 : \\frac{7}{2} &= \\frac{7}{2} : \\frac{7}{2} \\\\\n&= 1\n\\end{aligned}$$\n• Suku kedua (persentase):\n$$140\\% = 1,40$$\n• Suku ketiga (perkalian):\n$$\\begin{aligned}\n0,25 \\times \\frac{1}{5} &= 0,25 \\times 0,20 \\\\\n&= 0,05\n\\end{aligned}$$',
        'Gabungkan seluruh hasil perhitungan:\n$$\\begin{aligned}\n\\text{Hasil} &= 1 - 1,40 + 0,05 \\\\\n&= -0,40 + 0,05 \\\\\n&= -0,35\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 21,
    topic: 'Deret Aritmetika',
    type: 'multiple-choice',
    storyContext:
      'Suatu industri rumahan mencatat jumlah barang yang diproduksi setiap bulannya mengikuti pola deret aritmetika. Jumlah produksi selama $3$ bulan pertama ($S_3$) adalah $2.400\\text{ unit}$, sedangkan jumlah produksi selama $8$ bulan pertama ($S_8$) adalah $10.400\\text{ unit}$.',
    questionText:
      'Total jumlah barang yang diproduksi selama $18$ bulan pertama ($S_{18}$) adalah ....',
    options: [
      { key: 'A', text: '$36.800\\text{ unit}$' },
      { key: 'B', text: '$38.400\\text{ unit}$' },
      { key: 'C', text: '$40.600\\text{ unit}$' },
      { key: 'D', text: '$41.400\\text{ unit}$' },
      { key: 'E', text: '$43.200\\text{ unit}$' },
    ],
    solution: {
      answerSummary: 'D. $41.400\\text{ unit}$',
      correctOptionKey: 'D',
      steps: [
        'Gunakan rumus jumlah $n$ suku pertama deret aritmetika $S_n = \\dfrac{n}{2}(2a + (n-1)b)$.\nJabarkan persamaan untuk $S_3 = 2.400$:\n$$\\begin{aligned}\nS_3 &= 2.400 \\\\\n\\frac{3}{2}(2a + 2b) &= 2.400 \\\\\n3(a + b) &= 2.400 \\\\\na + b &= 800 \\quad \\text{...(Persamaan 1)}\n\\end{aligned}$$',
        'Jabarkan persamaan untuk $S_8 = 10.400$:\n$$\\begin{aligned}\nS_8 &= 10.400 \\\\\n\\frac{8}{2}(2a + 7b) &= 10.400 \\\\\n4(2a + 7b) &= 10.400 \\\\\n2a + 7b &= 2.600 \\quad \\text{...(Persamaan 2)}\n\\end{aligned}$$',
        'Eliminasi variabel $a$ dari Persamaan 2 dan Persamaan 1:\n$$\\begin{alignedat}{3}\n2a + 7b &= 2.600 &\\quad &\\big|\\times 1\\big| &\\quad 2a + 7b &= 2.600 \\\\\na + b &= 800 &\\quad &\\big|\\times 2\\big| &\\quad \\underline{2a + 2b} &\\underline{\\;= 1.600} \\; - \\\\\n&&&& 5b &= 1.000 \\\\\n&&&& b &= 200\n\\end{alignedat}$$',
        'Substitusikan nilai $b = 200$ ke Persamaan 1 untuk mencari nilai $a$:\n$$\\begin{aligned}\na + b &= 800 \\\\\na + 200 &= 800 \\\\\na &= 800 - 200 \\\\\na &= 600\n\\end{aligned}$$',
        'Hitung total jumlah barang yang diproduksi selama $18$ bulan pertama $(S_{18})$:\n$$\\begin{aligned}\nS_{18} &= \\frac{18}{2}(2a + 17b) \\\\\n&= 9(2(600) + 17(200)) \\\\\n&= 9(1.200 + 3.400) \\\\\n&= 9 \\times 4.600 \\\\\n&= 41.400\\text{ unit}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 22,
    topic: 'Kaidah Pencacahan Bersyarat',
    type: 'multiple-choice',
    storyContext:
      'Suatu kafe menjual minuman yang dapat diracik sendiri oleh pembeli. Minuman dapat diracik dengan syarat:\na) Memilih $1$ dari $5$ jenis dasar rasa $(A, B, C, D, E)$.\nb) Memilih $2$ dari $4$ jenis *topping*.\nc) Memilih $1$ dari $3$ jenis susu $(A, B, C)$.',
    questionText:
      'Dengan catatan **dasar rasa $A$ tidak bisa digabungkan dengan susu jenis $A$**. Banyak cara pembeli dapat meracik minuman tersebut adalah ....',
    options: [
      { key: 'A', text: '$60\\text{ cara}$' },
      { key: 'B', text: '$72\\text{ cara}$' },
      { key: 'C', text: '$84\\text{ cara}$' },
      { key: 'D', text: '$90\\text{ cara}$' },
      { key: 'E', text: '$96\\text{ cara}$' },
    ],
    solution: {
      answerSummary: 'C. $84\\text{ cara}$',
      correctOptionKey: 'C',
      steps: [
        'Tentukan banyak cara memilih masing-masing komponen:\n• Banyak pilihan dasar rasa ($1$ dari $5$ jenis) $= 5\\text{ cara}$\n• Banyak pilihan susu ($1$ dari $3$ jenis) $= 3\\text{ cara}$\n• Banyak pilihan *topping* ($2$ dari $4$ jenis):\n$$\\begin{aligned}\nC(4, 2) &= \\frac{4!}{2! \\cdot 2!} \\\\\n&= \\frac{4 \\times 3}{2 \\times 1} \\\\\n&= 6\\text{ cara}\n\\end{aligned}$$',
        'Hitung total semua kombinasi tanpa syarat dan kombinasi terlarang (Rasa $A$ dengan Susu $A$):\n• Total kombinasi tanpa syarat:\n$$\\begin{aligned}\nN_{\\text{semua}} &= 5 \\times 6 \\times 3 \\\\\n&= 90\\text{ cara}\n\\end{aligned}$$\n• Kombinasi terlarang ($1$ Rasa $A$, $6$ variasi *topping*, $1$ Susu $A$):\n$$\\begin{aligned}\nN_{\\text{terlarang}} &= 1 \\times 6 \\times 1 \\\\\n&= 6\\text{ cara}\n\\end{aligned}$$',
        'Kurangkan untuk memperoleh banyak cara meracik minuman yang diperbolehkan:\n$$\\begin{aligned}\nN_{\\text{valid}} &= N_{\\text{semua}} - N_{\\text{terlarang}} \\\\\n&= 90 - 6 \\\\\n&= 84\\text{ cara}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 23,
    topic: 'Geometri Ruang (Jarak Terpendek pada Permukaan Balok)',
    type: 'multiple-choice',
    storyContext:
      'Pak Edi memiliki sebuah ruang kerja berbentuk balok berukuran $8\\text{ m} \\times 4\\text{ m} \\times 4\\text{ m}$ $(\\text{panjang} \\times \\text{lebar} \\times \\text{tinggi})$. Di bagian tengah plafon (titik tengah panjang dan lebar atap, yaitu $L(4,2,4)$) terdapat sebuah lampu gantung $L$. Pada dinding sisi kanan ($x = 8\\text{ m}$), terdapat sebuah saklar $S(8,2,0)$ tepat di dekat lantai yang berjarak $2\\text{ m}$ dari kedua sisi panjang ruangan.\n\nPak Edi ingin menyalurkan kabel dari lampu ke saklar dengan menempelkan kabel pada permukaan plafon lalu menurunkannya ke dinding (kabel tidak boleh melintasi ruang udara).',
    questionText:
      'Jika kabel harus mengikuti jalur terpendek di permukaan ruangan tersebut, panjang kabel minimal yang dibutuhkan adalah ....',
    visualId: 'soal-23',
    options: [
      { key: 'A', text: '$6\\text{ meter}$' },
      { key: 'B', text: '$8\\text{ meter}$' },
      { key: 'C', text: '$10\\text{ meter}$' },
      { key: 'D', text: '$12\\text{ meter}$' },
      { key: 'E', text: '$4\\sqrt{5}\\text{ meter}$' },
    ],
    solution: {
      answerSummary: 'B. $8\\text{ meter}$',
      correctOptionKey: 'B',
      steps: [
        'Perhatikan koordinat lampu dan saklar:\nPosisi lampu di tengah plafon: $L(4, 2, 4)$\nPosisi saklar di dasar dinding kanan: $S(8, 2, 0)$\nKeduanya terletak pada bidang irisan tengah $y = 2\\text{ m}$ yang sama.',
        'Rentangkan (rebahkan) dinding kanan agar sebidang dengan plafon:\n• Panjang kabel mendatar di plafon dari $L(4, 2, 4)$ ke tepi kanan atap $(8, 2, 4)$:\n$$d_1 = 8 - 4 = 4\\text{ meter}$$\n• Panjang kabel menurun lurus di dinding kanan dari $(8, 2, 4)$ ke saklar $S(8, 2, 0)$:\n$$d_2 = 4 - 0 = 4\\text{ meter}$$',
        'Hitung total panjang kabel minimal yang dibutuhkan:\n$$\\begin{aligned}\nd_{\\text{minimal}} &= d_1 + d_2 \\\\\n&= 4\\text{ m} + 4\\text{ m} \\\\\n&= 8\\text{ meter}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 24,
    topic: 'Pertumbuhan Eksponensial',
    type: 'multiple-choice',
    storyContext:
      'Sebuah kultur bakteri di laboratorium memiliki $400\\text{ sel}$ pada pukul $08.00$. Jumlah sel bakteri tersebut bertambah sebesar $20\\%$ setiap $2\\text{ jam}$ dari jumlah pada periode sebelumnya. Populasi bakteri dikatakan mencapai kondisi **stabil** apabila jumlahnya lebih dari $800\\text{ sel}$, namun dikatakan **terlalu padat** apabila melebihi $1.500\\text{ sel}$.',
    questionText:
      'Pada pukul berapakah populasi bakteri tersebut pertama kali mencapai kondisi **stabil** tetapi belum **terlalu padat**?',
    options: [
      { key: 'A', text: '$\\text{Pukul }12.00$' },
      { key: 'B', text: '$\\text{Pukul }14.00$' },
      { key: 'C', text: '$\\text{Pukul }15.00$' },
      { key: 'D', text: '$\\text{Pukul }16.00$' },
      { key: 'E', text: '$\\text{Pukul }18.00$' },
    ],
    solution: {
      answerSummary: 'D. $\\text{Pukul }16.00$',
      correctOptionKey: 'D',
      steps: [
        'Diketahui:\nJumlah awal bakteri pada pukul $08.00$ $(P_0) = 400\\text{ sel}$\nFaktor pengali tiap periode $2\\text{ jam} = 100\\% + 20\\% = 120\\% = 1,2$\nSyarat kondisi stabil dan belum terlalu padat: $800 < P_n \\le 1.500$',
        'Sajikan pertumbuhan jumlah sel bakteri setiap $2\\text{ jam}$ ke dalam tabel:\n| Periode<br/>$(n)$ | Waktu | Perhitungan Jumlah Sel<br/>$(P_n = P_{n-1} \\times 1,2)$ | Status Populasi |\n| :---: | :---: | :---: | :---: |\n| $0$ | $\\text{Pukul }08.00$ | $400\\text{ sel}$ | Belum stabil<br/>$(\\le 800)$ |\n| $1$ | $\\text{Pukul }10.00$ | $400 \\times 1,2 = 480\\text{ sel}$ | Belum stabil<br/>$(\\le 800)$ |\n| $2$ | $\\text{Pukul }12.00$ | $480 \\times 1,2 = 576\\text{ sel}$ | Belum stabil<br/>$(\\le 800)$ |\n| $3$ | $\\text{Pukul }14.00$ | $576 \\times 1,2 = 691,2\\text{ sel}$ | Belum stabil<br/>$(\\le 800)$ |\n| **$4$** | **$\\text{Pukul }16.00$** | **$691,2 \\times 1,2 = 829,44\\text{ sel}$** | **Stabil**<br/>**($> 800$ dan $\\le 1.500$)** |',
      ],
    },
  },
  {
    id: 25,
    topic: 'Program Linear (Pemodelan Matematika)',
    type: 'complex-multiple-choice',
    storyContext:
      'Sebuah pabrik konveksi memproduksi dua model kemeja, yaitu kemeja Model A dan kemeja Model B.\n• Setiap $1$ potong kemeja **Model A** memerlukan $1,2\\text{ meter}$ kain hitam dan $0,8\\text{ meter}$ kain putih.\n• Setiap $1$ potong kemeja **Model B** memerlukan $0,9\\text{ meter}$ kain hitam dan $1,5\\text{ meter}$ kain putih.\n• Persediaan kain yang dimiliki pabrik saat ini paling banyak adalah $36\\text{ meter}$ kain hitam dan $48\\text{ meter}$ kain putih.',
    questionText:
      'Jika $x$ menyatakan banyaknya kemeja Model A dan $y$ menyatakan banyaknya kemeja Model B yang diproduksi, manakah sistem pertidaksamaan linear berikut yang tepat memodelkan permasalahan tersebut?',
    note: 'Pilihlah semua jawaban yang benar! Jawaban benar lebih dari satu.',
    checkboxOptions: [
      '$1,2x + 0,9y \\le 36; \\quad 0,8x + 1,5y \\le 48; \\quad x \\ge 0; \\quad y \\ge 0$',
      '$12x + 9y \\ge 360; \\quad 8x + 15y \\ge 480; \\quad x \\ge 0; \\quad y \\ge 0$',
      '$0,8x + 1,2y \\le 36; \\quad 1,5x + 0,9y \\le 48; \\quad x \\ge 0; \\quad y \\ge 0$',
      '$12x + 9y \\le 360; \\quad 8x + 15y \\le 480; \\quad x \\ge 0; \\quad y \\ge 0$',
      '$4x + 3y \\le 120; \\quad 8x + 15y \\le 480; \\quad x \\ge 0; \\quad y \\ge 0$',
    ],
    solution: {
      answerSummary: 'Pilihan 1, Pilihan 4, dan Pilihan 5',
      correctCheckboxIndices: [0, 3, 4],
      steps: [
        'Misalkan:\n$x =$ banyak kemeja Model A yang diproduksi\n$y =$ banyak kemeja Model B yang diproduksi\nSajikan informasi kebutuhan kain dan persediaan maksimal ke dalam tabel:\n| Jenis Kain | Model A<br/>$(x)$ | Model B<br/>$(y)$ | Persediaan<br/>Maksimal |\n| :---: | :---: | :---: | :---: |\n| **Kain Hitam** | $1,2\\text{ m}$ | $0,9\\text{ m}$ | $36\\text{ m}$ |\n| **Kain Putih** | $0,8\\text{ m}$ | $1,5\\text{ m}$ | $48\\text{ m}$ |',
        'Susun model pertidaksamaan dasar dengan membaca tabel per baris (karena persediaan *paling banyak*, gunakan tanda $\\le$):\n• Kendala **Kain Hitam** (baris pertama):\n$$1,2x + 0,9y \\le 36$$\n• Kendala **Kain Putih** (baris kedua):\n$$0,8x + 1,5y \\le 48$$\n• Syarat banyak kemeja tidak mungkin negatif:\n$$x \\ge 0; \\quad y \\ge 0$$\nModel dasar ini sesuai dengan **Pilihan 1 (Benar)**.',
        'Kalikan kedua pertidaksamaan dasar dengan $10$ agar koefisien menjadi bilangan bulat:\n• Kain Hitam:\n$$\\begin{aligned}\n10 \\times (1,2x + 0,9y) &\\le 10 \\times 36 \\\\\n12x + 9y &\\le 360\n\\end{aligned}$$\n• Kain Putih:\n$$\\begin{aligned}\n10 \\times (0,8x + 1,5y) &\\le 10 \\times 48 \\\\\n8x + 15y &\\le 480\n\\end{aligned}$$\nBentuk ekuivalen ini sesuai dengan **Pilihan 4 (Benar)**.',
        'Sederhanakan pertidaksamaan Kain Hitam $(12x + 9y \\le 360)$ dengan membagi kedua ruas dengan $3$:\n$$\\begin{aligned}\n\\frac{12x + 9y}{3} &\\le \\frac{360}{3} \\\\\n4x + 3y &\\le 120\n\\end{aligned}$$\nDigabungkan dengan $8x + 15y \\le 480$, bentuk ini sesuai dengan **Pilihan 5 (Benar)**.',
      ],
    },
  },
];
