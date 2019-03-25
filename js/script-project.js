//-------------------------------------
//	GENERATE CONTENT PAGE
//-------------------------------------
const displayContentPage = idProject => {
	console.log(idProject);
	document.querySelector('h1').innerText = projects[idProject].title;
	document.querySelector('p.subtitle').innerText = projects[idProject].keywords;
	document.querySelector('.next-project__name').innerText =
		projects[idProject].nextProject;
	document.querySelector('.next-project__name').href =
		projects[idProject].hrefNextProject;
	generateMenu();
};

//-------------------------------------
//	REDIRECTION -> INDEX
//-------------------------------------
const redirectionProject = (param) => {
	document.querySelector('.transition-screen').classList.add('redirect-page');
	document.querySelector('.transition-screen--white').classList.add('redirect-page');

	setTimeout(() => {
		if (param == 'home') {
			window.location.href = '../index.html';
		} else if (param == 'contact') {
			window.location.href = '../index.html#contact';
		} else {
			window.location.href = '../index.html#' + (idProjectContent + 1);
		}
	}, 1500);
};

//-------------------------------------
//	REDIRECTION -> NEXT PROJECT
//-------------------------------------
const redirectionNextProject = () => {
	document.querySelector('.transition-screen').classList.add('redirect-page');
	document.querySelector('.transition-screen--white').classList.add('redirect-page');

	if (idProjectActive == 4) {
		idNextProject = 1;
	}

	switch (idNextProject) {
		case 1:
			nameNextProject = 'zenchef';
			break;
		case 2:
			nameNextProject = 'le-trianon';
			break;
		case 3:
			nameNextProject = 'alcatraz';
			break;
		case 4:
			nameNextProject = 'back-to-your-dream';
			break;
	}

	setTimeout(() => {
		window.location.href = nameNextProject + '.html';
	}, 1500);
};

//-------------------------------------
//	PROJECT'S NAME
//-------------------------------------
const nameProject = () => {
	// Generate good project ID from URL
	let initialURL = window.location.href;
	let positionAfterHyphen = initialURL.lastIndexOf('/') + 1;
	let positionHtml = initialURL.lastIndexOf('.html') + 1;
	let nameProject = initialURL.substring(positionAfterHyphen, positionHtml - 1);

	return nameProject;
};

//-------------------------------------
//	PROJECT'S ID
//-------------------------------------
const idProject = () => {
	var idProject = 0;

	switch (nameProjectActive) {
		case 'zenchef':
			idProject = 0;
			break;
		case 'le-trianon':
			idProject = 1;
			break;
		case 'alcatraz':
			idProject = 2;
			break;
		case 'back-to-your-dream':
			idProject = 3;
			break;
	}

	return idProject;
};

