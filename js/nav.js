//-------------------------------------
//	DISPLAY PROJECT
//-------------------------------------
function displayProject(project) {
	let windowWidth = window.innerWidth;

	letterAlgmt();
	resizeBackground();
	changeLogoColor();

	//Mobile
	if (windowWidth <= 650) {
		let imgNumber = document.querySelectorAll(project + ' .project__visuel--mobile img')
			.length;
		for (let i = 0; i < imgNumber; i++) {
			document
				.querySelectorAll(project + ' .project__visuel--mobile img')[i].classList.add('enable');
		}
		d.q(project + ' .project__visuel--mobile').classList.add('enable');
		d.q(project + ' .description__number-shadow--mobile').classList.add('enable');
		d.q(project + ' .description__title--mobile h2').classList.add('enable');
		d.q(project + ' .description__info--mobile p').classList.add('enable');
		d.q(project + '.project--mobile .btn').classList.add('enable');
		d.q(project + ' .project__content').classList.add('enable');

		//Desktop
	} else {
		let imgNumber = document.querySelectorAll(project + ' .project__visuel img').length;
		for (let i = 0; i < imgNumber; i++) {
			document
				.querySelectorAll(project + ' .project__visuel img')[i].classList.add('enable');
		}
		d.q(project + ' .project__visuel').classList.add('enable');
		d.q(project + ' .description__number').classList.add('enable');
		d.q(project + ' .description__title h2').classList.add('enable');
		d.q(project + ' .description__info p').classList.add('enable');
		d.q(project + ' .description p').classList.add('enable');
		d.q(project + ' .description__wrapper .btn').classList.add('enable');
	}
}

//-------------------------------------
//	HIDE PROJECT
//-------------------------------------
function hideProject(project) {
	let windowWidth = window.innerWidth;

	//Mobile
	if (windowWidth <= 650) {
		let imgNumber = document.querySelectorAll(project + ' .project__visuel--mobile img')
			.length;
		for (let i = 0; i < imgNumber; i++) {
			document
				.querySelectorAll(project + ' .project__visuel--mobile img')[i].classList.remove('enable');
		}
		d.q(project + ' .project__visuel--mobile').classList.remove('enable');
		d.q(project + ' .description__number-shadow--mobile').classList.remove('enable');
		d.q(project + ' .description__title--mobile h2').classList.remove('enable');
		d.q(project + ' .description__info--mobile p').classList.remove('enable');
		d.q(project + '.project--mobile .btn').classList.remove('enable');
		d.q(project + ' .project__content').classList.remove('enable');

		//Desktop
	} else {
		let imgNumber = document.querySelectorAll(project + ' .project__visuel img').length;
		for (let i = 0; i < imgNumber; i++) {
			document
				.querySelectorAll(project + ' .project__visuel img')[i].classList.remove('enable');
		}
		d.q(project + ' .project__visuel').classList.remove('enable');
		d.q(project + ' .description__number').classList.remove('enable');
		d.q(project + ' .description__title h2').classList.remove('enable');
		d.q(project + ' .description__info p').classList.remove('enable');
		d.q(project + ' .description p').classList.remove('enable');
		d.q(project + ' .description__wrapper .btn').classList.remove('enable');
	}
}

//-------------------------------------
//	BTN SEE MY WORK
//-------------------------------------
function seeMyWork() {
	//All
	let windowWidth = window.innerWidth;
	d.q('.home').classList.add('disable');
	d.q('#project-01').classList.add('enable');

	letterAlgmt();

	//Mobile
	if (windowWidth <= 650) {
		d.q('.number--active').textContent = '02';
		displayProject('#project-01');

		//Desktop
	} else {
		navActiveItem(2);
		displayProject('#project-01');
	}
}

function returnProjects() {
	//All
	let windowWidth = window.innerWidth;
	d.q('.contact__wrapper').classList.add('disable');
	d.q('#project-04').classList.add('enable');

	//Mobile
	if (windowWidth <= 650) {
		d.q('.number--active').textContent = '05';
		displayProject('#project-04');

		//Desktop
	} else {
		navActiveItem(5);
		displayProject('#project-04');
	}
}

//-------------------------------------
//	ACTIVE ITEM
//-------------------------------------
function navActiveItem(param) {
	for (let n = 0; n < Object.keys(nav).length; n++) {
		document.querySelectorAll('.nav__items p')[n].classList.remove('item--active');
	}
	d.q('.nav__items p:nth-child(' + param + ')').classList.add('item--active');
}

