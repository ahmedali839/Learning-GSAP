// GSAP day 07

let move = document.querySelector("#move");
let marque = document.querySelector(".marque");
let img = document.querySelector(".marque img");

window.addEventListener("wheel", function (d) {
  console.log("d: ", d.deltaY);

  if (d.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".marque img", {
      rotate: 90,
      duration: 0.1,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: -90,
      duration: 0.1,
    });
  }
});
