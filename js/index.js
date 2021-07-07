
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