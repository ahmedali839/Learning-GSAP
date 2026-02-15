// gsap 03

let initialPath = `M 40 150 Q 400 150 600 150`

let finalPath = `M 40 150 Q 400 150 600 150`



const svg = document.querySelector("svg");
const path = document.querySelector("svg path");
const string = document.querySelector(".string");

string.addEventListener("mousemove", function (dd) {
    console.log("Mouse Enter");

    const rect = svg.getBoundingClientRect()

    let x = dd.clientX - rect.left
    let y = dd.clientY - rect.top

    x = Math.max(50, Math.min(600, x))
    y = Math.max(50, Math.min(250, y))

    finalPath = `M 40 150 Q ${x} ${y} 600 150`

    console.log("x: ", x);
    console.log("y: ", y);


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



// // Select elements
// const string = document.querySelector(".string");
// const path = document.querySelector("svg path");
// const svg = document.querySelector("svg");

// let initialPath = `M 10 150 Q 250 150 490 150`;

// // Set initial path properly
// path.setAttribute("d", initialPath);

// string.addEventListener("mousemove", function (e) {
//     const rect = svg.getBoundingClientRect();

//     // Convert mouse position to SVG coordinate space
//     let x = e.clientX - rect.left;
//     let y = e.clientY - rect.top;

//     // Clamp values inside SVG area
//     x = Math.max(50, Math.min(450, x));
//     y = Math.max(50, Math.min(250, y));

//     let newPath = `M 10 150 Q ${x} ${y} 490 150`;

//     gsap.to(path, {
//         attr: { d: newPath },
//         duration: 0.2,
//         ease: "power3.out"
//     });
// });

// string.addEventListener("mouseleave", function () {
//     gsap.to(path, {
//         attr: { d: initialPath },
//         duration: 1,
//         ease: "elastic.out(1, 0.4)"
//     });
// });
