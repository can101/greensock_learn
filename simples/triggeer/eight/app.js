gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: "top 6%",
  markers: true,
  trigger: ".panel",
  toggleClass: { targets: "nav", className: "nav-active" },
});
