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
