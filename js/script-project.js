//-------------------------------------
//	GENERATE CONTENT PAGE
//-------------------------------------
const displayContentPage = idProject => {
  document.querySelector('.project__summary h1').innerText = projects[idProject].title;
  document.querySelector('.project__intro p').innerText = projects[idProject].description;
  document.querySelector('.project__intro a.btn').href = projects[idProject].link;
  document.querySelector('.project__img img').src = '../img/' + projects[idProject].image + '_project-01.png';
  //document.querySelector('.next-project__visuel img').src = '../img/' + projects[idProject].image + '_next-project.png';
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
//	MAIN FUNCTION
//-------------------------------------
const main = () => {
  //Display
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

  //Generate good project ID from URL
  let initialURL = window.location.href;
  let positionAfterHyphen = initialURL.lastIndexOf('/') + 1;
  let positionHtml = initialURL.lastIndexOf('.html') + 1;
  let nameProject = initialURL.substring(positionAfterHyphen, positionHtml - 1);

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
    case 'maroquinerie':
      idProject = 3;
      break;
  }

  displayContentPage(idProject);
};

document.onload = main();
