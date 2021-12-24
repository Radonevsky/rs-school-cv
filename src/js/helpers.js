
function activeToggle(el, classActive = 'active') {
    if (el.classList.contains(classActive)) {
        el.classList.remove(classActive)
    } else {
        el.classList.add(classActive)
    }
}

function addClass(el, className) {
    const isContainsClass = el.classList.contains(className)
    if (isContainsClass === false) {
        el.classList.add(className)
    }
}

function removeClass(el, className = 'active') {

    if (el.classList.contains(className)) {
        el.classList.remove(className)
    }
}

export {activeToggle, addClass, removeClass};