var projectNumber = document.querySelectorAll('.project').length;
document.querySelector('.number__total span:last-child').textContent = projectNumber;

document.querySelector('body').onscroll = function(){
  alert('PLOP');
}


function ttdonnees(param1,param2,param3) {
  var donnee = document.getElementById(param1+'Answer').value;

  if(donnee !== "" && donnee !== " ") {
      document.getElementById(param1+'Answer').setAttribute('readonly', true)
      document.getElementById(param1).innerHTML = donnee ;
      displayBubble(param2,param3);
  } else {

  }
}

function displayBubble(param,param2) {
  document.querySelector('.contact__form form').scrollTo(0,document.body.scrollHeight);
  document.querySelector('.bubble--group:nth-child('+ param +') .bubble').classList.add('enable');
  document.querySelector('.bubble--group:nth-child('+ param +') .bubble--answer').classList.add('enable');
  if(param2==3) {
    document.querySelectorAll('.bubble--group:nth-child('+ param +') .bubble__choice .bubble').length;
    for(var n =0; n<document.querySelectorAll('.bubble--group:nth-child('+ param +') .bubble__choice .bubble').length; n++) {
      document.querySelectorAll('.bubble--group:nth-child('+ param +') .bubble__choice .bubble')[n].classList.add('enableBis')
    }
  }
}

function displayProject(project) {
  var imgNumber = document.querySelectorAll(project +  ' .project__visuel img').length;
  //console.log(project + ' : ' + imgNumber);
  for(var i = 0; i < imgNumber; i++){
    document.querySelectorAll(project +  ' .project__visuel img')[i].classList.toggle('enable');
  }
  document.querySelector(project +  ' .project__visuel').classList.toggle('enable');
  document.querySelector(project +  ' .description__number').classList.toggle('enable');
  document.querySelector(project +  ' .description__title h2').classList.toggle('enable');
  for(var j = 0; j < 3; j++){
    document.querySelectorAll(project +  ' .info span')[j].classList.toggle('enable');
    document.querySelectorAll(project +  ' .info p')[j].classList.toggle('enable');
  }
  document.querySelector(project +  ' .description p').classList.toggle('enable');
  document.querySelector(project +  ' .description__wrapper .btn').classList.toggle('enable');
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

  if ((currentProjectNumber+parameter) <= projectNumber && (currentProjectNumber+parameter) > 0) {
    //Dispay the current
    document.querySelector('.number__active span:last-child').textContent = currentProjectNumber + parameter;

    var projectNext = '#project-0'+ (currentProjectNumber + parameter);
    var projectPrev = '#project-0'+ currentProjectNumber;

    //Hide previous project
    displayProject(projectPrev);

    setTimeout(function(){
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
      setTimeout(function(){
        document.querySelector('#project-01').classList.toggle('enable');
      }, 700);
  } else if ((currentProjectNumber) === projectNumber) {
    //Display Contact
    document.querySelector('.contact__wrapper').classList.toggle('disable');

    //Hide last project
    setTimeout(function(){
      document.querySelector('#project-0'+ currentProjectNumber).classList.toggle('enable');document.querySelector('.bubble--group:nth-child(1) .bubble').classList.add('enable');
      document.querySelector('.bubble--group:nth-child(1) .bubble--answer').classList.add('enable');

    }, 700);
  }
}

function main() {
  document.querySelector('.btn__work').addEventListener('click', seeMyWork);
}

document.onload = main();
