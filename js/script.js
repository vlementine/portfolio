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
  document.querySelector(project + " .description__info p").classList.add("enable");

  document.querySelector(project + " .description p").classList.add("enable");
  document.querySelector(project + " .description__wrapper .btn").classList.add("enable");
}

//-------------------------------------
//	HIDE PROJECT
//-------------------------------------
function hideProject(project) {
  let imgNumber = document.querySelectorAll(project + " .project__visuel img").length;
  for (let i = 0; i < imgNumber; i++) {
    document.querySelectorAll(project + " .project__visuel img")[i].classList.remove("enable");
  }

  document.querySelector(project + " .project__visuel").classList.remove("enable");
  document.querySelector(project + " .description__number").classList.remove("enable");
  document.querySelector(project + " .description__title h2").classList.remove("enable");

  document.querySelector(project + " .description__info p").classList.remove("enable");

  document.querySelector(project + " .description p").classList.remove("enable");
  document.querySelector(project + " .description__wrapper .btn").classList.remove("enable");
}

//-------------------------------------
//	BTN SEE MY WORK
//-------------------------------------
function seeMyWork() {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 650) {
    //Hide Home
    document.querySelector(".home").classList.add("disable");

    //Display first project
    document.querySelector("#project-01").classList.add("enable");
    displayProjectMobile("#project-01");
  } else {
    //Hide Home
    document.querySelector(".home").classList.add("disable");
    navActiveItem(2);
    //Display first project
    document.querySelector("#project-01").classList.add("enable");
    displayProject("#project-01");
  }
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

    setTimeout(function() {
      document.querySelector(idToHide).classList.remove("enable");
      document.querySelector(idToDisplay).classList.add("enable");
      displayProject(idToDisplay);
    }, 800);
  } else if (projectClicked === 0) {
    document.querySelector(".home").classList.remove("disable");
    hideProject(idToHide);

    setTimeout(function() {
      document.querySelector(idToHide).classList.remove("enable");
    }, 700);
  } else if (itemClicked == totalItemNav) {
    document.querySelector(".contact__wrapper").classList.remove("disable");
    hideProject(idToHide);

    setTimeout(function() {
      document.querySelector(idToHide).classList.remove("enable");
      document.querySelector(".bubble--group:nth-child(1) .bubble").classList.add("enable");
      document.querySelector(".bubble--group:nth-child(1) .bubble--answer").classList.add("enable");
    }, 700);
  }
}

//-------------------------------------
//	DISPLAY PROJECT • MOBILE
//-------------------------------------
function displayProjectMobile(project) {
  let imgNumber = document.querySelectorAll(project + " .project__visuel--mobile img").length;
  for (let i = 0; i < imgNumber; i++) {
    document.querySelectorAll(project + " .project__visuel--mobile img")[i].classList.add("enable");
  }

  document.querySelector(project + " .project__visuel--mobile").classList.add("enable");
  document.querySelector(project + " .description__number-shadow--mobile").classList.add("enable");
  document.querySelector(project + " .description__title--mobile h2").classList.add("enable");
  document.querySelector(project + " .description__info--mobile p").classList.add("enable");
  document.querySelector(project + ".project--mobile .btn").classList.add("enable");
  document.querySelector(project + " .project__content").classList.add("enable");
}

//-------------------------------------
//	HIDE PROJECT • MOBILE
//-------------------------------------
function hideProjectMobile(project) {
  let imgNumber = document.querySelectorAll(project + " .project__visuel--mobile img").length;
  for (let i = 0; i < imgNumber; i++) {
    document.querySelectorAll(project + " .project__visuel--mobile img")[i].classList.remove("enable");
  }

  document.querySelector(project + " .project__visuel--mobile").classList.remove("enable");
  document.querySelector(project + " .description__number-shadow--mobile").classList.remove("enable");
  document.querySelector(project + " .description__title--mobile h2").classList.remove("enable");
  document.querySelector(project + " .description__info--mobile p").classList.remove("enable");
  document.querySelector(project + ".project--mobile .btn").classList.remove("enable");
  document.querySelector(project + " .project__content").classList.remove("enable");
}

