//-------------------------------------
//	GENERATE CONTENT PAGE
//-------------------------------------
const displayContentPage = idProject => {
	document.querySelector('h1').innerText = projects[idProject].title;
	document.querySelector('p.subtitle').innerText = projects[idProject].keywords;
	document.querySelector('.project-intro p').innerText =
		projects[idProject].description;
	document.querySelector('.project-intro a.btn').href =
		projects[idProject].link;
	// document.querySelector('.project__img img').src = '../img/' + projects[idProject].image + '_project-01.png';
	//document.querySelector('.next-project__visuel img').src = '../img/' + projects[idProject].image + '_next-project.png';

	generateMenu();
};

//-------------------------------------
//	REDIRECTION -> INDEX
//-------------------------------------
const redirectionProject = varURL => {
	document.querySelector('.white-screen').style.display = 'block';
	document.querySelector('.white-screen').classList.add('redirect-page');
	setTimeout(() => {
		window.location.href = '../index.html#' + varURL;
	}, 1500);
};

//-------------------------------------
//	SLIDER
//-------------------------------------
const calcHeightSlider = () => {
	document.querySelector(
		'.slider__wrapper'
	).style.height = document.querySelector('.slider__pictures').clientHeight;
};

const slider = number => {
	let windowWidth = window.innerWidth;

	let slide = document.querySelector('.slide');
	let slideW = slide.clientWidth;
	let slideM =
		parseInt(getComputedStyle(slide).marginLeft) +
		parseInt(getComputedStyle(slide).marginRight);

	let calcTranslate =
		windowWidth <= 650
			? 'calc((-80vw * ' + number + ') - (' + slideM + 'px * ' + number + '))'
			: 'calc((-60vw * ' + number + ') - (' + slideM + 'px * ' + number + '))';

	let bulletLength = document.querySelectorAll('.slider-nav__bullet').length;

	// Remove class active to all bullets
	for (let i = 0; i < bulletLength; i++) {
		document
			.querySelectorAll('.slider-nav__bullet')
			[i].classList.remove('bullet--active');
	}

	// Add active class to bullet
	document
		.querySelector('.slider-nav__bullet:nth-child(' + (number + 1) + ')')
		.classList.add('bullet--active');

	// Move slides
	document.querySelector('.slider__pictures').style.transform =
		'translate(' + calcTranslate + ')';
};

//-------------------------------------
//	RESPONSIVE
//-------------------------------------
const responsive = () => {
  calcHeightSlider();

  let windowWidth = window.innerWidth;

	// Align slider on responsive
	let bulletsSlider = document.querySelectorAll('.slider-nav__bullet');

	bulletsSlider.forEach(element => {
		if (element.classList.contains('bullet--active')) {
      let slideActive = element.textContent - 1;
      console.log(slideActive);

      let calcTranslate =
        windowWidth <= 650
          ? 'calc((-80vw * ' + slideActive + ') - (' + '20px * ' + slideActive + '))'
          : 'calc((-60vw * ' + slideActive + ') - (' + '50px * ' + slideActive + '))';
      console.log(calcTranslate);
      
      // Move slides
      document.querySelector('.slider__pictures').style.transform =
        'translate(' + calcTranslate + ')';
		}
	});
};

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
const main = () => {
	//Display
	// document.querySelector('header').classList.add('enable');
	// document.querySelector('.project__summary h1').classList.add('enable');
	// document.querySelector('.type--shadow').classList.add('enable');
	// for (let i = 0; i < 3; i++) {
	//   document.querySelectorAll('.project-page .project__info .info span')[i].classList.add('enable');
	//   document.querySelectorAll('.project-page .project__info .info p')[i].classList.add('enable');
	// }
	// document.querySelector('.project__intro').classList.add('enable');
	// document.querySelector('.project__img span').classList.add('enable');
	// document.querySelector('.project__img img').classList.add('enable');

	// Generate good project ID from URL
	let initialURL = window.location.href;
	let positionAfterHyphen = initialURL.lastIndexOf('/') + 1;
	let positionHtml = initialURL.lastIndexOf('.html') + 1;
	let nameProject = initialURL.substring(positionAfterHyphen, positionHtml - 1);

	// Height of slider
	calcHeightSlider();

	let idProject = 0;

	switch (nameProject) {
		case 'back-to-your-dream':
			idProject = 0;
			break;
		case 'blog-zenchef':
			idProject = 1;
			break;
		case 'alcatraz-1962':
			idProject = 2;
			break;
		case 'le-trianon':
			idProject = 3;
			break;
	}

	displayContentPage(idProject);
};

//-------------------------------------
//	INITIALIZE
//-------------------------------------
document.onload = main();
window.onresize = responsive;
