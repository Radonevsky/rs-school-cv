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
    }
})

showAll()

/*Slider*/
let countSlides = slider.querySelectorAll('.show').length
const slidesToShow = 3
const slidesToScroll = 1
const showWidth = sliderContent.clientWidth
const slideWidth = showWidth / slidesToShow
const movePosition = slidesToScroll * slideWidth

let position = 0

buttonPrev.addEventListener('click', ()=> {
    position = position - movePosition
    setPosition()
    checkButtons()
})

buttonNext.addEventListener('click', ()=> {
    position = position + movePosition
    setPosition()
    checkButtons()
})

const setPosition = () => {
    tabContentItems.forEach((el, idx) => {
        el.style.transform = `translateX(${position}px)`
    })
}

const checkButtons = () => {
    buttonPrev.disabled = position === 0
    //buttonNext.disabled = position <= countSlides * slideWidth
}

checkButtons()
