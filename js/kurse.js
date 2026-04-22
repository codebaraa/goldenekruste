document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.menu__bar');
    const offScreenMenu = document.querySelector('.menu__offscreen');
    const spans = document.querySelectorAll('.span');
    const footerYear = document.querySelector('.footer__year');

    const cards = document.querySelectorAll('.kurse__cards-container');
    const gutscheinBtn = document.querySelector('.gutschein__btn');

    // --- 1. Karten-Klick-Logik (Mobile Fallback) ---
    // Auf Desktop regelt SCSS (:hover) das Ausklappen.
    // Auf Mobile (wo es kein Hover gibt) nutzen wir JS, um eine "active"-Klasse zu toggeln.
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Wenn man auf eine Karte klickt, schließen wir alle anderen
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });
            // Dann toggeln wir den Status der angeklickten Karte
            card.classList.toggle('active');
        });
    });
// --- 2. Button Logik (Mehr/Weniger) ---
    cards.forEach(card => {
        const btn = card.querySelector('.card__btn');
        const besch = card.querySelector('[class*="besch"]'); // Findet beschB, beschC, beschM
        const price = card.querySelector('[class^="price"]');

        if (!btn || !besch || !price) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            // Typerkennung: Wir suchen nach dem Schlagwort in der Klassenliste
            let type = '';
            if (besch.classList.contains('bread1') || besch.classList.contains('bread2')) type = 'bread';
            if (besch.classList.contains('cake1') || besch.classList.contains('cake2')) type = 'cake';
            if (besch.classList.contains('macaron1') || besch.classList.contains('macaron2')) type = 'macaron';

            if (besch.classList.contains(`${type}1`)) {
                // WECHSEL ZU "WENIGER"
                besch.classList.replace(`${type}1`, `${type}2`);
                btn.textContent = 'WENIGER';
                
                if (type === 'bread') price.innerHTML = '120,- pro Person<br />ca. 3 Stunden';
                if (type === 'cake') price.innerHTML = '140,- pro Person<br />ca. 5 Stunden';
                if (type === 'macaron') price.innerHTML = '100,- pro Person<br />ca. 4-5 Stunden';
            } else {
                // WECHSEL ZU "MEHR"
                besch.classList.replace(`${type}2`, `${type}1`);
                btn.textContent = 'MEHR';
                price.innerHTML = '';
            }
        });
    });

    // --- 3. Gutschein Button Animation ---
    if (gutscheinBtn) {
        gutscheinBtn.addEventListener('click', () => {
            // Besser: Nutze eine CSS-Klasse für die Animation!
            gutscheinBtn.classList.add('clicked');
            setTimeout(() => {
                gutscheinBtn.classList.remove('clicked');
            }, 1000);
        });
    }

    // --- 4. Hamburger Menü ---
    if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener('click', () => {
            offScreenMenu.classList.toggle('active');
            spans.forEach((span) => span.classList.toggle('active'));
        });
    }

    // --- 5. Footer Jahr ---
    if (footerYear) {
        footerYear.innerText = new Date().getFullYear();
    }
});