let tween = gsap.to(".box", { duration: 1, x: 650,rotation:360 });

const playFunc = () => tween.play();
const pauseFunc = () => tween.pause();
const resumeFunc = () => tween.resume();
const reverseFunc = () => tween.reverse();
const restartFunc = () => tween.restart();
