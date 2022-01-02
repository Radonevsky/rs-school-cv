import {activeToggle} from "./helpers";

burger.onclick = () => {
    activeToggle(burger, "active")
    activeToggle(nav, "active-burger")
}

window.onresize = function() {
    let windowScrollWidth = window.innerWidth
    if ((windowScrollWidth > 992) && (nav.classList.contains('active-burger'))) {
        activeToggle(burger, "active")
        activeToggle(nav, "active-burger")
    }
}

nav.onclick = () => {
    if (nav.classList.contains('active-burger')) {
        activeToggle(burger, "active")
        activeToggle(nav, "active-burger")
    }
}
/*<=== Header ===>*/
const header = document.querySelector('.header')
const headerLogo = document.querySelector('.logo')
const headerLogoCaption = document.querySelector('.logo__caption')
const overlay = document.querySelector('.overlay')

window.addEventListener('scroll', function() {
    if (pageYOffset > headerLogo.offsetHeight + 30){
        headerLogo.style.transform = 'rotate(0deg)'
        headerLogo.style.backgroundColor = 'rgba(250, 171, 213, .5)'
        headerLogo.style.position = 'fixed'
        headerLogo.style.top = '0'
        headerLogo.style.left = '0'
    }
    if (pageYOffset <= headerLogo.offsetHeight + 30){
        headerLogo.style.transform = 'rotate(-10deg)'
        headerLogo.style.backgroundColor = 'rgba(250, 171, 213, 0)'
        headerLogo.style.position = 'relative'
    }
});