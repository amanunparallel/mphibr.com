const inlinewrapper = document.querySelector('[gsap="hero-inline"]');

document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();
  const positions = [-1, -2, -3, -4, -5];
  const duration = 1.25;
  const ease = "elastic.out(.1)";
  const delay = 1.5;

  function playAnimation() {
    tl.clear();
    gsap.set(inlinewrapper, { y: 0 });

    positions.forEach((position) => {
      let yValue =
        window.innerWidth < 1024 ? `${position * 70}px` : `${position * 11}rem`;

      tl.to(inlinewrapper, {
        y: yValue,
        duration,
        ease,
        delay
      });
    });

    tl.eventCallback("onComplete", playAnimation);
    tl.play();
  }

  playAnimation();
});

// Simple Play Function
document.addEventListener("DOMContentLoaded", function () {
  function playHomeVideo() {
    const playButton = document.querySelector("#playButton");
    // Add your code to simulate a click on the playButton element
    playButton.click();
    console.log("play");
  }

  setTimeout(playHomeVideo, 500); // Call the function after a 500ms delay
});
