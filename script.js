//-------------------------------------
//	JSON
//-------------------------------------
let windowWidth = window.innerWidth;
const projects = [{
    number: "01",
    title: "Back to your dream",
    role: "Designer",
    client: "IESA Multimédia",
    year: "2016",
    description: "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "btyd",
    href: " "
  },
  {
    number: "02",
    title: "Le Blog Zenchef",
    role: "Designer",
    client: "Zenchef",
    year: "2017",
    description: "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "blog-zenchef",
    href: " "
  },
  {
    number: "03",
    title: "Alcatraz, 1962",
    role: "Designer",
    client: "IUT Laval",
    year: "2015",
    description: "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "btyd",
    href: " "
  },
  {
    number: "04",
    title: "La Maroquinerie",
    role: "Designer",
    client: "IESA Multimédia",
    year: "2016",
    description: "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "btyd",
    href: " "
  }
];

const nav = [{
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

let navigation = "";

nav.forEach(itemNav => {
  navigation += ` <span class="nav__item" onClick="navNew(${itemNav.number})">
  ${itemNav.number}
  <span class="item__title">${itemNav.title}</span>
  </span>`;
});
document.querySelector(".nav__wrapper").innerHTML = navigation;

//-------------------------------------
//	GET ANSWER
//-------------------------------------
function getAnswer(name, groupBubble, nbBubble) {
  let answer = document.getElementById(name + "Answer").value;
  displayBubble(groupBubble, nbBubble);

  if (answer !== "" && answer !== " ") {
    document.getElementById(name + "Answer").setAttribute("readonly", true);

    if (name == "name") {
      document.getElementById(name + "Question").innerHTML = answer;
    }
  }
}

//-------------------------------------
//	DISPLAY BUBBLE
//-------------------------------------
function displayBubble(groupBubble, nbBubble) {
  for (let n = 0; n < 2; n++) {
    document.querySelectorAll(".bubble--group:nth-child(" + groupBubble + ") .bubble")[n].classList.add("enable");
    document.querySelector(".contact__form form").scrollTo(0, document.body.scrollHeight);
  }

  if (nbBubble == 3) {
    for (let n = 0; n < nbBubble; n++) {
      document
        .querySelectorAll(".bubble--group:nth-child(" + groupBubble + ") .bubble--group__choice .bubble")[n].classList.add("enable__choice");
      document.querySelector(".contact__form form").scrollTo(0, document.body.scrollHeight);
    }
  }
}

//-------------------------------------
//	DISPLAY PROJECT
//-------------------------------------
function displayProject(project) {
  let imgNumber = document.querySelectorAll(project + " .project__visuel img").length;
  for (let i = 0; i < imgNumber; i++) {
    document.querySelectorAll(project + " .project__visuel img")[i].classList.add("enable");
  }

  document.querySelector(project + " .project__visuel").classList.add("enable");
  document.querySelector(project + " .description__number").classList.add("enable");
  document.querySelector(project + " .description__title h2").classList.add("enable");

  for (let j = 0; j < 3; j++) {
    document.querySelectorAll(project + " .info span")[j].classList.add("enable");
    document.querySelectorAll(project + " .info p")[j].classList.add("enable");
  }

  document.querySelector(project + " .description p").classList.add("enable");
  document.querySelector(project + " .description__wrapper .btn").classList.add("enable");
}

function hideProject(project) {
  let imgNumber = document.querySelectorAll(project + " .project__visuel img").length;
  for (let i = 0; i < imgNumber; i++) {
    document.querySelectorAll(project + " .project__visuel img")[i].classList.remove("enable");
  }

  document.querySelector(project + " .project__visuel").classList.remove("enable");
  document.querySelector(project + " .description__number").classList.remove("enable");
  document.querySelector(project + " .description__title h2").classList.remove("enable");

  for (let j = 0; j < 3; j++) {
    document.querySelectorAll(project + " .info span")[j].classList.remove("enable");
    document.querySelectorAll(project + " .info p")[j].classList.remove("enable");
  }

  document.querySelector(project + " .description p").classList.remove("enable");
  document.querySelector(project + " .description__wrapper .btn").classList.remove("enable");
}

function seeMyWork() {
  //Hide Home
  document.querySelector(".home").classList.add("disable");

  //Display first project
  document.querySelector("#project-01").classList.add("enable");
  navActiveItem(2);
  displayProject("#project-01");
}

//-------------------------------------
//	ACTIVE ITEM
//-------------------------------------
function navActiveItem(param) {
  for (let n = 0; n < Object.keys(nav).length; n++) {
    document.querySelectorAll("span.nav__item")[n].classList.remove("active");
  }
  document.querySelector("span.nav__item:nth-child(" + param + ")").classList.add("active");
}

//-------------------------------------
//	NAVIGATION
//-------------------------------------
function navNew(param) {
  //Get the total of item of nav
  let totalItemNav = Object.keys(nav).length;

  //Get the number of item clicked
  let projectClicked = parseInt(param) - 1;
  let itemClicked = parseInt(param);

  //Item active
  let projectActive = parseInt(document.querySelector(".project.enable").id.substr(-1));

  navActiveItem(projectClicked + 1);

  let idToDisplay = "#project-0" + projectClicked;
  let idToHide = "#" + document.querySelector(".project.enable").id;

  if (projectClicked < totalItemNav - 1 && projectClicked !== 0 && projectClicked !== projectActive) {
    hideProject(idToHide);

    setTimeout(function () {
      document.querySelector(idToHide).classList.remove("enable");
      document.querySelector(idToDisplay).classList.add("enable");
      displayProject(idToDisplay);
    }, 800);
  } else if (projectClicked === 0) {
    document.querySelector(".home").classList.remove("disable");
    hideProject(idToHide);

    setTimeout(function () {
      document.querySelector(idToHide).classList.remove("enable");
    }, 700);
  } else if (itemClicked == totalItemNav) {
    document.querySelector(".contact__wrapper").classList.remove("disable");
    hideProject(idToHide);

    setTimeout(function () {
      document.querySelector(idToHide).classList.remove("enable");
      document.querySelector(".bubble--group:nth-child(1) .bubble").classList.add("enable");
      document.querySelector(".bubble--group:nth-child(1) .bubble--answer").classList.add("enable");
    }, 700);
  }
}

//-------------------------------------
//	MENU
//-------------------------------------
function displayMenu() {
  document.querySelector(".menu__wrapper").classList.toggle("disable");
  document.querySelector(".menu__icon--open").classList.toggle("enable");
  document.querySelector(".menu__icon--close").classList.toggle("enable");
  document.querySelector("body").classList.toggle("menu-visible");
  if (windowWidth <= 650) {
    document.querySelector(".links").classList.toggle("menu-visible");
    document.querySelector(".links").classList.toggle("enable");
  }
  //Animation menu
}

function navMenu(param) {
  let hideProject = document
    .querySelectorAll(".project")
    .forEach(element => (element.classList.contains("enable") ? element.classList.remove("enable") : ""));
  displayMenu();
  if (param == "home") {
    hideProject;
    document.querySelector(".home").classList.remove("disable");
    document.querySelector(".contact__wrapper").classList.add("disable");
  } else if (param == "work") {
    hideProject;
    document.querySelector(".home").classList.add("disable");
    document.querySelector(".contact__wrapper").classList.add("disable");
    navActiveItem(2);
    setTimeout(function () {
      document.querySelector("#project-01").classList.add("enable");
      displayProject("#project-01");
    }, 500);
  } else if (param == "contact") {
    hideProject;
    document.querySelector(".contact__wrapper").classList.remove("disable");

    setTimeout(function () {
      document.querySelector(".bubble--group:nth-child(1) .bubble").classList.add("enable");
      document.querySelector(".bubble--group:nth-child(1) .bubble--answer").classList.add("enable");
      document.querySelector(".home").classList.add("disable");
    }, 500);
  }
}

//-------------------------------------
//	VALIDATE EMAIL
//-------------------------------------
function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate(groupBubble, nbBubble) {
  let result = document.querySelector("#result");
  let email = document.querySelector("#mailAnswer").value;

  if (validateEmail(email)) {
    document.querySelector("#mailAnswer").setAttribute("readonly", true);
    result.style.display = "none";
    displayBubble(groupBubble, nbBubble);
    sendEmail();
  } else {
    result.innerText = "L'adresse n'est pas valide";
    result.style.color = "red";
  }
  return false;
}

//-------------------------------------
//	MAIL SENDING
//-------------------------------------
function sendEmail() {
  //Variables
  let nameAnswer = document.getElementById("nameAnswer").value;
  let mailAnswer = document.getElementById("mailAnswer").value;
  if (document.getElementById("project-1").checked) {
    var objectAnswer = "Une question ?";
  } else if (document.getElementById("project-2").checked) {
    var objectAnswer = "Un projet dans les cartons";
  } else if (document.getElementById("project-3").checked) {
    var objectAnswer = "Seulement envie de dire bonjour";
  }
  let messageAnswer = document.getElementById("messageAnswer").value;

  xhr = new XMLHttpRequest();
  xhr.open("POST", "sendEmail.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      name: nameAnswer,
      mail: mailAnswer,
      object: objectAnswer,
      message: messageAnswer
    })
  );
}

