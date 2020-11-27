"use strict";

var body = document.querySelector('body');
var menu = document.getElementsByClassName('menu')[0];
var menu__button = menu.querySelector('.box-menu__hamburger');
var button__img = menu.querySelector('.box-menu__img');
var menu__list = menu.querySelector('.menu__list');
var cont = 0;

var toogleStyles = function toogleStyles() {
  menu__list.classList.toggle('active__menu');
  menu__list.classList.toggle('animate__animated');
  menu__list.classList.toggle('animate__pulse');
  body.classList.toggle('active__body-hiX');
};

menu__button.addEventListener('click', function () {
  toogleStyles();

  if (cont == 0) {
    button__img.src = "assets/icons/icon-close.svg";
    cont++;
  } else if (cont == 1) {
    button__img.src = "assets/icons/icon-hamburger.svg";
    cont--;
  }
});