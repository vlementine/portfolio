//-------------------------------------
//	JSON
//-------------------------------------
const projects = [
  {
    number: "01",
    title: "Back to your dream",
    role: "Designer",
    client: "IESA Multimédia",
    year: "2016",
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "btyd"
  },
  {
    number: "02",
    title: "Le Blog Zenchef",
    role: "Designer",
    client: "Zenchef",
    year: "2017",
    description:
      "Option A, you kill me right here and now. Apparently I've made that very easy for you. You can kill me, no witnesses and then spend the next few weeks or months tracking down Jesse Pinkman and you kill him too. A pointless exercise it seems…",
    image: "blog-zenchef"
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
    title: "Contact"
  }
];
//Add href, and alt for img

let content = "";
let navigation = "";

nav.forEach(itemNav => {
  navigation += ` <span class="nav__item" onClick="navPortfolio(${itemNav.number})">
  ${itemNav.number}
  <span class="item__title">${itemNav.title}</span>
</span>`;
});

document.querySelector(".nav__wrapper").innerHTML = navigation;

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
          <a class="btn" href="">Découvrir le projet</a>
        </div>
      </div>
    </div>`;
});

document.getElementById("projects").innerHTML = content;

//-------------------------------------
//	VARIABLES
//-------------------------------------
let projectNumber = document.querySelectorAll(".project").length;
document.querySelector(
  ".number__total span:last-child"
).textContent = projectNumber;

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
    document
      .querySelectorAll(".bubble--group:nth-child(" + groupBubble + ") .bubble")
      [n].classList.add("enable");
    document
      .querySelector(".contact__form form")
      .scrollTo(0, document.body.scrollHeight);
  }

  if (nbBubble == 3) {
    for (let n = 0; n < nbBubble; n++) {
      document
        .querySelectorAll(
          ".bubble--group:nth-child(" +
            groupBubble +
            ") .bubble--group__choice .bubble"
        )
        [n].classList.add("enable__choice");
      document
        .querySelector(".contact__form form")
        .scrollTo(0, document.body.scrollHeight);
    }
  }
}

//-------------------------------------
//	DISPLAY PROJECT
//-------------------------------------
function displayProject(project) {
  let imgNumber = document.querySelectorAll(project + " .project__visuel img")
    .length;
  for (let i = 0; i < imgNumber; i++) {
    document
      .querySelectorAll(project + " .project__visuel img")
      [i].classList.toggle("enable");
  }

  document
    .querySelector(project + " .project__visuel")
    .classList.toggle("enable");
  document
    .querySelector(project + " .description__number")
    .classList.toggle("enable");
  document
    .querySelector(project + " .description__title h2")
    .classList.toggle("enable");

  for (let j = 0; j < 3; j++) {
    document
      .querySelectorAll(project + " .info span")
      [j].classList.toggle("enable");
    document
      .querySelectorAll(project + " .info p")
      [j].classList.toggle("enable");
  }

  document
    .querySelector(project + " .description p")
    .classList.toggle("enable");
  document
    .querySelector(project + " .description__wrapper .btn")
    .classList.toggle("enable");
}

function seeMyWork() {
  //Hide Home
  document.querySelector(".home").classList.add("disable");

  //Display first project
  document.querySelector("#project-01").classList.toggle("enable");
  displayProject("#project-01");
}

function navigationProjects(parameter) {
  let currentProjectNumber = parseInt(
    document.querySelector(".number__active span:last-child").innerHTML
  );

  if (
    currentProjectNumber + parameter <= projectNumber &&
    currentProjectNumber + parameter > 0
  ) {
    //Dispay the current
    document.querySelector(".number__active span:last-child").textContent =
      currentProjectNumber + parameter;

    let projectNext = "#project-0" + (currentProjectNumber + parameter);
    let projectPrev = "#project-0" + currentProjectNumber;

    //Hide previous project
    displayProject(projectPrev);

    setTimeout(function() {
      document.querySelector(projectPrev).classList.toggle("enable");
      document.querySelector(projectNext).classList.toggle("enable");

      //Display next project
      displayProject(projectNext);
    }, 800);
  } else if (currentProjectNumber === 1) {
    //Display Home
    document.querySelector(".home").classList.toggle("disable");

    //Hide first project
    displayProject("#project-01");
    setTimeout(function() {
      document.querySelector("#project-01").classList.toggle("enable");
    }, 700);
  } else if (currentProjectNumber === projectNumber) {
    //Display Contact
    document.querySelector(".contact__wrapper").classList.toggle("disable");

    //Hide last project
    setTimeout(function() {
      document
        .querySelector("#project-0" + currentProjectNumber)
        .classList.toggle("enable");
      document
        .querySelector(".bubble--group:nth-child(1) .bubble")
        .classList.add("enable");
      document
        .querySelector(".bubble--group:nth-child(1) .bubble--answer")
        .classList.add("enable");
    }, 700);
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
//	MAIN FUNCTION
//-------------------------------------
function main() {
  document.querySelector(".btn__work").addEventListener("click", seeMyWork);
}

document.onload = main();
