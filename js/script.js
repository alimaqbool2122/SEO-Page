'use strict';


const navbartogglebtn = document.querySelector("[data-navbar-toggle-btn]");
const navbarbtn = document.querySelector("[data-navbar]");
const navbarlink = document.querySelector("[data-navbar-link]");

navbartogglebtn.addEventListener("click", function(){
navbarbtn.classList.toggle("active");

});



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});