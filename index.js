// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

let email = document.getElementById('email')
let copied = document.getElementById('copied')
email.addEventListener('click', (e) => {
    navigator.clipboard.writeText('solomakha.bohdan@gmail.com').then(() => {
      copied.style.display = 'block'
      setTimeout(() => {
        copied.style.display = 'none'
      }, 1000)
    })
})

let email2 = document.getElementById('email2')
let copied2 = document.getElementById('copied2')
email2.addEventListener('click', (e) => {
  navigator.clipboard.writeText('solomakha.bohdan@gmail.com').then(() => {
    copied2.style.display = 'block'
    setTimeout(() => {
      copied2.style.display = 'none'
    }, 1000)
  })
})