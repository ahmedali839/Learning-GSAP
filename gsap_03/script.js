// gsap 03

let initialPath = `M 10 100 Q 250 100 490 100`

let finalPath = `M 10 100 Q 250 100 490 100`



const string = document.querySelector(".string");

string.addEventListener("mousemove", function (dd) {
    console.log("Mouse Enter");
    finalPath = `M 10 100 Q ${dd.x} ${dd.y} 490 100`

    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.2,
        ease: "power3.out"
    })

})

string.addEventListener("mouseleave", function () {
    console.log("Mouse Leave");
    finalPath = `M 10 100 Q 250 100 490 100`

    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.3,
        ease: "elastic.out(1,0,2)"
    })

})