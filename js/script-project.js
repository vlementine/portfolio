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
    href: ' '
  },
  {
    number: '02',
    title: 'Le Blog Zenchef',
    keywords: 'User Interface • Blog',
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'blog-zenchef',
    href: ' '
  },
  {
    number: '03',
    title: 'Alcatraz, 1962',
    keywords: 'User Interface • Webdoc',
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'btyd',
    href: ' '
  },
  {
    number: '04',
    title: 'La Maroquinerie',
    keywords: 'User Interface • Concert',
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'btyd',
    href: ' '
  }
];

var menu_projects = '';
var menuProjectsMobile = '';

projects.forEach(menu_project => {
  menu_projects += `<div class="menu__project">
                    <h3 onMouseenter="menuHoverProject(${menu_project.number}, '${
    menu_project.image
  }')" onClick="redirectToPageProject(2)">${menu_project.title}</h3>
                    <span>${menu_project.keywords}</span>
                  </div>`;
});

document.querySelector('.menu__projects').innerHTML = menu_projects;

projects.forEach(menuProjectMobile => {
  menuProjectsMobile += `<div class="menu__project--mobile">
                          <div class="menu__project-info--mobile">
                              <div class="menu__project-visuel--mobile">
                                  <img src="../img/${menuProjectMobile.image}_letter.png" alt="">
                              </div>
                              <div class="menu__project-title">
                                  <h3>${menuProjectMobile.title}</h3>
                                  <span>${menuProjectMobile.keywords}</span>
                              </div>
                          </div>

                          <span class="nav__arrow nav__arrow--right" id="menu__project-${menuProjectMobile.number}">
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
}

//Redirection project page
function redirectionProject(varURL) {
  document.querySelector('.white-screen').style.display = 'block';
  document.querySelector('.white-screen').classList.add('redirect-page');
  setTimeout(function() {
    window.location.href = '../index.html#' + varURL;
  }, 1500);
}
document.onload = main();
