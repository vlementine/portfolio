//-------------------------------------
//	RESPONSIVE
//-------------------------------------
const responsive = () => {
	let windowWidth = window.innerWidth;
	resizeBackground();

	letterAlgmt();

	if (initialWidth !== windowWidth) {
		if (windowWidth <= 650) {
			d.q(
				'.contact__description .description__title h2'
			).innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
			d.q('.home').classList.remove('disable');
			d.q('.btn__home').classList.add('btn__work--desktop', 'btn__work--mobile');
			if (!d.q('.project--mobile')) {
				d.q('.projects').innerHTML = contentMobile;
				d.q('.number--active').textContent = '01';
			}
		} else {
			if (windowWidth <= 1000) {
				d.q(
					'.contact__description .description__title h2'
				).innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
			} else {
				d.q(
					'.contact__description .description__title h2'
				).innerHTML = `Pour me contacter,<br>c’est par ici 👉`;
			}
			d.q('.btn__home').classList.replace('btn__work--mobile', 'btn__work--desktop');
			if (!d.q('.project')) {
				d.q('.projects').innerHTML = content;
			}
		}
	}
};

//-------------------------------------
//	REDIRECTION -> PROJECT
//-------------------------------------
const redirectionProject = varURL => {
	d.q('.transition-screen').classList.add('redirect-page');
	d.q('.transition-screen--white').classList.add('redirect-page');
	setTimeout(() => {
		window.location.href = './projects/' + varURL + '.html';
	}, 1500);
};

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
const main = () => {
	// Loader
	d.q('.loader').style.opacity = 0;
	setTimeout(() => {
		d.q('.loader').style.zIndex = -24;
	}, 1200);

	// Init
	resizeBackground();
	changeLogoColor();

	let windowWidth = window.innerWidth;
	d.q('.nav__items p:nth-child(1)').classList.add('item--active');

	if (windowWidth <= 650) {
		d.q(
			'.contact__description .description__title h2'
		).innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
		d.q('.home').classList.remove('disable');
		d.q('.btn__home').classList.add('btn__work--mobile');
		d.q('.btn__home').classList.remove('btn__work--desktop');
		d.q('.projects').innerHTML = contentMobile;
	} else {
		if (windowWidth <= 1000) {
			d.q(
				'.contact__description .description__title h2'
			).innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
		} else {
			d.q(
				'.contact__description .description__title h2'
			).innerHTML = `Pour me contacter,<br>c’est par ici 👉`;
		}
		d.q('.btn__home').classList.add('btn__work--desktop');
		d.q('.btn__home').classList.remove('btn__work--mobile');
		d.q('.projects').innerHTML = content;
	}
	d.q('.btn__home').addEventListener('click', seeMyWork);

	//Scroll function
	let lockScroll = false;

	const scrollDirection = direction => {
		if (!lockScroll) {
			lockScroll = true;

			if (direction == 'next') {
				//MOBILE
				if (windowWidth <= 650) {
					if (
						d.q('.number--active').textContent != '01' &&
						d.q('.contact__wrapper.disable')
					) {
						navMobile(+1);
					}
					//DESKTOP
				} else {
					if (d.q('.home:not(.disable)')) {
						seeMyWork();
					} else if (d.q('.contact__wrapper.disable')) {
						navDesktop(direction);
					}
				}
			} else if (direction == 'prev') {
				//MOBILE
				if (windowWidth <= 650) {
					if (d.q('.number--active').textContent != '01') {
						navMobile(-1);
					} else if (d.q('.contact__wrapper:not(.disable)')) {
						d.q('.home').classList.add('disable');
						d.q('.contact__wrapper').classList.add('disable');
						setTimeout(() => {
							d.q('#project-04').classList.add('enable');
							displayProject('#project-04');
						}, 500);
						initProject('.project--mobile');
						d.q('.number--active').textContent = '05';
					}
					//DESKTOP
				} else {
					if (
						d.q('.nav__items p:nth-child(1):not(.item--active)') &&
						d.q('.contact__wrapper.disable') &&
						d.q('.home.disable')
					) {
						navDesktop(direction);
					}
				}
			}
			window.setTimeout(() => {
				lockScroll = false;
			}, 1000);
		}
	};

	//Control keyboard
	document.addEventListener('keydown', e => {
		if (windowWidth <= 650) {
			if (e.keyCode == 37) {
				scrollDirection('prev');
			} else if (e.keyCode == 39) {
				scrollDirection('next');
			}
		} else {
			if (e.keyCode == 38) {
				scrollDirection('prev');
			} else if (e.keyCode == 40) {
				scrollDirection('next');
			}
		}
	});

	//Control scroll
	document.addEventListener('wheel', e => {
		if (windowWidth <= 650) {
			if (e.deltaX > 100) {
				scrollDirection('next');
			} else if (e.deltaX < -100) {
				scrollDirection('prev');
			}
		} else {
			if (e.deltaY > 50) {
				scrollDirection('next');
			} else if (e.deltaY < -50) {
				scrollDirection('prev');
			}
		}
	});

	//Control touch
	var startX = 0;
	var startY = 0;

	const touchStart = event => {
		startX = event.touches[0].pageX;
		startY = event.touches[0].pageY;
	};

	const touchMove = event => {
		if (navigator.userAgent.match(/Android/i)) {
			event.preventDefault();
		}

		let offsetX = 0;
		let offsetY = 0;
		offsetX = startX - event.touches[0].pageX;
		offsetY = startY - event.touches[0].pageY;

		if (offsetX > 90) {
			scrollDirection('next');
		} else if (offsetX < -90) {
			scrollDirection('prev');
		} else if (d.q('.number--active').textContent == '01' && offsetY > 80) {
			seeMyWork();
		}
	};

	document.addEventListener('touchstart', touchStart);
	document.addEventListener('touchmove', touchMove);

	//-------------------------------------
	//	CLEAN URL
	//-------------------------------------
	let urlNumber = window.location.hash.substring(1);
	window.history.replaceState({}, '', 'index.html');

	console.log(urlNumber);

	generateMenu();

	if (urlNumber == 1 || urlNumber == 2 || urlNumber == 3 || urlNumber == 4) {
		d.q('.home').classList.add('disable');
		d.q('.contact__wrapper').classList.add('disable');

		setTimeout(() => {
			d.q('#project-0' + urlNumber).classList.add('enable');
			displayProject('#project-0' + urlNumber);
		}, 500);

		if (windowWidth <= 650) {
			initProject('.project--mobile');
			d.q('.number--active').textContent = '0' + (parseInt(urlNumber) + 1);
		} else {
			initProject('.project');
			navActiveItem(parseInt(urlNumber) + 1);
		}
	} else if (urlNumber == 'home' || urlNumber == 'work' || urlNumber == 'contact') {
		displayMenu();
		navMenu(urlNumber);
	}
};

