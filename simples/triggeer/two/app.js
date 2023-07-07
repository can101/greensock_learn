gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    // start: 400,
    markers: true,
    // markers: {
    //   startColor: "purple",
    //   endColor: "fuchsia",
    //   fontSize: "1.5rem",
    //   indent: 200,
    // },
    start: "top 30%", //top, bottom, center
    toggleClass: "red",
    // end:"center 20%"
    end: () => `+=${document.querySelector(".square").offsetHeight}`,
  },
});
