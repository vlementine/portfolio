//-------------------------------------
//	GENERATE CONTENT PAGE
//-------------------------------------
const displayContentPage = idProject => {
	document.querySelector('h1').innerText = projects[idProject].title;
	document.querySelector('p.subtitle').innerText = projects[idProject].keywords;
	document.querySelector('.project-intro p').innerText = projects[idProject].description;
	document.querySelector('.project-intro a.btn').href = projects[idProject].href;
	document.querySelector('.next-project__name').innerText = projects[idProject].nextProject;
	document.querySelector('.next-project__name').href = projects[idProject].hrefNextProject;
	generateMenu();
};

//-------------------------------------
//	REDIRECTION -> INDEX
//-------------------------------------
const redirectionProject = () => {
	document.querySelector('.transition-screen').classList.add('redirect-page');
	document
		.querySelector('.transition-screen--white')
		.classList.add('redirect-page');
	setTimeout(() => {
		window.location.href = '../index.html#' + (ploum + 1);
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
//	PROJECT'S ID
//-------------------------------------
const idProject = () => {
	// Generate good project ID from URL
	let initialURL = window.location.href;
	let positionAfterHyphen = initialURL.lastIndexOf('/') + 1;
	let positionHtml = initialURL.lastIndexOf('.html') + 1;
	let nameProject = initialURL.substring(positionAfterHyphen, positionHtml - 1);

	var idProject = 0;

	switch (nameProject) {
		case 'le-trianon':
			idProject = 0;
			break;
		case 'blog-zenchef':
			idProject = 1;
			break;
		case 'alcatraz-1962':
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
var ploum = idProject();

const main = () => {
	//Display
	document.querySelector('header').classList.add('enable');
	document.querySelector('.header--text').classList.add('enable');
	// document.querySelector('.project__summary h1').classList.add('enable');
	// document.querySelector('.type--shadow').classList.add('enable');
	// for (let i = 0; i < 3; i++) {
	//   document.querySelectorAll('.project-page .project__info .info span')[i].classList.add('enable');
	//   document.querySelectorAll('.project-page .project__info .info p')[i].classList.add('enable');
	// }
	// document.querySelector('.project__intro').classList.add('enable');
	// document.querySelector('.project__img span').classList.add('enable');
	// document.querySelector('.project__img img').classList.add('enable');

	let ploum = idProject();
	displayContentPage(ploum);

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
};

//-------------------------------------
//	INITIALIZE
//-------------------------------------
document.onload = main();
window.onresize = responsive;
