//-------------------------------------
//	RESPONSIVE
//-------------------------------------
function responsive() {
  let windowWidth = window.innerWidth;

  if (windowWidth <= 650) {
    document.querySelector(".contact__description .description__title h2").innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
    document.querySelector('.home').classList.remove('disable');
    document.querySelector('.btn__home').classList.add('btn__work--desktop', 'btn__work--mobile');
    if (!document.querySelector('.project--mobile')) {
      document.querySelector('.projects').innerHTML = contentMobile;
    }
  } else {
    document.querySelector(".contact__description .description__title h2").innerHTML = `Pour me contacter,<br>c’est par ici 👉`;
    document.querySelector('.btn__home').classList.replace('btn__work--mobile', 'btn__work--desktop');
    if (!document.querySelector('.project')) {
      document.querySelector('.projects').innerHTML = content;
    }
  }
}

//-------------------------------------
//	MAIN FUNCTION
//-------------------------------------
function main() {
  let windowWidth = window.innerWidth;

  if (windowWidth <= 650) {
    document.querySelector(".contact__description .description__title h2").innerHTML = `Pour me contacter,<br>c’est par ici 👇`;
    document.querySelector('.home').classList.remove('disable');
    document.querySelector('.btn__home').classList.add('btn__work--mobile');
    document.querySelector('.btn__home').classList.remove('btn__work--desktop');
    document.querySelector('.projects').innerHTML = contentMobile;
  } else { 
    document.querySelector(".contact__description .description__title h2").innerHTML = `Pour me contacter,<br>c’est par ici 👉`;
    document.querySelector('.btn__home').classList.add('btn__work--desktop');
    document.querySelector('.btn__home').classList.remove('btn__work--mobile');
    document.querySelector('.projects').innerHTML = content;
  }
  document.querySelector('.btn__home').addEventListener('click', seeMyWork);
}

document.onload = main();

window.onresize = responsive;