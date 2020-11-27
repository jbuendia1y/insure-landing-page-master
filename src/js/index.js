const body = document.querySelector('body')
const menu = document.getElementsByClassName('menu')[0]
const menu__button = menu.querySelector('.box-menu__hamburger')
const button__img = menu.querySelector('.box-menu__img')
const menu__list = menu.querySelector('.menu__list')

let cont = 0

const toogleStyles = ()=>{
    menu__list.classList.toggle('active__menu')
    menu__list.classList.toggle('animate__animated')
    menu__list.classList.toggle('animate__pulse')
    body.classList.toggle('active__body-hiX')
}

menu__button.addEventListener('click',()=>{
    toogleStyles()
    if(cont == 0){
        button__img.src = "assets/icons/icon-close.svg"
        cont++
    }else if(cont == 1){
        button__img.src = "assets/icons/icon-hamburger.svg"
        cont--
    }
})

