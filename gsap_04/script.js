let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", (dd) => {
    console.log("Event Clicked.");
    console.log("dd:", dd.x, " ", dd.y);

    gsap.to(cursor, {
        x: dd.x,
        y: dd.y,
        duration: 1,
        ease: "back.out",
    })

})