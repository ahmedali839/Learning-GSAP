let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#image")

main.addEventListener("mousemove", (dd) => {
    // console.log("Event Clicked.");
    // console.log("dd:", dd.x, " ", dd.y);

    gsap.to(cursor, {
        x: dd.x,
        y: dd.y,
        duration: 1,
        ease: "back.out",
    })

})
image.addEventListener("mouseenter", (dd) => {
    console.log("Image Event Clicked.");

    gsap.to(cursor, {
        scale: 4
    })

})
image.addEventListener("mouseleave", (dd) => {
    console.log("Image Event Clicked.");

    gsap.to(cursor, {
        scale: 1
    })

})