/* ============================================================
   TAJWID AI-VISUAL
   MEDIA PEMBELAJARAN TAJWID KELAS VII
   SMP IT NURUL AQLAM

   APP.JS — APPLICATION ENGINE
   ------------------------------------------------------------
   DATA MATERI DISIMPAN DI:
   materi.js

   APP.JS BERTUGAS SEBAGAI:
   1. Application State
   2. Navigation
   3. Render Materi
   4. Detail Materi
   5. Submateri
   6. Contoh Tajwid
   7. Identifikasi Hukum
   8. Progress Belajar
   9. Dark Mode
   10. Mnemonic Singing
   11. Local Storage
   12. Search Materi
   13. Toast Notification
   14. Responsive Navigation
   15. Keyboard Support
   16. Gambar Materi
   17. Video Materi
============================================================ */


/* ============================================================
   1. KONFIGURASI
============================================================ */

const APP_CONFIG = {

    appName: "Tajwid AI-Visual",

    school: "SMP IT Nurul Aqlam",

    year: "2026",

    sunoUrl: "https://suno.com/",

    storageKey: "tajwidAIState",

    lyricsKey: "lastMnemonicLyrics",

    promptKey: "lastMnemonicPrompt"

};


/* ============================================================
   2. STATE APLIKASI
============================================================ */

const AppState = {

    currentPage: "dashboard",

    currentMateri: null,

    completedMateri: [],

    darkMode: false,

    searchKeyword: "",

    currentCategory: "all"

};


/* ============================================================
   3. DOM HELPER
============================================================ */

function $(selector) {

    return document.querySelector(selector);

}


function $$(selector) {

    return document.querySelectorAll(selector);

}


/* ============================================================
   4. ESCAPE HTML
============================================================ */

