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


// EMAIL

const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()
  emailjs.sendForm('service_23p1027', 'template_9ya3ofl', '#contact-form', 'exvUvInuivIVfq-BP')
  .then(() => {
    contactMessage.textContent = 'Message sent successfully. ✅'

    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000);

    contactForm.reset()
  }, () => {
    contactMessage.textContent = 'Message not sent (service error) ❌'
  })
}

contactForm.addEventListener('submit', sendEmail)

// show scroll up

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >=350 ?scrollUp.classList.add('show-scroll')
          : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// scroll sections active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 58
    const sectionId = current.getAttribute('id')
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add': 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())

  localStorage.setItem('selected-icon', getCurrentIcon())
})

// scroll reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '68px',
  duration: 2500,
  delay: 400,
  reset: true // Animation repeat
})

sr.reveal(`.home__profile, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .about__info, 
            .about__container, .section__title-1, .about__info,
            .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})