//-------------------------------------
//	ALIGNMENT LETTER
//-------------------------------------
const letterAlgmt = () => {
	let windowWidth = window.innerWidth;
	let letter = document.querySelectorAll('.projects .visuel__letter');

	if (windowWidth > 1000) {
		for (let n = 0; n < letter.length; n++) {
			letter[n].style.marginLeft = -(letter[n].offsetWidth / 2) + 'px';
			letter[n].style.marginTop = -(letter[n].offsetHeight / 2) + 'px';
		}
	} else if (windowWidth <= 650) {
		for (let n = 0; n < letter.length; n++) {
			letter[n].style.marginLeft = '0px';
			letter[n].style.marginTop = '0px';
		}
	} else {
		for (let n = 0; n < letter.length; n++) {
			letter[n].style.marginLeft = -(letter[n].offsetWidth / 2) + 'px';
			letter[n].style.marginTop = '0px';
		}
	}
};

//-------------------------------------
//	FIX ADRESS BAR BUG ON MOBILE
//-------------------------------------
const resizeBackground = () => {
	let homeH = d.q('.home');
	let projectsH = d.q('.projects');
	let projectH = document.querySelectorAll('.project');
	let contactH = d.q('.contact__wrapper');

	homeH.style.height = window.innerHeight + 'px';
	projectsH.style.height = window.innerHeight + 'px';
	for (let n = 0; n < projectH.length; n++) {
		projectH[n].style.height = window.innerHeight + 'px';
	}
	contactH.style.height = window.innerHeight + 'px';
};

//-------------------------------------
//	INITIALIZE
//-------------------------------------
var initialWidth = window.innerWidth;
var d = document;
d.q = document.querySelector;

document.onload = main();
window.onresize = responsive;
