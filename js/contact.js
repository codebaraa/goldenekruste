import '/scss/cont.scss';
const hamMenu = document.querySelector('.menu__bar');
const offScreenMenu = document.querySelector('.menu__offscreen');
const spans = document.querySelectorAll('.span')
const footerYear = document.querySelector('.footer__year');
const formBtn = document.querySelector('.form__btn');
const allSections = document.querySelectorAll('.section')

const handleObserver = () => {
	const currentScroll = window.scrollY
	let activeSection = null;

	allSections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		if (currentScroll >= sectionTop -50 && currentScroll < sectionTop + sectionHeight) {
			activeSection = section;
		} })

		if (activeSection) {
		if (activeSection.classList.contains('white-section')) {
			spans.forEach((span) => span.classList.add ("black"))
		} else{
			spans.forEach((span) =>span.classList.remove ("black"))
		}
	}
};
window.addEventListener('scroll', () => {handleObserver()});

hamMenu.addEventListener('click', () => {
	offScreenMenu.classList.toggle('active');
	spans.forEach(span => span.classList.toggle('active'));
	spans.forEach(span => span.classList.toggle('white'));
});


const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};


formBtn.addEventListener('click', () => {
	formBtn.style.backgroundColor = '#c9c9c9';
	formBtn.style.color = '#483214';

	// Setze die Hintergrundfarbe nach einer Sekunde zurück
	setTimeout(() => {
		formBtn.style.backgroundColor = '#5a5249';
		formBtn.style.color = '#f7f7f7';
	}, 1000);
});

handleCurrentYear();

