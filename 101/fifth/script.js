gsap.to(".box", {
  duration: 2,
  scale:0.75,
  dleay: 0.5,
  stagger: 0.2,
  force3D: true,
  ease: "elastic",
});

const boxes = document.querySelector(".row").children;


for (let box of boxes) {
  box.addEventListener("click", function () {
    gsap.to(".box", {
      duration: 0.5,
      y: -100,
      opacity: 0,
      stagger: 0.1,
      ease: "back.in",
    });
  });
}
