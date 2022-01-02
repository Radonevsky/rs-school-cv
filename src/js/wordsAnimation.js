import {spanize_letters} from "./helpers";
import {gsap} from "gsap";

/*<=== Selectors ===>*/
const logoMain = document.querySelector('.logo__main .animation')
const logoCaption = document.querySelector('.logo__caption .animation')
const authorTitleFirst = document.querySelector('.author__title .animation.first')
const authorTitleLast = document.querySelector('.author__title .animation.last')
const authorTitle = document.querySelector('.author__title')

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

//Header hover
let logoMainText = gsap.utils.toArray(logoMainSpaned.querySelectorAll('.letter'));
logoMainText.forEach(logoMainText => {
    logoMainText.addEventListener("mouseenter", () => {
        // animate the "hovered" image
        gsap.to(logoMainText, {top: 3, duration: .5, ease: "elastic"})
    })
    logoMainText.addEventListener("mouseleave", () => {
        // animate the "hovered" image
        gsap.to(logoMainText, {top: 0, duration: .5,  ease: "elastic"})
    })
})

//Nav hover
let navItem = gsap.utils.toArray(document.querySelectorAll('.nav__list-item'));
navItem.forEach(navItem => {
    navItem.addEventListener("mouseenter", () => {
        // animate the "hovered" image
        gsap.to(navItem, {scale: 1.3, duration: .5, ease: "elastic"})
    })
    navItem.addEventListener("mouseleave", () => {
        // animate the "hovered" image
        gsap.to(navItem, {scale: 1, duration: .5,  ease: "elastic"})
    })
})

/*<=== Author ===>*/
Array.from(authorTitleFirstSpaned.querySelectorAll('.letter')).forEach((el, idx) => {
    gsap.from(el, 1, {
        opacity: 0,
        scale: .7,
        bottom: -100,
        rotation: 360,
        delay: idx * 0.1
    })
})

Array.from(authorTitleLastSpaned.querySelectorAll('.letter')).forEach((el, idx) => {
    gsap.from(el, 1, {
        opacity: 0,
        scale: .7,
        bottom: -100,
        rotation: 360,
        delay: idx * 0.1
    })
})

//Author hover
let authorText = gsap.utils.toArray(authorTitle.querySelectorAll('.letter'));
authorText.forEach(authorText => {
    authorText.addEventListener("mouseenter", () => {
        // animate the "hovered" image
        gsap.to(authorText, {duration: .2, scale: 1.3})
    })
    authorText.addEventListener("mouseleave", () => {
        // animate the "hovered" image
        gsap.to(authorText, {duration: .2, scale: 1,})
    })
})

/*<=== Contacts ===>*/
//Contacts-item hover
let contactItems = gsap.utils.toArray(document.querySelectorAll('.contacts__item'));
contactItems.forEach(contactItem => {
    contactItem.addEventListener("mouseenter", () => {
        // animate the "hovered" image
        gsap.to(contactItem, {duration: .3, scale: 1.1, ease: 'elastic'})
    })
    contactItem.addEventListener("mouseleave", () => {
        // animate the "hovered" image
        gsap.to(contactItem, {duration: .3, scale: 1, ease: 'elastic'})
    })
})


