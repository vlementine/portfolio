 this.addEventListener("load", doSomething, true);

 var myElement = document.querySelector("#parallax");
 var position;

 function doSomething(e) {
     position = getPosition(myElement);
     console.log("The image is located at: y ->" + position.y);
 }

 // deal with the page getting resized or scrolled
 window.addEventListener("scroll", updatePosition, false);
 window.addEventListener("resize", updatePosition, false);

 function updatePosition() {
    position = getPosition(myElement);
 }

 // helper function to get an element's exact position
 function getPosition(el) {
     var yPosition = 0;

     while (el) {
         if (el.tagName == "BODY") {
             // deal with browser quirks with body/window/document and page scroll
             var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
             yPosition += (el.offsetTop - yScrollPos + el.clientTop);
         } else {
             yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
         }

         el = el.offsetParent;
     }
     return {
         y: yPosition
     };
 }

 function scrolled(o) {
     position = getPosition(myElement);
     console.log("Position Y : " + position.y);

     let plop = position.y - window.innerHeight;
     console.log(plop);

     if (plop < 100 || plop < 0) {
         console.log('Youhou')
     }
 }