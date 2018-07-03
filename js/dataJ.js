//-------------------------------------
//	JSON
//-------------------------------------

// PROJECTS 
const projects = [{
    number: '01',
    title: 'Back to your dream',
    keywords: 'User Interface • Animation',
    description: "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'btyd',
    href: 'back-to-your-dream'
  },
  {
    number: '02',
    title: 'Le Blog Zenchef',
    keywords: 'User Interface • Blog',
    description: "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'blog-zenchef',
    href: 'blog-zenchef'
  },
  {
    number: '03',
    title: 'Alcatraz, 1962',
    keywords: 'User Interface • Webdoc',
    description: "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'alcatraz',
    href: 'alcatraz-1962'
  },
  {
    number: '04',
    title: 'La Maroquinerie',
    keywords: 'User Interface • Concert',
    description: "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: 'maroquinerie',
    href: 'maroquinerie'
  }
];


// NAVIGATION 
const nav = [{
    number: '01',
    title: 'Home'
  },
  {
    number: '02',
    title: 'Back to your dream'
  },
  {
    number: '03',
    title: 'Le Blog Zenchef'
  },
  {
    number: '04',
    title: 'Alcatraz, 1962'
  },
  {
    number: '05',
    title: 'La Maroquinerie'
  },
  {
    number: '06',
    title: 'Contact'
  }
];


let urlPage = window.location.href;
let positionSlash = urlPage.lastIndexOf('/') + 1;
let imgPath = urlPage.substring(positionSlash) === 'index.html' ? './img/' : '../img/';

// MENU 
var menuProjects = '';
var menuProjectsMobile = '';

projects.forEach(menuProject => {
  menuProjects += `<div class="menu__project">
                    <h3 onMouseenter="menuHoverProject(${menuProject.number}, '${
    menuProject.image
  }')" onClick="redirectToPageProject('${menuProject.href}')">${menuProject.title}</h3>
                    <span>${menuProject.keywords}</span>
                  </div>`;
});

document.querySelector('.menu__projects').innerHTML = menuProjects;

projects.forEach(menuProjectMobile => {
  menuProjectsMobile += `<div class="menu__project--mobile" id="menu__project-${menuProjectMobile.number}" onClick="redirectToPageProject('${
    menuProjectMobile.href
  }')">
                          <div class="menu__project-info--mobile">
                              <div class="menu__project-visuel--mobile">
                                  <img src="`+ imgPath + `${menuProjectMobile.image}_letter.png" alt="">
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



