
document.addEventListener("DOMContentLoaded", function () {
  let headingLight = document.querySelector("[light='heading']");
  let letters = Array.from(headingLight.querySelectorAll(".split-text"));
  let animationInProgress = false;

  function playLightAnimation() {
    if (animationInProgress) {
      return;
    }

    animationInProgress = true;

    const timeline = gsap.timeline({ onComplete: animationComplete });

    function animationComplete() {
      timeline.clear();
      animationInProgress = false;
    }

    function getRandomBlinkCount() {
      return 2 + Math.floor(Math.random() * 2); // Randomize between 2 and 3 blinks
    }

    function animateLetter(index) {
      const letter = letters[index];
      const blinkCount = getRandomBlinkCount();

      function animateBlink(blinkIndex) {
        const duration = 25 + Math.random() * 50;
        timeline.to(letter, {
          opacity: 1,
          duration: duration / 1500,
          ease: "ease",
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            gsap.to(letter, { opacity: 1 });
            if (blinkIndex < blinkCount - 1) {
              animateBlink(blinkIndex + 1); // Continue blinking if there are more blinks
            } else {
              if (index < letters.length - 1) {
                animateLetter(index + 1); // Move to the next letter after completing all blinks
              }
            }
          },
        });
      }

      animateBlink(0);
    }

    animateLetter(0); // Start the animation sequence with the first letter
  }

  playLightAnimation();
});
