
let openNav = document.querySelector("#nav i")
let full = document.querySelector("#full")
let closeNav = document.querySelector("#full i")


let tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.3,
})
tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0
})
tl.from("#full i", {
    opacity: 0
})
tl.pause()

openNav.addEventListener("click", function () {
    console.log("Hamburger Clicked.");
    tl.play();

})


closeNav.addEventListener("click", function () {
    console.log("Hamburger Clicked Closed.");

    gsap.to(full, {
        right: "-40%",
    })

    // tl.reverse()

})