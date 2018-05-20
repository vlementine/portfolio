  //-------------------------------------
  //	MAIN FUNCTION
  //-------------------------------------
  function main() {
      setTimeout(function () {
          document.querySelector('header').classList.add('enable');
          document.querySelector('.project__summary h1').classList.add('enable');
          document.querySelector('.type--shadow').classList.add('enable');
          for (let i = 0; i < 3; i++) {
              document.querySelectorAll('.project-page .project__info .info span')[i].classList.add('enable');
              document.querySelectorAll('.project-page .project__info .info p')[i].classList.add('enable');
          }
          document.querySelector('.project__intro').classList.add('enable');
          document.querySelector('.project__img span').classList.add('enable');
          document.querySelector('.project__img img').classList.add('enable');
      }, 100);
  }

  //Redirection project page
  function redirectionProject(numberProject) {
      console.log(numberProject);
      document.querySelector('.plop').classList.add('active');
      setTimeout(function () {
          window.location.href = "./projects-page/project-page.html";
      }, 1500);
  }

  document.onload = main();