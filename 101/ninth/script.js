gsap.to(".box", {
  duration: 1.5,
  x: "100vw",
  xPercent: -100,
  rotation: 360,
  onComplete: () => console.log("End"),
  onStart: () => console.log("Start"),
  onUpdate: () => console.log("Update"),
});

// onComplete: invoked when the animation has completed.
// onStart: invoked when the animation begins
// onUpdate: invoked every time the animation updates (on every frame while the animation is active).
// onRepeat: invoked each time the animation repeats.
// onReverseComplete: invoked when the animation has reached its beginning again when reversed.
