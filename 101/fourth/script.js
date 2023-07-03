gsap.to(".green", {
  rotation: 360,
  duration: 2,
  ease: "none",
});

gsap.to(".red", {
  rotation: 360,
  duration: 2,
  ease: "bounce.out",
});
/*
Eases

  // see greensock.com/ease-visualizer
ease: "none" // no ease (same as "linear")

// basic core eases
"power1", "power2", "power3", "power4",
"circ", "expo", "sine"
// each has .in, .out, and .inOut extensions
// i.e. "power1.inOut"

// expressive core eases
"elastic", "back", "bounce", "steps(n)"

// in EasePack plugin (not core)
"rough", "slow", "expoScale(1, 2)"

// members-only expressive plugins
CustomEase, CustomWiggle, CustomBounce
*/
