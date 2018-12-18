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
		let imgNumber = document.querySelectorAll(
			project + ' .project__visuel--mobile img'
		).length;
		for (let i = 0; i < imgNumber; i++) {
			document
				.querySelectorAll(project + ' .project__visuel--mobile img')
				[i].classList.add('enable');
		}
		document
			.querySelector(project + ' .project__visuel--mobile')
			.classList.add('enable');
		document
			.querySelector(project + ' .description__number-shadow--mobile')
			.classList.add('enable');
		document
			.querySelector(project + ' .description__title--mobile h2')
			.classList.add('enable');
		document
			.querySelector(project + ' .description__info--mobile p')
			.classList.add('enable');
		document
			.querySelector(project + '.project--mobile .btn')
			.classList.add('enable');
		document
			.querySelector(project + ' .project__content')
			.classList.add('enable');

		//Desktop
	} else {
		let imgNumber = document.querySelectorAll(project + ' .project__visuel img')
			.length;
		for (let i = 0; i < imgNumber; i++) {
			document
				.querySelectorAll(project + ' .project__visuel img')
				[i].classList.add('enable');
		}
		document
			.querySelector(project + ' .project__visuel')
			.classList.add('enable');
		document
			.querySelector(project + ' .description__number')
			.classList.add('enable');
		document
			.querySelector(project + ' .description__title h2')
			.classList.add('enable');
		document
			.querySelector(project + ' .description__info p')
			.classList.add('enable');
		document.querySelector(project + ' .description p').classList.add('enable');
		document
			.querySelector(project + ' .description__wrapper .btn')
			.classList.add('enable');
	}
}

//-------------------------------------
//	HIDE PROJECT
//-------------------------------------
function hideProject(project) {
	let windowWidth = window.innerWidth;

	//Mobile
	if (windowWidth <= 650) {
		let imgNumber = document.querySelectorAll(
			project + ' .project__visuel--mobile img'
		).length;
		for (let i = 0; i < imgNumber; i++) {
			document
				.querySelectorAll(project + ' .project__visuel--mobile img')
				[i].classList.remove('enable');
		}
		document
			.querySelector(project + ' .project__visuel--mobile')
			.classList.remove('enable');
		document
			.querySelector(project + ' .description__number-shadow--mobile')
			.classList.remove('enable');
		document
			.querySelector(project + ' .description__title--mobile h2')
			.classList.remove('enable');
		document
			.querySelector(project + ' .description__info--mobile p')
			.classList.remove('enable');
		document
			.querySelector(project + '.project--mobile .btn')
			.classList.remove('enable');
		document
			.querySelector(project + ' .project__content')
			.classList.remove('enable');

		//Desktop
	} else {
		let imgNumber = document.querySelectorAll(project + ' .project__visuel img')
			.length;
		for (let i = 0; i < imgNumber; i++) {
			document
				.querySelectorAll(project + ' .project__visuel img')
				[i].classList.remove('enable');
		}
		document
			.querySelector(project + ' .project__visuel')
			.classList.remove('enable');
		document
			.querySelector(project + ' .description__number')
			.classList.remove('enable');
		document
			.querySelector(project + ' .description__title h2')
			.classList.remove('enable');
		document
			.querySelector(project + ' .description__info p')
			.classList.remove('enable');
		document
			.querySelector(project + ' .description p')
			.classList.remove('enable');
		document
			.querySelector(project + ' .description__wrapper .btn')
			.classList.remove('enable');
	}
}

