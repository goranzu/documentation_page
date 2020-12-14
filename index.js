"use strict";

const openMenuButton = document.querySelector(".open-menu");
const nav = document.querySelector(".nav");
const navLinks = nav.querySelectorAll("a");
const header = document.querySelector("header");
const backToTopButton = document.querySelector(".back-to-top");


const observer = new IntersectionObserver(function(payload) {
  const ratio = payload[0].intersectionRatio;
  if(ratio === 0) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  };
})

observer.observe(header);

function handleOpenNavClick() {
  openMenuButton.classList.toggle("open");
  nav.classList.toggle("open");
}

function scrollToTop() {
  console.log("scroll to top");
}

openMenuButton.addEventListener("click", handleOpenNavClick);
navLinks.forEach(el => el.addEventListener("click", handleOpenNavClick));
backToTopButton.addEventListener("click", scrollToTop);

document.addEventListener("click", function(e) {
  console.log(e.target);
})