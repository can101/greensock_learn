gsap.to(".f", {
  rotation: 360,
  x: "100vw",
  xPercent: -100,
  duration: 2,
  repeat: 2, //infinitely = -1
  yoyo: true,
});

gsap.to(".r", {
  rotation: 360,
  duration: 1,
  repeat: 1,
  repeatDelay: 1,
});

gsap.to(".l", {
  rotation: 360,
  duration: 1,
  delay: 1,
});
