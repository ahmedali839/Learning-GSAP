// // Entire Animation 01
// function breakTest() {
//   let h1 = document.querySelector("h1");

//   let splittedText = h1.textContent.split("");

//   let clutter = "";

//   splittedText.forEach(function (e) {
//     clutter += `<span>${e}</span>`;
//   });

//   h1.innerHTML = clutter;
//   console.log(clutter);
// }
// breakTest();

// gsap.from("h1 span", {
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.5,
//   stagger: 0.15,
//   ease: "power3.out",
// });



// // Entire Animation 02
function breakTest() {
  let h1 = document.querySelector("h1");

  let splittedText = h1.textContent.split("");

  let halfed = Math.round(splittedText.length / 2);

  let clutter = "";
  splittedText.forEach(function (e, i) {
    if (i <= halfed) {
      clutter += `<span class="first">${e}</span>`;
    } else {
      clutter += `<span class="second">${e}</span>`;
    }
  });
  h1.innerHTML = clutter;
}

breakTest();

gsap.from("h1 .first", {
  y: 50,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
  opacity: 0,
});

gsap.from("h1 .second", {
  y: 50,
  duration: 0.5,
  delay: 0.5,
  stagger: -0.1,
  opacity: 0,
});
