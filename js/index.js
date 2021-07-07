
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
})