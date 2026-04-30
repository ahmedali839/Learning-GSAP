gsap.registerPlugin(ScrollTrigger);

gsap.to("#page2 .card", {
  xPercent: -150,
  ease: "none",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top top",
    end: "+=150%",
    scrub: 2,
    pin: true,
  },
});
