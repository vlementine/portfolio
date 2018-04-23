//-------------------------------------
//	JSON
//-------------------------------------
const projects = [
  {
    number: "01",
    title: "Back to your dream",
    keywords: "User Interface • Animation",
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "btyd",
    href: " "
  },
  {
    number: "02",
    title: "Le Blog Zenchef",
    keywords: "User Interface • Blog",
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "blog-zenchef",
    href: " "
  },
  {
    number: "03",
    title: "Alcatraz, 1962",
    keywords: "User Interface • Webdoc",
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "btyd",
    href: " "
  },
  {
    number: "04",
    title: "La Maroquinerie",
    keywords: "User Interface • Concert",
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "btyd",
    href: " "
  }
];

const nav = [
  {
    number: "01",
    title: "Home"
  },
  {
    number: "02",
    title: "Back to your dream"
  },
  {
    number: "03",
    title: "Le Blog Zenchef"
  },
  {
    number: "04",
    title: "Alcatraz, 1962"
  },
  {
    number: "05",
    title: "La Maroquinerie"
  },
  {
    number: "06",
    title: "Contact"
  }
];

var content = "";
var contentResponsive = "";

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
              <a class="btn" href="${project.href}">Découvrir le projet</a>
            </div>
          </div>
        </div>`;
});

projects.forEach(projectResponsive => {
  contentResponsive += `<div class="project--mobile" id="project-${projectResponsive.number}">
    <div class="project__content">
      <div class="project__description--mobile">
          <div>
            <div class="description__title--mobile">
                <h2> ${projectResponsive.title} </h2>
            </div>
            <div class="description__number-wrapper--mobile">
              <span class="description__number--mobile">${projectResponsive.number}.</span>
              <span class="description__number-shadow--mobile">${projectResponsive.number}.</span>
            </div>
          </div>
          <div class="description__info--mobile">
              <p>${projectResponsive.keywords}</p>
          </div>
      </div>
      <div class="project__visuel--mobile">
          <div class="visuel__mockup">
              <img class="mockup--desktop" src="img/${
                projectResponsive.image
              }_visuel-home.png" alt="Visuel du Blog Zenchef" draggable="false">
          </div>
          <img class="visuel__letter" src="img/${projectResponsive.image}_letter.png" alt="B" draggable="false">
      </div>
      <a class="btn" href="${projectResponsive.href}">Découvrir le projet</a>
    </div>
</div>`;
});

let navigation = "";

nav.forEach(itemNav => {
  navigation += ` <span class="nav__item" onClick="navDesktop(${itemNav.number})">
  ${itemNav.number}
  <span class="item__title">${itemNav.title}</span>
  </span>`;
});
document.querySelector(".nav__wrapper").innerHTML = navigation;
