//-------------------------------------
//	DISPLAY PROJECT
//-------------------------------------
function displayProject(project) {
  let windowWidth = window.innerWidth;

  //Mobile
  if (windowWidth <= 650) {
    let imgNumber = document.querySelectorAll(project + ' .project__visuel--mobile img').length;
    for (let i = 0; i < imgNumber; i++) {
      document.querySelectorAll(project + ' .project__visuel--mobile img')[i].classList.add('enable');
    }
    document.querySelector(project + ' .project__visuel--mobile').classList.add('enable');
    document.querySelector(project + ' .description__number-shadow--mobile').classList.add('enable');
    document.querySelector(project + ' .description__title--mobile h2').classList.add('enable');
    document.querySelector(project + ' .description__info--mobile p').classList.add('enable');
    document.querySelector(project + '.project--mobile .btn').classList.add('enable');
    document.querySelector(project + ' .project__content').classList.add('enable');

    //Desktop
  } else {
    let imgNumber = document.querySelectorAll(project + ' .project__visuel img').length;
    for (let i = 0; i < imgNumber; i++) {
      document.querySelectorAll(project + ' .project__visuel img')[i].classList.add('enable');
    }
    document.querySelector(project + ' .project__visuel').classList.add('enable');
    document.querySelector(project + ' .description__number').classList.add('enable');
    document.querySelector(project + ' .description__title h2').classList.add('enable');
    document.querySelector(project + ' .description__info p').classList.add('enable');
    document.querySelector(project + ' .description p').classList.add('enable');
    document.querySelector(project + ' .description__wrapper .btn').classList.add('enable');
  }
}

//-------------------------------------
//	HIDE PROJECT
//-------------------------------------
function hideProject(project) {
  let windowWidth = window.innerWidth;

  //Mobile
  if (windowWidth <= 650) {
    let imgNumber = document.querySelectorAll(project + ' .project__visuel--mobile img').length;
    for (let i = 0; i < imgNumber; i++) {
      document.querySelectorAll(project + ' .project__visuel--mobile img')[i].classList.remove('enable');
    }
    document.querySelector(project + ' .project__visuel--mobile').classList.remove('enable');
    document.querySelector(project + ' .description__number-shadow--mobile').classList.remove('enable');
    document.querySelector(project + ' .description__title--mobile h2').classList.remove('enable');
    document.querySelector(project + ' .description__info--mobile p').classList.remove('enable');
    document.querySelector(project + '.project--mobile .btn').classList.remove('enable');
    document.querySelector(project + ' .project__content').classList.remove('enable');

    //Desktop
  } else {
    let imgNumber = document.querySelectorAll(project + ' .project__visuel img').length;
    for (let i = 0; i < imgNumber; i++) {
      document.querySelectorAll(project + ' .project__visuel img')[i].classList.remove('enable');
    }
    document.querySelector(project + ' .project__visuel').classList.remove('enable');
    document.querySelector(project + ' .description__number').classList.remove('enable');
    document.querySelector(project + ' .description__title h2').classList.remove('enable');
    document.querySelector(project + ' .description__info p').classList.remove('enable');
    document.querySelector(project + ' .description p').classList.remove('enable');
    document.querySelector(project + ' .description__wrapper .btn').classList.remove('enable');
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
    document.querySelectorAll('.nav__items p')[n].classList.remove('item--active');
  }
  document.querySelector('.nav__items p:nth-child(' + param + ')').classList.add('item--active');
}

//-------------------------------------
//	NAVIGATION • DESKTOP
//-------------------------------------

