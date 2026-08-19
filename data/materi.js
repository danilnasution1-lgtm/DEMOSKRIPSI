/* ============================================================
   TAJWID AI-VISUAL
   MATERI.JS — VERSI SUPER DETAIL
   MEDIA PEMBELAJARAN TAJWID KELAS VII
   SMP IT NURUL AQLAM

   12 MATERI LENGKAP
   ------------------------------------------------------------
   Kompatibel langsung dengan APP.JS
   Struktur:
   id
   title
   icon
   category
   description
   tujuan
   summary
   penjelasan
   points
   arabicTitle
   arabicExplanation
   letters
   examples
   rule
   mnemonic
============================================================ */


const materiData = [

/* ============================================================
   MATERI 1
   PENGENALAN ILMU TAJWID
============================================================ */

{
    
    id: 1,

    title: "Nun Sukun dan Tanwin",

    category: "Nun Sukun & Tanwin",

    icon: "📖",

    description: "Mengenal hukum bacaan nun sukun dan tanwin.",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    tujuan: `
        <ul>
            <li>Siswa mampu menjelaskan pengertian ilmu Tajwid.</li>
            <li>Siswa mampu menjelaskan tujuan mempelajari ilmu Tajwid.</li>
            <li>Siswa mampu memahami pentingnya membaca Al-Qur'an dengan benar.</li>
            <li>Siswa mampu membedakan membaca secara tartil dengan membaca secara tergesa-gesa.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Ilmu Tajwid</strong> adalah ilmu yang mempelajari cara membaca Al-Qur'an dengan benar sesuai dengan makhraj, sifat huruf, panjang pendek bacaan, serta hukum-hukum bacaan yang telah ditetapkan.
        </p>

        <p>
            Secara bahasa, Tajwid berasal dari kata
            <strong>جَوَّدَ - يُجَوِّدُ - تَجْوِيدًا</strong>
            yang berarti memperbaiki atau membaguskan.
        </p>

        <p>
            Secara istilah, Tajwid adalah memberikan setiap huruf haknya dan mustahaknya ketika membaca Al-Qur'an.
        </p>
    `,

    penjelasan: `
        <h4>1. Mengapa kita harus belajar Tajwid?</h4>

        <p>
            Al-Qur'an diturunkan dengan bahasa Arab dan memiliki cara baca yang harus dijaga. Kesalahan dalam pengucapan huruf atau panjang pendek bacaan dapat menyebabkan perubahan bunyi bahkan dalam keadaan tertentu dapat memengaruhi makna.
        </p>

        <h4>2. Apa tujuan ilmu Tajwid?</h4>

        <p>
            Tujuan utama mempelajari Tajwid adalah agar seseorang mampu membaca Al-Qur'an dengan benar, jelas, tartil, dan sesuai dengan kaidah bacaan.
        </p>

        <h4>3. Apa manfaat Tajwid?</h4>

        <ul>
            <li>Membantu memperbaiki bacaan Al-Qur'an.</li>
            <li>Menjaga ketepatan pengucapan huruf.</li>
            <li>Membantu mengetahui panjang dan pendek bacaan.</li>
            <li>Membantu mengenali hukum-hukum bacaan.</li>
            <li>Membuat bacaan lebih tartil dan teratur.</li>
        </ul>

        <h4>4. Membaca Al-Qur'an dengan tartil</h4>

        <p>
            Tartil berarti membaca Al-Qur'an secara perlahan, teratur, jelas, dan memperhatikan kaidah bacaan.
        </p>

        <p>
            Allah berfirman dalam QS. Al-Muzzammil ayat 4:
        </p>

        <p dir="rtl" lang="ar">
            وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
        </p>

        <p>
            Artinya: <em>"Dan bacalah Al-Qur'an itu dengan tartil."</em>
        </p>
    `,

    points: [
        "Tajwid berarti memperbaiki dan membaguskan bacaan.",
        "Tajwid mempelajari cara membaca Al-Qur'an dengan benar.",
        "Makhraj berkaitan dengan tempat keluarnya huruf.",
        "Sifat huruf berkaitan dengan karakter suara huruf.",
        "Panjang dan pendek bacaan harus sesuai kaidah.",
        "Membaca Al-Qur'an dianjurkan dengan tartil."
    ],

    arabicTitle:
        "عِلْمُ التَّجْوِيدِ",

    arabicExplanation:
        "إِعْطَاءُ كُلِّ حَرْفٍ حَقَّهُ وَمُسْتَحَقَّهُ مِنَ الصِّفَاتِ وَالْمَدِّ وَغَيْرِ ذَلِكَ",

    letters: [],

    examples: [

        {
            arabic:
                "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",

            meaning:
                "QS. Al-Muzzammil: 4. Perintah membaca Al-Qur'an dengan tartil."
        },

        {
            arabic:
                "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",

            meaning:
                "Contoh bacaan yang perlu diperhatikan makhraj, mad, lam jalalah, dan hukum Ra."
        }
    ],

    rule:
        "Bacalah Al-Qur'an dengan tartil, yaitu perlahan, jelas, teratur, dan sesuai kaidah Tajwid.",

    mnemonic:
        "TAJWID = Tepat Hurufnya, Atur Panjangnya, Jelas Bacaannya, Wajib Dipelajari."
},


/* ============================================================
   MATERI 2
   MAKHARIJUL HURUF
============================================================ */

{
    id: 2,

    title: "Makharijul Huruf",

    icon: "2",

    category: "Makharijul Huruf",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",


    description:
        "Mempelajari tempat keluarnya huruf-huruf hijaiyah agar pengucapan Al-Qur'an menjadi tepat.",

    tujuan: `
        <ul>
            <li>Siswa memahami pengertian makhraj.</li>
            <li>Siswa mengetahui lima tempat umum keluarnya huruf.</li>
            <li>Siswa mampu membedakan beberapa huruf yang memiliki makhraj berdekatan.</li>
            <li>Siswa mampu memperbaiki pengucapan huruf hijaiyah.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Makharijul Huruf</strong> adalah tempat keluarnya huruf ketika huruf tersebut diucapkan.
        </p>

        <p>
            Secara umum, tempat keluarnya huruf dibagi menjadi lima bagian besar:
            <strong>Al-Jauf, Al-Halq, Al-Lisan, Asy-Syafatain,</strong> dan
            <strong>Al-Khaisyum.</strong>
        </p>
    `,


    points: [
        "Makharijul huruf berarti tempat keluarnya huruf.",
        "Al-Jauf = rongga mulut.",
        "Al-Halq = tenggorokan.",
        "Al-Lisan = lidah.",
        "Asy-Syafatain = dua bibir.",
        "Al-Khaisyum = rongga hidung.",
        "Ketepatan makhraj membantu menjaga ketepatan bacaan."
    ],

    arabicTitle:
        "مَخَارِجُ الْحُرُوفِ",

    arabicExplanation:
        "مَوْضِعُ خُرُوجِ الْحَرْفِ عِنْدَ النُّطْقِ بِهِ",

    letters: [

        {
            name: "Al-Jauf",
            arabic: "الْجَوْفُ",
            letters: "ا و ي"
        },

        {
            name: "Al-Halq",
            arabic: "الْحَلْقُ",
            letters: "ء ه ع ح غ خ"
        },

        {
            name: "Al-Lisan",
            arabic: "اللِّسَانُ",
            letters: "Pangkal Lidah: ق، كTengah Lidah: ج، ش، يSisi Lidah: ض، لUjung Lidah: ن، ر، ط، د، ت، ص، ز، س، ظ، ذ، ث"
        },

        {
            name: "Asy-Syafatain",
            arabic: "الشَّفَتَانِ",
            letters: "ف ب م و"
        },

        {
            name: "Al-Khaisyum",
            arabic: "الْخَيْشُومُ",
            letters: "Ghunnah"
        }
    ],

    examples: [

        {
            arabic: "قَالَ",
            meaning:
                "Huruf ق keluar dari bagian pangkal lidah."
        },

        {
            arabic: "فَمٌ",
            meaning:
                "Huruf ف berkaitan dengan bibir bawah dan gigi seri atas."
        },

        {
            arabic: "مِنْ",
            meaning:
                "Huruf م keluar dari dua bibir dan dapat disertai ghunnah."
        }
    ],

    rule:
        "Setiap huruf harus diucapkan dari makhraj yang benar agar tidak berubah menjadi huruf lain.",

    mnemonic:
        "JAWI = Jauf, Al-Halq, Wajah Lidah, dan Bibir + Hidung. Ingat lima tempat besar: Jauf, Halq, Lisan, Syafatain, Khaisyum."
},


/* ============================================================
   MATERI 3
   SIFAT HURUF
============================================================ */

{
    id: 3,

    title: "Sifat-Sifat Huruf",

    icon: "3",

    category: "Sifatul Huruf",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    description:
        "Mengenal karakter huruf hijaiyah seperti jahr, hams, syiddah, rakhawah, isti'la, istifal, dan sifat lainnya.",

    tujuan: `
        <ul>
            <li>Siswa memahami pengertian sifat huruf.</li>
            <li>Siswa memahami perbedaan makhraj dan sifat huruf.</li>
            <li>Siswa mengenal beberapa sifat huruf yang penting dalam membaca Al-Qur'an.</li>
            <li>Siswa mampu menerapkan sifat huruf dalam bacaan.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Sifat huruf</strong> adalah karakter atau keadaan yang melekat pada huruf ketika diucapkan.
        </p>

        <p>
            Jika makhraj menjelaskan <strong>dari mana huruf keluar</strong>, maka sifat huruf menjelaskan <strong>bagaimana karakter suara huruf tersebut ketika keluar</strong>.
        </p>
    `,

    penjelasan: `
        <h4>Perbedaan Makhraj dan Sifat</h4>

        <p>
            Makhraj adalah tempat keluarnya huruf, sedangkan sifat adalah karakter suara yang menyertai huruf tersebut.
        </p>

        <h4>Beberapa sifat yang memiliki lawan</h4>

        <ul>
            <li><strong>Hams ↔ Jahr</strong></li>
            <li><strong>Syiddah ↔ Rakhawah</strong></li>
            <li><strong>Isti'la ↔ Istifal</strong></li>
            <li><strong>Ithbaq ↔ Infitah</strong></li>
            <li><strong>Idzlaq ↔ Ishmat</strong></li>
        </ul>

        <h4>Hams</h4>

        <p>
            Hams adalah mengalirnya napas ketika mengucapkan huruf tertentu.
        </p>

        <p dir="rtl" lang="ar">
            فَحَثَّهُ شَخْصٌ سَكَتْ
        </p>

        <h4>Jahr</h4>

        <p>
            Jahr adalah tertahannya aliran napas ketika mengucapkan huruf-huruf jahr.
        </p>

        <h4>Isti'la</h4>

        <p>
            Isti'la adalah terangkatnya bagian belakang lidah ketika mengucapkan huruf tertentu. Huruf isti'la:
        </p>

        <p dir="rtl" lang="ar">
            خ ص ض غ ط ق ظ
        </p>

        <p>
            Huruf-huruf tersebut umumnya memiliki karakter suara tebal.
        </p>

        <h4>Syiddah</h4>

        <p>
            Syiddah menunjukkan tertahannya suara ketika mengucapkan huruf tertentu.
        </p>

        <p dir="rtl" lang="ar">
            أَجِدْ قَطٍ بَكَتْ
        </p>
    `,

    points: [
        "Makhraj = tempat keluar huruf.",
        "Sifat = karakter suara huruf.",
        "Hams berkaitan dengan aliran napas.",
        "Jahr berkaitan dengan tertahannya napas.",
        "Isti'la merupakan salah satu sifat huruf yang berhubungan dengan karakter tebal.",
        "Syiddah menunjukkan tertahannya suara."
    ],

    arabicTitle:
        "صِفَاتُ الْحُرُوفِ",

    arabicExplanation:
        "كَيْفِيَّةٌ عَارِضَةٌ لِلْحَرْفِ عِنْدَ النُّطْقِ بِهِ",

    letters: [

        {
            name: "Huruf Hams",
            arabic: "فَحَثَّهُ شَخْصٌ سَكَتْ",
            letters: "ف ح ث ه ش خ ص س ك ت"
        },

        {
            name: "Huruf Isti'la",
            arabic: "خُصَّ ضَغْطٍ قِظْ",
            letters: "خ ص ض غ ط ق ظ"
        },

        {
            name: "Huruf Syiddah",
            arabic: "أَجِدْ قَطٍ بَكَتْ",
            letters: "ء ج د ق ط ب ك ت"
        }
    ],

    examples: [

        {
            arabic: "صِرَاطَ",
            meaning:
                "Huruf ص merupakan huruf isti'la dan memiliki karakter tebal."
        },

        {
            arabic: "تَبَّتْ",
            meaning:
                "Contoh huruf dengan sifat yang perlu diperhatikan dalam pengucapan."
        }
    ],

    rule:
        "Kenali tempat keluarnya huruf dan karakter suaranya agar pengucapan setiap huruf menjadi tepat.",

    mnemonic:
        "MAKHRAJ = dari mana keluarnya. SIFAT = bagaimana bunyinya."
},


/* ============================================================
   MATERI 4
   NUN SUKUN DAN TANWIN
   SUPER DETAIL
============================================================ */

{
    id: 4,

    title: "Hukum Nun Sukun dan Tanwin",

    icon: "4",

    category: "Nun Sukun & Tanwin",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    description:
        "Mempelajari secara lengkap Izhar Halqi, Idgham Bighunnah, Idgham Bilaghunnah, Iqlab, dan Ikhfa Haqiqi.",

    tujuan: `
        <ul>
            <li>Siswa mampu mengenali Nun Sukun dan Tanwin.</li>
            <li>Siswa mampu menyebutkan lima hukum Nun Sukun dan Tanwin.</li>
            <li>Siswa mampu menghafal huruf masing-masing hukum.</li>
            <li>Siswa mampu menentukan hukum berdasarkan huruf setelah Nun Sukun atau Tanwin.</li>
            <li>Siswa mampu membaca contoh dengan benar.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Nun Sukun</strong> adalah huruf <strong>نْ</strong> yang memiliki tanda sukun.
        </p>

        <p>
            <strong>Tanwin</strong> adalah bunyi "n" pada akhir kata yang ditandai dengan:
            <strong>ـً</strong> fathatain,
            <strong>ـٍ</strong> kasratain,
            dan
            <strong>ـٌ</strong> dhammatain.
        </p>

        <p>
            Apabila Nun Sukun atau Tanwin bertemu huruf hijaiyah tertentu, maka berlaku salah satu dari <strong>lima hukum</strong>:
        </p>

        <ol>
            <li>Izhar Halqi</li>
            <li>Idgham Bighunnah</li>
            <li>Idgham Bilaghunnah</li>
            <li>Iqlab</li>
            <li>Ikhfa Haqiqi</li>
        </ol>
    `,

    penjelasan: `
        <h4>🔵 1. IZHAR HALQI — إِظْهَارٌ حَلْقِيٌّ</h4>

        <p>
            <strong>Izhar</strong> berarti jelas. <strong>Halqi</strong> berarti tenggorokan.
        </p>

        <p>
            Izhar Halqi terjadi apabila Nun Sukun atau Tanwin bertemu salah satu dari enam huruf tenggorokan:
        </p>

        <p dir="rtl" lang="ar">
            ء ه ع ح غ خ
        </p>

        <p>
            Cara membacanya adalah <strong>Nun Sukun atau bunyi tanwin dibaca jelas</strong>, tidak dilebur dan tidak disamarkan.
        </p>

        <p><strong>Contoh:</strong></p>

        <p dir="rtl" lang="ar">
            مِنْ هَادٍ
        </p>

        <p>
            نْ bertemu ه → <strong>Izhar Halqi</strong>.
        </p>

        <hr>

        <h4>🟢 2. IDGHAM BIGHUNNAH — إِدْغَامٌ بِغُنَّةٍ</h4>

        <p>
            <strong>Idgham</strong> berarti memasukkan atau meleburkan. <strong>Bighunnah</strong> berarti dengan dengung.
        </p>

        <p>
            Idgham Bighunnah terjadi apabila Nun Sukun atau Tanwin bertemu:
        </p>

        <p dir="rtl" lang="ar">
            ي ن م و
        </p>

        <p>
            Cara membacanya adalah bunyi Nun Sukun atau Tanwin <strong>dilebur ke huruf berikutnya disertai dengung</strong>.
        </p>

        <p><strong>Contoh:</strong></p>

        <p dir="rtl" lang="ar">
            مَنْ يَقُولُ
        </p>

        <p>
            نْ bertemu ي → <strong>Idgham Bighunnah</strong>.
        </p>

        <p dir="rtl" lang="ar">
            مِنْ مَالٍ
        </p>

        <p>
            نْ bertemu م → <strong>Idgham Bighunnah</strong>.
        </p>

        <hr>

        <h4>🟠 3. IDGHAM BILAGHUNNAH — إِدْغَامٌ بِلَا غُنَّةٍ</h4>

        <p>
            Idgham Bilaghunnah berarti memasukkan Nun Sukun atau Tanwin ke huruf berikutnya <strong>tanpa dengung</strong>.
        </p>

        <p>
            Hurufnya hanya dua:
        </p>

        <p dir="rtl" lang="ar">
            ل ر
        </p>

        <p><strong>Contoh:</strong></p>

        <p dir="rtl" lang="ar">
            مِنْ رَبِّهِمْ
        </p>

        <p>
            نْ bertemu ر → <strong>Idgham Bilaghunnah</strong>.
        </p>

        <p dir="rtl" lang="ar">
            مِنْ لَدُنْهُ
        </p>

        <p>
            نْ bertemu ل → <strong>Idgham Bilaghunnah</strong>.
        </p>

        <hr>

        <h4>🔴 4. IQLAB — إِقْلَابٌ</h4>

        <p>
            <strong>Inilah bagian yang harus sangat diperhatikan.</strong>
        </p>

        <p>
            Iqlab berarti <strong>mengubah</strong>.
        </p>

        <p>
            Iqlab terjadi apabila <strong>Nun Sukun atau Tanwin bertemu huruf ب (Ba)</strong>.
        </p>

        <p dir="rtl" lang="ar">
            نْ / ـً ـٍ ـٌ + ب = إِقْلَاب
        </p>

        <p>
            <strong>Huruf Iqlab hanya satu:</strong>
        </p>

        <p dir="rtl" lang="ar">
            ب
        </p>

        <p>
            Cara membaca Iqlab adalah <strong>Nun Sukun atau bunyi Tanwin diubah menjadi bunyi Mim</strong> yang samar dan disertai dengung.
        </p>

        <p><strong>Contoh 1:</strong></p>

        <p dir="rtl" lang="ar">
            مِنْ بَعْدِ
        </p>

        <p>
            Perhatikan:
        </p>

        <p>
            نْ + ب
        </p>

        <p>
            Karena Nun Sukun bertemu <strong>ب</strong>, maka hukumnya adalah:
            <strong> IQLAB.</strong>
        </p>

        <p>
            Cara membaca tidak seperti "min ba'di" dengan Nun yang jelas. Bunyi Nun berubah menjadi bunyi Mim yang samar dan berdengung sebelum Ba.
        </p>

        <p><strong>Contoh 2:</strong></p>

        <p dir="rtl" lang="ar">
            أَنْبِئْهُمْ
        </p>

        <p>
            نْ + ب → <strong>Iqlab</strong>.
        </p>

        <p><strong>Contoh 3 Tanwin:</strong></p>

        <p dir="rtl" lang="ar">
            سَمِيعٌ بَصِيرٌ
        </p>

        <p>
            Tanwin ـٌ bertemu ب → <strong>Iqlab</strong>.
        </p>

        <p>
            <strong>Ciri mudah:</strong> jika melihat Nun Sukun atau Tanwin kemudian setelahnya ada <strong>ب</strong>, langsung ingat <strong>IQLAB!</strong>
        </p>

        <hr>

        <h4>🟣 5. IKHFA HAQIQI — إِخْفَاءٌ حَقِيقِيٌّ</h4>

        <p>
            Ikhfa berarti menyamarkan. Ikhfa Haqiqi terjadi apabila Nun Sukun atau Tanwin bertemu salah satu dari 15 huruf berikut:
        </p>

        <p dir="rtl" lang="ar">
            ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك
        </p>

        <p>
            Cara membaca adalah <strong>menyamarkan bunyi Nun atau Tanwin disertai dengung</strong>, tidak terlalu jelas seperti Izhar dan tidak sepenuhnya melebur seperti Idgham.
        </p>

        <p><strong>Contoh:</strong></p>

        <p dir="rtl" lang="ar">
            مِنْ شَرٍّ
        </p>

        <p>
            نْ + ش → <strong>Ikhfa Haqiqi</strong>.
        </p>

        <p dir="rtl" lang="ar">
            أَنْتُمْ
        </p>

        <p>
            نْ + ت → <strong>Ikhfa Haqiqi</strong>.
        </p>

        <hr>

        <h4>🎯 Cara cepat menentukan hukum</h4>

        <ol>
            <li>Cari نْ atau tanwin.</li>
            <li>Lihat huruf setelahnya.</li>
            <li>Jika ء ه ع ح غ خ → Izhar.</li>
            <li>Jika ي ن م و → Idgham Bighunnah.</li>
            <li>Jika ل ر → Idgham Bilaghunnah.</li>
            <li>Jika ب → Iqlab.</li>
            <li>Jika 15 huruf lainnya → Ikhfa.</li>
        </ol>

        <h4>⭐ Rumus Super Mudah</h4>

        <p>
            <strong>JELAS → LEbur → BERUBAH → SAMAR</strong>
        </p>

        <p>
            Izhar = jelas<br>
            Idgham = lebur<br>
            Iqlab = berubah menjadi Mim<br>
            Ikhfa = samar
        </p>
    `,

    points: [
        "Nun Sukun adalah نْ.",
        "Tanwin terdiri dari ـً ـٍ ـٌ.",
        "Izhar Halqi memiliki 6 huruf: ء ه ع ح غ خ.",
        "Idgham Bighunnah memiliki 4 huruf: ي ن م و.",
        "Idgham Bilaghunnah memiliki 2 huruf: ل ر.",
        "Iqlab hanya memiliki 1 huruf: ب.",
        "Ikhfa Haqiqi memiliki 15 huruf.",
        "Iqlab berarti mengubah bunyi Nun/Tanwin menjadi bunyi Mim samar disertai dengung."
    ],

    arabicTitle:
        "أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ",

    arabicExplanation:
        "إِذَا جَاءَتِ النُّونُ السَّاكِنَةُ أَوِ التَّنْوِينُ فَلَهَا خَمْسَةُ أَحْكَامٍ",

    letters: [

        {
            name: "Izhar Halqi",
            arabic: "إِظْهَارٌ حَلْقِيٌّ",
            letters: "ء ه ع ح غ خ"
        },

        {
            name: "Idgham Bighunnah",
            arabic: "إِدْغَامٌ بِغُنَّةٍ",
            letters: "ي ن م و"
        },

        {
            name: "Idgham Bilaghunnah",
            arabic: "إِدْغَامٌ بِلَا غُنَّةٍ",
            letters: "ل ر"
        },

        {
            name: "Iqlab",
            arabic: "إِقْلَابٌ",
            letters: "ب"
        },

        {
            name: "Ikhfa Haqiqi",
            arabic: "إِخْفَاءٌ حَقِيقِيٌّ",
            letters: "ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك"
        }
    ],

    examples: [

        {
            arabic: "مِنْ هَادٍ",
            meaning:
                "Izhar Halqi: نْ bertemu ه → dibaca jelas."
        },

        {
            arabic: "مَنْ يَقُولُ",
            meaning:
                "Idgham Bighunnah: نْ bertemu ي → dilebur dengan dengung."
        },

        {
            arabic: "مِنْ رَبِّهِمْ",
            meaning:
                "Idgham Bilaghunnah: نْ bertemu ر → dilebur tanpa dengung."
        },

        {
            arabic: "مِنْ بَعْدِ",
            meaning:
                "IQLAB: نْ bertemu ب → bunyi Nun diubah menjadi Mim samar dan berdengung."
        },

        {
            arabic: "أَنْبِئْهُمْ",
            meaning:
                "IQLAB: نْ bertemu ب → Iqlab."
        },

        {
            arabic: "سَمِيعٌ بَصِيرٌ",
            meaning:
                "IQLAB: tanwin ـٌ bertemu ب → Iqlab."
        },

        {
            arabic: "مِنْ شَرٍّ",
            meaning:
                "Ikhfa Haqiqi: نْ bertemu ش → samar dan berdengung."
        },

        {
            arabic: "أَنْتُمْ",
            meaning:
                "Ikhfa Haqiqi: نْ bertemu ت → samar dan berdengung."
        }
    ],

    rule:
        "Cari Nun Sukun atau Tanwin, kemudian lihat huruf setelahnya. Huruf setelahnya menentukan hukum bacaan.",

    mnemonic:
        "IZHAR = JELAS. IDGHAM = LEBUR. IQLAB = BERUBAH ke bunyi MIM. IKHFA = SAMAR. Untuk Iqlab ingat: Nun/Tanwin + ب = IQLAB."
},


/* ============================================================
   MATERI 5
   MIM SUKUN
============================================================ */

{
    id: 5,

    title: "Hukum Mim Sukun",

    icon: "5",

    category: "Mim Sukun",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    description:
        "Mempelajari tiga hukum Mim Sukun: Ikhfa Syafawi, Idgham Mimi, dan Izhar Syafawi.",

    tujuan: `
        <ul>
            <li>Siswa mampu mengenali Mim Sukun مْ.</li>
            <li>Siswa mampu menyebutkan tiga hukum Mim Sukun.</li>
            <li>Siswa mampu menghafal huruf penyebabnya.</li>
            <li>Siswa mampu membedakan Ikhfa Syafawi, Idgham Mimi, dan Izhar Syafawi.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Mim Sukun</strong> adalah huruf مْ yang berada dalam keadaan sukun.
        </p>

        <p>
            Apabila Mim Sukun bertemu huruf setelahnya, terdapat tiga hukum bacaan:
        </p>

        <ol>
            <li>Ikhfa Syafawi</li>
            <li>Idgham Mimi</li>
            <li>Izhar Syafawi</li>
        </ol>
    `,

    penjelasan: `
        <h4>🔵 1. IKHFA SYAFAWI</h4>

        <p>
            Ikhfa Syafawi terjadi apabila <strong>Mim Sukun bertemu Ba (ب)</strong>.
        </p>

        <p dir="rtl" lang="ar">
            مْ + ب
        </p>

        <p>
            Cara membacanya adalah Mim dibaca <strong>samar disertai dengung</strong>.
        </p>

        <p dir="rtl" lang="ar">
            تَرْمِيهِمْ بِحِجَارَةٍ
        </p>

        <p>
            مْ bertemu ب → Ikhfa Syafawi.
        </p>

        <hr>

        <h4>🟢 2. IDGHAM MIMI</h4>

        <p>
            Idgham Mimi terjadi apabila <strong>Mim Sukun bertemu Mim (م)</strong>.
        </p>

        <p dir="rtl" lang="ar">
            مْ + م
        </p>

        <p>
            Cara membacanya adalah Mim pertama melebur ke Mim kedua disertai dengung.
        </p>

        <p dir="rtl" lang="ar">
            لَهُمْ مَا
        </p>

        <p>
            مْ bertemu م → Idgham Mimi.
        </p>

        <hr>

        <h4>🟠 3. IZHAR SYAFAWI</h4>

        <p>
            Izhar Syafawi terjadi apabila Mim Sukun bertemu <strong>selain ب dan م</strong>.
        </p>

        <p>
            Jadi huruf Izhar Syafawi adalah seluruh huruf hijaiyah selain Ba dan Mim.
        </p>

        <p dir="rtl" lang="ar">
            مْ + selain ب dan م
        </p>

        <p dir="rtl" lang="ar">
            عَلَيْهِمْ غَيْرِ
        </p>

        <p>
            مْ bertemu غ → Izhar Syafawi.
        </p>

        <h4>🎯 Cara cepat</h4>

        <p>
            Perhatikan Mim Sukun:
        </p>

        <ul>
            <li>Ketemu <strong>ب</strong> → Ikhfa Syafawi.</li>
            <li>Ketemu <strong>م</strong> → Idgham Mimi.</li>
            <li>Ketemu selain <strong>ب dan م</strong> → Izhar Syafawi.</li>
        </ul>
    `,

    points: [
        "Mim Sukun ditandai مْ.",
        "Ikhfa Syafawi hanya memiliki satu huruf: ب.",
        "Idgham Mimi hanya memiliki satu huruf: م.",
        "Izhar Syafawi berlaku jika Mim Sukun bertemu selain ب dan م.",
        "Ikhfa Syafawi dibaca samar dan berdengung.",
        "Idgham Mimi dibaca melebur dan berdengung.",
        "Izhar Syafawi dibaca jelas."
    ],

    arabicTitle:
        "أَحْكَامُ الْمِيمِ السَّاكِنَةِ",

    arabicExplanation:
        "لِلْمِيمِ السَّاكِنَةِ ثَلَاثَةُ أَحْكَامٍ",

    letters: [

        {
            name: "Ikhfa Syafawi",
            arabic: "إِخْفَاءٌ شَفَوِيٌّ",
            letters: "ب"
        },

        {
            name: "Idgham Mimi",
            arabic: "إِدْغَامٌ مِيمِيٌّ",
            letters: "م"
        },

        {
            name: "Izhar Syafawi",
            arabic: "إِظْهَارٌ شَفَوِيٌّ",
            letters: "Selain ب dan م"
        }
    ],

    examples: [

        {
            arabic: "تَرْمِيهِمْ بِحِجَارَةٍ",
            meaning:
                "Ikhfa Syafawi: مْ bertemu ب."
        },

        {
            arabic: "لَهُمْ مَا",
            meaning:
                "Idgham Mimi: مْ bertemu م."
        },

        {
            arabic: "عَلَيْهِمْ غَيْرِ",
            meaning:
                "Izhar Syafawi: مْ bertemu غ."
        },

        {
            arabic: "أَمْ لَمْ",
            meaning:
                "Contoh Mim Sukun bertemu ل → Izhar Syafawi."
        }
    ],

    rule:
        "Mim Sukun memiliki tiga hukum: bertemu Ba = Ikhfa Syafawi, bertemu Mim = Idgham Mimi, selain keduanya = Izhar Syafawi.",

    mnemonic:
        "MIM + BA = SAMAR. MIM + MIM = LEBUR. SELAIN KEDUANYA = JELAS."
},


/* ============================================================
   MATERI 6
   HUKUM MAD
============================================================ */

{
    id: 6,

    title: "Hukum Mad",

    icon: "6",

    category: "Mad",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    description:
        "Mempelajari pengertian Mad, huruf Mad, Mad Thabi'i, dan pengenalan beberapa Mad Far'i.",

    tujuan: `
        <ul>
            <li>Siswa memahami pengertian Mad.</li>
            <li>Siswa mampu menyebutkan huruf Mad.</li>
            <li>Siswa mampu mengenali Mad Thabi'i.</li>
            <li>Siswa memahami bahwa panjang bacaan harus sesuai kaidah.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Mad</strong> berarti memanjangkan suara.
        </p>

        <p>
            Huruf Mad ada tiga:
        </p>

        <p dir="rtl" lang="ar">
            ا و ي
        </p>

        <p>
            Mad terbagi secara umum menjadi <strong>Mad Asli/Thabi'i</strong> dan <strong>Mad Far'i</strong>.
        </p>
    `,

    penjelasan: `
        <h4>🔵 Mad Alif</h4>

        <p>
            Alif menjadi huruf Mad apabila sebelumnya terdapat fathah.
        </p>

        <p dir="rtl" lang="ar">
            قَالَ
        </p>

        <p>
            قَ + ا = dibaca panjang.
        </p>

        <h4>🟢 Mad Wawu</h4>

        <p>
            Wawu menjadi huruf Mad apabila wawu bersukun dan huruf sebelumnya berdhammah.
        </p>

        <p dir="rtl" lang="ar">
            يَقُولُ
        </p>

        <h4>🟠 Mad Ya</h4>

        <p>
            Ya menjadi huruf Mad apabila ya bersukun dan huruf sebelumnya berkasrah.
        </p>

        <p dir="rtl" lang="ar">
            قِيلَ
        </p>

        <h4>Mad Thabi'i</h4>

        <p>
            Mad Thabi'i adalah mad asli yang panjangnya <strong>dua harakat</strong> dan tidak bertemu hamzah atau sukun yang menyebabkan mad tambahan.
        </p>

        <h4>Contoh</h4>

        <p dir="rtl" lang="ar">
            قَالَ - يَقُولُ - قِيلَ
        </p>

        <p>
            Ketiganya memiliki pemanjangan Mad Thabi'i.
        </p>

        <h4>Beberapa Mad Far'i</h4>

        <p>
            Dalam pembelajaran lanjutan terdapat berbagai Mad Far'i seperti Mad Wajib Muttasil, Mad Jaiz Munfasil, Mad 'Aridh Lissukun, Mad Badal dan lainnya.
        </p>

        <p>
            Siswa kelas VII perlu terlebih dahulu memahami prinsip dasar:
            <strong>kenali huruf Mad dan perhatikan sebab yang datang setelahnya.</strong>
        </p>
    `,

    points: [
        "Mad berarti memanjangkan suara.",
        "Huruf Mad ada tiga: ا و ي.",
        "Alif Mad didahului fathah.",
        "Wawu Mad didahului dhammah.",
        "Ya Mad didahului kasrah.",
        "Mad Thabi'i dibaca dua harakat.",
        "Panjang bacaan harus konsisten sesuai kaidah."
    ],

    arabicTitle:
        "أَحْكَامُ الْمَدِّ",

    arabicExplanation:
        "إِطَالَةُ الصَّوْتِ بِحَرْفٍ مِنْ حُرُوفِ الْمَدِّ",

    letters: [

        {
            name: "Alif Mad",
            arabic: "ا",
            letters: "Fathah + ا"
        },

        {
            name: "Wawu Mad",
            arabic: "وْ",
            letters: "Dhammah + وْ"
        },

        {
            name: "Ya Mad",
            arabic: "يْ",
            letters: "Kasrah + يْ"
        }
    ],

    examples: [

        {
            arabic: "قَالَ",
            meaning:
                "Mad Thabi'i dengan Alif. Dibaca dua harakat."
        },

        {
            arabic: "يَقُولُ",
            meaning:
                "Mad Thabi'i dengan Wawu. Dibaca dua harakat."
        },

        {
            arabic: "قِيلَ",
            meaning:
                "Mad Thabi'i dengan Ya. Dibaca dua harakat."
        },

        {
            arabic: "الرَّحْمَٰنِ",
            meaning:
                "Contoh bacaan yang memiliki pemanjangan pada Alif Mad."
        }
    ],

    rule:
        "Mad Thabi'i dibaca dua harakat. Kenali huruf Mad dan perhatikan sebab yang mengikutinya.",

    mnemonic:
        "FA-WA-KA: Fathah + Alif, Dhammah + Wawu, Kasrah + Ya. Mad Thabi'i = 2 harakat."
},


/* ============================================================
   MATERI 7
   QALQALAH
============================================================ */

{
    id: 7,

    title: "Qalqalah",

    icon: "7",

    category: "Qalqalah",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    description:
        "Mempelajari pengertian Qalqalah, lima huruf Qalqalah, Qalqalah Sughra dan Qalqalah Kubra.",

    tujuan: `
        <ul>
            <li>Siswa mampu menjelaskan pengertian Qalqalah.</li>
            <li>Siswa mampu menghafal lima huruf Qalqalah.</li>
            <li>Siswa mampu membedakan Qalqalah Sughra dan Kubra.</li>
            <li>Siswa mampu membaca huruf Qalqalah dengan pantulan yang tepat.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Qalqalah</strong> adalah pantulan suara yang terjadi ketika salah satu huruf Qalqalah berada dalam keadaan sukun.
        </p>

        <p>
            Huruf Qalqalah ada lima:
        </p>

        <p dir="rtl" lang="ar">
            ق ط ب ج د
        </p>

        <p>
            Kelima huruf tersebut mudah diingat melalui kalimat:
        </p>

        <p dir="rtl" lang="ar">
            قُطْبُ جَدٍ
        </p>
    `,

    penjelasan: `
        <h4>🔵 Huruf Qalqalah</h4>

        <p dir="rtl" lang="ar">
            ق ط ب ج د
        </p>

        <p>
            Jika salah satu huruf tersebut bersukun, suara akan memiliki pantulan.
        </p>

        <h4>Qalqalah Sughra</h4>

        <p>
            Qalqalah Sughra terjadi ketika huruf Qalqalah bersukun di tengah kata dan bacaan masih berlanjut.
        </p>

        <p dir="rtl" lang="ar">
            يَجْعَلْ
        </p>

        <p>
            Huruf جْ adalah huruf Qalqalah yang bersukun di tengah bacaan.
        </p>

        <h4>Qalqalah Kubra</h4>

        <p>
            Qalqalah Kubra terjadi ketika pembaca berhenti pada kata yang huruf terakhirnya merupakan huruf Qalqalah.
        </p>

        <p dir="rtl" lang="ar">
            أَحَدْ
        </p>

        <p>
            Ketika berhenti pada kata أَحَدْ, huruf د menjadi sukun karena waqaf sehingga terjadi pantulan yang lebih kuat.
        </p>

        <h4>⚠️ Kesalahan yang harus dihindari</h4>

        <p>
            Qalqalah bukan berarti menambahkan harakat baru. Jangan membaca huruf Qalqalah seolah-olah menjadi fathah, kasrah, atau dhammah.
        </p>
    `,

    points: [
        "Qalqalah berarti pantulan suara.",
        "Huruf Qalqalah: ق ط ب ج د.",
        "Mnemonic: قُطْبُ جَدٍ.",
        "Qalqalah Sughra berada di tengah bacaan.",
        "Qalqalah Kubra terjadi ketika berhenti pada huruf Qalqalah.",
        "Jangan menambahkan harakat ketika memantulkan suara."
    ],

    arabicTitle:
        "الْقَلْقَلَةُ",

    arabicExplanation:
        "اضْطِرَابُ الْمَخْرَجِ عِنْدَ النُّطْقِ بِالْحَرْفِ السَّاكِنِ",

    letters: [

        {
            name: "Huruf Qalqalah",
            arabic: "قُطْبُ جَدٍ",
            letters: "ق ط ب ج د"
        }
    ],

    examples: [

        {
            arabic: "يَجْعَلْ",
            meaning:
                "Qalqalah Sughra pada huruf جْ."
        },

        {
            arabic: "يَدْخُلُونَ",
            meaning:
                "Qalqalah Sughra pada huruf دْ."
        },

        {
            arabic: "أَحَدْ",
            meaning:
                "Qalqalah Kubra ketika berhenti pada huruf د."
        },

        {
            arabic: "الْفَلَقْ",
            meaning:
                "Qalqalah Kubra ketika waqaf pada ق."
        }
    ],

    rule:
        "Qalqalah terjadi pada ق ط ب ج د ketika huruf tersebut bersukun. Pantulkan suara tanpa menambahkan harakat baru.",

    mnemonic:
        "قُطْبُ جَدٍ = Qaf, Tha, Ba, Jim, Dal. Kalau sukun, suaranya memantul."
},


/* ============================================================
   MATERI 8
   LAM TA'RIF
============================================================ */

{
    id: 8,

    title: "Lam Ta'rif: Syamsiyah dan Qamariyah",

    icon: "8",

    category: "Alif Lam",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    description:
        "Mempelajari perbedaan Alif Lam Syamsiyah dan Alif Lam Qamariyah secara mudah dan lengkap.",

    tujuan: `
        <ul>
            <li>Siswa memahami pengertian Lam Ta'rif.</li>
            <li>Siswa mampu menyebutkan huruf Syamsiyah.</li>
            <li>Siswa mampu menyebutkan huruf Qamariyah.</li>
            <li>Siswa mampu membedakan Lam Syamsiyah dan Lam Qamariyah dalam contoh.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Lam Ta'rif</strong> adalah Alif Lam <strong>ال</strong> yang berada di awal kata untuk menunjukkan suatu kata tertentu atau ma'rifat.
        </p>

        <p>
            Lam Ta'rif terbagi menjadi:
        </p>

        <ol>
            <li>Alif Lam Syamsiyah</li>
            <li>Alif Lam Qamariyah</li>
        </ol>
    `,

    penjelasan: `
        <h4>☀️ Alif Lam Syamsiyah</h4>

        <p>
            Alif Lam Syamsiyah terjadi apabila <strong>ال</strong> bertemu salah satu dari 14 huruf Syamsiyah.
        </p>

        <p dir="rtl" lang="ar">
            ت ث د ذ ر ز س ش ص ض ط ظ ل ن
        </p>

        <p>
            Lam tidak dibaca jelas karena <strong>melebur ke huruf setelahnya</strong>.
        </p>

        <p>
            Biasanya huruf setelah Lam diberi tanda tasydid.
        </p>

        <p dir="rtl" lang="ar">
            الشَّمْسُ
        </p>

        <p>
            Tidak dibaca "al-syamsu" dengan Lam jelas, tetapi Lam melebur kepada ش.
        </p>

        <h4>🌙 Alif Lam Qamariyah</h4>

        <p>
            Alif Lam Qamariyah terjadi apabila <strong>ال</strong> bertemu salah satu dari 14 huruf Qamariyah:
        </p>

        <p dir="rtl" lang="ar">
            ا ب ج ح خ ع غ ف ق ك م ه و ي
        </p>

        <p>
            Lam dibaca <strong>jelas</strong>.
        </p>

        <p dir="rtl" lang="ar">
            الْقَمَرُ
        </p>

        <p>
            Lam pada الْقَمَرُ dibaca jelas.
        </p>

        <h4>🎯 Cara cepat membedakan</h4>

        <p>
            Jika setelah <strong>ال</strong> terdapat huruf Syamsiyah → Lam melebur.
        </p>

        <p>
            Jika setelah <strong>ال</strong> terdapat huruf Qamariyah → Lam dibaca jelas.
        </p>
    `,

    points: [
        "Lam Ta'rif berupa ال.",
        "Syamsiyah memiliki 14 huruf.",
        "Qamariyah memiliki 14 huruf.",
        "Lam Syamsiyah tidak dibaca jelas.",
        "Lam Qamariyah dibaca jelas.",
        "Tasydid pada huruf setelah Lam sering menjadi tanda Lam Syamsiyah."
    ],

    arabicTitle:
        "لَامُ التَّعْرِيفِ",

    arabicExplanation:
        "الْ لِلتَّعْرِيفِ تُدْغَمُ فِي الْحُرُوفِ الشَّمْسِيَّةِ وَتُظْهَرُ مَعَ الْحُرُوفِ الْقَمَرِيَّةِ",

    letters: [

        {
            name: "Huruf Syamsiyah",
            arabic: "حُرُوفٌ شَمْسِيَّةٌ",
            letters: "ت ث د ذ ر ز س ش ص ض ط ظ ل ن"
        },

        {
            name: "Huruf Qamariyah",
            arabic: "حُرُوفٌ قَمَرِيَّةٌ",
            letters: "ا ب ج ح خ ع غ ف ق ك م ه و ي"
        }
    ],

    examples: [

        {
            arabic: "الشَّمْسُ",
            meaning:
                "Lam Syamsiyah: ال bertemu ش. Lam melebur."
        },

        {
            arabic: "النَّاسُ",
            meaning:
                "Lam Syamsiyah: ال bertemu ن. Lam melebur."
        },

        {
            arabic: "الرَّحْمَٰنِ",
            meaning:
                "Lam Syamsiyah: ال bertemu ر."
        },

        {
            arabic: "الْقَمَرُ",
            meaning:
                "Lam Qamariyah: ال bertemu ق. Lam dibaca jelas."
        },

        {
            arabic: "الْحَمْدُ",
            meaning:
                "Lam Qamariyah: ال bertemu ح. Lam dibaca jelas."
        }
    ],

    rule:
        "Syamsiyah = Lam melebur. Qamariyah = Lam dibaca jelas.",

    mnemonic:
        "SYAMS = matahari → Lam 'hilang' melebur. QAMAR = bulan → Lam muncul jelas."
},


/* ============================================================
   MATERI 9
   LAM JALALAH
============================================================ */

{
    id: 9,

    title: "Lam Jalalah",

    icon: "9",

    category: "Lam Jalalah",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    description:
        "Mempelajari hukum membaca Lam pada lafaz Allah dengan tafkhim atau tarqiq.",

    tujuan: `
        <ul>
            <li>Siswa memahami pengertian Lam Jalalah.</li>
            <li>Siswa mampu menentukan kapan Lam lafaz Allah dibaca tebal.</li>
            <li>Siswa mampu menentukan kapan Lam lafaz Allah dibaca tipis.</li>
            <li>Siswa mampu membaca contoh dengan benar.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Lam Jalalah</strong> adalah hukum membaca huruf Lam pada lafaz:
        </p>

        <p dir="rtl" lang="ar">
            اللَّهُ
        </p>

        <p>
            Lam pada lafaz Allah dapat dibaca <strong>tebal (tafkhim)</strong> atau <strong>tipis (tarqiq)</strong>.
        </p>
    `,

    penjelasan: `
        <h4>🟢 Lam Jalalah Tafkhim</h4>

        <p>
            Lam lafaz Allah dibaca <strong>tebal</strong> apabila sebelumnya terdapat:
        </p>

        <ul>
            <li>Fathah</li>
            <li>Dhammah</li>
        </ul>

        <p><strong>Contoh:</strong></p>

        <p dir="rtl" lang="ar">
            قَالَ اللَّهُ
        </p>

        <p>
            Sebelum lafaz Allah terdapat fathah pada قَالَ → Lam dibaca tebal.
        </p>

        <p dir="rtl" lang="ar">
            عَبْدُ اللَّهِ
        </p>

        <p>
            Sebelum lafaz Allah terdapat dhammah → Lam dibaca tebal.
        </p>

        <h4>🔵 Lam Jalalah Tarqiq</h4>

        <p>
            Lam lafaz Allah dibaca <strong>tipis</strong> apabila sebelumnya terdapat kasrah.
        </p>

        <p dir="rtl" lang="ar">
            بِسْمِ اللَّهِ
        </p>

        <p>
            Sebelum lafaz Allah terdapat kasrah pada مِ → Lam dibaca tipis.
        </p>

        <h4>🎯 Rumus</h4>

        <p>
            Fathah → TEBAL
        </p>

        <p>
            Dhammah → TEBAL
        </p>

        <p>
            Kasrah → TIPIS
        </p>
    `,

    points: [
        "Lam Jalalah adalah Lam pada lafaz Allah.",
        "Setelah fathah → tebal.",
        "Setelah dhammah → tebal.",
        "Setelah kasrah → tipis.",
        "Tafkhim berarti tebal.",
        "Tarqiq berarti tipis."
    ],

    arabicTitle:
        "لَامُ لَفْظِ الْجَلَالَةِ",

    arabicExplanation:
        "تُفَخَّمُ لَامُ لَفْظِ الْجَلَالَةِ بَعْدَ الْفَتْحِ أَوِ الضَّمِّ وَتُرَقَّقُ بَعْدَ الْكَسْرِ",

    letters: [

        {
            name: "Tafkhim",
            arabic: "تَفْخِيمٌ",
            letters: "Sebelumnya Fathah / Dhammah"
        },

        {
            name: "Tarqiq",
            arabic: "تَرْقِيقٌ",
            letters: "Sebelumnya Kasrah"
        }
    ],

    examples: [

        {
            arabic: "قَالَ اللَّهُ",
            meaning:
                "Lam Jalalah dibaca tebal karena sebelumnya fathah."
        },

        {
            arabic: "عَبْدُ اللَّهِ",
            meaning:
                "Lam Jalalah dibaca tebal karena sebelumnya dhammah."
        },

        {
            arabic: "بِسْمِ اللَّهِ",
            meaning:
                "Lam Jalalah dibaca tipis karena sebelumnya kasrah."
        }
    ],

    rule:
        "Perhatikan harakat sebelum lafaz Allah: fathah dan dhammah menyebabkan tafkhim, sedangkan kasrah menyebabkan tarqiq.",

    mnemonic:
        "FA-DA = TEBAL. KA = TIPIS. Fathah + Dhammah = Tafkhim, Kasrah = Tarqiq."
},


/* ============================================================
   MATERI 10
   TAFKHIM TARQIQ RA
============================================================ */

{
    id: 10,

    title: "Tafkhim dan Tarqiq Ra",

    icon: "10",

    category: "Ra",

    image: "assets/images/Nun-Sukun-Tanwin.jpg",

    video: "assets/videos/Nun-Sukun-Tanwin.mp4",

    description:
        "Mempelajari cara membaca huruf Ra dengan tebal atau tipis berdasarkan harakat dan keadaan huruf.",

    tujuan: `
        <ul>
            <li>Siswa memahami arti Tafkhim dan Tarqiq.</li>
            <li>Siswa memahami keadaan dasar Ra yang dibaca tebal.</li>
            <li>Siswa memahami keadaan dasar Ra yang dibaca tipis.</li>
            <li>Siswa mampu mengenali contoh Ra dalam Al-Qur'an.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Tafkhim</strong> berarti menebalkan suara, sedangkan
            <strong>Tarqiq</strong> berarti menipiskan suara.
        </p>

        <p>
            Huruf <strong>Ra (ر)</strong> dapat dibaca tebal atau tipis tergantung keadaan harakatnya dan beberapa kondisi tertentu.
        </p>
    `,

    penjelasan: `
        <h4>🟢 Ra Dibaca Tebal</h4>

        <p>
            Secara dasar, Ra dibaca tebal apabila:
        </p>

        <ul>
            <li>Ra berharakat fathah.</li>
            <li>Ra berharakat dhammah.</li>
            <li>Ra sukun dan huruf sebelumnya berharakat fathah.</li>
            <li>Ra sukun dan huruf sebelumnya berharakat dhammah.</li>
        </ul>

        <p><strong>Contoh:</strong></p>

        <p dir="rtl" lang="ar">
            رَبِّي
        </p>

        <p>
            Ra berfathah → tebal.
        </p>

        <p dir="rtl" lang="ar">
            رُسُلٌ
        </p>

        <p>
            Ra berdhammah → tebal.
        </p>

        <h4>🔵 Ra Dibaca Tipis</h4>

        <p>
            Secara dasar, Ra dibaca tipis apabila:
        </p>

        <ul>
            <li>Ra berharakat kasrah.</li>
            <li>Ra sukun dan huruf sebelumnya berkasrah.</li>
        </ul>

        <p dir="rtl" lang="ar">
            رِزْقًا
        </p>

        <p>
            Ra berkasrah → tipis.
        </p>

        <p dir="rtl" lang="ar">
            فِرْعَوْنَ
        </p>

        <p>
            Ra sukun didahului kasrah → tipis.
        </p>

        <h4>⚠️ Catatan</h4>

        <p>
            Hukum Ra memiliki beberapa rincian lanjutan, khususnya pada Ra Sukun dan kondisi kasrah sebelum Ra. Karena itu, untuk tingkat lanjutan perlu mempelajari pengecualian secara khusus.
        </p>

        <h4>🎯 Rumus Dasar</h4>

        <p>
            <strong>Ra Fathah = Tebal</strong><br>
            <strong>Ra Dhammah = Tebal</strong><br>
            <strong>Ra Kasrah = Tipis</strong>
        </p>
    `,

    points: [
        "Tafkhim = tebal.",
        "Tarqiq = tipis.",
        "Ra fathah umumnya tebal.",
        "Ra dhammah umumnya tebal.",
        "Ra kasrah umumnya tipis.",
        "Ra sukun mengikuti keadaan huruf sebelumnya dalam kaidah dasar."
    ],

    arabicTitle:
        "تَفْخِيمُ الرَّاءِ وَتَرْقِيقُهَا",

    arabicExplanation:
        "التَّفْخِيمُ هُوَ تَسْمِينُ صَوْتِ الْحَرْفِ وَالتَّرْقِيقُ هُوَ تَنْحِيفُهُ",

    letters: [

        {
            name: "Ra Tebal",
            arabic: "رَ - رُ",
            letters: "Fathah / Dhammah"
        },

        {
            name: "Ra Tipis",
            arabic: "رِ",
            letters: "Kasrah"
        }
    ],

    examples: [

        {
            arabic: "رَبِّي",
            meaning:
                "Ra berfathah → Tafkhim."
        },

        {
            arabic: "رُسُلٌ",
            meaning:
                "Ra berdhammah → Tafkhim."
        },

        {
            arabic: "رِزْقًا",
            meaning:
                "Ra berkasrah → Tarqiq."
        },

        {
            arabic: "فِرْعَوْنَ",
            meaning:
                "Ra sukun didahului kasrah → Tarqiq dalam kaidah dasar."
        }
    ],

    rule:
        "Perhatikan harakat Ra. Fathah dan dhammah umumnya menyebabkan tafkhim, sedangkan kasrah menyebabkan tarqiq.",

    mnemonic:
        "RA FAT-DO = TEBAL. RA KAS = TIPIS. Fathah/Dhammah tebal, Kasrah tipis."
},


/* ============================================================
   MATERI 11
   WAQAF DAN IBTIDA
============================================================ */

{
    id: 11,

    title: "Waqaf dan Ibtida",

    icon: "⏸12",

    category: "Waqaf",

    image: "assets/gambar/Makharijul-huruf.jpg",

    video: "https://www.youtube.com/embed/VIDEO_ID",

    description:
        "Mempelajari cara berhenti dan memulai bacaan Al-Qur'an dengan memperhatikan tanda waqaf dan makna ayat.",

    tujuan: `
        <ul>
            <li>Siswa memahami pengertian Waqaf.</li>
            <li>Siswa memahami pengertian Ibtida.</li>
            <li>Siswa mengenal beberapa tanda waqaf dalam mushaf.</li>
            <li>Siswa memahami pentingnya berhenti pada tempat yang tepat.</li>
        </ul>
    `,

    summary: `
        <p>
            <strong>Waqaf</strong> adalah menghentikan bacaan pada suatu tempat dengan tujuan tertentu.
        </p>

        <p>
            <strong>Ibtida</strong> adalah memulai kembali bacaan setelah berhenti.
        </p>

        <p>
            Waqaf tidak hanya berkaitan dengan mengambil napas, tetapi juga harus memperhatikan kesempurnaan dan kesinambungan makna ayat.
        </p>
    `,

    penjelasan: `
        <h4>1. Waqaf Lazim — م</h4>

        <p>
            Tanda <strong>م</strong> menunjukkan waqaf lazim. Pada umumnya pembaca dianjurkan berhenti karena jika diteruskan dapat memengaruhi hubungan makna.
        </p>

        <h4>2. Waqaf Jaiz — ج</h4>

        <p>
            Tanda <strong>ج</strong> menunjukkan tempat yang diperbolehkan berhenti maupun meneruskan bacaan.
        </p>

        <h4>3. Laa — لا</h4>

        <p>
            Tanda <strong>لا</strong> pada beberapa mushaf menunjukkan larangan atau tidak dianjurkan berhenti pada tempat tersebut karena dapat mengganggu makna.
        </p>

        <h4>4. Waqaf Qaf — قلى</h4>

        <p>
            Tanda <strong>قلى</strong> menunjukkan berhenti lebih utama.
        </p>

        <h4>5. Washal Awla — صلى</h4>

        <p>
            Tanda <strong>صلى</strong> menunjukkan meneruskan bacaan lebih utama.
        </p>

        <h4>🎯 Prinsip utama</h4>

        <p>
            Jangan berhenti sembarangan hanya karena ingin mengambil napas. Perhatikan tanda waqaf dan makna ayat.
        </p>

        <h4>Ibtida</h4>

        <p>
            Setelah berhenti, pembaca harus memulai dari tempat yang baik sehingga makna ayat tetap jelas dan tidak terputus secara tidak tepat.
        </p>
    `,

    points: [
        "Waqaf = berhenti.",
        "Ibtida = memulai bacaan.",
        "م = Waqaf Lazim.",
        "ج = Waqaf Jaiz.",
        "لا = tidak dianjurkan berhenti pada tempat tertentu.",
        "قلى = berhenti lebih utama.",
        "صلى = meneruskan lebih utama.",
        "Perhatikan makna ayat ketika berhenti dan memulai."
    ],

    arabicTitle:
        "الْوَقْفُ وَالِابْتِدَاءُ",

    arabicExplanation:
        "الْوَقْفُ هُوَ قَطْعُ الصَّوْتِ عَلَى الْكَلِمَةِ زَمَنًا يَتَنَفَّسُ فِيهِ الْقَارِئُ",

    letters: [

        {
            name: "Waqaf Lazim",
            arabic: "م",
            letters: "Berhenti"
        },

        {
            name: "Waqaf Jaiz",
            arabic: "ج",
            letters: "Boleh berhenti / lanjut"
        },

        {
            name: "La Nahiyah",
            arabic: "لا",
            letters: "Tidak dianjurkan berhenti"
        },

        {
            name: "Qif",
            arabic: "قلى",
            letters: "Berhenti lebih utama"
        },

        {
            name: "Washal",
            arabic: "صلى",
            letters: "Lanjut lebih utama"
        }
    ],

    examples: [

        {
            arabic: "م",
            meaning:
                "Contoh simbol Waqaf Lazim."
        },

        {
            arabic: "ج",
            meaning:
                "Contoh simbol Waqaf Jaiz."
        },

        {
            arabic: "لَا",
            meaning:
                "Contoh tanda yang menunjukkan tidak dianjurkan berhenti."
        }
    ],

    rule:
        "Berhenti dan memulai bacaan harus memperhatikan tanda waqaf serta kesinambungan makna ayat.",

    mnemonic:
        "WAQAF = BERHENTI. IBTIDA = MULAI. Jangan hanya cari napas, cari tempat yang tepat."
},


/* ============================================================
   MATERI 12
   PENERAPAN TAJWID
============================================================ */

{
    id: 12,

    title: "Penerapan Tajwid dalam Bacaan",

    icon: "📖",

    category: "Praktik Tajwid",

    image: "assets/gambar/Makharijul-huruf.jpg",

    video: "https://www.youtube.com/embed/VIDEO_ID",

    description:
        "Menggabungkan berbagai hukum Tajwid dalam praktik membaca Al-Qur'an secara tartil.",

    tujuan: `
        <ul>
            <li>Siswa mampu mencari hukum Tajwid dalam ayat.</li>
            <li>Siswa mampu menjelaskan alasan suatu bacaan memiliki hukum tertentu.</li>
            <li>Siswa mampu membaca contoh dengan tartil.</li>
            <li>Siswa mampu mengevaluasi kesalahan bacaan.</li>
            <li>Siswa mampu menerapkan Tajwid dalam bacaan sehari-hari.</li>
        </ul>
    `,

    summary: `
        <p>
            Belajar Tajwid tidak berhenti pada hafalan teori. Tujuan akhirnya adalah <strong>mampu menerapkan hukum Tajwid ketika membaca Al-Qur'an.</strong>
        </p>

        <p>
            Untuk menerapkan Tajwid, siswa perlu membiasakan diri melakukan tiga langkah:
        </p>

        <ol>
            <li><strong>Identifikasi</strong> hukum bacaan.</li>
            <li><strong>Baca</strong> sesuai kaidah.</li>
            <li><strong>Evaluasi</strong> kembali bacaan.</li>
        </ol>
    `,

    penjelasan: `
        <h4>🔎 Langkah 1 — Cari tanda atau huruf pemicu</h4>

        <p>
            Ketika membaca ayat, jangan hanya membaca secara cepat. Perhatikan apakah terdapat Nun Sukun, Tanwin, Mim Sukun, Mad, Qalqalah, Lam, Ra, dan hukum lainnya.
        </p>

        <h4>🔎 Langkah 2 — Tentukan hukumnya</h4>

        <p>
            Contoh:
        </p>

        <p dir="rtl" lang="ar">
            مِنْ بَعْدِ
        </p>

        <p>
            Ada Nun Sukun <strong>نْ</strong> dan setelahnya huruf <strong>ب</strong>.
        </p>

        <p>
            Maka:
        </p>

        <p>
            <strong>نْ + ب = IQLAB.</strong>
        </p>

        <h4>🔎 Contoh kedua</h4>

        <p dir="rtl" lang="ar">
            مِنْ شَرٍّ
        </p>

        <p>
            نْ bertemu ش.
        </p>

        <p>
            Huruf ش termasuk huruf Ikhfa → <strong>Ikhfa Haqiqi.</strong>
        </p>

        <h4>🔎 Contoh ketiga</h4>

        <p dir="rtl" lang="ar">
            تَرْمِيهِمْ بِحِجَارَةٍ
        </p>

        <p>
            Mim Sukun bertemu Ba:
        </p>

        <p>
            <strong>مْ + ب = Ikhfa Syafawi.</strong>
        </p>

        <h4>🔎 Contoh keempat</h4>

        <p dir="rtl" lang="ar">
            لَهُمْ مَا
        </p>

        <p>
            Mim Sukun bertemu Mim:
        </p>

        <p>
            <strong>مْ + م = Idgham Mimi.</strong>
        </p>

        <h4>🔎 Contoh kelima</h4>

        <p dir="rtl" lang="ar">
            الشَّمْسُ
        </p>

        <p>
            ال bertemu ش yang merupakan huruf Syamsiyah.
        </p>

        <p>
            Maka Lam tidak dibaca jelas → <strong>Lam Syamsiyah.</strong>
        </p>

        <h4>🔎 Contoh keenam</h4>

        <p dir="rtl" lang="ar">
            الْقَمَرُ
        </p>

        <p>
            ال bertemu ق yang merupakan huruf Qamariyah.
        </p>

        <p>
            Lam dibaca jelas → <strong>Lam Qamariyah.</strong>
        </p>

        <h4>🎯 Metode 5 langkah membaca Tajwid</h4>

        <ol>
            <li><strong>Lihat</strong> huruf dan tanda bacaan.</li>
            <li><strong>Kenali</strong> hukum Tajwid.</li>
            <li><strong>Ingat</strong> cara membacanya.</li>
            <li><strong>Praktikkan</strong> dengan tartil.</li>
            <li><strong>Evaluasi</strong> kesalahan.</li>
        </ol>

        <h4>⭐ Contoh analisis sederhana</h4>

        <p dir="rtl" lang="ar">
            مِنْ بَعْدِ رَبِّهِمْ
        </p>

        <ul>
            <li>نْ + ب = Iqlab.</li>
            <li>رَ = Ra Tafkhim.</li>
            <li>مْ jika bertemu huruf berikutnya harus diperiksa lagi sesuai hukum Mim Sukun.</li>
        </ul>

        <h4>🎓 Tujuan akhir</h4>

        <p>
            Siswa bukan hanya mampu menjawab "apa hukumnya?", tetapi juga mampu menjawab:
        </p>

        <blockquote>
            Apa huruf penyebabnya? Mengapa hukumnya demikian? Bagaimana cara membacanya?
        </blockquote>
    `,

    points: [
        "Tajwid harus dipahami sekaligus dipraktikkan.",
        "Cari huruf atau tanda yang menjadi pemicu hukum.",
        "Tentukan hukum berdasarkan huruf setelahnya.",
        "Jelaskan alasan mengapa bacaan tersebut memiliki hukum tertentu.",
        "Praktikkan dengan tartil.",
        "Evaluasi bacaan setelah membaca.",
        "Untuk Iqlab: Nun Sukun/Tanwin bertemu Ba.",
        "Untuk Ikhfa Syafawi: Mim Sukun bertemu Ba.",
        "Untuk Idgham Mimi: Mim Sukun bertemu Mim.",
        "Untuk Lam Syamsiyah: ال bertemu huruf Syamsiyah."
    ],

    arabicTitle:
        "تَطْبِيقُ أَحْكَامِ التَّجْوِيدِ",

    arabicExplanation:
        "تَطْبِيقُ قَوَاعِدِ التَّجْوِيدِ فِي قِرَاءَةِ الْقُرْآنِ الْكَرِيمِ",

    letters: [

        {
            name: "Identifikasi",
            arabic: "تَعْرِيف",
            letters: "Cari hukum"
        },

        {
            name: "Praktik",
            arabic: "تَطْبِيق",
            letters: "Baca sesuai kaidah"
        },

        {
            name: "Evaluasi",
            arabic: "تَقْوِيم",
            letters: "Perbaiki kesalahan"
        }
    ],

    examples: [

        {
            arabic: "مِنْ بَعْدِ",
            meaning:
                "نْ + ب = Iqlab. Bunyi Nun berubah menjadi Mim samar disertai dengung."
        },

        {
            arabic: "مِنْ شَرٍّ",
            meaning:
                "نْ + ش = Ikhfa Haqiqi. Dibaca samar dan berdengung."
        },

        {
            arabic: "تَرْمِيهِمْ بِحِجَارَةٍ",
            meaning:
                "مْ + ب = Ikhfa Syafawi."
        },

        {
            arabic: "لَهُمْ مَا",
            meaning:
                "مْ + م = Idgham Mimi."
        },

        {
            arabic: "الشَّمْسُ",
            meaning:
                "Lam Syamsiyah karena ال bertemu ش."
        },

        {
            arabic: "الْقَمَرُ",
            meaning:
                "Lam Qamariyah karena ال bertemu ق."
        },

        {
            arabic: "قَالَ اللَّهُ",
            meaning:
                "Lam Jalalah dibaca tebal karena sebelumnya fathah."
        },

        {
            arabic: "بِسْمِ اللَّهِ",
            meaning:
                "Lam Jalalah dibaca tipis karena sebelumnya kasrah."
        }
    ],

    rule:
        "Pahami hukum, cari huruf penyebab, tentukan cara membaca, praktikkan dengan tartil, lalu evaluasi.",

    mnemonic:
        "LIHAT → KENALI → INGAT → BACA → EVALUASI. Tajwid bukan hanya dihafal, tetapi dipraktikkan."
}

];


/* ============================================================
   EXPORT / GLOBAL
   ------------------------------------------------------------
   Tidak wajib menggunakan export karena APP.JS mencari
   variabel global bernama materiData.
============================================================ */

console.log(
    "materi.js berhasil dimuat:",
    materiData.length,
    "materi"
);
