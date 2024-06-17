// Suggested code may be subject to a license. Learn more: ~LicenseLog:1405499746.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1906828878.
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle) {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1348469711.
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1348469711.
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1620437847.
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))