import {addClass, removeClass} from "./helpers";

/*Tabs*/
let tabHeaders = document.querySelector('.tabs__header')
let tabHeaderItems = document.querySelectorAll('.tabs__header-item')
let tabContentItems = document.querySelectorAll('.tabs__content-item')
let buttonPrev = document.querySelector('.prev.button')
let buttonNext = document.querySelector('.next.button')


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
let position = 100
buttonPrev.addEventListener('click', ()=> {

    tabContentItems.forEach((el, idx) => {
        el.style.transform = `translateX(-${position}px)`
    })
    position = position + 100
})

buttonNext.addEventListener('click', ()=> {

})

