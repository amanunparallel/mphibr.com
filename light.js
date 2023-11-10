document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  let headingLight = document.querySelector("[light='heading']");
  let letters = Array.from(headingLight.querySelectorAll(".split-text"));
  let animationInProgress = false; // Flag to track if animation is in progress
  
  function playLightAnimation() {
    if (animationInProgress) {
      return; // If animation is already in progress, do nothing
    }

    animationInProgress = true; // Set the flag to true

    // Step 1: Save the initial positions and hide the letters
    const initialPositions = [];
    letters.forEach((letter) => {
      initialPositions.push({
        element: letter,
        opacity: letter.style.opacity || 0
      });
      letter.style.opacity = 0;
    });

    // Step 2: Shuffle the letters randomly
    const shuffledLetters = [...letters];
    for (let i = shuffledLetters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledLetters[i], shuffledLetters[j]] = [
        shuffledLetters[j],
        shuffledLetters[i]
      ];
    }

    // Step 3: Create the GSAP animation for each letter group
    const timeline = gsap.timeline({ onComplete: animationComplete });

    function animationComplete() {
      if (shuffledLetters.length === 0) {
        // All letters have completed their animation, reset the flag
        timeline.clear();
        animationInProgress = false;
      }
    }

    function getRandomGroupSize() {
      return Math.floor(Math.random() * 3) + 2; // Random group size between 2 and 4
    }

    // Function to animate a group of letters
    function animateGroup(letterGroup) {
      letterGroup.forEach((letter) => {
        const blinkCount = 2 + Math.floor(Math.random() * 2); // Randomize between 2 and 3 blinks
        for (let i = 0; i < blinkCount; i++) {
          const duration = 25 + Math.random() * 50; // Random duration between 50ms and 100ms (faster)
          timeline.to(letter, {
            opacity: 1,
            duration: duration / 1500, // Convert milliseconds to seconds
            ease: "ease", // Use the custom easing function
            yoyo: true, // Reverse the animation (blink effect)
            repeat: 1, // Repeat the animation once (for 2 blinks)
            onComplete: () => {
              // Restore opacity to 1 when the blinking of the letter is completed
              gsap.to(letter, { opacity: 1 });
            }
          });
        }
      });
    }

    // Randomly group letters and animate them together
    let currentIndex = 0;
    while (currentIndex < shuffledLetters.length) {
      const groupSize = getRandomGroupSize();
      const letterGroup = shuffledLetters.slice(
        currentIndex,
        currentIndex + groupSize
      );
      currentIndex += groupSize;
      animateGroup(letterGroup);
    }
  }

  playLightAnimation();
});
