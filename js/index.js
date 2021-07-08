
// menu toggle

let navToggleIn = document.querySelector('#nav-in');
let navToggleOut = document.querySelector('#nav-out');
let menu = document.querySelector('#header #mini-menu');

navToggleIn.addEventListener('click', function(){
  menu.classList.add('show');
});
navToggleOut.addEventListener('click', function(){
  menu.classList.remove('show');
});


// tabs script

let ul = document.querySelector('.tabs-tab');
let tab = document.querySelectorAll('.tab');
tab.forEach(el => {
  el.addEventListener('click', function(){
    ul.querySelector('.active').classList.remove('active');

    el.classList.add('active')
  })
});

let tabContent1 = document.querySelector('#tab-content1');
let tabContent2 = document.querySelector('#tab-content2');
let tabContent3 = document.querySelector('#tab-content3');
let tabContent4 = document.querySelector('#tab-content4');

function showTab(tabNO){

    tabContent1.classList.remove('show');
    tabContent2.classList.remove('show');
    tabContent3.classList.remove('show');
    tabContent4.classList.remove('show');

    switch(tabNO){
      case 1:
        tabContent1.classList.add('show');
        break;
        
      case 2:
        tabContent2.classList.add('show');
        break;

      case 3:
        tabContent3.classList.add('show');
        break;

      case 4:
        tabContent4.classList.add('show');
        break;
    }

 }