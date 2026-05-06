gsap.registerPlugin(ScrollTrigger);

const page2 = document.querySelector("#page2");
const cardStrip = document.querySelector("#page2 .card");
const getScrollDistance = () => cardStrip.scrollWidth - page2.clientWidth;

gsap.to(cardStrip, { // to control gsap specific scrolling for limited area
  x: () => -getScrollDistance(),
  ease: "none",
  scrollTrigger: {
    trigger: page2,
    scroller: "body",
    markers: true,
    start: "top 80",
    end: () => "+=" + getScrollDistance(),
    scrub: 2,
    pin: true,
    invalidateOnRefresh: true,
  },
});
