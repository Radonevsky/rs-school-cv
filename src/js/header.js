const header = document.querySelector('.header')
const headerLogo = document.querySelector('.logo')
const headerLogoCaption = document.querySelector('.logo__caption')
const overlay = document.querySelector('.overlay')

window.addEventListener('scroll', function() {
    if (pageYOffset > headerLogo.offsetHeight + 30){
        headerLogo.style.transform = 'rotate(0deg)'
        header.style.background = '#253242'

    }
    if (pageYOffset <= headerLogo.offsetHeight + 30){
        headerLogo.style.transform = 'rotate(-10deg)'
        header.style.background = 'none'

    }
});