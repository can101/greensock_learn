let tl = gsap.timeline();

console.log(tl);

tl.to(".red", { x: 600, duration: 2 }, 1);
tl.to(".green", { x: 600, duration: 1 }, "<");
tl.to(".blue", { x: 600, duration: 1 }, "+=1");
