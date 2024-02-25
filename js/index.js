
const toggleBtn = document.querySelector('.toggle_btn');
// console.log(toggleBtn);
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
};


/********************Owl slider***********************/
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})