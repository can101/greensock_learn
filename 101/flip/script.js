gsap.registerPlugin(Flip);
let constainer = document.querySelector(".container");
let box = document.querySelector(".box");

document.addEventListener("click", (e) => {
  let state = Flip.getState(".box");
  constainer.appendChild(box);
  Flip.from(state, { duration: 1, ease: "power1.out" });
});
