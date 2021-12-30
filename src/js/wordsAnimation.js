import {spanize_letters} from "./helpers";
import {gsap} from "gsap";

/*<=== Selectors ===>*/
const logoMain = document.querySelector('.logo__main .animation')
const logoCaption = document.querySelector('.logo__caption .animation')
const authorTitleFirst = document.querySelector('.author__title .animation.first')
const authorTitleLast = document.querySelector('.author__title .animation.last')

const logoMainSpaned = spanize_letters(logoMain)
const logoCaptionSpaned = spanize_letters(logoCaption)
const authorTitleFirstSpaned = spanize_letters(authorTitleFirst)
const authorTitleLastSpaned = spanize_letters(authorTitleLast)


/*
console.log(mainLogoSpaned.querySelectorAll('.letter'))*/

/*<=== Header ===>*/
Array.from(logoMainSpaned.querySelectorAll('.letter')).forEach((el, idx) => {
    gsap.from(el, 1, {
        opacity: 0,
        scale: .7,
        bottom: -100,
        ease: "elastic",
        rotation: 360,
        delay: idx * 0.1
    })
})

Array.from(logoCaptionSpaned.querySelectorAll('.letter')).forEach((el, idx) => {
    gsap.from(el, .3, {
        opacity: 0,
        scale: .7,
        top: -50,
        delay: idx * .1
    })
})

let images = gsap.utils.toArray(logoMainSpaned.querySelectorAll('.letter'));
images.forEach(image => {
    image.addEventListener("mouseenter", () => {
        // animate the "hovered" image
        gsap.to(image, {top: 3, duration: .5, ease: "elastic"})
    })
    image.addEventListener("mouseleave", () => {
        // animate the "hovered" image
        gsap.to(image, {top: 0, duration: .5,  ease: "elastic"})
    })
})

/*<=== Author ===>*/

Array.from(authorTitleFirstSpaned.querySelectorAll('.letter')).forEach((el, idx) => {
    gsap.from(el, 1, {
        opacity: 0,
        scale: .7,
        bottom: -100,
        ease: "elastic",
        rotation: 360,
        delay: idx * 0.1
    })
})