gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square",
    //play pause resume reverse restart reset complete none
    toggleActions: "restart none none none", //default => "play none none none"
    //            onEnter onLeave onEnterBack onLeaveBack
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "1.5rem",
      indent: 200,
    },
    scrub: 4,
    start: "top 80%", //top, bottom, center
    end: "top 30%", //top, bottom, center
  },
});
