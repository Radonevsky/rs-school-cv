import {addClass, removeClass} from "./helpers";

let tabHeaders = document.querySelector('.tabs__header')
let tabHeaderItems = document.querySelectorAll('.tabs__header-item')
let tabContentItems = document.querySelectorAll('.tabs__content-item')


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




