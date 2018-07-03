//-------------------------------------
//	RESPONSIVE
//-------------------------------------
const responsive = () => {
  let windowWidth = window.innerWidth;

  if (initialWidth !== windowWidth) {
    if (windowWidth <= 650) {
      document.querySelector(
        '.contact__description .description__title h2'
      ).innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
      document.querySelector('.home').classList.remove('disable');
      document.querySelector('.btn__home').classList.add('btn__work--desktop', 'btn__work--mobile');
      if (!document.querySelector('.project--mobile')) {
        document.querySelector('.projects').innerHTML = contentMobile;
        document.querySelector('.number--active').textContent = '01';
      }
    }
  } else {
    document.querySelector(
      '.contact__description .description__title h2'
    ).innerHTML = `Pour me contacter,<br>c’est par ici 👉`;
    document.querySelector('.btn__home').classList.replace('btn__work--mobile', 'btn__work--desktop');
    if (!document.querySelector('.project')) {
      document.querySelector('.projects').innerHTML = content;
    }
  }
};

//-------------------------------------
//	REDIRECTION -> PROJECT
//-------------------------------------
const redirectionProject = varURL => {
  document.querySelector('.white-screen').classList.add('redirect-page');
  setTimeout(() => {
    window.location.href = './projects-page/project-page--' + varURL + '.html';
  }, 1500);
};

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
const main = () => {
  let windowWidth = window.innerWidth;
  document.querySelector('.nav__items p:nth-child(1)').classList.add('item--active');

  if (windowWidth <= 650) {
    document.querySelector(
      '.contact__description .description__title h2'
    ).innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
    document.querySelector('.home').classList.remove('disable');
    document.querySelector('.btn__home').classList.add('btn__work--mobile');
    document.querySelector('.btn__home').classList.remove('btn__work--desktop');
    document.querySelector('.projects').innerHTML = contentMobile;
  } else {
    document.querySelector(
      '.contact__description .description__title h2'
    ).innerHTML = `Pour me contacter,<br>c’est par ici 👉`;
    document.querySelector('.btn__home').classList.add('btn__work--desktop');
    document.querySelector('.btn__home').classList.remove('btn__work--mobile');
    document.querySelector('.projects').innerHTML = content;
  }
  document.querySelector('.btn__home').addEventListener('click', seeMyWork);

  let lockScroll = false;

  const scrollDirection = direction => {
    if (!lockScroll) {
      lockScroll = true;

      if (direction == 'next') {
        //MOBILE
        if (windowWidth <= 650) {
          if (
            document.querySelector('.number--active').textContent != '01' &&
            document.querySelector('.contact__wrapper.disable')
          ) {
            navMobile(+1);
          }
          //DESKTOP
        } else {
          if (document.querySelector('.home:not(.disable)')) {
            seeMyWork();
          } else if (document.querySelector('.contact__wrapper.disable')) {
            navDesktop(direction);
          }
        }
      } else if (direction == 'prev') {
        //MOBILE
        if (windowWidth <= 650) {
          if (document.querySelector('.number--active').textContent != '01') {
            navMobile(-1);
          } else if (document.querySelector('.contact__wrapper:not(.disable)')) {
            document.querySelector('.home').classList.add('disable');
            document.querySelector('.contact__wrapper').classList.add('disable');
            setTimeout(() => {
              document.querySelector('#project-04').classList.add('enable');
              displayProject('#project-04');
            }, 500);
            initProject('.project--mobile');
            document.querySelector('.number--active').textContent = '05';
          }
          //DESKTOP
        } else {
          if (
            document.querySelector('.nav__items p:nth-child(1):not(.item--active)') &&
            document.querySelector('.contact__wrapper.disable') &&
            document.querySelector('.home.disable')
          ) {
            navDesktop(direction);
          } else if (document.querySelector('.contact__wrapper:not(.disable)')) {
            document.querySelector('.home').classList.add('disable');
            document.querySelector('.contact__wrapper').classList.add('disable');
            setTimeout(() => {
              document.querySelector('#project-04').classList.add('enable');
              displayProject('#project-04');
            }, 500);
            initProject('.project');
            navActiveItem(5);
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
      if (e.deltaY > 30) {
        scrollDirection('prev');
      } else if (e.deltaY < -30) {
        scrollDirection('next');
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

    if (offsetX > 30) {
      scrollDirection('next');
    } else if (offsetX < -30) {
      scrollDirection('prev');
    } else if (document.querySelector('.number--active').textContent == '01' && offsetY > 30) {
      seeMyWork();
    }
  };

  document.addEventListener('touchstart', touchStart);
  document.addEventListener('touchmove', touchMove);

  //-------------------------------------
  //	CLEAN URL
  //-------------------------------------
  const redirectionProject = varURL => {
    document.querySelector('.white-screen').classList.add('redirect-page');
    setTimeout(() => {
      window.location.href = './projects-page/project-page--' + varURL + '.html';
    }, 1500);
  };

  let urlNumber = window.location.hash.substring(1);
  window.history.replaceState({}, '', 'index.html');

  generateMenu();

  if (urlNumber == 1 || urlNumber == 2 || urlNumber == 3 || urlNumber == 4) {
    document.querySelector('.home').classList.add('disable');
    document.querySelector('.contact__wrapper').classList.add('disable');
    setTimeout(() => {
      document.querySelector('#project-0' + urlNumber).classList.add('enable');
      displayProject('#project-0' + urlNumber);
    }, 500);
    if (windowWidth <= 650) {
      initProject('.project--mobile');
      document.querySelector('.number--active').textContent = '0' + (parseInt(urlNumber) + 1);
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
//	INITIALIZE
//-------------------------------------
var initialWidth = window.innerWidth;

document.onload = main();
window.onresize = responsive;