//-------------------------------------
//	BTN SEE MY WORK
//-------------------------------------
function seeMyWork() {
	//All
	let windowWidth = window.innerWidth;
	document.querySelector('.home').classList.add('disable');
	document.querySelector('#project-01').classList.add('enable');

	letterAlgmt();

	//Mobile
	if (windowWidth <= 650) {
		document.querySelector('.number--active').textContent = '02';
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
	document.querySelector('.contact__wrapper').classList.add('disable');
	document.querySelector('#project-04').classList.add('enable');

	//Mobile
	if (windowWidth <= 650) {
		document.querySelector('.number--active').textContent = '05';
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
		document
			.querySelectorAll('.nav__items p')
			[n].classList.remove('item--active');
	}
	document
		.querySelector('.nav__items p:nth-child(' + param + ')')
		.classList.add('item--active');
}

//-------------------------------------
//	NAVIGATION • DESKTOP
//-------------------------------------
function navDesktop(direction = null, param = null) {
	if (param === null && direction === 'next') {
		param =
			parseInt(document.querySelector('.project.enable').id.split('-')[1]) + 2;
	} else if (param === null && direction === 'prev') {
		param = parseInt(
			document.querySelector('.project.enable').id.split('-')[1]
		);
	}

	//Get total of item of nav
	let totalItemNav = Object.keys(nav).length;

	//Get number of item clicked
	let projectClicked = parseInt(param) - 1;
	let itemClicked = parseInt(param);

	//Item active
	let projectActive = parseInt(
		document.querySelector('.project.enable').id.substr(-1)
	);

	//Update number navigation
	navActiveItem(projectClicked + 1);

	//Get id to display and hide
	let idToDisplay = '#project-0' + projectClicked;
	let idToHide = '#' + document.querySelector('.project.enable').id;

	//Display projects
	if (
		projectClicked < totalItemNav - 1 &&
		projectClicked !== 0 &&
		projectClicked !== projectActive
	) {
		hideProject(idToHide);
		setTimeout(function() {
			document.querySelector(idToHide).classList.remove('enable');
			document.querySelector(idToDisplay).classList.add('enable');
			displayProject(idToDisplay);
		}, 800);

		//Display home
	} else if (projectClicked === 0) {
		document.querySelector('.home').classList.remove('disable');
		changeLogoColor();

		hideProject(idToHide);
		setTimeout(function() {
			document.querySelector(idToHide).classList.remove('enable');
		}, 700);

		//Display contact
	} else if (itemClicked == totalItemNav) {
		document.querySelector('.contact__wrapper').classList.remove('disable');
		changeLogoColor();

		hideProject(idToHide);
		setTimeout(function() {
			document.querySelector(idToHide).classList.remove('enable');
			document
				.querySelector('.bubble--group:nth-child(1) .bubble')
				.classList.add('enable');
			document
				.querySelector('.bubble--group:nth-child(1) .bubble--answer')
				.classList.add('enable');
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
	let itemActive = parseInt(
		document.querySelector('.number--active').innerHTML
	);
	let itemClicked = itemActive + param;

	//Get id to display and hide
	let idToDisplay = '#project-0' + (itemClicked - 1);
	let idToHide = '#project-0' + (itemActive - 1);

	//Display projects
	if (itemClicked < totalItemNav && itemClicked !== 1) {
		document.querySelector('.number--active').textContent = '0' + itemClicked;
		hideProject(idToHide);
		setTimeout(function() {
			document.querySelector(idToHide).classList.remove('enable');
			document.querySelector(idToDisplay).classList.add('enable');
			displayProject(idToDisplay);
		}, 600);

		//Display home
	} else if (itemClicked == 1) {
		document.querySelector('.number--active').textContent = '01';
		document.querySelector('.home').classList.remove('disable');
		changeLogoColor();

		//Display contact
	} else if (itemClicked == totalItemNav) {
		document.querySelector('.contact__wrapper').classList.remove('disable');
		changeLogoColor();
	}
}

//-------------------------------------
//	MENU
//-------------------------------------
function displayMenu() {
	//All
	let windowWidth = window.innerWidth;
	document.querySelector('.menu__wrapper').classList.toggle('disable');
	document.querySelector('.menu__icon--open').classList.toggle('enable');
	document.querySelector('.menu__icon--close').classList.toggle('enable');
	document.querySelector('body').classList.toggle('menu-visible');

	//Mobile
	if (windowWidth <= 650) {
		document.querySelector('.links').classList.toggle('menu-visible');
		document.querySelector('.links').classList.toggle('enable');
	}

	letterAlgmtMenu();
}

function initProject(param) {
	document
		.querySelectorAll(param)
		.forEach(element =>
			element.classList.contains('enable')
				? element.classList.remove('enable')
				: ''
		);
}

function navMenu(param) {
	let windowWidth = window.innerWidth;
	displayMenu();

	//Home
	if (param == 'home') {
		document.querySelector('.home').classList.remove('disable');
		document.querySelector('.contact__wrapper').classList.add('disable');
		changeLogoColor();

		if (windowWidth <= 650) {
			initProject('.project--mobile');
		} else {
			initProject('.project');
		}
	} else if (param == 'work') {
		//Work
		document.querySelector('.home').classList.add('disable');
		document.querySelector('.contact__wrapper').classList.add('disable');
		setTimeout(() => {
			document.querySelector('#project-01').classList.add('enable');
			displayProject('#project-01');
		}, 500);

		if (windowWidth <= 650) {
			initProject('.project--mobile');
			document.querySelector('.number--active').textContent = '02';
		} else {
			initProject('.project');
			navActiveItem(2);
		}
	} else if (param == 'contact') {
		// Contact
		initProject('.project');
		document.querySelector('.contact__wrapper').classList.remove('disable');
		setTimeout(() => {
			document
				.querySelector('.bubble--group:nth-child(1) .bubble')
				.classList.add('enable');
			document
				.querySelector('.bubble--group:nth-child(1) .bubble--answer')
				.classList.add('enable');
			document.querySelector('.home').classList.add('disable');
			changeLogoColor();
		}, 500);
	}
}

menuHoverProject = (number, name) => {
	document.querySelector('.menu__project-visuel').classList.add('hide');
	setTimeout(() => {
		let urlPage = window.location.href;
		let positionSlash = urlPage.lastIndexOf('/') + 1;
		let imgPath =
			urlPage.substring(positionSlash) === 'index.html' ? './img/' : '../img/';

		document.querySelector('.menu__project-visuel .mockup--desktop').src =
			imgPath + name + '_visuel-home.png';
		document.querySelector('.menu__project-visuel .visuel__mockup+img').src =
			imgPath + name + '_letter.png';
		document.querySelector('.menu__project-visuel').id =
			'menu__project-visuel-0' + number;
	}, 500);
	setTimeout(() => {
		document.querySelector('.menu__project-visuel').classList.remove('hide');
	}, 600);
};

//-------------------------------------
//	REDIRECTION -> PROJECT
//-------------------------------------
redirectToPageProject = varURL => {
	document.querySelector('.transition-screen').classList.add('redirect-page');
	setTimeout(() => {
		let urlPage = window.location.href;
		let positionSlash = urlPage.lastIndexOf('/') + 1;
		let urlPath =
			urlPage.substring(positionSlash) === 'index.html'
				? './projects-page/'
				: './';
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
		document.querySelector('.home').classList.contains('disable') &&
		document.querySelector('.contact__wrapper').classList.contains('disable')
	) {
		document.querySelector('.logo').src = 'img/logo--white.gif';
		document.querySelector('.logo').classList.remove('logo--color');
	} else {
		document.querySelector('.logo').src = 'img/logo.gif';
		document.querySelector('.logo').classList.add('logo--color');
	}
};

//-------------------------------------
//	GENERATOR CONTENT • MENU
//-------------------------------------
const generateMenu = () => {
	let urlPage = window.location.href;
	let positionSlash = urlPage.lastIndexOf('/') + 1;
	let imgPath =
		urlPage.substring(positionSlash) === 'index.html' ? './img/' : '../img/';

	// MENU
	let menuProjects = '';
	let menuProjectsMobile = '';

	projects.forEach(menuProject => {
		menuProjects += `<div class="menu__project" id="menu__project-${
			menuProject.number
		}">
          <h3 onMouseenter="menuHoverProject(${menuProject.number}, '${
			menuProject.image
		}')" onClick="redirectToPageProject('${menuProject.href}')">${
			menuProject.title
		}</h3>
          <span>${menuProject.keywords}</span>
      </div>`;
	});

	document.querySelector('.menu__projects').innerHTML = menuProjects;

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

	document.querySelector(
		'.menu__projects-wrapper--mobile'
	).innerHTML = menuProjectsMobile;
};