//-------------------------------------
//	NAVIGATION • MOBILE
//-------------------------------------
function navMobile(param) {
  //Get the total of item of nav
  let totalItemNav = Object.keys(nav).length;

  //Get the number of item clicked
  let itemActive = parseInt(document.querySelector(".number--active").innerHTML);
  let itemClicked = itemActive + param;

  //Get id to display and hide
  let idToDisplay = "#project-0" + (itemClicked - 1);
  let idToHide = "#project-0" + (itemActive - 1);

  if (itemClicked < totalItemNav && itemClicked !== 1) {
    //Update active number
    document.querySelector(".number--active").textContent = "0" + itemClicked;

    hideProjectMobile(idToHide);

    setTimeout(function() {
      document.querySelector(idToHide).classList.remove("enable");
      document.querySelector(idToDisplay).classList.add("enable");
      displayProjectMobile(idToDisplay);
    }, 600);
  } else if (itemClicked == 1) {
    //console.log("itemClicked == 1");

    //Display Home
    document.querySelector(".home").classList.remove("disable");
  } else if (itemClicked == totalItemNav) {
    //console.log("itemClicked == totalItemNav");

    document.querySelector(".contact__wrapper").classList.remove("disable");
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
  let hideProjectMobile = document
    .querySelectorAll(".project--mobile")
    .forEach(element => (element.classList.contains("enable") ? element.classList.remove("enable") : ""));
  displayMenu();
  if (param == "home") {
    if (windowWidth <= 650) {
      hideProjectMobile;
      document.querySelector(".home").classList.remove("disable");
      document.querySelector(".contact__wrapper").classList.add("disable");
    } else {
      hideProject;
      document.querySelector(".home").classList.remove("disable");
      document.querySelector(".contact__wrapper").classList.add("disable");
    }
  } else if (param == "work") {
    if (windowWidth <= 650) {
      hideProjectMobile;
      document.querySelector(".home").classList.add("disable");
      document.querySelector(".contact__wrapper").classList.add("disable");
      document.querySelector(".number--active").textContent = "02";
      setTimeout(function() {
        document.querySelector("#project-01").classList.add("enable");
        displayProjectMobile("#project-01");
      }, 500);
    } else {
      hideProject;
      document.querySelector(".home").classList.add("disable");
      document.querySelector(".contact__wrapper").classList.add("disable");
      navActiveItem(2);
      setTimeout(function() {
        document.querySelector("#project-01").classList.add("enable");
        displayProject("#project-01");
      }, 500);
    }
  } else if (param == "contact") {
    hideProject;
    document.querySelector(".contact__wrapper").classList.remove("disable");

    setTimeout(function() {
      document.querySelector(".bubble--group:nth-child(1) .bubble").classList.add("enable");
      document.querySelector(".bubble--group:nth-child(1) .bubble--answer").classList.add("enable");
      document.querySelector(".home").classList.add("disable");
    }, 500);
  }
}

//-------------------------------------
//	RESPONSIVE
//-------------------------------------
function responsive() {
  let windowWidth = window.innerWidth;
  console.log(windowWidth);

  if (windowWidth <= 650) {
    console.log("plop");
    document.querySelector(".home").classList.remove("disable");
    document.querySelector(".btn__home").classList.add("btn__work--desktop", "btn__work--mobile");
    if (!document.querySelector(".project--mobile")) {
      document.getElementById("projects").innerHTML = contentResponsive;
    }
  } else {
    console.log("ploup");
    document.querySelector(".btn__home").classList.replace("btn__work--mobile", "btn__work--desktop");
    if (!document.querySelector(".project")) {
      document.getElementById("projects").innerHTML = content;
    }
  }
}

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
function main() {
  let windowWidth = window.innerWidth;

  if (windowWidth <= 650) {
    console.log("plop");
    document.querySelector(".home").classList.remove("disable");
    document.querySelector(".btn__home").classList.add("btn__work--mobile");
    document.querySelector(".btn__home").classList.remove("btn__work--desktop");
    document.getElementById("projects").innerHTML = contentResponsive;
  } else {
    console.log("ploup");
    document.querySelector(".btn__home").classList.add("btn__work--desktop");
    document.querySelector(".btn__home").classList.remove("btn__work--mobile");
    document.getElementById("projects").innerHTML = content;
  }

  document.querySelector(".btn__home").addEventListener("click", seeMyWork);
}

document.onload = main();

window.onresize = responsive;