//-------------------------------------
//	VIDEO
//-------------------------------------
const videoPlayer = (param) => {
	var supportsVideo = !!document.createElement('video').canPlayType;
	if (supportsVideo) {
		var video = document.querySelector('.video--' + param);
		var videoControls = document.querySelector('.video-controls--' + param);
		var playpause = document.querySelector('.playpause--' + param);
		var mute = document.querySelector('.mute--' + param);
		var progress = document.querySelector('.progress--' + param);
		var progressBar = document.querySelector('.progress-bar--' + param);

		// Hide the default controls
		video.controls = false;

		// Display the user defined video controls
		videoControls.style.display = 'flex';

		// Play & Pause
		playpause.addEventListener('click', function (e) {
			if (video.paused || video.ended) {
				this.className = 'icon-pause';
				video.play();
			} else {
				this.className = 'icon-play';
				video.pause();
			}
		});

		video.addEventListener('click', function (e) {
			if (video.paused || video.ended) {
				playpause.className = 'icon-pause';
				video.play();
			} else {
				playpause.className = 'icon-play';
				video.pause();
			}
		});

		// Volume
		mute.addEventListener('click', function (e) {
			if (video.muted == false) {
				this.className = 'icon-volume_off';
				video.muted = true;
			} else {
				this.className = 'icon-volume_up';
				video.muted = false;
			}
		});

		// Progress bar & duration
		video.addEventListener('loadedmetadata', function () {
			progress.setAttribute('max', video.duration);
		});

		video.addEventListener('timeupdate', function () {
			if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
			if (video.ended) {
				video.currentTime = 0;
				playpause.className = 'icon-play';
			}

			progress.value = video.currentTime;
			progressBar.style.width =
				Math.floor((video.currentTime / video.duration) * 100) + '%';

			var sec_num = parseInt(video.currentTime, 10);
			var hours = Math.floor(sec_num / 3600);
			var minutes = Math.floor((sec_num - hours * 3600) / 60);
			var seconds = sec_num - hours * 3600 - minutes * 60;

			if (hours < 10) {
				hours = '0' + hours;
			}
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			if (seconds < 10) {
				seconds = '0' + seconds;
			}

			document.querySelector('.duration--' + param).innerText = minutes + ':' + seconds;
		});

		progress.addEventListener('click', function (e) {
			var percent = e.offsetX / this.offsetWidth;
			video.currentTime = percent * video.duration;
			progress.value = percent / 100;
		});
	}
};

//-------------------------------------
//	PARALLAX MOBILE
//-------------------------------------
const parallaxMobile = () => {
	let windowWidth = window.innerWidth;

	let paramMobile1 = windowWidth >= 800 ? '0px, 80px, 0px' : '0px, 0px, 0px';
	let paramMobile2 = windowWidth >= 800 ? '0px, -80px, 0px' : '0px, 0px, 0px';

	var controller = new ScrollMagic.Controller();

	let mobile1 = TweenMax.to('#parallax-mobile-01', 2, {
		transform: 'translate3d(' + paramMobile1 + ')'
	});
	let mobile2 = TweenMax.to('#parallax-mobile-02', 2, {
		transform: 'translate3d(' + paramMobile2 + ')'
	});

	let scene = new ScrollMagic.Scene({
			triggerElement: '#trigger',
			duration: '140%'
		})
		.setTween(mobile1)
		.addTo(controller);
	let scene2 = new ScrollMagic.Scene({
			triggerElement: '#trigger',
			duration: '140%'
		})
		.setTween(mobile2)
		.addTo(controller);
};

//-------------------------------------
//	RESPONSIVE
//-------------------------------------
const responsive = () => {
	// Parallax mobile
	parallaxMobile();
};

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
const main = () => {
	// Loader
	document.querySelector(".loader").style.opacity = 0;
	setTimeout(() => {
		document.querySelector(".loader").style.zIndex = -24;
	}, 1200);

	// Display
	document.querySelector('nav').classList.add('enable');
	document.querySelector('.menu-btn').classList.add('enable');
	document.querySelector('header').classList.add('enable');
	document.querySelector('.header--text').classList.add('enable');
	for (let i = 0; i < document.querySelectorAll('.container').length; i++) {
		document.querySelectorAll('.container')[i].classList.add('enable');
	}

	displayContentPage(idProjectContent);

	// Parallax mobile
	parallaxMobile();

	// Parallax section
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter',
			duration: '200%'
		}
	});

	new ScrollMagic.Scene({
			triggerElement: '#parallax-bg-01'
		})
		.setTween('#parallax-bg-01 div', {
			y: '30%',
			ease: Linear.easeNone
		})
		.addTo(controller);

	new ScrollMagic.Scene({
			triggerElement: '#parallax-bg-02'
		})
		.setTween('#parallax-bg-02 div', {
			y: '30%',
			ease: Linear.easeNone
		})
		.addTo(controller);
};

//-------------------------------------
//	INITIALIZE
//-------------------------------------
var nameProjectActive = nameProject();
var idProjectContent = idProject();
var idProjectActive = idProject() + 1;
var idNextProject = idProject() + 2;

document.onload = main();
window.onresize = responsive;