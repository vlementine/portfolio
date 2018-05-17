//-------------------------------------
//	RESPONSIVE
//-------------------------------------
function responsive() {
  let windowWidth = window.innerWidth;

  if (windowWidth <= 650) {
    document.querySelector(
      '.contact__description .description__title h2'
    ).innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
    document.querySelector('.home').classList.remove('disable');
    document.querySelector('.btn__home').classList.add('btn__work--desktop', 'btn__work--mobile');
    if (!document.querySelector('.project--mobile')) {
      document.querySelector('.projects').innerHTML = contentMobile;
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
}

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
function main() {
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
  function scrollDirection(direction) {
    if (!lockScroll) {
      lockScroll = true;
      console.log(direction);

      if (direction == 'next') {
        if (document.querySelector('.home:not(.disable)')) {
          seeMyWork();
        } else if (document.querySelector('.contact__wrapper:not(.disable)')) {
          //navDesktop(direction);
          // document.removeEventListener('touchstart', touchStart);
          // document.removeEventListener('touchmove', touchMove);
        } else if (document.querySelector('.contact__wrapper.disable')) {
          if (windowWidth <= 650) navMobile(+1);
          else navDesktop(direction);
        }
        // document.addEventListener('touchstart', touchStart);
        // document.addEventListener('touchmove', touchMove);
      } else if (direction == 'prev') {
        if (document.querySelector('.contact__wrapper:not(.disable)')) {
          document.querySelector('.home').classList.add('disable');
          document.querySelector('.contact__wrapper').classList.add('disable');
          setTimeout(function() {
            document.querySelector('#project-04').classList.add('enable');
            displayProject('#project-04');
          }, 500);
          if (windowWidth <= 650) {
            initProject('.project--mobile');
            document.querySelector('.number--active').textContent = '05';
          } else {
            initProject('.project');
            navActiveItem(5);
          }
        } else if (document.querySelector('.nav__items p:nth-child(1):not(.item--active)')) {
          navDesktop(direction);
        } else if (windowWidth <= 650) {
          navMobile(-1);
        }
      }

      window.setTimeout(() => {
        lockScroll = false;
      }, 1000);
    }
  }

  //Control keyboard
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 38) {
      console.log('up');
      scrollDirection('prev');
    } else if (event.keyCode == 40) {
      console.log('down');
      scrollDirection('next');
    }
  });

  //Control scroll
  // document.addEventListener('wheel', event => {
  //   if (windowWidth <= 650) {
  //     if (event.deltaX > 30) {
  //       console.log('next');
  //       scrollDirection('next');
  //     } else if (event.deltaX < -30) {
  //       console.log('prev');
  //       scrollDirection('prev');
  //     }
  //   } else {
  //     if (event.deltaY > 30) {
  //       scrollDirection('prev');
  //     } else if (event.deltaY < -30) {
  //       scrollDirection('next');
  //     }
  //   }
  // });

  //Control touch
  document.addEventListener('touchstart', touchStart);
  document.addEventListener('touchmove', touchMove);
  var start = { x: 0, y: 0 };
  function touchStart(event) {
    start.x = event.touches[0].pageX;
  }
  function touchMove(event) {
    if (navigator.userAgent.match(/Android/i)) {
      event.preventDefault();
    }
    offset = {};
    offset.x = start.x - event.touches[0].pageX;
    if (offset.x > 50) {
      scrollDirection('next');
    } else if (offset.x < -50) {
      scrollDirection('prev');
    }
  }
}

document.onload = main();

window.onresize = responsive;