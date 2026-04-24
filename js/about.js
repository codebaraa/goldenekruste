import '/scss/about.scss';
const allSections = document.querySelectorAll('.section')
const hamMenu = document.querySelector('.menu__bar');
const offScreenMenu = document.querySelector('.menu__offscreen');
const spans = document.querySelectorAll('.span')

const footerYear = document.querySelector('.footer__year');

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
handleCurrentYear();

