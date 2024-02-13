
const toggleBtn = document.querySelector('.toggle_btn');
// console.log(toggleBtn);
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
};


/********AUTOMATIC SLIDER***********/

// let firstIndex = 0;
// function automaticSlide(){
//     setTimeout(automaticSlide,2000);
//     let pics;
//     const img = document.querySelectorAll('img');
//     for(pics = 0; pics < img.length ; pics++){
//         img[pics].style.display = 'none';
//     }
//     firstIndex++;
//     if(firstIndex > img.length){
//         firstIndex = 1;
//     }
//     img[firstIndex-1].style.display = 'block';
// }

// automaticSlide();

/********************Swiper js***********************/
var swiper = new Swiper(".slide-container", {
    direction:'vertical',
    slidesPerView: 3,
    spaceBetween: 30,
    // sliderPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    // centerSlide: "true",
    // fade: "true",
    // grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    //   dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //   },
    //   520: {
    //     slidesPerView: 2,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //   },
    //   1000: {
    //     slidesPerView: 4,
    //   },
    // },
  });