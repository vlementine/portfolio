//-------------------------------------
//	GENERATE CONTENT PAGE
//-------------------------------------
const displayContentPage = idProject => {
	console.log(idProject);
	document.querySelector('h1').innerText = projects[idProject].title;
	document.querySelector('p.subtitle').innerText = projects[idProject].keywords;
	document.querySelector('.project-intro a.btn').href = projects[idProject].href;
	document.querySelector('.next-project__name').innerText =
		projects[idProject].nextProject;
	document.querySelector('.next-project__name').href =
		projects[idProject].hrefNextProject;
	generateMenu();
};

//-------------------------------------
//	REDIRECTION -> INDEX
//-------------------------------------
const redirectionProject = () => {
	document.querySelector('.transition-screen').classList.add('redirect-page');
	document.querySelector('.transition-screen--white').classList.add('redirect-page');
	setTimeout(() => {
		window.location.href = '../index.html#' + (idProjectContent + 1);
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
			nameNextProject = 'le-trianon';
			break;
		case 2:
			nameNextProject = 'zenchef';
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
	let windowWidth = window.innerWidth;

	parallaxMobile();
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
		case 'le-trianon':
			idProject = 0;
			break;
		case 'zenchef':
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
//	MAIN FUNCTION
//-------------------------------------
const main = () => {
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
