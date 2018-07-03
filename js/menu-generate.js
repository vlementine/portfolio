//-------------------------------------
//	GENERATOR CONTENT • MENU
//-------------------------------------∑

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
  menuProjectsMobile +=
    `<div class="menu__project--mobile" id="menu__project-${
      menuProjectMobile.number
    }" onClick="redirectToPageProject('${menuProjectMobile.href}')">
    <div class="menu__project-info--mobile">
        <div class="menu__project-visuel--mobile">
            <img src="` + imgPath + `${menuProjectMobile.image}_letter.png" alt="">
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