function navDesktop(direction = null, param = null) {
  if (param === null && direction === 'next') {
    param = parseInt(document.querySelector('.project.enable').id.split('-')[1]) + 2;
  } else if (param === null && direction === 'prev') {
    param = parseInt(document.querySelector('.project.enable').id.split('-')[1]);
  }

  //Get the total of item of nav
  let totalItemNav = Object.keys(nav).length;

  //Get the number of item clicked
  let projectClicked = parseInt(param) - 1;
  let itemClicked = parseInt(param);

  //Item active
  let projectActive = parseInt(document.querySelector('.project.enable').id.substr(-1));

  //Update number navigation
  navActiveItem(projectClicked + 1);

  //Get id to display and hide
  let idToDisplay = '#project-0' + projectClicked;
  let idToHide = '#' + document.querySelector('.project.enable').id;

  //Display projects
  if (projectClicked < totalItemNav - 1 && projectClicked !== 0 && projectClicked !== projectActive) {
    hideProject(idToHide);
    setTimeout(function() {
      document.querySelector(idToHide).classList.remove('enable');
      document.querySelector(idToDisplay).classList.add('enable');
      displayProject(idToDisplay);
    }, 800);

    //Display home
  } else if (projectClicked === 0) {
    document.querySelector('.home').classList.remove('disable');
    hideProject(idToHide);
    setTimeout(function() {
      document.querySelector(idToHide).classList.remove('enable');
    }, 700);
    //Display contact
  } else if (itemClicked == totalItemNav) {
    document.querySelector('.contact__wrapper').classList.remove('disable');
    hideProject(idToHide);
    setTimeout(function() {
      document.querySelector(idToHide).classList.remove('enable');
      document.querySelector('.bubble--group:nth-child(1) .bubble').classList.add('enable');
      document.querySelector('.bubble--group:nth-child(1) .bubble--answer').classList.add('enable');
    }, 700);
  }
}

//-------------------------------------
//	NAVIGATION • MOBILE
//-------------------------------------
function navMobile(param) {
  //Get the total of item of nav
  let totalItemNav = Object.keys(nav).length;

  //Get the number of item clicked
  let itemActive = parseInt(document.querySelector('.number--active').innerHTML);
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

    //Display contact
  } else if (itemClicked == totalItemNav) {
    document.querySelector('.contact__wrapper').classList.remove('disable');
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
}

function initProject(param) {
  document
    .querySelectorAll(param)
    .forEach(element => (element.classList.contains('enable') ? element.classList.remove('enable') : ''));
}

function navMenu(param) {
  let windowWidth = window.innerWidth;
  displayMenu();

  //Home
  if (param == 'home') {
    document.querySelector('.home').classList.remove('disable');
    document.querySelector('.contact__wrapper').classList.add('disable');
    if (windowWidth <= 650) {
      initProject('.project--mobile');
    } else {
      initProject('.project');
    }
  } else if (param == 'work') {
    //Work
    document.querySelector('.home').classList.add('disable');
    document.querySelector('.contact__wrapper').classList.add('disable');
    setTimeout(function() {
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
      document.querySelector('.bubble--group:nth-child(1) .bubble').classList.add('enable');
      document.querySelector('.bubble--group:nth-child(1) .bubble--answer').classList.add('enable');
      document.querySelector('.home').classList.add('disable');
    }, 500);
  }
}

menuHoverProject = (number, name) => {
  document.querySelector('.menu__project-visuel').classList.add('hide');
  setTimeout(function() {
    let urlPlop = window.location.href;
    let positionSlash = urlPlop.lastIndexOf('/') + 1;
    let imgPath = urlPlop.substring(positionSlash) === 'index.html' ? './img/' : '../img/';

    document.querySelector('.menu__project-visuel .mockup--desktop').src = imgPath + name + '_visuel-home.png';
    document.querySelector('.menu__project-visuel .visuel__mockup+img').src = imgPath + name + '_letter.png';
    document.querySelector('.menu__project-visuel').id = 'menu__project-0' + number;
  }, 500);
  setTimeout(function() {
    document.querySelector('.menu__project-visuel').classList.remove('hide');
  }, 600);
}

function redirectToPageProject(varURL) {
  document.querySelector('.white-screen').classList.add('redirect-page');
  setTimeout(() => {
    let urlPlop = window.location.href;
    let positionSlash = urlPlop.lastIndexOf('/') + 1;
    if (urlPlop.substring(positionSlash) === 'index.html') {
      window.location.href = './projects-page/project-page--' + varURL + '.html';
    } else {
      window.location.href = './project-page--' + varURL + '.html';
    }
  }, 1500);
}
