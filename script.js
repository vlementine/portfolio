//-------------------------------------
//	VARIABLES
//-------------------------------------
var projectNumber = document.querySelectorAll('.project').length;
document.querySelector('.number__total span:last-child').textContent = projectNumber;

//-------------------------------------
//	GET ANSWER
//-------------------------------------
function getAnswer(name, groupBubble, nbBubble) {
  var answer = document.getElementById(name + 'Answer').value;
  displayBubble(groupBubble, nbBubble);

  if (answer !== '' && answer !== ' ') {
    document.getElementById(name + 'Answer').setAttribute('readonly', true);

    if (name == 'name') {
      document.getElementById(name + 'Question').innerHTML = answer;
    }
  }
}

//-------------------------------------
//	DISPLAY BUBBLE
//-------------------------------------
function displayBubble(groupBubble, nbBubble) {
  for (var n = 0; n < 2; n++) {
    document.querySelectorAll('.bubble--group:nth-child(' + groupBubble + ') .bubble')[n].classList.add('enable');
    document.querySelector('.contact__form form').scrollTo(0, document.body.scrollHeight);
  }

  if (nbBubble == 3) {
    for (var n = 0; n < nbBubble; n++) {
      document.querySelectorAll('.bubble--group:nth-child(' + groupBubble + ') .bubble--group__choice .bubble')[n].classList.add('enable__choice');
      document.querySelector('.contact__form form').scrollTo(0, document.body.scrollHeight);
    }
  }
}

//-------------------------------------
//	DISPLAY PROJECT
//-------------------------------------
function displayProject(project) {
  var imgNumber = document.querySelectorAll(project + ' .project__visuel img').length;
  //console.log(project + ' : ' + imgNumber);
  for (var i = 0; i < imgNumber; i++) {
    document.querySelectorAll(project + ' .project__visuel img')[i].classList.toggle('enable');
  }

  document.querySelector(project + ' .project__visuel').classList.toggle('enable');
  document.querySelector(project + ' .description__number').classList.toggle('enable');
  document.querySelector(project + ' .description__title h2').classList.toggle('enable');

  for (var j = 0; j < 3; j++) {
    document.querySelectorAll(project + ' .info span')[j].classList.toggle('enable');
    document.querySelectorAll(project + ' .info p')[j].classList.toggle('enable');
  }

  document.querySelector(project + ' .description p').classList.toggle('enable');
  document.querySelector(project + ' .description__wrapper .btn').classList.toggle('enable');
}

function seeMyWork() {
  //Hide Home
  document.querySelector('.home').classList.add('disable');

  //Display first project
  document.querySelector('#project-01').classList.toggle('enable');
  displayProject('#project-01');
}

function navigationProjects(parameter) {
  var currentProjectNumber = parseInt(document.querySelector('.number__active span:last-child').innerHTML);

  if ((currentProjectNumber + parameter) <= projectNumber && (currentProjectNumber + parameter) > 0) {
    //Dispay the current
    document.querySelector('.number__active span:last-child').textContent = currentProjectNumber + parameter;

    var projectNext = '#project-0' + (currentProjectNumber + parameter);
    var projectPrev = '#project-0' + currentProjectNumber;

    //Hide previous project
    displayProject(projectPrev);

    setTimeout(function () {
      document.querySelector(projectPrev).classList.toggle('enable');
      document.querySelector(projectNext).classList.toggle('enable');

      //Display next project
      displayProject(projectNext);
    }, 800);
  } else if ((currentProjectNumber) === 1) {
    //Display Home
    document.querySelector('.home').classList.toggle('disable');

    //Hide first project
    displayProject('#project-01');
    setTimeout(function () {
      document.querySelector('#project-01').classList.toggle('enable');
    }, 700);
  } else if ((currentProjectNumber) === projectNumber) {
    //Display Contact
    document.querySelector('.contact__wrapper').classList.toggle('disable');

    //Hide last project
    setTimeout(function () {
      document.querySelector('#project-0' + currentProjectNumber).classList.toggle('enable');
      document.querySelector('.bubble--group:nth-child(1) .bubble').classList.add('enable');
      document.querySelector('.bubble--group:nth-child(1) .bubble--answer').classList.add('enable');

    }, 700);
  }
}

//-------------------------------------
//	VALIDATE EMAIL
//-------------------------------------
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate(groupBubble, nbBubble) {
  var result = document.querySelector('#result');
  var email = document.querySelector('#mailAnswer').value;

  if (validateEmail(email)) {
    document.querySelector('#mailAnswer').setAttribute('readonly', true);
    result.style.display = 'none';
    displayBubble(groupBubble, nbBubble);
    sendEmail();
  } else {
    result.innerText = 'L\'adresse n\'est pas valide';
    result.style.color = 'red';
  }
  return false;
}

//-------------------------------------
//	MAIL SENDING
//-------------------------------------
function sendEmail() {
  //Variables
  var nameAnswer = document.getElementById('nameAnswer').value;
  var mailAnswer = document.getElementById('mailAnswer').value;
  if (document.getElementById('project-1').checked) {
    var objectAnswer = "Une question ?";
  } else if (document.getElementById('project-2').checked) {
    var objectAnswer = "Un projet dans les cartons";
  } else if (document.getElementById('project-3').checked) {
    var objectAnswer = "Seulement envie de dire bonjour";
  }
  var messageAnswer = document.getElementById('messageAnswer').value;

  console.log(nameAnswer + ' / ' + mailAnswer + ' / ' + objectAnswer + ' / ' + messageAnswer);

  $.ajax({
      url: 'sendEmail.php',
      data: {
        name: nameAnswer, 
        mail: mailAnswer, 
        object: objectAnswer, 
        message: messageAnswer
      }
    }).done(function () {
        console.log('Email sended');
  });
}

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
function main() {
  document.querySelector('.btn__work').addEventListener('click', seeMyWork);
}

document.onload = main();