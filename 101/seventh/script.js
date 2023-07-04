// let tl = gsap.timeline();

// tl.to(".green", { x: 600, duration: 2 });
// tl.to(".red", { x: 600, duration: 1 });
// tl.to(".grey", { x: 600, duration: 1 });

// tl.to(".green", { x: 600, duration: 2 });
// tl.to(".red", { x: 600, duration: 1, delay: 1 });
// tl.to(".grey", { x: 600, duration: 1 });

// tl.to(".green", { x: 600, duration: 2 },10);
// tl.to(".red", { x: 600, duration: 1});
// tl.to(".grey", { x: 600, duration: 1 },"+=3");

// tl.to(
//   ".e",
//   {
//     x: 695,
//     duration: 2,
//   }
// );
// tl.to(
//   ".f",
//   {
//     x: 695,
//     duration: 1,
//   },
//   1
// );
// let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// tl.to(".ge", { rotation: 360 });
// tl.to(".re", { rotation: 360 });
// tl.to(".gy", { rotation: 360 });

let tl = gsap.timeline({ defaults: { duration: 1 } });
tl.to(".ge", { x: 200 })
  .to(".re", { x: 200, scale: 0.2 })
  .to(".gy", { x: 200, scale: 2, y: 20 });