function escapeHtml(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/* ============================================================
   5. SANITASI RICH TEXT
============================================================ */

function sanitizeRichText(html) {

    if (!html) {

        return "";

    }

    const template =
        document.createElement("template");

    template.innerHTML = html;

    const forbidden =
        template.content.querySelectorAll(
            "script, style, iframe, object, embed, form"
        );

    forbidden.forEach(element => {

        element.remove();

    });

    template.content
        .querySelectorAll("*")
        .forEach(element => {

            [...element.attributes]
                .forEach(attribute => {

                    const name =
                        attribute.name.toLowerCase();

                    const value =
                        attribute.value.toLowerCase();

                    if (
                        name.startsWith("on") ||
                        value.includes("javascript:")
                    ) {

                        element.removeAttribute(
                            attribute.name
                        );

                    }

                });

        });

    return template.innerHTML;

}


/* ============================================================
   6. STRIP HTML
============================================================ */

function stripHtml(html) {

    if (!html) {

        return "";

    }

    const temp =
        document.createElement("div");

    temp.innerHTML = html;

    return temp.textContent
        .replace(/\s+/g, " ")
        .trim();

}


/* ============================================================
   7. AMBIL DATA MATERI DARI MATERI.JS
============================================================ */

function getMateriData() {

    try {

        if (
            typeof materiData !== "undefined" &&
            Array.isArray(materiData)
        ) {

            return materiData;

        }

    }

    catch (error) {

        console.error(
            "Gagal membaca materiData:",
            error
        );

    }

    console.error(
        "materiData tidak ditemukan. Pastikan materi.js dimuat sebelum app.js."
    );

    return [];

}


/* ============================================================
   8. NORMALISASI MATERI
============================================================ */

function normalizeMateri(item, index) {

    return {

        id:
            item.id ??
            index + 1,

        title:
            item.title ??
            item.judul ??
            `Materi Tajwid ${index + 1}`,

        category:
            item.category ??
            item.kategori ??
            "Tajwid",

        icon:
            item.icon ??
            "📖",

        description:
            item.description ??
            item.deskripsi ??
            "",

        summary:
            item.summary ??
            item.ringkasan ??
            item.description ??
            "",

        tujuan:
            item.tujuan ??
            item.learningObjective ??
            "",

        penjelasan:
            item.penjelasan ??
            "",


        /* ====================================================
           MEDIA MATERI

           Mendukung:
           image
           Image
           gambar
           imageUrl

           video
           Video
           videoUrl
        ==================================================== */

        image:
            item.image ??
            item.Image ??
            item.gambar ??
            item.imageUrl ??
            "",

        video:
            item.video ??
            item.Video ??
            item.videoUrl ??
            "",


        points:
            Array.isArray(item.points)
                ? item.points
                : Array.isArray(item.poin)
                    ? item.poin
                    : [],

        arabicTitle:
            item.arabicTitle ??
            item.judulArab ??
            "",

        arabicExplanation:
            item.arabicExplanation ??
            item.penjelasanArab ??
            "",

        letters:
            Array.isArray(item.letters)
                ? item.letters
                : [],

        examples:
            Array.isArray(item.examples)
                ? item.examples
                : [],

        subMateri:
            Array.isArray(item.subMateri)
                ? item.subMateri
                : Array.isArray(item.submateri)
                    ? item.submateri
                    : [],

        rules:
            Array.isArray(item.rules)
                ? item.rules
                : [],

        mistakes:
            Array.isArray(item.mistakes)
                ? item.mistakes
                : Array.isArray(item.kesalahan)
                    ? item.kesalahan
                    : [],

        tips:
            Array.isArray(item.tips)
                ? item.tips
                : [],

        comparison:
            Array.isArray(item.comparison)
                ? item.comparison
                : [],

        rule:
            item.rule ??
            item.kaidah ??
            "",

        mnemonic:
            item.mnemonic ??
            "",

        lyric:
            item.lyric ??
            item.lyrics ??
            "",

        songPrompt:
            item.songPrompt ??
            item.prompt ??
            ""

    };

}


/* ============================================================
   9. DATA MATERI NORMALIZED
============================================================ */

function getNormalizedMateri() {

    return getMateriData()
        .map(normalizeMateri);

}


/* ============================================================
   10. LOCAL STORAGE — LOAD
============================================================ */

function loadAppState() {

    try {

        const saved =
            localStorage.getItem(
                APP_CONFIG.storageKey
            );

        if (!saved) {

            return;

        }

        const parsed =
            JSON.parse(saved);

        if (
            Array.isArray(
                parsed.completedMateri
            )
        ) {

            AppState.completedMateri =
                parsed.completedMateri;

        }

        if (
            typeof parsed.darkMode ===
            "boolean"
        ) {

            AppState.darkMode =
                parsed.darkMode;

        }

    }

    catch (error) {

        console.warn(
            "State tidak dapat dimuat:",
            error
        );

    }

}


/* ============================================================
   11. LOCAL STORAGE — SAVE
============================================================ */

function saveAppState() {

    try {

        localStorage.setItem(

            APP_CONFIG.storageKey,

            JSON.stringify({

                completedMateri:
                    AppState.completedMateri,

                darkMode:
                    AppState.darkMode

            })

        );

    }

    catch (error) {

        console.warn(
            "State tidak dapat disimpan:",
            error
        );

    }

}


/* ============================================================
   12. CHECK MATERI SELESAI
============================================================ */

function isMateriCompleted(id) {

    return AppState.completedMateri
        .map(String)
        .includes(String(id));

}


/* ============================================================
   13. HITUNG PROGRESS
============================================================ */

function calculateProgress() {

    const data =
        getNormalizedMateri();

    if (!data.length) {

        return 0;

    }

    const completed =
        data.filter(item =>
            isMateriCompleted(item.id)
        ).length;

    return Math.round(
        (completed / data.length) * 100
    );

}


/* ============================================================
   14. NAVIGASI
============================================================ */

function navigateTo(pageId) {

    if (!pageId) {

        return;

    }

    const target =
        document.getElementById(pageId);

    if (!target) {

        console.warn(
            `Halaman "${pageId}" tidak ditemukan.`
        );

        return;

    }

    $$(".page").forEach(page => {

        page.classList.remove(
            "active"
        );

    });

    target.classList.add(
        "active"
    );

    $$(".nav-item").forEach(item => {

        item.classList.toggle(

            "active",

            item.dataset.page === pageId

        );

    });

    AppState.currentPage =
        pageId;

    updatePageTitle(pageId);

    if (pageId === "dashboard") {

        updateDashboard();

    }

    if (pageId === "materi") {

        closeMateriDetail();

        renderMateri();

    }

    if (pageId === "progress") {

        renderProgress();

    }

    closeMobileSidebar();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ============================================================
   15. PAGE TITLE
============================================================ */

function updatePageTitle(pageId) {

    const title =
        $("#pageTitle");

    if (!title) {

        return;

    }

    const titles = {

        dashboard:
            "Dashboard",

        materi:
            "Materi Tajwid",

        visual:
            "AI-Visual",

        singing:
            "Mnemonic Singing",

        ai:
            "Belajar Bersama AI",

        latihan:
            "Latihan Tajwid",

        evaluasi:
            "Evaluasi Pembelajaran",

        progress:
            "Progress Belajar"

    };

    title.textContent =
        titles[pageId] ||
        APP_CONFIG.appName;

}


/* ============================================================
   16. INITIALIZE NAVIGATION
============================================================ */

function initNavigation() {

    $$("[data-page]").forEach(item => {

        item.addEventListener(

            "click",

            event => {

                event.preventDefault();

                const page =
                    item.dataset.page;

                navigateTo(page);

            }

        );

    });


    const menuButton =
        $("#menuButton");

    const sidebar =
        $("#sidebar");

    if (
        menuButton &&
        sidebar
    ) {

        menuButton.addEventListener(

            "click",

            () => {

                sidebar.classList.toggle(
                    "open"
                );

            }

        );

    }

}


/* ============================================================
   17. CLOSE SIDEBAR
============================================================ */

function closeMobileSidebar() {

    const sidebar =
        $("#sidebar");

    if (
        sidebar &&
        window.innerWidth <= 900
    ) {

        sidebar.classList.remove(
            "open"
        );

    }

}


/* ============================================================
   18. RENDER MATERI
============================================================ */

function renderMateri() {

    const container =
        $("#materiGrid");

    if (!container) {

        return;

    }

    const data =
        getNormalizedMateri();

    const keyword =
        AppState.searchKeyword
            .toLowerCase()
            .trim();

    const category =
        AppState.currentCategory;

    const filtered =
        data.filter(item => {

            const matchesKeyword =
                !keyword ||
                item.title
                    .toLowerCase()
                    .includes(keyword) ||
                item.category
                    .toLowerCase()
                    .includes(keyword) ||
                stripHtml(
                    item.description
                )
                    .toLowerCase()
                    .includes(keyword);

            const matchesCategory =
                category === "all" ||
                item.category === category;

            return (
                matchesKeyword &&
                matchesCategory
            );

        });

    container.innerHTML = "";


    if (!filtered.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    🔎
                </div>

                <h3>
                    Materi tidak ditemukan
                </h3>

                <p>
                    Coba gunakan kata kunci pencarian yang berbeda.
                </p>

            </div>

        `;

        return;

    }


    filtered.forEach(item => {

        const completed =
            isMateriCompleted(item.id);

        const card =
            document.createElement(
                "article"
            );

        card.className =
            "feature-card materi-card";

        card.dataset.materiId =
            item.id;


        const description =
            stripHtml(
                item.description ||
                item.summary
            );


        card.innerHTML = `

            <div class="materi-card-top">

                <div class="feature-icon">

                    ${escapeHtml(
                        item.icon
                    )}

                </div>

                <span class="materi-category">

                    ${escapeHtml(
                        item.category
                    )}

                </span>

            </div>


            <h3 class="materi-card-title">

                ${escapeHtml(
                    item.title
                )}

            </h3>


            <p class="materi-card-description">

                ${escapeHtml(
                    description
                )}

            </p>


            <div class="materi-card-footer">

                <span class="feature-link">

                    ${
                        completed
                            ? "✓ Sudah Dipelajari"
                            : "Pelajari Materi"
                    }

                </span>

                <span class="materi-arrow">
                    →
                </span>

            </div>

        `;


        card.addEventListener(

            "click",

            () => {

                openMateri(
                    item.id
                );

            }

        );


        container.appendChild(
            card
        );

    });

}


/* ============================================================
   19. RENDER SUBMATERI
============================================================ */

function renderSubMateri(item) {

    if (
        !Array.isArray(
            item.subMateri
        ) ||
        !item.subMateri.length
    ) {

        return "";

    }

    return `

        <section class="materi-section">

            <div class="materi-section-heading">

                <span class="materi-section-icon">
                    📚
                </span>

                <h3>
                    Pembahasan Materi
                </h3>

            </div>


            <div class="submateri-container">

                ${
                    item.subMateri
                        .map(
                            (sub, index) => {

                                const title =
                                    sub.title ??
                                    sub.judul ??
                                    `Pembahasan ${index + 1}`;

                                const explanation =
                                    sub.explanation ??
                                    sub.penjelasan ??
                                    sub.description ??
                                    "";

                                const letters =
                                    sub.letters ??
                                    sub.huruf ??
                                    "";

                                const reading =
                                    sub.reading ??
                                    sub.caraBaca ??
                                    "";

                                const examples =
                                    Array.isArray(
                                        sub.examples
                                    )
                                        ? sub.examples
                                        : [];

                                return `

                                    <article class="submateri-card">

                                        <div class="submateri-number">

                                            ${index + 1}

                                        </div>


                                        <div class="submateri-content">

                                            <h4>

                                                ${escapeHtml(
                                                    title
                                                )}

                                            </h4>


                                            ${
                                                explanation
                                                    ? `

                                                        <div class="materi-rich-text">

                                                            ${sanitizeRichText(
                                                                explanation
                                                            )}

                                                        </div>

                                                    `
                                                    : ""
                                            }


                                            ${
                                                letters
                                                    ? `

                                                        <div class="submateri-letters">

                                                            <strong>
                                                                Huruf:
                                                            </strong>

                                                            <span
                                                                dir="rtl"
                                                                lang="ar"
                                                            >

                                                                ${escapeHtml(
                                                                    letters
                                                                )}

                                                            </span>

                                                        </div>

                                                    `
                                                    : ""
                                            }


                                            ${
                                                reading
                                                    ? `

                                                        <div class="submateri-reading">

                                                            <strong>
                                                                Cara membaca:
                                                            </strong>

                                                            ${sanitizeRichText(
                                                                reading
                                                            )}

                                                        </div>

                                                    `
                                                    : ""
                                            }


                                            ${
                                                examples.length
                                                    ? `

                                                        <div class="submateri-examples">

                                                            ${examples
                                                                .map(
                                                                    ex =>
                                                                        renderDetailedExample(
                                                                            ex
                                                                        )
                                                                )
                                                                .join("")
                                                            }

                                                        </div>

                                                    `
                                                    : ""
                                            }

                                        </div>

                                    </article>

                                `;

                            }
                        )
                        .join("")
                }

            </div>

        </section>

    `;

}


/* ============================================================
   20. RENDER HURUF
============================================================ */

function renderLetters(item) {

    if (
        !Array.isArray(item.letters) ||
        !item.letters.length
    ) {

        return "";

    }


    return `

        <section class="materi-section tajwid-letters-section">

            <div class="materi-section-heading">

                <span class="materi-section-icon">
                    🔤
                </span>

                <h3>
                    Huruf dan Ketentuan
                </h3>

            </div>


            <div class="tajwid-letters-grid">

                ${
                    item.letters
                        .map(letter => {

                            return `

                                <article class="tajwid-letter-card">

                                    <strong>

                                        ${escapeHtml(
                                            letter.name ??
                                            letter.nama ??
                                            "Kaidah"
                                        )}

                                    </strong>


                                    ${
                                        letter.arabic
                                            ? `

                                                <div
                                                    class="tajwid-arabic-small"
                                                    dir="rtl"
                                                    lang="ar"
                                                >

                                                    ${escapeHtml(
                                                        letter.arabic
                                                    )}

                                                </div>

                                            `
                                            : ""
                                    }


                                    ${
                                        letter.letters
                                            ? `

                                                <div class="tajwid-letter-list">

                                                    ${escapeHtml(
                                                        letter.letters
                                                    )}

                                                </div>

                                            `
                                            : ""
                                    }


                                    ${
                                        letter.description
                                            ? `

                                                <p>

                                                    ${escapeHtml(
                                                        letter.description
                                                    )}

                                                </p>

                                            `
                                            : ""
                                    }

                                </article>

                            `;

                        })
                        .join("")
                }

            </div>

        </section>

    `;

}


/* ============================================================
   21. RENDER CONTOH DETAIL
============================================================ */

function renderDetailedExample(example) {

    if (!example) {

        return "";

    }

    const arabic =
        example.arabic ??
        example.text ??
        example.teks ??
        "";

    const meaning =
        example.meaning ??
        example.arti ??
        "";

    const hukum =
        example.rule ??
        example.hukum ??
        example.tajwid ??
        "";

    const explanation =
        example.explanation ??
        example.penjelasan ??
        "";

    const highlight =
        example.highlight ??
        example.target ??
        "";


    return `

        <article class="tajwid-example-detail">

            ${
                hukum
                    ? `

                        <div class="example-rule-label">

                            ${escapeHtml(
                                hukum
                            )}

                        </div>

                    `
                    : ""
            }


            <div
                class="arabic-example"
                dir="rtl"
                lang="ar"
            >

                ${escapeHtml(
                    arabic
                )}

            </div>


            ${
                highlight
                    ? `

                        <div class="example-highlight">

                            <strong>
                                Bagian yang diperhatikan:
                            </strong>

                            <span
                                dir="rtl"
                                lang="ar"
                            >

                                ${escapeHtml(
                                    highlight
                                )}

                            </span>

                        </div>

                    `
                    : ""
            }


            ${
                meaning
                    ? `

                        <p class="example-meaning">

                            <strong>
                                Arti:
                            </strong>

                            ${escapeHtml(
                                meaning
                            )}

                        </p>

                    `
                    : ""
            }


            ${
                explanation
                    ? `

                        <div class="example-explanation">

                            <strong>
                                Mengapa termasuk hukum tersebut?
                            </strong>

                            <div>

                                ${sanitizeRichText(
                                    explanation
                                )}

                            </div>

                        </div>

                    `
                    : ""
            }

        </article>

    `;

}


/* ============================================================
   22. RENDER CONTOH
============================================================ */

function renderExamples(item) {

    if (
        !Array.isArray(item.examples) ||
        !item.examples.length
    ) {

        return `

            <div class="empty-example">

                📖 Contoh bacaan belum tersedia.

            </div>

        `;

    }


    return item.examples

        .map(
            example =>
                renderDetailedExample(
                    example
                )
        )

        .join("");

}


/* ============================================================
   23. RENDER POIN
============================================================ */

function renderPoints(item) {

    if (
        !Array.isArray(item.points) ||
        !item.points.length
    ) {

        return "";

    }


    return item.points

        .map(
            point => `

                <li>

                    ${escapeHtml(
                        point
                    )}

                </li>

            `
        )

        .join("");

}


/* ============================================================
   24. RENDER KAIDAH TAMBAHAN
============================================================ */

function renderRules(item) {

    if (
        !Array.isArray(item.rules) ||
        !item.rules.length
    ) {

        return "";

    }


    return `

        <section class="materi-section">

            <div class="materi-section-heading">

                <span class="materi-section-icon">
                    📌
                </span>

                <h3>
                    Kaidah Penting
                </h3>

            </div>


            <div class="rules-list">

                ${
                    item.rules
                        .map(
                            (rule, index) => `

                                <div class="rule-item">

                                    <span class="rule-number">

                                        ${index + 1}

                                    </span>

                                    <div>

                                        ${sanitizeRichText(
                                            rule
                                        )}

                                    </div>

                                </div>

                            `
                        )
                        .join("")
                }

            </div>

        </section>

    `;

}


/* ============================================================
   25. RENDER KESALAHAN UMUM
============================================================ */

function renderMistakes(item) {

    if (
        !Array.isArray(item.mistakes) ||
        !item.mistakes.length
    ) {

        return "";

    }


    return `

        <section class="materi-section">

            <div class="materi-section-heading">

                <span class="materi-section-icon">
                    ⚠️
                </span>

                <h3>
                    Kesalahan yang Sering Terjadi
                </h3>

            </div>


            <div class="mistakes-list">

                ${
                    item.mistakes
                        .map(
                            mistake => `

                                <div class="mistake-item">

                                    <span>
                                        ⚠️
                                    </span>

                                    <p>

                                        ${sanitizeRichText(
                                            mistake
                                        )}

                                    </p>

                                </div>

                            `
                        )
                        .join("")
                }

            </div>

        </section>

    `;

}


/* ============================================================
   26. RENDER TIPS
============================================================ */

function renderTips(item) {

    if (
        !Array.isArray(item.tips) ||
        !item.tips.length
    ) {

        return "";

    }


    return `

        <section class="materi-section">

            <div class="materi-section-heading">

                <span class="materi-section-icon">
                    💡
                </span>

                <h3>
                    Tips Mudah Mengingat
                </h3>

            </div>


            <div class="tips-list">

                ${
                    item.tips
                        .map(
                            tip => `

                                <div class="tip-item">

                                    <span>
                                        💡
                                    </span>

                                    <p>

                                        ${sanitizeRichText(
                                            tip
                                        )}

                                    </p>

                                </div>

                            `
                        )
                        .join("")
                }

            </div>

        </section>

    `;

}


/* ============================================================
   27. RENDER COMPARISON
============================================================ */

function renderComparison(item) {

    if (
        !Array.isArray(
            item.comparison
        ) ||
        !item.comparison.length
    ) {

        return "";

    }


    return `

        <section class="materi-section">

            <div class="materi-section-heading">

                <span class="materi-section-icon">
                    🔍
                </span>

                <h3>
                    Cara Membedakan
                </h3>

            </div>


            <div class="comparison-grid">

                ${
                    item.comparison
                        .map(row => `

                            <div class="comparison-card">

                                ${
                                    row.title ||
                                    row.nama
                                        ? `

                                            <h4>

                                                ${escapeHtml(
                                                    row.title ??
                                                    row.nama
                                                )}

                                            </h4>

                                        `
                                        : ""
                                }


                                ${
                                    row.description ||
                                    row.penjelasan
                                        ? `

                                            <p>

                                                ${sanitizeRichText(
                                                    row.description ??
                                                    row.penjelasan
                                                )}

                                            </p>

                                        `
                                        : ""
                                }

                            </div>

                        `)
                        .join("")
                }

            </div>

        </section>

    `;

}


/* ============================================================
   28. RENDER MEDIA MATERI
============================================================ */

function renderMateriMedia(item) {

    const image =
        item.image
            ? String(item.image).trim()
            : "";

    const video =
        item.video
            ? String(item.video).trim()
            : "";


    if (!image && !video) {

        return "";

    }


    return `

        <section class="materi-section materi-media-section">

            <div class="materi-section-heading">

                <span class="materi-section-icon">
                    🎬
                </span>

                <h3>
                    Media Pembelajaran
                </h3>

            </div>


            <div class="materi-media-container">


                ${
                    image
                        ? `

                            <div class="materi-image-box">

                                <div class="materi-media-label">

                                    📸 Visual Materi

                                </div>


                                <img
                                    src="${escapeHtml(image)}"
                                    alt="${escapeHtml(item.title)}"
                                    class="materi-main-image"
                                    loading="lazy"
                                    onerror="this.style.display='none'; this.parentElement.classList.add('media-error');"
                                >

                                <div class="media-error-message">

                                    📷 Gambar materi tidak ditemukan.

                                </div>

                            </div>

                        `
                        : ""
                }


                ${
                    video
                        ? `

                            <div class="materi-video-box">

                                <div class="materi-media-label">

                                    🎬 Video Pembelajaran

                                </div>


                                ${renderMateriVideo(
                                    video,
                                    item.title
                                )}

                            </div>

                        `
                        : ""
                }


            </div>

        </section>

    `;

}


/* ============================================================
   29. RENDER VIDEO MATERI
============================================================ */

function renderMateriVideo(
    video,
    title = "Video Pembelajaran"
) {

    if (!video) {

        return "";

    }


    const url =
        String(video).trim();


    /*
       YOUTUBE
    */

    if (
        url.includes("youtube.com") ||
        url.includes("youtu.be")
    ) {

        let videoId = "";


        if (url.includes("youtu.be/")) {

            videoId =
                url.split("youtu.be/")[1]
                    .split("?")[0]
                    .split("&")[0];

        }

        else {

            try {

                const parsed =
                    new URL(url);

                videoId =
                    parsed.searchParams.get(
                        "v"
                    ) || "";

            }

            catch {

                videoId = "";

            }

        }


        if (videoId) {

            return `

                <div class="materi-video-wrapper">

                    <iframe
                        src="https://www.youtube.com/embed/${escapeHtml(videoId)}"
                        title="${escapeHtml(title)}"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>

                </div>

            `;

        }

    }


    /*
       VIDEO FILE LOKAL

       Contoh:
       assets/videos/nun-sukun.mp4
    */

    return `

        <div class="materi-video-wrapper">

            <video
                controls
                preload="metadata"
                class="materi-main-video"
            >

                <source
                    src="${escapeHtml(url)}"
                    type="video/mp4"
                >

                Browser Anda tidak mendukung pemutaran video.

            </video>

        </div>

    `;

}


/* ============================================================
   30. OPEN DETAIL MATERI
============================================================ */
/* ============================================================
   RENDER MEDIA MATERI
============================================================ */

function renderMateriMedia(item) {

    let html = "";

    /* ========================================================
       GAMBAR
    ======================================================== */

    if (item.image && item.image.trim() !== "") {

        const imagePath =
            item.image.trim();

        html += `

            <section class="materi-section materi-media-section">

                <div class="materi-section-heading">

                    <span class="materi-section-icon">
                        🖼️
                    </span>

                    <h3>
                        Visual Materi
                    </h3>

                </div>

                <div class="materi-image-container">

                    <img
                        src="${escapeHtml(imagePath)}"
                        alt="${escapeHtml(item.title)}"
                        class="materi-image"
                        loading="lazy"
                        onerror="this.style.display='none'; this.parentElement.classList.add('media-error');"
                    >

                    <div class="media-error-message">

                        ⚠️ Gambar belum dapat ditampilkan.

                        <small>
                            Periksa lokasi file:
                            ${escapeHtml(imagePath)}
                        </small>

                    </div>

                </div>

            </section>

        `;

    }


    /* ========================================================
       VIDEO
    ======================================================== */

    if (item.video && item.video.trim() !== "") {

        const videoPath =
            item.video.trim();


        html += `

            <section class="materi-section materi-media-section">

                <div class="materi-section-heading">

                    <span class="materi-section-icon">
                        🎬
                    </span>

                    <h3>
                        Video Pembelajaran
                    </h3>

                </div>

                <div class="materi-video-container">

                    <video
                        class="materi-video"
                        controls
                        preload="metadata"
                    >

                        <source
                            src="${escapeHtml(videoPath)}"
                            type="video/mp4"
                        >

                        Browser Anda tidak mendukung video.

                    </video>

                </div>

            </section>

        `;

    }


    return html;

}
function openMateri(id) {

    const data =
        getNormalizedMateri();

    const item =
        data.find(
            materi =>
                String(materi.id) ===
                String(id)
        );


    if (!item) {

        showToast(
            "Materi tidak ditemukan."
        );

        return;

    }


    AppState.currentMateri =
        item;


    const grid =
        $("#materiGrid");

    const detail =
        $("#materiDetail");


    if (!detail) {

        showToast(
            "Elemen detail materi tidak ditemukan di HTML."
        );

        return;

    }


    if (grid) {

        grid.style.display =
            "none";

    }


    detail.style.display =
        "block";


    const completed =
        isMateriCompleted(
            item.id
        );


    const summaryHTML =
        sanitizeRichText(
            item.summary ||
            item.description
        );


    const tujuanHTML =
        sanitizeRichText(
            item.tujuan
        );


    const penjelasanHTML =
        sanitizeRichText(
            item.penjelasan
        );


    /*
       MEDIA PER MATERI
    */

    const mediaHTML =
        renderMateriMedia(item);


    detail.innerHTML = `

        <article class="card materi-detail-card">


            <!-- BACK -->

            <div class="materi-detail-navigation">

                <button
                    type="button"
                    class="secondary-btn"
                    id="backToMateriBtn"
                >

                    ← Kembali ke Materi

                </button>

            </div>


            <!-- HEADER -->

            <header class="materi-detail-header">

                <div class="materi-detail-icon">

                    ${escapeHtml(
                        item.icon
                    )}

                </div>


                <div class="materi-detail-heading">

                    <span class="section-badge">

                        ${escapeHtml(
                            item.category
                        )}

                    </span>


                    <h2>

                        ${escapeHtml(
                            item.title
                        )}

                    </h2>


                    ${
                        item.description
                            ? `

                                <p>

                                    ${escapeHtml(
                                        item.description
                                    )}

                                </p>

                            `
                            : ""
                    }

                </div>

            </header>


            <!-- ARABIC TITLE -->

            ${
                item.arabicTitle
                    ? `

                        <div class="arabic-title-box">

                            <div
                                class="arabic-main-title"
                                dir="rtl"
                                lang="ar"
                            >

                                ${escapeHtml(
                                    item.arabicTitle
                                )}

                            </div>

                        </div>

                    `
                    : ""
            }


            <!-- MEDIA PEMBELAJARAN -->

            ${mediaHTML}


            <!-- SUMMARY -->

            ${
                summaryHTML
                    ? `

                        <section class="materi-section materi-summary">

                            <div class="materi-section-heading">

                                <span class="materi-section-icon">
                                    📚
                                </span>

                                <h3>
                                    Pengertian & Ringkasan
                                </h3>

                            </div>


                            <div class="materi-rich-text">

                                ${summaryHTML}

                            </div>

                        </section>

                    `
                    : ""
            }


            <!-- TUJUAN -->

            ${
                tujuanHTML
                    ? `

                        <section class="materi-section">

                            <div class="materi-section-heading">

                                <span class="materi-section-icon">
                                    🎯
                                </span>

                                <h3>
                                    Tujuan Pembelajaran
                                </h3>

                            </div>


                            <div class="materi-rich-text">

                                ${tujuanHTML}

                            </div>

                        </section>

                    `
                    : ""
            }


            <!-- PENJELASAN -->

            ${
                penjelasanHTML
                    ? `

                        <section class="materi-section">

                            <div class="materi-section-heading">

                                <span class="materi-section-icon">
                                    💡
                                </span>

                                <h3>
                                    Penjelasan Lengkap
                                </h3>

                            </div>


                            <div class="materi-rich-text">

                                ${penjelasanHTML}

                            </div>

                        </section>

                    `
                    : ""
            }


            <!-- ISTILAH ARAB -->

            ${
                item.arabicExplanation
                    ? `

                        <section class="materi-section arabic-explanation-box">

                            <div class="materi-section-heading">

                                <span class="materi-section-icon">
                                    🕌
                                </span>

                                <h3>
                                    Istilah Arab
                                </h3>

                            </div>


                            <div
                                class="arabic-explanation"
                                dir="rtl"
                                lang="ar"
                            >

                                ${escapeHtml(
                                    item.arabicExplanation
                                )}

                            </div>

                        </section>

                    `
                    : ""
            }


            <!-- POIN -->

            ${
                renderPoints(item)
                    ? `

                        <section class="materi-section materi-points">

                            <div class="materi-section-heading">

                                <span class="materi-section-icon">
                                    🎯
                                </span>

                                <h3>
                                    Poin Penting
                                </h3>

                            </div>


                            <ul class="materi-points-list">

                                ${renderPoints(item)}

                            </ul>

                        </section>

                    `
                    : ""
            }


            <!-- SUBMATERI -->

            ${renderSubMateri(item)}


            <!-- HURUF -->

            ${renderLetters(item)}


            <!-- CONTOH -->

            <section class="materi-section materi-example">

                <div class="materi-section-heading">

                    <span class="materi-section-icon">
                        📖
                    </span>

                    <h3>
                        Contoh Bacaan Al-Qur'an
                    </h3>

                </div>


                <div class="examples-container">

                    ${renderExamples(item)}

                </div>

            </section>


            <!-- RULES -->

            ${renderRules(item)}


            <!-- COMPARISON -->

            ${renderComparison(item)}


            <!-- RULE UTAMA -->

            ${
                item.rule
                    ? `

                        <section class="materi-section tajwid-rule-box">

                            <div class="materi-section-heading">

                                <span class="materi-section-icon">
                                    📌
                                </span>

                                <h3>
                                    Kaidah Utama
                                </h3>

                            </div>


                            <div class="materi-rich-text">

                                ${sanitizeRichText(
                                    item.rule
                                )}

                            </div>

                        </section>

                    `
                    : ""
            }


            <!-- MISTAKES -->

            ${renderMistakes(item)}


            <!-- TIPS -->

            ${renderTips(item)}


            <!-- MNEMONIC -->

            ${
                item.mnemonic
                    ? `

                        <section class="materi-section materi-mnemonic">

                            <div class="materi-section-heading">

                                <span class="materi-section-icon">
                                    🎵
                                </span>

                                <h3>
                                    Mnemonic
                                </h3>

                            </div>


                            <div class="mnemonic-content">

                                ${sanitizeRichText(
                                    item.mnemonic
                                )}

                            </div>

                        </section>

                    `
                    : ""
            }


            <!-- ACTION -->

            <div class="materi-detail-actions">


                <button
                    type="button"
                    class="primary-btn"
                    id="markMateriCompleteBtn"
                    ${completed ? "disabled" : ""}
                >

                    ${
                        completed
                            ? "✓ Materi Sudah Dipelajari"
                            : "✓ Tandai Sudah Dipelajari"
                    }

                </button>


                <button
                    type="button"
                    class="secondary-btn"
                    id="createSongFromMateriBtn"
                >

                    🎵 Buat Mnemonic Singing

                </button>


            </div>


        </article>

    `;


    initMateriDetailButtons(
        item
    );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ============================================================
   31. DETAIL BUTTONS
============================================================ */

function initMateriDetailButtons(item) {

    const backButton =
        $("#backToMateriBtn");


    if (backButton) {

        backButton.addEventListener(

            "click",

            closeMateriDetail

        );

    }


    const completeButton =
        $("#markMateriCompleteBtn");


    if (completeButton) {

        completeButton.addEventListener(

            "click",

            () => {

                markMateriComplete(
                    item.id
                );

            }

        );

    }


    const songButton =
        $("#createSongFromMateriBtn");


    if (songButton) {

        songButton.addEventListener(

            "click",

            () => {

                navigateTo(
                    "singing"
                );


                setTimeout(

                    () => {

                        setSingingMateri(
                            item
                        );

                    },

                    150

                );

            }

        );

    }

}


/* ============================================================
   32. CLOSE DETAIL
============================================================ */

function closeMateriDetail() {

    const detail =
        $("#materiDetail");

    const grid =
        $("#materiGrid");


    if (detail) {

        detail.style.display =
            "none";

        detail.innerHTML =
            "";

    }


    if (grid) {

        grid.style.display =
            "";

    }


    AppState.currentMateri =
        null;

}


/* ============================================================
   33. MARK COMPLETE
============================================================ */

function markMateriComplete(id) {

    if (
        !isMateriCompleted(id)
    ) {

        AppState.completedMateri.push(
            id
        );

    }


    saveAppState();

    updateDashboard();

    renderProgress();


    const button =
        $("#markMateriCompleteBtn");


    if (button) {

        button.disabled =
            true;

        button.textContent =
            "✓ Materi Sudah Dipelajari";

    }


    renderMateri();


    showToast(
        "✓ Materi berhasil diselesaikan."
    );

}


/* ============================================================
   34. DASHBOARD
============================================================ */

function updateDashboard() {

    const data =
        getNormalizedMateri();

    const progress =
        calculateProgress();

    const completed =
        data.filter(
            item =>
                isMateriCompleted(
                    item.id
                )
        ).length;


    const progressText =
        $("#dashboardProgress");


    if (progressText) {

        progressText.textContent =
            `${progress}%`;

    }


    const circle =
        $("#progressCircle");


    if (circle) {

        const number =
            circle.querySelector(
                "strong"
            );


        if (number) {

            number.textContent =
                `${progress}%`;

        }

    }


    const completedCount =
        $("#completedMateriCount");


    if (completedCount) {

        completedCount.textContent =
            completed;

    }


    const totalCount =
        $("#totalMateriCount");


    if (totalCount) {

        totalCount.textContent =
            data.length;

    }


    $$("[data-progress-bar]")
        .forEach(bar => {

            bar.style.width =
                `${progress}%`;

        });


    updateDashboardWelcome();

}


/* ============================================================
   35. DASHBOARD WELCOME
============================================================ */

function updateDashboardWelcome() {

    const element =
        $("#dashboardWelcome");

    if (!element) {

        return;

    }

    const hour =
        new Date().getHours();

    let greeting =
        "Selamat belajar";

    if (hour < 11) {

        greeting =
            "Selamat pagi";

    }

    else if (hour < 15) {

        greeting =
            "Selamat siang";

    }

    else if (hour < 18) {

        greeting =
            "Selamat sore";

    }

    else {

        greeting =
            "Selamat malam";

    }

    element.textContent =
        `${greeting} 👋`;

}


/* ============================================================
   36. RENDER PROGRESS
============================================================ */

function renderProgress() {

    const page =
        $("#progress");

    if (!page) {

        return;

    }


    const old =
        page.querySelector(
            ".progress-app-content"
        );


    if (old) {

        old.remove();

    }


    const data =
        getNormalizedMateri();

    const progress =
        calculateProgress();


    const completed =
        data.filter(
            item =>
                isMateriCompleted(
                    item.id
                )
        ).length;


    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "progress-app-content";


    wrapper.innerHTML = `

        <div class="card progress-summary-card">

            <div class="progress-summary-header">

                <div>

                    <span class="section-badge">
                        Perkembangan
                    </span>

                    <h2>
                        📈 Progress Belajar
                    </h2>

                    <p>
                        Pantau perkembangan pembelajaran Tajwid Anda.
                    </p>

                </div>


                <div class="progress-percentage">

                    ${progress}%

                </div>

            </div>


            <div class="progress-track">

                <div
                    class="progress-fill"
                    style="width:${progress}%"
                ></div>

            </div>


            <div class="progress-stat-text">

                <strong>
                    ${completed}
                </strong>

                dari

                <strong>
                    ${data.length}
                </strong>

                materi telah dipelajari.

            </div>

        </div>


        <div class="feature-grid progress-materi-grid">

            ${
                data
                    .map(item => {

                        const done =
                            isMateriCompleted(
                                item.id
                            );

                        return `

                            <article
                                class="card progress-materi-card"
                                data-open-progress-materi="${escapeHtml(item.id)}"
                            >

                                <div class="progress-materi-icon">

                                    ${escapeHtml(
                                        item.icon
                                    )}

                                </div>


                                <span class="materi-category">

                                    ${escapeHtml(
                                        item.category
                                    )}

                                </span>


                                <h3>

                                    ${escapeHtml(
                                        item.title
                                    )}

                                </h3>


                                <p>

                                    ${
                                        done
                                            ? "✓ Sudah dipelajari"
                                            : "○ Belum dipelajari"
                                    }

                                </p>

                            </article>

                        `;

                    })
                    .join("")
            }

        </div>

    `;


    page.appendChild(
        wrapper
    );


    $$("[data-open-progress-materi]")
        .forEach(card => {

            card.addEventListener(

                "click",

                () => {

                    const id =
                        card.dataset
                            .openProgressMateri;

                    navigateTo(
                        "materi"
                    );

                    setTimeout(

                        () => {

                            openMateri(id);

                        },

                        100

                    );

                }

            );

        });

}


/* ============================================================
   37. DARK MODE
============================================================ */

function initDarkMode() {

    applyDarkMode();


    const button =
        $("#darkModeBtn");


    if (!button) {

        return;

    }


    button.addEventListener(

        "click",

        () => {

            AppState.darkMode =
                !AppState.darkMode;

            applyDarkMode();

            saveAppState();

        }

    );

}


/* ============================================================
   38. APPLY DARK MODE
============================================================ */

function applyDarkMode() {

    document.body.classList.toggle(

        "dark-mode",

        AppState.darkMode

    );


    const button =
        $("#darkModeBtn");


    if (!button) {

        return;

    }


    const span =
        button.querySelector(
            "span"
        );


    if (span) {

        span.textContent =
            AppState.darkMode
                ? "Mode Terang"
                : "Mode Gelap";

    }


    button.setAttribute(

        "aria-label",

        AppState.darkMode
            ? "Aktifkan mode terang"
            : "Aktifkan mode gelap"

    );

}


/* ============================================================
   39. SEARCH MATERI
============================================================ */

function initSearch() {

    const search =
        $("#materiSearch");


    if (!search) {

        return;

    }


    search.addEventListener(

        "input",

        event => {

            AppState.searchKeyword =
                event.target.value;

            renderMateri();

        }

    );

}


/* ============================================================
   40. FILTER KATEGORI
============================================================ */

function initCategoryFilter() {

    const select =
        $("#materiCategoryFilter");


    if (!select) {

        return;

    }


    const data =
        getNormalizedMateri();


    const categories =
        [
            ...new Set(
                data.map(
                    item =>
                        item.category
                )
            )
        ];


    categories.forEach(category => {

        const option =
            document.createElement(
                "option"
            );

        option.value =
            category;

        option.textContent =
            category;

        select.appendChild(
            option
        );

    });


    select.addEventListener(

        "change",

        event => {

            AppState.currentCategory =
                event.target.value;

            renderMateri();

        }

    );

}


/* ============================================================
   41. MNEMONIC SONG
============================================================ */

const mnemonicSongs = {

    nunTanwin: {

        title:
            "Hukum Nun Sukun dan Tanwin",

        lyrics:
`[Intro]
Ayo belajar Tajwid
Dengan lagu kita ingat

[Verse 1]
Nun sukun dan tanwin
Mari kita pahami
Ada empat hukum bacaan
Yang harus kita kuasai

[Chorus]
Izhar, Idgham
Iqlab, Ikhfa
Empat hukum jangan lupa
Jelas, lebur, berubah, samar
Baca Qur'an dengan benar

[Verse 2]
Izhar dibaca jelas
Idgham masuk melebur
Iqlab berubah jadi Mim
Ikhfa samar dan berdengung

[Chorus]
Izhar, Idgham
Iqlab, Ikhfa
Empat hukum jangan lupa
Pahami huruf setelahnya
Agar tidak salah membaca

[Outro]
Pahami
Hafalkan
Praktikkan
Dengan tartil`,

        prompt:
            "Islamic educational mnemonic song for Grade 7 junior high school students about Nun Sukun and Tanwin, Indonesian lyrics, cheerful but respectful, easy to memorize, clear vocals, medium tempo."

    },


    mimSukun: {

        title:
            "Hukum Mim Sukun",

        lyrics:
`[Intro]
Mari belajar bersama
Tajwid indah untuk semua

[Verse]
Mim sukun mari ingat
Tiga hukum yang hebat
Ikhfa Syafawi
Idgham Mimi
Izhar Syafawi

[Chorus]
Ikhfa, Idgham, Izhar
Mim sukun kita belajar
Bertemu Ba, samar
Bertemu Mim, melebur
Selain itu, jelas

[Outro]
Tiga hukum kita hafalkan
Agar bacaan semakin benar`,

        prompt:
            "Islamic educational mnemonic song about the three rules of Mim Sukun for Grade 7 students, Indonesian lyrics, cheerful, simple, easy to memorize, respectful and educational."

    },


    mad: {

        title:
            "Hukum Mad",

        lyrics:
`[Intro]
Mari belajar hukum Mad
Panjang pendek harus tepat

[Verse]
Mad artinya memanjangkan
Suara sesuai ketentuan
Alif, Wawu, Ya
Huruf Mad kita hafalkan

[Chorus]
Alif setelah Fathah
Wawu setelah Dhammah
Ya setelah Kasrah
Mad Asli dua harakat

[Outro]
Panjang jangan berlebihan
Pendek jangan dikurangi
Baca sesuai aturan
Agar indah bacaan`,

        prompt:
            "Islamic educational mnemonic song about Mad and Mad Asli for Grade 7 students, Indonesian lyrics, cheerful, simple, easy to memorize, medium tempo."

    },


    qalqalah: {

        title:
            "Qalqalah",

        lyrics:
`[Intro]
Qalqalah mari kita ingat
Suara pantul harus tepat

[Verse]
Qaf, Tha, Ba
Jim dan Dal
Lima huruf kita hafal

[Chorus]
Qaf Tha Ba
Jim Dal
قُطْبُ جَدٍ
Itulah huruf Qalqalah

[Outro]
Jika sukun memantul
Bacaan terdengar jelas
Qalqalah jangan terlupa`,

        prompt:
            "Islamic mnemonic song about the five Qalqalah letters for Grade 7 students, Indonesian lyrics, easy to memorize, clear vocals, cheerful and respectful."

    },


    lam: {

        title:
            "Lam Jalalah",

        lyrics:
`[Intro]
Lam Jalalah mari belajar
Tebal tipis harus benar

[Verse]
Allah nama yang mulia
Lam Jalalah kita baca
Sebelum lafaz Allah
Perhatikan harakatnya

[Chorus]
Fathah tebal
Dhammah tebal
Kasrah tipis
Itulah cara mengingat

[Outro]
Tebal atau tipis
Perhatikan sebelum Allah
Baca dengan tepat`,

        prompt:
            "Islamic educational mnemonic song about Lam Jalalah for Grade 7 students, Indonesian lyrics, simple, cheerful, respectful and easy to memorize."

    },


    ra: {

        title:
            "Tafkhim dan Tarqiq Ra",

        lyrics:
`[Intro]
Huruf Ra mari belajar
Tebal tipis harus benar

[Verse]
Ra bisa tebal
Ra bisa tipis
Perhatikan harakat
Agar tidak keliru

[Chorus]
Tafkhim berarti tebal
Tarqiq berarti tipis
Perhatikan kaidahnya
Agar bacaan semakin baik

[Outro]
Tafkhim tebal
Tarqiq tipis
Mari belajar setiap hari`,

        prompt:
            "Islamic educational mnemonic song about Tafkhim and Tarqiq of Ra for Grade 7 students, Indonesian lyrics, cheerful, respectful and easy to memorize."

    }

};


/* ============================================================
   42. INISIALISASI MNEMONIC SINGING
============================================================ */

function initMnemonicSinging() {

    const generateButton =
        $("#generateLyricsBtn");

    const copyButton =
        $("#copyLyricsBtn");

    const sunoButton =
        $("#openSunoBtn");

    const select =
        $("#singingMateri");


    if (generateButton) {

        generateButton.addEventListener(

            "click",

            generateMnemonicLyrics

        );

    }


    if (copyButton) {

        copyButton.addEventListener(

            "click",

            copyMnemonicLyrics

        );

    }


    if (sunoButton) {

        sunoButton.addEventListener(

            "click",

            openSuno

        );

    }


    if (select) {

        select.addEventListener(

            "change",

            () => {

                const output =
                    $("#lyricsOutput");

                const title =
                    $("#lyricsTitle");


                if (output) {

                    output.value =
                        "";

                }


                if (title) {

                    title.textContent =
                        "Lirik Mnemonic Singing";

                }

            }

        );

    }

}


/* ============================================================
   43. SET MATERI SINGING
============================================================ */

function setSingingMateri(item) {

    const select =
        $("#singingMateri");


    if (
        !select ||
        !item
    ) {

        return;

    }


    const mapping = {

        4:
            "nunTanwin",

        5:
            "mimSukun",

        6:
            "mad",

        7:
            "qalqalah",

        9:
            "lam",

        10:
            "ra"

    };


    const value =
        mapping[item.id];


    if (value) {

        select.value =
            value;

        generateMnemonicLyrics();

        return;

    }


    if (
        item.lyric ||
        item.songPrompt
    ) {

        const output =
            $("#lyricsOutput");

        const title =
            $("#lyricsTitle");


        if (output) {

            output.value =
                item.lyric || "";

        }


        if (title) {

            title.textContent =
                `🎵 ${item.title}`;

        }


        localStorage.setItem(

            APP_CONFIG.lyricsKey,

            item.lyric || ""

        );


        localStorage.setItem(

            APP_CONFIG.promptKey,

            item.songPrompt || ""

        );


        showToast(
            "✨ Mnemonic berhasil dimuat."
        );


        return;

    }


    showToast(
        "Mnemonic Singing untuk materi ini belum tersedia."
    );

}


/* ============================================================
   44. GENERATE LYRICS
============================================================ */

function generateMnemonicLyrics() {

    const select =
        $("#singingMateri");

    const output =
        $("#lyricsOutput");

    const title =
        $("#lyricsTitle");


    if (
        !select ||
        !output
    ) {

        return;

    }


    const key =
        select.value;


    const song =
        mnemonicSongs[key];


    if (!song) {

        showToast(
            "Lirik untuk materi ini belum tersedia."
        );

        return;

    }


    output.value =
        song.lyrics;


    if (title) {

        title.textContent =
            `🎵 ${song.title}`;

    }


    localStorage.setItem(

        APP_CONFIG.lyricsKey,

        song.lyrics

    );


    localStorage.setItem(

        APP_CONFIG.promptKey,

        song.prompt

    );


    showToast(
        "✨ Lirik mnemonic berhasil dibuat."
    );

}


/* ============================================================
   45. COPY LYRICS
============================================================ */

async function copyMnemonicLyrics() {

    const output =
        $("#lyricsOutput");


    if (!output) {

        return;

    }


    const lyrics =
        output.value.trim();


    if (!lyrics) {

        showToast(
            "Buat lirik terlebih dahulu."
        );

        return;

    }


    try {

        await navigator.clipboard.writeText(
            lyrics
        );


        showCopyStatus(
            "✓ Lirik berhasil disalin."
        );

    }

    catch {

        output.focus();

        output.select();


        try {

            document.execCommand(
                "copy"
            );

            showCopyStatus(
                "✓ Lirik berhasil disalin."
            );

        }

        catch {

            showCopyStatus(
                "Silakan salin lirik secara manual."
            );

        }

    }

}


/* ============================================================
   46. OPEN SUNO
============================================================ */

function openSuno() {

    const output =
        $("#lyricsOutput");


    const lyrics =
        output
            ? output.value.trim()
            : "";


    if (!lyrics) {

        showToast(
            "Buat lirik terlebih dahulu."
        );

        return;

    }


    localStorage.setItem(

        APP_CONFIG.lyricsKey,

        lyrics

    );


    if (
        navigator.clipboard &&
        navigator.clipboard.writeText
    ) {

        navigator.clipboard
            .writeText(lyrics)
            .catch(
                () => {}
            );

    }


    window.open(

        APP_CONFIG.sunoUrl,

        "_blank",

        "noopener,noreferrer"

    );


    showCopyStatus(

        "🎵 Suno dibuka. Lirik disalin jika browser mengizinkan."

    );

}


/* ============================================================
   47. RESTORE LYRICS
============================================================ */

function restoreLastLyrics() {

    const saved =
        localStorage.getItem(
            APP_CONFIG.lyricsKey
        );


    const output =
        $("#lyricsOutput");


    if (
        saved &&
        output &&
        !output.value.trim()
    ) {

        output.value =
            saved;

    }

}


/* ============================================================
   48. COPY STATUS
============================================================ */

function showCopyStatus(message) {

    const status =
        $("#copyStatus");


    if (!status) {

        showToast(message);

        return;

    }


    status.textContent =
        message;


    clearTimeout(
        window.copyStatusTimer
    );


    window.copyStatusTimer =
        setTimeout(

            () => {

                status.textContent =
                    "";

            },

            5000

        );

}


/* ============================================================
   49. TOAST
============================================================ */

function showToast(message) {

    let toast =
        $("#appToast");


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "appToast";

        toast.className =
            "app-toast";

        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(

            () => {

                toast.classList.remove(
                    "show"
                );

            },

            3000

        );

}


/* ============================================================
   50. KEYBOARD
============================================================ */

function initKeyboard() {

    document.addEventListener(

        "keydown",

        event => {

            if (
                event.key ===
                "Escape"
            ) {

                const detail =
                    $("#materiDetail");


                if (
                    detail &&
                    detail.style.display !==
                    "none"
                ) {

                    closeMateriDetail();

                }

            }


            if (
                (event.ctrlKey ||
                 event.metaKey) &&
                event.key.toLowerCase() ===
                "k"
            ) {

                const search =
                    $("#materiSearch");


                if (search) {

                    event.preventDefault();

                    search.focus();

                }

            }

        }

    );

}


/* ============================================================
   51. RESIZE
============================================================ */

function initResizeHandler() {

    window.addEventListener(

        "resize",

        () => {

            if (
                window.innerWidth >
                900
            ) {

                const sidebar =
                    $("#sidebar");


                if (sidebar) {

                    sidebar.classList.remove(
                        "open"
                    );

                }

            }

        }

    );

}


/* ============================================================
   52. UPDATE APP INFO
============================================================ */

function updateAppInfo() {

    $$("[data-app-name]")
        .forEach(element => {

            element.textContent =
                APP_CONFIG.appName;

        });


    $$("[data-school]")
        .forEach(element => {

            element.textContent =
                APP_CONFIG.school;

        });


    $$("[data-year]")
        .forEach(element => {

            element.textContent =
                APP_CONFIG.year;

        });

}


/* ============================================================
   53. AUTO GENERATE DASHBOARD MATERIAL COUNT
============================================================ */

function updateMaterialCountLabels() {

    const data =
        getNormalizedMateri();


    $$("[data-total-materi]")
        .forEach(element => {

            element.textContent =
                data.length;

        });

}


/* ============================================================
   54. INIT APP
============================================================ */

function initApp() {

    console.log(
        "======================================"
    );

    console.log(
        "TAJWID AI-VISUAL"
    );

    console.log(
        "Application Engine"
    );

    console.log(
        "Initializing..."
    );


    /* STATE */

    loadAppState();


    /* NAVIGATION */

    initNavigation();


    /* DARK MODE */

    initDarkMode();


    /* SEARCH */

    initSearch();


    /* CATEGORY */

    initCategoryFilter();


    /* MATERIAL */

    renderMateri();


    /* DASHBOARD */

    updateDashboard();


    /* PROGRESS */

    renderProgress();


    /* SINGING */

    initMnemonicSinging();


    /* RESTORE */

    restoreLastLyrics();


    /* KEYBOARD */

    initKeyboard();


    /* RESIZE */

    initResizeHandler();


    /* INFO */

    updateAppInfo();


    updateMaterialCountLabels();


    /* DEFAULT PAGE */

    navigateTo(
        "dashboard"
    );


    console.log(
        "Jumlah materi:",
        getNormalizedMateri().length
    );


    console.log(
        "Progress:",
        calculateProgress() + "%"
    );


    console.log(
        "Media gambar/video: AKTIF"
    );


    console.log(
        "Application successfully started."
    );


    console.log(
        "======================================"
    );

}


/* ============================================================
   55. START APPLICATION
============================================================ */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(

        "DOMContentLoaded",

        initApp

    );

}

else {

    initApp();

}


/* ============================================================
   END APP.JS
============================================================ */