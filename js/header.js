const DropdownContent1 = document.querySelector('.dropdown__content1')
const DropdownContent2 = document.querySelector('.dropdown__content2')
const DropdownContent3 = document.querySelector('.dropdown__content3')

const DropdownArrow1 = document.querySelector('.dropdown__arrow1')
const DropdownArrow2 = document.querySelector('.dropdown__arrow2')
const DropdownArrow3 = document.querySelector('.dropdown__arrow3')


const MenuContent1 = document.querySelector('.menu__content1')
const MenuContent2 = document.querySelector('.menu__content2')
const MenuContent3 = document.querySelector('.menu__content3')

const MenuArrow1 = document.querySelector('.menu__arrow1')
const MenuArrow2 = document.querySelector('.menu__arrow2')
const MenuArrow3 = document.querySelector('.menu__arrow3')


const BurgerMenuBtn = document.querySelector('.burger__menu')
const BurgerMenuInner = document.querySelector('.menu__burger__inner')
const CrossBtn = document.querySelector('.cross')
const Body = document.querySelector('.body')



function MenuActive(){
    BurgerMenuInner.classList.add('active__menu')
    Body.classList.add('menu__wrapper')
}

function MenuOff(){
    BurgerMenuInner.classList.remove('active__menu')
    Body.classList.remove('menu__wrapper')
}

function DropdownActive1(){
    DropdownContent1.classList.toggle('dropdown__content__active')
    DropdownArrow1.classList.toggle('dropdown__arrow__active')
}

function DropdownActive2(){
    DropdownContent2.classList.toggle('dropdown__content__active')
    DropdownArrow2.classList.toggle('dropdown__arrow__active')
}

function DropdownActive3(){
    DropdownContent3.classList.toggle('dropdown__content__active')
    DropdownArrow3.classList.toggle('dropdown__arrow__active')
}


function MenuDropdownActive1(){
    MenuContent1.classList.toggle('menu__content__active')
    MenuArrow1.classList.toggle('menu__arrow__active')
}

function MenuDropdownActive2(){
    MenuContent2.classList.toggle('menu__content__active')
    MenuArrow2.classList.toggle('menu__arrow__active')
}

function MenuDropdownActive3(){
    MenuContent3.classList.toggle('menu__content__active')
    MenuArrow3.classList.toggle('menu__arrow__active')
}











