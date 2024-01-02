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