gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".box", { x: 500, duration: 5 })
  .to(".box", { y: 500, duration: 5 })
  .addLabel("rotate")
  .to(".box", { rotate: 90, repeat: 2, ease: "elastic" });

// tl.play("rotate");
tl.addLabel("rotate", 4);
tl.play("rotate");
// ScrollTrigger.create({
//   animation: tl,
//   trigger: ".box",
//   start: "top center",
//   markers: true,
//   // scrub: true,
// });
