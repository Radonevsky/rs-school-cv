import {addClass, removeClass} from "./helpers";

/*Tabs*/
const tabHeaders = document.querySelector('.tabs__header')
const tabHeaderItems = document.querySelectorAll('.tabs__header-item')
const slider = document.querySelector('.slider')
const sliderContent = document.querySelector('.tabs__content')
const tabContentItems = document.querySelectorAll('.tabs__content-item')
const buttonPrev = document.querySelector('.prev.button')
const buttonNext = document.querySelector('.next.button')


function clearContent() {
    tabContentItems.forEach(item => {
        removeClass(item, 'show')
    })
}

function showAll() {
    tabContentItems.forEach(item => {
        addClass(item, 'show')
    })
}

function showTab(tabHeader) {
    clearContent()
    tabContentItems.forEach(item => {
        if (item.classList.contains(tabHeader.classList[1])) {
            item.classList.add('show')
        }
    })
}

tabHeaderItems.forEach(tab => {
    tab.onclick = () => {
        const activeNow = tabHeaders.querySelector('.active')
        removeClass(activeNow, 'active')
        addClass(tab, 'active')
        tab.classList.contains('all_projects') ? showAll() : showTab(tab)
        refreshSliderProps()
        checkButtons()
    }

})

showAll()

/* Slider */
let slides = Array.from(slider.querySelectorAll('.show'))
let currentSlide = 1
let countSlides = slides.length
let slidesToShow = 3
let spaceSlides = 30;
let showWidth = sliderContent.clientWidth
let slideWidth = (showWidth - ((slidesToShow - 1) * spaceSlides)) / slidesToShow
const slidesToScroll = 1

const movePosition = slidesToScroll * (slideWidth + spaceSlides)

let position = 0

setScaleForCurrent()
/*Check slides props*/
function refreshSliderProps() {
    removeEventFromItems()
    slides = Array.from(slider.querySelectorAll('.show'))
    countSlides = slides.length
    position = 0
    if (countSlides <= 2) {

        setPosition(1)
    } else if (countSlides > 2) {
        addEventOnItems()
        currentSlide = 1
        setPosition(.8)
    }
}

function setScaleForCurrent() {
    if (countSlides > 2) {
        slides[currentSlide].style.transform = `translateX(${position}px) scale(1)`
        slides[currentSlide].style.boxShadow = "10px 10px #533d4a"
        slides[currentSlide].style.opacity = "1"
    }
}

const addEventOnItems = function()  {
    slides.forEach((el, idx) => {
        el.onclick = function() {
            if (idx < currentSlide) {
                toPrevItem()
            } else if (idx > currentSlide) {
                toNextItem()
            }
        }
    })
}

const removeEventFromItems = function() {
    slides.forEach((el, idx) => {
        el.onclick = function() {
        }
    })
}

const toNextItem = () => {
    currentSlide += 1
    position = position - movePosition
    setPosition(.8)
    checkButtons()
}
const toPrevItem = () => {
    currentSlide -= 1
    position = position + movePosition
    setPosition(.8)
    checkButtons()
}

buttonNext.addEventListener('click', toNextItem)
buttonPrev.addEventListener('click', toPrevItem)


const setPosition = (scale) => {
    slides.forEach((el, idx) => {
        el.style.transform = `translateX(${position}px) scale(${scale})`
        el.style.opacity = "1"
        if (scale < 1) {
            el.style.boxShadow = "6px 6px #533d4a"
            el.style.opacity = "0.5"
            if (idx > currentSlide + 1 || idx < currentSlide - 1) {
                el.style.transform = "scale(0.1)"
                el.style.opacity = "0"
            }
        }

    })
    setScaleForCurrent()
}

const checkButtons = () => {
    buttonPrev.disabled = currentSlide <= 0 || countSlides < 3
    buttonNext.disabled = currentSlide >= slides.length - 1|| countSlides < 3
}

checkButtons()
addEventOnItems()
// Size

window.onresize = function () {
    if ( window.innerWidth < 992) {}
}