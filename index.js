
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