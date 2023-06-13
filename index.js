
const burger = document.querySelector('.buregr');
const navLinks = document.querySelector('.nav-links');


burger.addEventListener('click',() => { 
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
} )




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


document.querySelector(".about").addEventListener("click", () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  });