gsap.registerPlugin(Flip);

const group = document.querySelector(".group");

document.querySelector("button").addEventListener("click", () => {
  const state = Flip.getState(".group, .box");
  console.log(state);
  group.classList.toggle("reorder");
  Flip.from(state, {
    absolute: true,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.inOut",
  });
});
