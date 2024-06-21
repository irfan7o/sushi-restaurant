// Suggested code may be subject to a license. Learn more: ~LicenseLog:1405499746.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1906828878.
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1348469711.
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
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


const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)


// Suggested code may be subject to a license. Learn more: ~LicenseLog:2741426492.
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
