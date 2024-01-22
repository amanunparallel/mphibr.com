console.log("Glabal animations");

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
          scrub: true,
          markers: true,
        },
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
          ease: "expo.out",
        });
      });
    });
  });
}

// Usage example:
const triggerConfigurations = [
  {
    textWrapperSelector: '[textcolor="gray1"]',
    triggerSelector: '[textcolor="graytrigger1"]',
    start: "15% top",
    end: "bottom 15%",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray2"]',
    triggerSelector: '[textcolor="graytrigger2"]',
    start: "15% top",
    end: "bottom 15%",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray3"]',
    triggerSelector: '[textcolor="graytrigger3"]',
    start: "top 20%",
    end: "bottom 70%",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray4"]',
    triggerSelector: '[textcolor="graytrigger4"]',
    start: "15% top",
    end: "bottom 50%",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray5"]',
    triggerSelector: '[textcolor="graytrigger5"]',
    start: "top 70%",
    end: "center 60%",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray6"]',
    triggerSelector: '[textcolor="graytrigger6"]',
    start: "5% top",
    end: "bottom 50%",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray7"]',
    triggerSelector: '[textcolor="graytrigger7"]',
    start: "15% top",
    end: "bottom 50%",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray8"]',
    triggerSelector: '[textcolor="graytrigger8"]',
    start: "top 45%",
    end: "bottom bottom",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray9"]',
    triggerSelector: '[textcolor="graytrigger=9"]',
    start: "top center",
    end: "bottom bottom",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray10"]',
    triggerSelector: '[textcolor="graytrigger10"]',
    start: "top center",
    end: "70% bottom",
    duration: 1,
  },
  {
    textWrapperSelector: '[textcolor="gray11"]',
    triggerSelector: '[textcolor="graytrigger11"]',
    start: "top 60%",
    end: "bottom bottom",
    duration: 2,
  },
  {
    textWrapperSelector: '[textcolor="gray12"]',
    triggerSelector: '[textcolor="graytrigger12"]',
    start: "top 80%",
    end: "center 80%",
    duration: 4,
  },
  {
    textWrapperSelector: '[textcolor="gray13"]',
    triggerSelector: '[textcolor="graytrigger13"]',
    start: "top 80%",
    end: "center 80%",
    duration: 2,
  },
  {
    textWrapperSelector: '[textcolor="gray14"]',
    triggerSelector: '[textcolor="graytrigger14"]',
    start: "top center",
    end: "bottom 82%",
    duration: 2,
  },
  {
    textWrapperSelector: '[textcolor="gray15"]',
    triggerSelector: '[textcolor="graytrigger15"]',
    start: "top 80%",
    end: "20% center",
    duration: 2,
  },
  {
    textWrapperSelector: '[textcolor="gray16"]',
    triggerSelector: '[textcolor="graytrigger16"]',
    start: "10% top",
    end: "bottom 40%",
    duration: 2,
  },
  {
    textWrapperSelector: '[textcolor="gray17"]',
    triggerSelector: '[textcolor="graytrigger17"]',
    start: "top 85%",
    end: "top center",
    duration: 2,
  },
  {
    textWrapperSelector: '[textcolor="gray18"]',
    triggerSelector: '[textcolor="graytrigger18"]',
    start: "top 70%",
    end: "bottom bottom",
    duration: 2,
  },
  {
    textWrapperSelector: '[textcolor="gray19"]',
    triggerSelector: '[textcolor="graytrigger19"]',
    start: "top 75%",
    end: "bottom bottom",
    duration: 4,
  },
  {
    textWrapperSelector: '[textcolor="gray20"]',
    triggerSelector: '[textcolor="graytrigger20"]',
    start: "top 80%",
    end: "40% 70%",
    duration: 4,
  },
  {
    textWrapperSelector: '[textcolor="gray21"]',
    triggerSelector: '[textcolor="graytrigger21"]',
    start: "top 70%",
    end: "bottom bottom",
    duration: 4,
  },
];

createTextColorChangeAnimations(triggerConfigurations);
