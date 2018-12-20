const responsive = () => {
	calcHeightSlider();

	// Align slider on responsive
	let bulletsSlider = document.querySelectorAll('.slider-nav__bullet');

	bulletsSlider.forEach(element => {
		if (element.classList.contains('bullet--active')) {
			let slideActive = element.textContent - 1;

			let calcTranslate =
				windowWidth <= 650
					? 'calc((-80vw * ' +
					  slideActive +
					  ') - (' +
					  '20px * ' +
					  slideActive +
					  '))'
					: 'calc((-60vw * ' +
					  slideActive +
					  ') - (' +
					  '50px * ' +
					  slideActive +
					  '))';

			// Move slides
			document.querySelector('.slider__pictures').style.transform =
				'translate(' + calcTranslate + ')';
		}
	});
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
//	LOAD PARTIAL
//-------------------------------------
function loadPartial(name) {
	fetch(`/${name}.html`)
		.then(res => res.text())
		.then(htmlString => {
			document.getElementById(`load-${name}`).innerHTML = htmlString;
		});
}

loadPartial('nav');
loadPartial('footer');

// let navHTML = document.getElementById('load-nav').innerHtml;
// document.getElementById('load-nav').innerHtml = navHTML.replace(
// 	'[[projectId]]',
// 	4
// );