//-------------------------------------
//	NAVIGATION • DESKTOP
//-------------------------------------
function navDesktop(direction = null, param = null) {
	if (param === null && direction === 'next') {
		param = parseInt(d.q('.project.enable').id.split('-')[1]) + 2;
	} else if (param === null && direction === 'prev') {
		param = parseInt(d.q('.project.enable').id.split('-')[1]);
	}

	//Get total of item of nav
	let totalItemNav = Object.keys(nav).length;

	//Get number of item clicked
	let projectClicked = parseInt(param) - 1;
	let itemClicked = parseInt(param);

	//Item active
	let projectActive = parseInt(d.q('.project.enable').id.substr(-1));

	//Update number navigation
	navActiveItem(projectClicked + 1);

	//Get id to display and hide
	let idToDisplay = '#project-0' + projectClicked;
	let idToHide = '#' + d.q('.project.enable').id;

	//Display projects
	if (
		projectClicked < totalItemNav - 1 &&
		projectClicked !== 0 &&
		projectClicked !== projectActive
	) {
		hideProject(idToHide);
		setTimeout(function () {
			d.q(idToHide).classList.remove('enable');
			d.q(idToDisplay).classList.add('enable');
			displayProject(idToDisplay);
		}, 800);

		//Display home
	} else if (projectClicked === 0) {
		d.q('.home').classList.remove('disable');
		changeLogoColor();

		hideProject(idToHide);
		setTimeout(function () {
			d.q(idToHide).classList.remove('enable');
		}, 700);

		//Display contact
	} else if (itemClicked == totalItemNav) {
		d.q('.contact__wrapper').classList.remove('disable');
		changeLogoColor();

		hideProject(idToHide);
		setTimeout(function () {
			d.q(idToHide).classList.remove('enable');
			d.q('.bubble--group:nth-child(1) .bubble').classList.add('enable');
			d.q('.bubble--group:nth-child(1) .bubble--answer').classList.add('enable');
		}, 700);
	}
}

//-------------------------------------
//	NAVIGATION • MOBILE
//-------------------------------------
function navMobile(param) {
	//Get total of item of nav
	let totalItemNav = Object.keys(nav).length;

	//Get number of item clicked
	let itemActive = parseInt(d.q('.number--active').innerHTML);
	let itemClicked = itemActive + param;

	//Get id to display and hide
	let idToDisplay = '#project-0' + (itemClicked - 1);
	let idToHide = '#project-0' + (itemActive - 1);

	//Display projects
	if (itemClicked < totalItemNav && itemClicked !== 1) {
		d.q('.number--active').textContent = '0' + itemClicked;
		hideProject(idToHide);
		setTimeout(function () {
			d.q(idToHide).classList.remove('enable');
			d.q(idToDisplay).classList.add('enable');
			displayProject(idToDisplay);
		}, 600);

		//Display home
	} else if (itemClicked == 1) {
		d.q('.number--active').textContent = '01';
		d.q('.home').classList.remove('disable');
		changeLogoColor();

		//Display contact
	} else if (itemClicked == totalItemNav) {
		d.q('.contact__wrapper').classList.remove('disable');
		changeLogoColor();
	}
}

//-------------------------------------
//	MENU
//-------------------------------------
function displayMenu() {
	//All
	let windowWidth = window.innerWidth;
	d.q('.menu__wrapper').classList.toggle('disable');

	if (d.q('.menu__wrapper').classList.contains('disable')) {

		d.q('.menu__wrapper').style.opacity = '0';
		d.q('.menu__wrapper').style.zIndex = '-1000';
		setTimeout(() => {
			d.q('.menu__wrapper').style.display = 'none';
		}, 400);
	} else {
		d.q('.menu__wrapper').style.display = 'block';
		d.q('.menu__wrapper').style.zIndex = '50';
		setTimeout(() => {
			d.q('.menu__wrapper').style.opacity = '1';
		}, 100);
	}

	d.q('.menu__icon--open').classList.toggle('enable');
	d.q('.menu__icon--close').classList.toggle('enable');
	d.q('body').classList.toggle('menu-visible');

	//Mobile
	if (windowWidth <= 650) {
		d.q('.links').classList.toggle('menu-visible');
		d.q('.links').classList.toggle('enable');
	}

	letterAlgmtMenu();
}

function initProject(param) {
	document
		.querySelectorAll(param)
		.forEach(element =>
			element.classList.contains('enable') ? element.classList.remove('enable') : ''
		);
}

