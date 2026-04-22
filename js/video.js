const mainVideo = document.getElementById('background__video');
const videoButton = document.querySelector('.videoButton');
const buttonIcon = document.querySelector('.videoButton .fa-solid');

mainVideo.playbackRate = 0.55;

function buttonFunction() {
	if (mainVideo.paused) {
		mainVideo.play();
		buttonIcon.classList.replace('fa-play', 'fa-pause');
	} else {
		mainVideo.pause();
		buttonIcon.classList.replace('fa-pause', 'fa-play');
	}
}
videoButton.addEventListener('click', buttonFunction);