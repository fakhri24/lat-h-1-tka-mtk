import { QuestionItem } from '../types/question';

export const paket2QuestionsData: QuestionItem[] = [
  {
    id: 8,
    topic: 'Komposisi Fungsi Linear',
    type: 'true-false-table',
    storyContext:
      'Pada bidang koordinat Kartesius berikut, terdapat dua grafik fungsi linear, yaitu fungsi $f(x)$ dan fungsi $g(x)$.',
    questionText:
      'Berdasarkan grafik tersebut, tentukan **Benar** atau **Salah** untuk setiap nilai komposisi fungsi berikut!',
    visualId: 'p2-soal-8',
    trueFalseHeaders: ['Pernyataan', 'Benar', 'Salah'],
    statements: [
      '$\\text{I) } (f \\circ g)(1) = 6$',
      '$\\text{II) } (f \\circ g)(4) = 0$',
      '$\\text{III) } (g \\circ f)(4) = -2$',
    ],
    solution: {
      answerSummary: 'Benar, Benar, Salah',
      correctTrueFalse: {
        0: 'Benar',
        1: 'Benar',
        2: 'Salah',
      },
      steps: [
        'Kita **tidak perlu** mencari rumus fungsi $f(x)$ maupun $g(x)$.\nCukup baca koordinat titik yang dilalui kedua garis pada grafik secara langsung:\n• Pada garis menurun $f(x)$: melalui titik $(-2, 6)$, $(0, 4)$, dan $(4, 0)$, sehingga:\n$$f(-2) = 6, \\quad f(0) = 4, \\quad f(4) = 0$$\n• Pada garis menaik $g(x)$: melalui titik $(0, -4)$, $(1, -2)$, dan $(4, 4)$, sehingga:\n$$g(0) = -4, \\quad g(1) = -2, \\quad g(4) = 4$$',
        '**Uji Pernyataan I:**\n$$\\begin{aligned}\n(f \\circ g)(1) &= f(g(1)) \\\\\n&= f(-2) \\\\\n&= 6 \\quad \\implies \\textbf{Benar}\n\\end{aligned}$$',
        '**Uji Pernyataan II:**\n$$\\begin{aligned}\n(f \\circ g)(4) &= f(g(4)) \\\\\n&= f(4) \\\\\n&= 0 \\quad \\implies \\textbf{Benar}\n\\end{aligned}$$',
        '**Uji Pernyataan III:**\n$$\\begin{aligned}\n(g \\circ f)(4) &= g(f(4)) \\\\\n&= g(0) \\\\\n&= -4 \\neq -2 \\quad \\implies \\textbf{Salah}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 10,
    topic: 'Kecukupan Data Fungsi Kuadrat & Garis',
    type: 'multiple-choice',
    storyContext: 'Perhatikan permasalahan dalam kotak berikut!',
    questionText:
      'Putuskan apakah dengan tambahan informasi Pernyataan $(1)$ dan Pernyataan $(2)$ berikut cukup untuk menjawab pertanyaan dalam kotak tersebut!\n\n$(1)$ Parabola $f(x)$ melalui titik $(2, 4)$.\n$(2)$ Garis $g(x)$ memiliki gradien $2$.',
    visualId: 'p2-soal-10',
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
        'Parabola $f(x) = ax^2 + b$ dan garis $g(x) = mx + 1$ saling berpotongan jika dan hanya jika persamaan kuadrat gabungan $f(x) = g(x)$ memiliki solusi real (diskriminan $D \\ge 0$):\n$$ax^2 - mx + (b - 1) = 0 \\implies D = (-m)^2 - 4a(b - 1) = m^2 - 4a(b - 1)$$',
        '**Analisis Pernyataan (1) saja:**\nParabola melalui $(2, 4) \\implies f(2) = 4a + b = 4 \\implies b = 4 - 4a$.\nKarena gradien garis $m$ belum diketahui, tanda diskriminan $D$ belum dapat ditentukan $\\implies$ **Pernyataan (1) saja tidak cukup**.',
        '**Analisis Pernyataan (2) saja:**\nGaris $g(x)$ memiliki gradien $m = 2 \\implies g(x) = 2x + 1$.\nKarena nilai $a$ dan $b$ sama sekali belum diketahui, parabola bisa memotong garis maupun tidak memotong garis $\\implies$ **Pernyataan (2) saja tidak cukup**.',
        '**Analisis Pernyataan (1) dan (2) bersama-sama:**\nSubstitusikan $b = 4 - 4a$ dan $m = 2$ ke dalam rumus diskriminan $D$:\n$$\\begin{aligned}\nD &= 2^2 - 4a(4 - 4a - 1) \\\\\n&= 4 - 4a(3 - 4a) \\\\\n&= 16a^2 - 12a + 4 \\\\\n&= \\left(4a - \\frac{3}{2}\\right)^2 + \\frac{7}{4}\n\\end{aligned}$$\nKarena bentuk kuadrat sempurna $\\left(4a - \\frac{3}{2}\\right)^2 \\ge 0$ untuk setiap bilangan real $a$, maka nilai $D \\ge \\frac{7}{4} > 0$ **selalu bernilai positif** berapa pun nilai $a \\neq 0$.\nArtinya, parabola $f(x)$ dan garis $g(x)$ **pasti selalu berpotongan di dua titik** $\\implies$ **Kedua pernyataan bersama-sama cukup (C)**.',
      ],
      note: 'Catatan Jebakan Soal: Sebagian peserta terkecoh memilih E karena mengira koefisien a dan b harus ditemukan nilainya secara tunggal terlebih dahulu. Padahal tanpa mengetahui nilai tunggal a, sifat definit positif D = 16a² - 12a + 4 > 0 sudah menjamin 100% bahwa kedua kurva pasti berpotongan.',
    },
  },
  {
    id: 12,
    topic: 'Teorema Pythagoras & Geometri Terapan',
    type: 'true-false-table',
    storyContext:
      'Sebuah menara ditahan oleh tiga kawat penyangga seperti pada gambar. Pasak penahan kawat penyangga akan digeser ke arah kanan atau kiri dengan ketentuan pergeseran sebagai berikut:\n1. Setiap kawat pengganti memiliki panjang maksimal $10\\text{ m}$.\n2. Batas aman jarak pasak ke dasar menara minimal $4\\text{ m}$.\n3. Tinggi titik ikat tetap (tidak ada perubahan).',
    questionText:
      'Tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut dengan memberi tanda centang ($\\checkmark$)!',
    visualId: 'p2-soal-12',
    trueFalseHeaders: ['Pernyataan', 'Benar', 'Salah'],
    statements: [
      'Pasak kawat penyangga $1$ dapat digeser dengan dipindahkan ke kanan sejauh $5\\text{ m}$.',
      'Pasak kawat penyangga $2$ dapat digeser dengan dipindahkan ke kanan sejauh $8\\text{ m}$.',
      'Pasak kawat penyangga $3$ dapat digeser dengan dipindahkan ke kiri sejauh $8\\text{ m}$.',
    ],
    solution: {
      answerSummary: 'Salah, Benar, Benar',
      correctTrueFalse: {
        0: 'Salah',
        1: 'Benar',
        2: 'Benar',
      },
      steps: [
        'Tentukan tinggi masing-masing titik ikat dari permukaan tanah berdasarkan ukuran bertingkat pada tiang menara:\n• Tinggi titik ikat **Kawat penyangga 3** (bawah) $= 5\\text{ m}$\n• Tinggi titik ikat **Kawat penyangga 2** (tengah) $= 5 + 4 = 9\\text{ m}$\n• Tinggi titik ikat **Kawat penyangga 1** (atas) $= 5 + 4 + 7 = 16\\text{ m}$\n*(Cek awal dengan jarak pasak $12\\text{ m}$: panjang kawat semula berturut-turut adalah $\\sqrt{5^2+12^2}=13\\text{ m}$, $\\sqrt{9^2+12^2}=15\\text{ m}$, dan $\\sqrt{16^2+12^2}=20\\text{ m}$).*',
        '**Uji Pernyataan 1 (Kawat penyangga 1 digeser ke kanan sejauh $5\\text{ m}$):**\nJarak pasak kiri ke dasar menara menjadi $x_1 = 12 - 5 = 7\\text{ m}$ (memenuhi syarat $\\ge 4\\text{ m}$).\nHitung panjang kawat pengganti yang diperlukan:\n$$\\begin{aligned}\nL_1 &= \\sqrt{16^2 + 7^2} \\\\\n&= \\sqrt{256 + 49} \\\\\n&= \\sqrt{305} \\approx 17,46\\text{ m} > 10\\text{ m}\n\\end{aligned}$$\nKarena melebihi batas maksimal panjang kawat pengganti ($10\\text{ m}$), maka pergeseran ini tidak dapat dilakukan $\\implies$ **Salah**.',
        '**Uji Pernyataan 2 (Kawat penyangga 2 digeser ke kanan sejauh $8\\text{ m}$):**\nJarak pasak kiri ke dasar menara menjadi $x_2 = 12 - 8 = 4\\text{ m}$ (memenuhi batas aman minimal $4\\text{ m}$).\nHitung panjang kawat pengganti yang diperlukan:\n$$\\begin{aligned}\nL_2 &= \\sqrt{9^2 + 4^2} \\\\\n&= \\sqrt{81 + 16} \\\\\n&= \\sqrt{97}\\text{ m} < \\sqrt{100}\\text{ m} = 10\\text{ m}\n\\end{aligned}$$\nKarena jarak pasak $\\ge 4\\text{ m}$ dan panjang kawat $\\le 10\\text{ m}$, maka pergeseran dapat dilakukan $\\implies$ **Benar**.',
        '**Uji Pernyataan 3 (Kawat penyangga 3 digeser ke kiri sejauh $8\\text{ m}$):**\nJarak pasak kanan ke dasar menara menjadi $x_3 = 12 - 8 = 4\\text{ m}$ (memenuhi batas aman minimal $4\\text{ m}$).\nHitung panjang kawat pengganti yang diperlukan:\n$$\\begin{aligned}\nL_3 &= \\sqrt{5^2 + 4^2} \\\\\n&= \\sqrt{25 + 16} \\\\\n&= \\sqrt{41}\\text{ m} < 10\\text{ m}\n\\end{aligned}$$\nKarena kedua syarat terpenuhi, maka pergeseran dapat dilakukan $\\implies$ **Benar**.',
      ],
    },
  },
  {
    id: 14,
    topic: 'Peluang Empirik dari Tabel',
    type: 'multiple-choice',
    storyContext:
      'Seorang pedagang mencatat penjualan paket makanan setiap hari dalam satu minggu pada tabel di samping.\n\nSetiap satu paket makanan berisi **kubis**, **pare**, dan **siomay**. Setiap pelanggan hanya membeli satu paket dan tidak memakan satu jenis makanan.',
    questionText:
      'Jika dipilih satu orang pembeli pada hari **Senin** secara acak, maka peluang terpilihnya pembeli yang **tidak memakan sayuran** adalah ....',
    visualId: 'p2-soal-14',
    options: [
      { key: 'A', text: '$0,02$' },
      { key: 'B', text: '$0,03$' },
      { key: 'C', text: '$0,2$' },
      { key: 'D', text: '$0,3$' },
      { key: 'E', text: '$0,5$' },
    ],
    solution: {
      answerSummary: 'D. $0,3$',
      correctOptionKey: 'D',
      steps: [
        'Perhatikan data penjualan pada baris hari **Senin**:\n• Jumlah seluruh pembeli (paket terjual) pada hari Senin: $n(S) = 50\\text{ orang}$\n• Jenis makanan yang termasuk **sayuran** di dalam paket adalah **Kubis** dan **Pare** (sedangkan Siomay bukan sayuran).',
        'Hitung banyak pembeli pada hari Senin yang tidak memakan sayuran (tidak makan kubis atau tidak makan pare):\n$$\\begin{aligned}\nn(A) &= \\text{Tidak makan Kubis} + \\text{Tidak makan Pare} \\\\\n&= 5 + 10 \\\\\n&= 15\\text{ orang}\n\\end{aligned}$$',
        'Hitung peluang terpilihnya pembeli yang tidak memakan sayuran pada hari Senin:\n$$\\begin{aligned}\nP(A) &= \\frac{n(A)}{n(S)} \\\\\n&= \\frac{15}{50} \\\\\n&= \\frac{3}{10} \\\\\n&= 0,3\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 15,
    topic: 'Statistika Data Berkelompok (Rata-Rata)',
    type: 'multiple-choice',
    storyContext:
      'Sebuah survei dilakukan terhadap $44$ siswa yang mengikuti ekstrakurikuler olahraga di suatu SMA. Survei dilakukan untuk mengetahui durasi olahraga mereka dalam satu minggu yang disajikan dalam diagram berikut.',
    questionText:
      'Berdasarkan diagram tersebut, rata-rata durasi olahraga siswa dalam satu minggu adalah ....',
    visualId: 'p2-soal-15',
    options: [
      { key: 'A', text: '$8,36\\text{ jam}$' },
      { key: 'B', text: '$8,46\\text{ jam}$' },
      { key: 'C', text: '$8,56\\text{ jam}$' },
      { key: 'D', text: '$8,66\\text{ jam}$' },
      { key: 'E', text: '$8,76\\text{ jam}$' },
    ],
    solution: {
      answerSummary: 'A. $8,36\\text{ jam}$',
      correctOptionKey: 'A',
      steps: [
        'Tentukan titik tengah $(x_i)$ dari setiap kelas interval serta hasil kali frekuensi dengan titik tengah $(f_i \\cdot x_i)$:\n| Kelas Interval<br/>Waktu (jam) | Titik Tengah<br/>$(x_i)$ | Frekuensi<br/>$(f_i)$ | Hasil Kali<br/>$(f_i \\cdot x_i)$ |\n| :---: | :---: | :---: | :---: |\n| $0 - 4$ | $2$ | $14$ | $28$ |\n| $5 - 9$ | $7$ | $12$ | $84$ |\n| $10 - 14$ | $12$ | $10$ | $120$ |\n| $15 - 19$ | $17$ | $8$ | $136$ |\n| **Jumlah** | — | **$\\sum f_i = 44$** | **$\\sum (f_i \\cdot x_i) = 368$** |',
        'Hitung nilai rata-rata $(\\bar{x})$ durasi olahraga siswa:\n$$\\begin{aligned}\n\\bar{x} &= \\frac{\\sum (f_i \\cdot x_i)}{\\sum f_i} \\\\\n&= \\frac{368}{44} \\\\\n&= \\frac{92}{11} \\\\\n&\\approx 8,36\\text{ jam}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 16,
    topic: 'Geometri Ruang (Volume Balok & Kapasitas)',
    type: 'true-false-table',
    storyContext:
      'Sebuah kotak berbentuk balok digunakan untuk pembuatan bermacam-macam jus. Setelah jus selesai dibuat akan dipindahkan ke botol. Ukuran kotak dan jenis botol jus yang digunakan tertera pada gambar berikut.',
    questionText:
      'Tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut dengan memberi tanda centang ($\\checkmark$)!',
    visualId: 'p2-soal-16',
    trueFalseHeaders: ['Pernyataan', 'Benar', 'Salah'],
    statements: [
      'I. Banyak botol jus jeruk minimum yang dapat menampung seluruh isi dalam balok adalah $16$ botol.',
      'II. Banyak botol jus semangka minimum yang dapat menampung isi dalam balok adalah $21$ botol.',
      'III. Selisih antara jumlah botol jus jeruk yang dapat menampung seluruh isi balok dan jumlah maksimum botol jus semangka yang dapat menampung isi balok adalah $6$ botol.',
    ],
    solution: {
      answerSummary: 'Benar, Salah, Benar',
      correctTrueFalse: {
        0: 'Benar',
        1: 'Salah',
        2: 'Benar',
      },
      steps: [
        'Hitung volume kotak berbentuk balok ($1\\text{ cm}^3 = 1\\text{ ml}$):\n$$\\begin{aligned}\nV_{\\text{balok}} &= p \\times l \\times t \\\\\n&= 10\\text{ cm} \\times 8\\text{ cm} \\times 20\\text{ cm} \\\\\n&= 1.600\\text{ cm}^3 = 1.600\\text{ ml}\n\\end{aligned}$$',
        '**Uji Pernyataan I (Botol Jus Jeruk @ $100\\text{ ml}$):**\n$$\\begin{aligned}\n\\text{Banyak botol jeruk} &= \\frac{1.600\\text{ ml}}{100\\text{ ml/botol}} \\\\\n&= 16\\text{ botol} \\quad \\implies \\textbf{Benar}\n\\end{aligned}$$',
        '**Uji Pernyataan II (Botol Jus Semangka @ $75\\text{ ml}$):**\n$$\\begin{aligned}\n\\text{Banyak botol semangka} &= \\frac{1.600\\text{ ml}}{75\\text{ ml/botol}} \\\\\n&= 21\\frac{25}{75}\\text{ botol} \\approx 21,33\\text{ botol}\n\\end{aligned}$$\nJika hanya menggunakan $21$ botol, volume yang tertampung baru $21 \\times 75 = 1.575\\text{ ml}$ (masih tersisa $25\\text{ ml}$ jus yang belum tertampung). Agar dapat menampung seluruh isi balok, diperlukan minimal **$22$ botol** $\\implies$ **Salah**.',
        '**Uji Pernyataan III (Selisih Jumlah Botol):**\nJumlah botol jus semangka yang diperlukan untuk menampung seluruh isi balok (termasuk sisa $25\\text{ ml}$) adalah $22$ botol, sedangkan botol jus jeruk adalah $16$ botol:\n$$\\begin{aligned}\n\\text{Selisih} &= 22 - 16 \\\\\n&= 6\\text{ botol} \\quad \\implies \\textbf{Benar}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 17,
    topic: 'Geometri Ruang (Volume Balok & Pembagian Isi)',
    type: 'multiple-choice',
    storyContext:
      'Sebuah kotak berbentuk balok berukuran $10\\text{ cm} \\times 8\\text{ cm} \\times 20\\text{ cm}$ digunakan untuk pembuatan jus. Diketahui kapasitas $1\\text{ botol jus jeruk} = 100\\text{ ml}$ dan $1\\text{ botol jus semangka} = 75\\text{ ml}$.',
    questionText:
      'Kotak yang telah terisi penuh jus jeruk, sebagian isinya telah dituangkan ke dalam $11$ botol. Jika sisa jus dalam kotak tersebut dituangkan ke dalam gelas berkapasitas $250\\text{ ml}$, jumlah gelas minimum yang diperlukan adalah ....',
    visualId: 'p2-soal-16',
    options: [
      { key: 'A', text: '$1\\text{ buah}$' },
      { key: 'B', text: '$2\\text{ buah}$' },
      { key: 'C', text: '$3\\text{ buah}$' },
      { key: 'D', text: '$4\\text{ buah}$' },
      { key: 'E', text: '$5\\text{ buah}$' },
    ],
    solution: {
      answerSummary: 'B. $2\\text{ buah}$',
      correctOptionKey: 'B',
      steps: [
        'Hitung volume penuh jus jeruk di dalam kotak balok:\n$$\\begin{aligned}\nV_{\\text{kotak}} &= 10 \\times 8 \\times 20 \\\\\n&= 1.600\\text{ cm}^3 = 1.600\\text{ ml}\n\\end{aligned}$$',
        'Hitung volume jus jeruk yang dituangkan ke dalam $11$ botol (@ $100\\text{ ml}$) beserta sisanya:\n$$\\begin{aligned}\nV_{11\\text{ botol}} &= 11 \\times 100\\text{ ml} = 1.100\\text{ ml} \\\\\nV_{\\text{sisa}} &= 1.600\\text{ ml} - 1.100\\text{ ml} \\\\\n&= 500\\text{ ml}\n\\end{aligned}$$',
        'Hitung banyak gelas berkapasitas $250\\text{ ml}$ yang diperlukan untuk menampung sisa jus:\n$$\\begin{aligned}\n\\text{Banyak gelas} &= \\frac{500\\text{ ml}}{250\\text{ ml/gelas}} \\\\\n&= 2\\text{ buah}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 22,
    topic: 'Statistika Penyajian Data (Tabel & Diagram Lingkaran)',
    type: 'multiple-choice',
    storyContext:
      'Sebuah pusat pelatihan kerja menyelenggarakan pelatihan kompetensi kerja yang diikuti $500$ peserta. Data peserta pelatihan berdasarkan masa kerja disajikan pada tabel, dan hasil pemilihan bidang pelatihan lanjutan disajikan dalam diagram lingkaran di samping.\n\nSeluruh peserta yang masa kerjanya **lebih dari $10$ tahun** hanya memilih bidang **Digital Marketing**, dan tidak ada peserta dari masa kerja lainnya yang memilih bidang tersebut.',
    questionText:
      'Banyak peserta dengan masa kerja $2 - 5\\text{ tahun}$ yang ikut pelatihan adalah ....',
    visualId: 'p2-soal-22',
    options: [
      { key: 'A', text: '$220\\text{ orang}$' },
      { key: 'B', text: '$215\\text{ orang}$' },
      { key: 'C', text: '$210\\text{ orang}$' },
      { key: 'D', text: '$205\\text{ orang}$' },
      { key: 'E', text: '$200\\text{ orang}$' },
    ],
    solution: {
      answerSummary: 'B. $215\\text{ orang}$',
      correctOptionKey: 'B',
      steps: [
        'Tentukan banyak peserta dengan masa kerja **$> 10\\text{ tahun}$**:\nKarena seluruh peserta bermasa kerja $> 10\\text{ tahun}$ tepat sama dengan pemilih bidang **Digital Marketing** ($15\\%$ dari $500$ peserta), maka:\n$$\\begin{aligned}\nN_{>10\\text{ tahun}} &= 15\\% \\times 500 \\\\\n&= \\frac{15}{100} \\times 500 \\\\\n&= 75\\text{ orang}\n\\end{aligned}$$',
        'Hitung banyak peserta dengan masa kerja **$2 - 5\\text{ tahun}$** dari total $500$ peserta:\n$$\\begin{aligned}\nN_{2-5\\text{ tahun}} &= N_{\\text{total}} - \\left(N_{0-2\\text{ tahun}} + N_{6-10\\text{ tahun}} + N_{>10\\text{ tahun}}\\right) \\\\\n&= 500 - (150 + 60 + 75) \\\\\n&= 500 - 285 \\\\\n&= 215\\text{ orang}\n\\end{aligned}$$',
      ],
    },
  },
  {
    id: 23,
    topic: 'Geometri Ruang (Kedudukan Garis & Bidang pada Prisma)',
    type: 'true-false-table',
    storyContext:
      'Budi memiliki sangkar burung berbentuk **prisma segienam beraturan** yang disusun dari kerangka besi, lampu neon, dan batang kayu untuk bertengger seperti pada **Gambar 1**. Budi akan melengkapi aksesoris pada sangkarnya dengan ketentuan sebagai berikut:\n• Satu batang kayu tambahan harus dipasang dengan posisi **bersilangan** terhadap batang kayu awal.\n• Sebuah tangga pijakan akan dipasang dengan posisi **berpotongan** terhadap batang kayu awal.\n• Wadah pakan dan minum akan diletakkan pada **dua dinding sisi sangkar yang dipisahkan satu dinding** seperti pada **Gambar 2**.',
    questionText:
      'Berdasarkan informasi dan gambar tersebut, tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut!',
    visualId: 'p2-soal-23',
    trueFalseHeaders: ['Pernyataan', 'Benar', 'Salah'],
    statements: [
      'Tempat makan dan minum saling sejajar.',
      'Tangga berpotongan dengan batang kayu awal.',
      'Kayu yang baru ditambahkan sejajar dengan lampu neon.',
    ],
    solution: {
      answerSummary: 'Salah, Benar, Benar',
      correctTrueFalse: {
        0: 'Salah',
        1: 'Benar',
        2: 'Benar',
      },
      steps: [
        '**Uji Pernyataan 1 (Tempat makan dan minum saling sejajar):**\nWadah pakan dan wadah minum diletakkan pada dua dinding tegak prisma segienam beraturan yang **dipisahkan oleh satu dinding** (yaitu dinding pintu depan).\nPada segienam beraturan, dua sisi yang dipisahkan oleh satu sisi membentuk sudut $60^\\circ$ sehingga bidangnya **berpotongan** jika diperpanjang (dinding yang saling sejajar adalah dinding yang berhadapan / dipisahkan oleh **dua** dinding sisi) $\\implies$ **Salah**.',
        '**Uji Pernyataan 2 (Tangga berpotongan dengan batang kayu awal):**\nSesuai ketentuan kedua dan tampak pada Gambar 2, ujung atas tangga pijakan bertemu/menumpu langsung pada batang kayu awal sehingga keduanya terletak pada satu titik potong persekutuan $\\implies$ **Benar**.',
        '**Uji Pernyataan 3 (Kayu yang baru ditambahkan sejajar dengan lampu neon):**\nPada Gambar 1 dan Gambar 2, lampu neon terpasang mendatar (horizontal) melintang dari sisi kiri ke sisi kanan sangkar. Batang kayu tambahan pada Gambar 2 juga dipasang mendatar dengan arah kemiringan yang sama (sehingga sejajar dengan lampu neon sekaligus bersilangan dengan batang kayu awal yang miring) $\\implies$ **Benar**.',
      ],
    },
  },
];
