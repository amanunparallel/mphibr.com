function createTextColorChangeAnimations(triggerConfigurations) {
  if (
    !Array.isArray(triggerConfigurations) ||
    triggerConfigurations.length === 0
  ) {
    console.log("Invalid or empty trigger configurations.");
    return;
  }

  triggerConfigurations.forEach((config) => {
    const textWrapperElements = document.querySelectorAll(
      config.textWrapperSelector
    );
    const textTriggerElements = document.querySelectorAll(
      config.triggerSelector
    );

    if (textWrapperElements.length === 0 || textTriggerElements.length === 0) {
      console.log("No elements found with the provided selectors.");
      return;
    }

    textWrapperElements.forEach((textWrapper, index) => {
      const words = textWrapper.textContent.split(" ");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: textTriggerElements[index],
          start: config.start,
          end: config.end,
          toggleActions: "play none none none",
          scrub: true
          // markers: true
        }
      });

      textWrapper.innerHTML = " ";

      words.forEach((word) => {
        const wordElement = document.createElement("span");
        wordElement.textContent = word + " ";
        wordElement.style.color = "gray";
        textWrapper.appendChild(wordElement);

        tl.to(wordElement, {
          color: "white",
          duration: config.duration,
          ease: "expo.out"
        });
      });
    });
  });
}

// Usage example:
const triggerConfigurations = [
  {
    textWrapperSelector: '[textcolor="gray"]',
    triggerSelector: '[textcolor="graytrigger"]',
    start: "15% top",
    end: "bottom 15%",
    duration: 1
  },
  {
    textWrapperSelector: '[textcolor="gray2"]',
    triggerSelector: '[textcolor="graytrigger2"]',
    start: "70% 35%",
    end: "bottom 30%",
    duration: 10
  },
  {
    textWrapperSelector: '[textcolor="gray3"]',
    triggerSelector: '[textcolor="graytrigger3"]',
    start: "top 35%",
    end: "bottom 30%",
    duration: 2
  },
  {
    textWrapperSelector: '[textcolor="gray5"]',
    triggerSelector: '[textcolor="graytrigger5"]',
    start: "top 35%",
    end: "center center",
    duration: 5
  },
  {
    textWrapperSelector: '[textcolor="gray6"]',
    triggerSelector: '[textcolor="graytrigger6"]',
    start: "top 46%",
    end: "center 45%",
    duration: 5
  },
  {
    textWrapperSelector: '[textcolor="gray7"]',
    triggerSelector: '[textcolor="graytrigger7"]',
    start: "top 66%",
    end: "40% 66%",
    duration: 5
  },
  {
    textWrapperSelector: '[textcolor="gray8"]',
    triggerSelector: '[textcolor="graytrigger8"]',
    start: "top 92%%",
    end: "top 45%",
    duration: 5
  },
  {
    textWrapperSelector: '[textcolor="gray9"]',
    triggerSelector: '[textcolor="graytrigger9"]',
    start: "top 75%",
    end: "bottom bottom",
    duration: 3
  },
  {
    textWrapperSelector: '[textcolor="gray10"]',
    triggerSelector: '[textcolor="graytrigger10"]',
    start: "top 15%",
    end: "bottom 55%",
    duration: 3
  },
  {
    textWrapperSelector: '[textcolor="gray11"]',
    triggerSelector: '[textcolor="graytrigger11"]',
    start: "top 50%",
    end: "60% 55%",
    duration: 3
  },
  {
    textWrapperSelector: '[textcolor="gray12"]',
    triggerSelector: '[textcolor="graytrigger12"]',
    start: "top 80%",
    end: "15% 65%",
    duration: 3
  },
  {
    textWrapperSelector: '[textcolor="gray13"]',
    triggerSelector: '[textcolor="graytrigger13"]',
    start: "top 80%",
    end: "bottom 75%",
    duration: 3
  }
];

createTextColorChangeAnimations(triggerConfigurations);
