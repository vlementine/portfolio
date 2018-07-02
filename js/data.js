var content = '';
var contentMobile = '';

projects.forEach(project => {
  content += `<div class="project" id="project-${project.number}">
          <div class="project__visuel">
            <div class="visuel__mockup">
              <img class="mockup--desktop" src="img/${
                project.image
              }_visuel-home.png" alt="Visuel du Blog Zenchef" draggable="false">
            </div>
            <img src="img/${project.image}_letter.png" alt="B" draggable="false">
          </div>

          <div class="project__description">
            <div class="description__wrapper">
              <div class="description__title">
                <h2> ${project.title} </h2>
              </div>
              <span class="description__number">${project.number}.</span>
              <div class="description__info">
                <p>${project.keywords}</p>
              </div>
              <div class="description">
                <p>${project.description}</p>
              </div>
              <button class="btn btn--project" onClick="redirectionProject(${
                project.number
              })">Découvrir le projet</button>
            </div>
          </div>
        </div>`;
});

projects.forEach(projectMobile => {
  contentMobile += `<div class="project--mobile" id="project-${projectMobile.number}">
    <div class="project__content">
      <div class="project__description--mobile">
          <div>
            <div class="description__title--mobile">
                <h2> ${projectMobile.title} </h2>
            </div>
            <div class="description__number-wrapper--mobile">
              <span class="description__number--mobile">${projectMobile.number}.</span>
              <span class="description__number-shadow--mobile">${projectMobile.number}.</span>
            </div>
          </div>
          <div class="description__info--mobile">
              <p>${projectMobile.keywords}</p>
          </div>
      </div>
      <div class="project__visuel--mobile">
          <div class="visuel__mockup">
              <img class="mockup--desktop" src="img/${
                projectMobile.image
              }_visuel-home.png" alt="Visuel du Blog Zenchef" draggable="false">
          </div>
          <img class="visuel__letter" src="img/${projectMobile.image}_letter.png" alt="B" draggable="false">
      </div>
      <button class="btn" onClick="redirectionProject(${projectMobile.number})">Découvrir le projet</button>
    </div>
</div>`;
});

let navigation = '';

nav.forEach(itemNav => {
  navigation += `<p onClick="navDesktop(null, ${itemNav.number})">${itemNav.number}
  <span class="item__title">${itemNav.title}</span>
</p>`;
});
document.querySelector('.nav__items').innerHTML = navigation;



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
                                  <img src="./img/${menuProjectMobile.image}_letter.png" alt="">
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