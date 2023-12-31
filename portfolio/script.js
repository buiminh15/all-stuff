const navMenu = document.getElementById('nav__menu')
const navToggle = document.getElementById('nav__toggle')
const navClose = document.getElementById('nav__close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}


const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)