//-------------------------------------
//	RESPONSIVE
//-------------------------------------
function responsive() {


  let content = "";
  let contentResponsive = "";

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
                <div class="info">
                  <span>Rôle</span>
                  <p>${project.role}</p>
                </div>
                <div class="info">
                  <span>Client</span>
                  <p>${project.client}</p>
                </div>
                <div class="info">
                  <span>Année</span>
                  <p>${project.year}</p>
                </div>
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
    contentResponsive += `<a href="${projectResponsive.href}" class="project" id="project-${projectResponsive.number}">
          <div class="project__visuel">
            <div class="visuel__mockup">
              <img class="mockup--desktop" src="img/${
                projectResponsive.image
              }_visuel-home.png" alt="Visuel du Blog Zenchef" draggable="false">
            </div>
            <img src="img/${projectResponsive.image}_letter.png" alt="B" draggable="false">
          </div>

          <div class="project__description">
            <div class="description__wrapper">
              <div class="description__title">
                <h2> ${projectResponsive.title} </h2>
              </div>
              <span class="description__number">${projectResponsive.number}.</span>
              <div class="description__info">
                <div class="info">
                  <span>Rôle</span>
                  <p>${projectResponsive.role}</p>
                </div>
                <div class="info">
                  <span>Client</span>
                  <p>${projectResponsive.client}</p>
                </div>
                <div class="info">
                  <span>Année</span>
                  <p>${projectResponsive.year}</p>
                </div>
              </div>
              <div class="description">
                <p>${projectResponsive.description}</p>
              </div>
            </div>
          </div>
        </a>`;
  });

  if (windowWidth <= 650) {
    console.log("plop");
    document.getElementById("projects").innerHTML = contentResponsive;
    document.querySelector(".home").classList.remove("disable");
  } else {
    console.log("ploup");
    document.getElementById("projects").innerHTML = content;
  }
}

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
function main() {
  document.querySelector(".btn__work").addEventListener("click", seeMyWork);
  responsive();
}

document.onload = main();