function navMenu(param) {
	let windowWidth = window.innerWidth;
	displayMenu();

	//Home
	if (param == 'home') {
		d.q('.home').classList.remove('disable');
		d.q('.contact__wrapper').classList.add('disable');
		changeLogoColor();

		if (windowWidth <= 650) {
			initProject('.project--mobile');
		} else {
			initProject('.project');
		}
	} else if (param == 'work') {
		//Work
		d.q('.home').classList.add('disable');
		d.q('.contact__wrapper').classList.add('disable');
		setTimeout(() => {
			d.q('#project-01').classList.add('enable');
			displayProject('#project-01');
		}, 500);

		if (windowWidth <= 650) {
			initProject('.project--mobile');
			d.q('.number--active').textContent = '02';
		} else {
			initProject('.project');
			navActiveItem(2);
		}
	} else if (param == 'contact') {
		// Contact
		initProject('.project');
		d.q('.contact__wrapper').classList.remove('disable');
		setTimeout(() => {
			d.q('.bubble--group:nth-child(1) .bubble').classList.add('enable');
			d.q('.bubble--group:nth-child(1) .bubble--answer').classList.add('enable');
			d.q('.home').classList.add('disable');
			changeLogoColor();
		}, 500);
	}
}

menuHoverProject = (number, name) => {
	d.q('.menu__project-visuel').classList.add('hide');

	setTimeout(() => {
		let urlPage = window.location.href;
		let positionSlash = urlPage.lastIndexOf('/') + 1;
		let imgPath =
			urlPage.substring(positionSlash) === 'index.html' ? './img/' : '../img/';

		d.q('.menu__project-visuel .mockup--desktop').src =
			imgPath + name + '_visuel-home.png';
		d.q('.menu__project-visuel .visuel__mockup+img').src = imgPath + name + '_letter.png';
		d.q('.menu__project-visuel').id = 'menu__project-visuel-0' + number;
	}, 500);

	setTimeout(() => {
		d.q('.menu__project-visuel').classList.remove('hide');
	}, 600);
};

//-------------------------------------
//	REDIRECTION -> PROJECT
//-------------------------------------
redirectToPageProject = varURL => {
	d.q('.transition-screen').classList.add('redirect-page');
	d.q('.transition-screen--white').classList.add('redirect-page');

	setTimeout(() => {
		let urlPage = window.location.href;
		let positionSlash = urlPage.lastIndexOf('/') + 1;
		let urlPath =
			urlPage.substring(positionSlash) === 'index.html' ? './projects/' : './';
		window.location.href = urlPath + varURL + '.html';
	}, 1500);
};

//-------------------------------------
//	ALIGNMENT LETTER MENU
//-------------------------------------
const letterAlgmtMenu = () => {
	let letter = document.querySelectorAll('.menu__wrapper .visuel__letter');

	for (let n = 0; n < letter.length; n++) {
		letter[n].style.marginLeft = -(letter[n].offsetWidth / 2) + 'px';
		letter[n].style.marginTop = -(letter[n].offsetHeight / 2) + 'px';
	}
};

//-------------------------------------
//	CHANGE LOGO
//-------------------------------------
const changeLogoColor = () => {
	if (
		d.q('.home').classList.contains('disable') &&
		d.q('.contact__wrapper').classList.contains('disable')
	) {
		d.q('.logo').src = 'img/logo--white.gif';
		d.q('.logo').classList.remove('logo--color');
	} else {
		d.q('.logo').src = 'img/logo.gif';
		d.q('.logo').classList.add('logo--color');
	}
};

//-------------------------------------
//	GENERATOR CONTENT • MENU
//-------------------------------------
const generateMenu = () => {
	let urlPage = window.location.href;
	let positionSlash = urlPage.lastIndexOf('/') + 1;
	let imgPath = urlPage.substring(positionSlash) === 'index.html' ? './img/' : '../img/';

	// MENU
	let menuProjects = '';
	let menuProjectsMobile = '';

	projects.forEach(menuProject => {
		menuProjects += `<div class="menu__project" id="menu__project-${menuProject.number}">
          <h3 onMouseenter="menuHoverProject(${menuProject.number}, '${
			menuProject.image
		}')" onClick="redirectToPageProject('${menuProject.href}')">${menuProject.title}</h3>
          <span>${menuProject.keywords}</span>
      </div>`;
	});

	d.q('.menu__projects').innerHTML = menuProjects;

	projects.forEach(menuProjectMobile => {
		menuProjectsMobile +=
			`<div class="menu__project--mobile" id="menu__project--mobile-${
				menuProjectMobile.number
			}" onClick="redirectToPageProject('${menuProjectMobile.href}')">
			<div class="menu__project-info--mobile">
				<div class="menu__project-visuel--mobile">
					<img src="` +
			imgPath +
			`${menuProjectMobile.image}_letter.png" alt="">
				</div>
				<div class="menu__project-title">
					<h3>${menuProjectMobile.title}</h3>
					<span>${menuProjectMobile.keywords}</span>
				</div>
			</div>
		
			<span class="nav__arrow nav__arrow--right">
				<span class="arrow__circle"></span>
			</span>
		</div>`;
	});

	d.q('.menu__projects-wrapper--mobile').innerHTML = menuProjectsMobile;
};