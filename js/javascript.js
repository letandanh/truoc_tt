var mybutton = document.getElementById("myBtn");
var mynav = document.getElementById('nav');
var logo = document.getElementById('logo');
var hr_footer = document.getElementById('hr-footer');
//khi cuộn chuột
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    //button top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none ";
    }
    //background navbar and height
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mynav.style.background = 'rgba(0, 0, 0, 0.7)';
        logo.style.height = '50px';
        logo.style.width = '50px';
    } else {
        mynav.style.background = 'transparent';
        logo.style.height = '90px';
        logo.style.width = '90px';
    }
    if (document.body.scrollTop > 4250 || document.documentElement.scrollTop > 4250) {
        hr_footer.style.width = "100%";
        hr_footer.style.transition = "all linear 1s";
    }else{
        hr_footer.style.width = "0px"
        hr_footer.style.transition = "all linear 0s";
    }
}
// khi nhan  button se len top
//cach 1
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
//cach2
var myBtn = document.getElementById("myBtn")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
myBtn.addEventListener("click", scrollToTop)
// loading start
$(window).on('load', function () {
    $("#preloader_1").delay(1000).fadeOut();
    $("#spinners").delay(1000).fadeOut("slow");
});
//navbar toggle
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
// 3D Parallax Tilt Effect using Vanilla tilt.js
VanillaTilt.init(document.querySelectorAll(".product-img"), {
    max: 25,
    speed: 400
  });
//the hr bang cach greensock
    // gsap.to(".hr-footer", {duration: 3, width: 1100});