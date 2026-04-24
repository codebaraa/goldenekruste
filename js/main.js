import '/scss/index.scss';
const allSections = document.querySelectorAll('.section')
const hamMenu = document.querySelector('.menu__bar');
const offScreenMenu = document.querySelector('.menu__offscreen');
const spans = document.querySelectorAll('.span')
const footerYear = document.querySelector('.footer__year');

// Optionen für den Observer einstellen
const observerOptions = {
    root: null, // null bedeutet, wir schauen auf den Viewport (das Browserfenster)
    threshold: 0.5 // 0.5 bedeutet: Der Code feuert, wenn 50% der Section sichtbar sind
};

// Den Observer erstellen
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Prüfen, ob die Section gerade im sichtbaren Bereich ist
        if (entry.isIntersecting) {
            
            // Logik: Hat die sichtbare Section die Klasse 'white-section'?
            if (entry.target.classList.contains('white-section')) {
                spans.forEach(span => span.classList.add("black"));
            } else {
                spans.forEach(span => span.classList.remove("black"));
            }
            
        }
    });
}, observerOptions);

// Dem Observer sagen, welche Elemente er überwachen soll
allSections.forEach(section => {
    sectionObserver.observe(section);
});

hamMenu.addEventListener('click', () => {
    console.log("BOOM! Der Klick funktioniert!"); 
    offScreenMenu.classList.toggle('active');
    spans.forEach(span => span.classList.toggle('active'));
    spans.forEach(span => span.classList.toggle('white'));
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();


