document.addEventListener("DOMContentLoaded", () => {
  const counters = Array.from(document.querySelectorAll(".counter"));
  let isCountersVisible = Array(counters.length).fill(false);

  window.addEventListener("scroll", () => {
    counters.forEach((counter, index) => {
      if (!isCountersVisible[index] && isElementInViewport(counter)) {
        animateCounter(counter);
        isCountersVisible[index] = true;
      }
    });
  });

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateCounter(counterElement) {
    const target = +counterElement.getAttribute("data-target");
    let current = 0;
    let frameDuration = 15; // Default frame duration in milliseconds
    const increment = Math.ceil(target / 100);

    // Adjust the frame duration for data-target="8"
    if (target === 8) {
      frameDuration = 150; // Set a slower frame duration for data-target="8"
    }

    const updateCounter = () => {
      counterElement.textContent = current;
      if (current < target) {
        current = Math.min(current + increment, target);
        setTimeout(updateCounter, frameDuration);
      }
    };

    updateCounter();
  }
});
