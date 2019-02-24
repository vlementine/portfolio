//-------------------------------------
//	GENERATOR CONTENT • PROJECT
//-------------------------------------
let content = '';
let contentMobile = '';

// DESKTOP
projects.forEach(projectDesktop => {
  content += `
  <div class="project" id="project-${projectDesktop.number}">

    <div class="project__visuel">

      <div class="visuels__wrapper">
        <div class="visuel__mockup">
          <img class="mockup--desktop"
          src="img/${ projectDesktop.image}_visuel-home.png" 
          alt="Visuel Zenchef" 
          draggable="false">

          <img class="mockup--mobile"
          src = "img/${ projectDesktop.image}_visuel-home-2.png"
          alt = "Visuel Zenchef"
          draggable = "false" >
        </div>

        <img class="visuel__letter" src="img/${projectDesktop.image}_letter.png" alt="B" draggable="false">
      </div>
    </div>

    <div class="project__description">
      <div class="description__wrapper">
        <div class="description__title">
          <h2> ${projectDesktop.title} </h2>
        </div>

        <span class="description__number">${projectDesktop.number}.</span>

        <div class="description__info">
          <p>${projectDesktop.keywords}</p>
        </div>

        <div class="description">
          <p>${projectDesktop.description}</p>
        </div>

        <button class="btn btn--project" onClick="redirectionProject('${ projectDesktop.href}')">Découvrir le projet</button>
      </div>
    </div>
  </div>`;
});

// MOBILE
projects.forEach(projectMobile => {
  contentMobile += `
  <div class="project--mobile" id="project-${projectMobile.number}">
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
            <img class = "mockup--desktop"
            src = "img/${ projectMobile.image}_visuel-home.png"
            alt = "Visuel Zenchef"
            draggable = "false" >

            <img class = "mockup--mobile"
            src = "img/${ projectMobile.image}_visuel-home-2.png"
            alt = "Visuel Zenchef"
            draggable = "false" >
          </div>
          <img class="visuel__letter" src="img/${projectMobile.image}_letter.png" alt="B" draggable="false">
      </div>
      <button class="btn" onClick="redirectionProject('${projectMobile.href}')">Découvrir le projet</button>
    </div>
  </div>`;
});

//-------------------------------------
//	GENERATOR CONTENT • NAVIGATION
//-------------------------------------
let navigation = '';

nav.forEach(itemNav => {
  navigation += `
  <p onClick="navDesktop(null, ${itemNav.number})">${itemNav.number}
    <span class="item__title">${itemNav.title}</span>
  </p>`;
});

document.querySelector('.nav__items').innerHTML = navigation;