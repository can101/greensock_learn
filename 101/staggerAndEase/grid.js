gsap.to(".bx", {
  scale: 0.1,
  y: 60,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
  dleay: 1,
  stagger: {
    amount: 1.5,
    grid: "auto",
    from: "center",
  },
});
