import {spanizer_letters} from "./helpers";
import {gsap} from "gsap";


let anim_el_arr = document.querySelectorAll('.animation')

anim_el_arr.forEach(el => {
    spanizer_letters(el)

})

const letters = document.querySelectorAll('.animation span')

function animation() {
    gsap.fromTo(".animation span", {opacity: 0, bottom: -80}, {opacity: 1, bottom: 0});
}

animation()

