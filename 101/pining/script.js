gsap.registerPlugin(ScrollTrigger);

// gsap.to(".orange", {
//   x: 400,
//   rotation: 360,
//   duration: 3,
//   scrollTrigger: ".orange",
// });

// toogle actions

// gsap.to(".orange", {
//   scrollTrigger: {
//     trigger: ".orange",
//     toggleActions: "restart pause reverse pause",
//     markers: true,
//     scrub: true,
//     // start: "20px 80%",
//     start: "center center",
//     endTrigger: ".orange",
//     //   end:"bottom 100px",
//     end: "bottom 100px",
//     //   end:"+=300",
//     // end: `+=${document.querySelector(".orange").offsetWidth}`,
//     //   start:"top center"
//   },
//   x: 400,
//   rotation: 360,
//   duration: 3,
// });

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".orange",
//     toggleActions: "restart pause reverse pause",
//     markers: true,
//     scrub: true,
//     start: "center center",
//     endTrigger: ".orange",
//     end: "bottom 100px",
//   },
// });

// tl.to(".orange", {
//   x: 400,
//   rotation: 360,
//   duration: 3,
//   ease: "none",
// });

// pining
gsap.to(".orange", {
  scrollTrigger: {
    trigger: ".orange",
    toggleActions: "restart pause reverse pause",
    markers: true,
    scrub: true,
    start: "top center",
    endTrigger: ".orange",
    pin: true,
    end: "top 100px",
  },
  x: 400,
  rotation: 360,
  duration: 3,
});
