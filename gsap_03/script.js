// gsap 03

let initialPath = `M 40 150 Q 400 150 1000 150`

let finalPath = `M 40 150 Q 400 150 1000 150`



const string = document.querySelector(".string");

string.addEventListener("mousemove", function (dd) {
    console.log("Mouse Enter");
    finalPath = `M 40 150 Q  ${dd.x} ${dd.y} 1000 150`

    console.log("x: ", dd.x);
    console.log("y: ", dd.y);


    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.2,
        ease: "power3.out"
    })

})

string.addEventListener("mouseleave", function () {
    console.log("Mouse Leave");

    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.3,
        ease: "elastic.out(1,0,2)"
    })

})



