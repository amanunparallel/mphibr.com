gsap.registerPlugin(ScrollTrigger);

const circle1 = document.querySelector("[two='circle1']");
const circle2 = document.querySelector("[two='circle2']");
const image = document.querySelector("[raphe='image']");
const circleWrapper = document.querySelector('[twocircle="wrapper"]');

function twoCircleAnimation() {
  gsap.set(circle1, {
    opacity: 0,
    x: "-100%"
  });
  gsap.set(circle2, {
    opacity: 0,
    x: "100%"
  });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: circleWrapper,
      toggleActions: "play none none none",
      start: "center 30%",
      end: "bottom center"
    }
  });

  tl1
    .to(
      circle1,
      {
        opacity: 1,
        x: "0%",
        ease: "ease-in",
        duration: 2
      },
      0
    )
    .to(
      circle2,
      {
        opacity: 1,
        x: "0%",
        ease: "ease-in",
        duration: 2
      },
      0
    )
    .to(image, {
      opacity: 1,
      ease: "ease-in"
    });
}

twoCircleAnimation();

// cards animation
const cardsWrapper = document.querySelector('[hometwo="cardswrapper"]');
const cards = document.querySelectorAll('[hometw="card"]');

function cardsAnimation() {
  gsap.set(cards, { opacity: 0, x: "100%" });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: cardsWrapper,
      start: "top top",
      end: "bottom center",
      toggleActions: "play none none none",
      scrub: true,
      pin: true,
      pinSpacing: -100
    }
  });

  tl.to(cards, {
    x: "0%",
    opacity: 1,
    ease: "expo.out",
    duration: 5,
    stagger: 4.5
  });
}

cardsAnimation();

// window.addEventListener("resize", function () {
//   if (window.innerWidth >= 768) {
//     cardsAnimation();
//   }
// });

// home sec five card animation
const vdoContainer = document.querySelector('[homefive="vdo"]');
const vdoContainerCard = document.querySelector('[homefive="card"]');

const secFiveAnimation = () => {
  gsap.set(vdoContainerCard, { opacity: 0, y: "100%" });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: vdoContainer,
      start: "top 20%",
      toggleActions: "play none none none"
    }
  });

  tl.to(vdoContainerCard, {
    opacity: 1,
    y: "0%",
    ease: "expo.out",
    duration: 1
  });
};

secFiveAnimation();

// third section animation
const thirdSec = document.querySelector('[home="three"]');
const thirdSecVdo = document.querySelector('[homethree="vdo"]');

function homeThreeAnimation() {
  gsap.set(thirdSecVdo, {
    y: "-10rem"
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: thirdSec,
      start: "top center",
      end: "center center",
      scrub: true,
      toggleActions: "play none none none"
    }
  });

  tl.to(thirdSecVdo, {
    y: 0,
    ease: "ease-in",
    duration: 2
  });
}

homeThreeAnimation();
