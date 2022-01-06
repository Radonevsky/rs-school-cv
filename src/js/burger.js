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
