gsap.to(".red", {
  rotation: 900,
  duration: 1,
  scrollTrigger: {
    trigger: ".box",
    scrub: 2,
    markers: true,
  },
});
