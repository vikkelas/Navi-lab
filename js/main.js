// Анимация перехода
const anchors = document.querySelectorAll('a.scroll-to');
for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


// Слайдер продуктов
$(document).ready(function(){
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        simulateTouch: false,
        loop: true,
        navigation: {
          nextEl: ".jr_swiper-button-next",
          prevEl: ".jr_swiper-button-prev",
        },
      });
});

"use strict"
// Анимация меню
function myFunction () {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("menuWord").classList.toggle("noshow");
  document.getElementById("buttonMenu").classList.toggle("active");
}

window.onclick = function closeMenu(event) {
  if (!event.target.matches('.drop_btn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var menuShow = document.getElementsByClassName("item__menu_padding");
    var buttonTrnsform = document.getElementsByClassName("drop_htx");

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }

    for (i = 0; i < buttonTrnsform.length; i++) {
      var btnTransform = buttonTrnsform[i];
      if (btnTransform.classList.contains('active')) {
        btnTransform.classList.remove('active');
      }
    }

    for (i = 0; i < menuShow.length; i++) {
      var openMenu = menuShow[i];
      if (openMenu.classList.contains('noshow')) {
        openMenu.classList.remove('noshow');
      }
    }
  }
};




