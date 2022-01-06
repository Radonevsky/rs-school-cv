const header = document.querySelector('.header')
const headerLogo = document.querySelector('.logo')
const headerLogoCaption = document.querySelector('.logo__caption')
const overlay = document.querySelector('.overlay')
const phoneWidth = 599;

console.log(document.documentElement.clientWidth)
// For phone landscape up
if (document.documentElement.clientWidth > phoneWidth) {
    window.addEventListener('scroll', function () {
        if (pageYOffset > headerLogo.offsetHeight + 30) {
            headerLogo.style.transform = 'rotate(0deg)'
            header.style.background = '#253242'
            header.style.height = '100px'
            header.style.paddingTop = '0'
        }
        if (pageYOffset <= headerLogo.offsetHeight + 30) {
            headerLogo.style.transform = 'rotate(-10deg)'
            header.style.background = 'none'
            header.style.height = '140px'
            header.style.paddingTop = '15px'
        }
    });
}

// For phone only
if (document.documentElement.clientWidth <= phoneWidth) {
    window.addEventListener('scroll', function () {
        if (pageYOffset > headerLogo.offsetHeight + 30) {
            header.style.background = '#253242'
        }
        if (pageYOffset <= headerLogo.offsetHeight + 30) {
            header.style.background = 'none'
        }
    });
}