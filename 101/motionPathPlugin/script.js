gsap.registerPlugin(MotionPathPlugin);

gsap.set(".astronaut", { scale: 0.3, autoAlpha: 1, yoyo: true, rpeat: -1 });

gsap.to(".astronaut", {
  duration: 5,
  ease: "power1.inOut",
  immediateRender: true,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    rotate: 90,
  },
});

// MotionPathHelper.create(".astronaut");
