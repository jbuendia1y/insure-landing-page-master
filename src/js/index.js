const body = document.querySelector('body')
const menu = document.getElementsByClassName('menu')[0]
const menu__button = menu.querySelector('.box-menu__hamburger')
const menu__list = menu.querySelector('.menu__list')


const toogleStyles = ()=>{
    menu__list.classList.toggle('active__menu')
    menu__list.classList.toggle('animate__animated')
    menu__list.classList.toggle('animate__pulse')
    body.classList.toggle('active__body-hiX')
}

menu__button.addEventListener('click',()=>{
    toogleStyles()
})

