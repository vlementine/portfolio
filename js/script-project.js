//-------------------------------------
//	JSON
//-------------------------------------
const projects = [
  {
    number: '01',
    title: 'Back to your dream',
    keywords: 'User Interface • Animation',
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'btyd',
    link: ' '
  },
  {
    number: '02',
    title: 'Le Blog Zenchef',
    keywords: 'User Interface • Blog',
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise.",
    image: 'blog-zenchef',
    link: ' '
  },
  {
    number: '03',
    title: 'Alcatraz, 1962',
    keywords: 'User Interface • Webdoc',
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'alcatraz',
    link: ' '
  },
  {
    number: '04',
    title: 'La Maroquinerie',
    keywords: 'User Interface • Concert',
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too.",
    image: 'maroquinerie',
    link: ' '
  }
];

var menuProjects = '';
var menuProjectsMobile = '';

projects.forEach(menuProject => {
  menuProjects += `<div class="menu__project">
                    <h3 onMouseenter="menuHoverProject(${menuProject.number}, '${
    menuProject.image
  }')" onClick="redirectToPageProject(${menuProject.number})">${menuProject.title}</h3>
                    <span>${menuProject.keywords}</span>
                  </div>`;
});

document.querySelector('.menu__projects').innerHTML = menuProjects;

projects.forEach(menuProjectMobile => {
  menuProjectsMobile += `<div class="menu__project--mobile" id="menu__project-${
    menuProjectMobile.number
  }" onClick="redirectToPageProject(${menuProjectMobile.number})">
                          <div class="menu__project-info--mobile">
                              <div class="menu__project-visuel--mobile">
                                  <img src="../img/${menuProjectMobile.image}_letter.png" alt="">
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

document.querySelector('.menu__projects-wrapper--mobile').innerHTML = menuProjectsMobile;



//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
function main() {
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


  //Traiter l'url pour générer le bon contenu automatiuement
  displayContentPage(0);
}

const displayContentPage = idProject => {
  document.querySelector('.project__summary h1').innerText = projects[idProject].title;
  document.querySelector('.project__intro p').innerText = projects[idProject].description;
  document.querySelector('.project__intro a.btn').href = projects[idProject].link;
  document.querySelector('.project__img img').src = '../img/' + projects[idProject].image + '_project-01.png';
  //document.querySelector('.next-project__visuel img').src = '../img/' + projects[idProject].image + '_next-project.png';
}

//Redirection project page
const redirectionProject = varURL => {
  document.querySelector('.white-screen').style.display = 'block';
  document.querySelector('.white-screen').classList.add('redirect-page');
  setTimeout(() => {
    window.location.href = '../index.html#' + varURL;
  }, 1500);
};
document.onload = main();
