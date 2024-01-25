gsap.registerPlugin(ScrollTrigger);

const firstRow = document.querySelector("[infrastructure-three='first-row']");
const firstRowCard1 = document.querySelector(
  "[infrastructure-three='first-row-card-1']"
);
const firstRowCard2 = document.querySelector(
  "[infrastructure-three='first-row-card-2']"
);

const secondRow = document.querySelector('[infrastructure-three="second-row"]');
const secondRowCard = document.querySelector(
  '[infrastructure-three="second-row-card"]'
);

if (window.innerWidth >= 991) {
  function infrastructurePageStickyRowAnimation() {
    gsap.set(firstRowCard1, { opacity: 0, y: "8rem" });
    gsap.set(firstRowCard2, { opacity: 0, y: "12rem" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstRow,
        toggleActions: "play none none none",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
      onComplete: function () {
        gsap.to(firstRowCard2, {
          backdropFilter: "blur(15px)",
        });
      },
    });

    tl.to(firstRowCard1, { opacity: 1, y: "3rem", ease: "ease-in" }).to(
      firstRowCard2,
      { opacity: 1, y: "6rem", ease: "ease-in" }
    );
  }

  infrastructurePageStickyRowAnimation();

  // second row animation

  function infrastructureThreeSecondRowAnimation() {
    gsap.set(secondRowCard, { opacity: 0, y: "8rem" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: secondRow,
        toggleActions: "play none none none",
        start: "top 5%",
        end: "bottom 95%",
        scrub: 1,
        // markers: true,
      },
      onComplete: function () {
        gsap.to(secondRowCard, {
          backdropFilter: "blur(15px)",
        });
      },
    });

    tl.to(secondRowCard, {
      opacity: 1,
      y: "3rem",
      duration: 1.3,
      ease: "ease-in",
    });
  }

  infrastructureThreeSecondRowAnimation();
}

// for tab and mobile

if (window.innerWidth <= 991) {
  function mobileThreeSecFirstRowAnimation() {
    gsap.set(firstRowCard1, { opacity: 0, y: "8rem" });
    gsap.set(firstRowCard2, { opacity: 0, y: "12rem" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstRow,
        toggleActions: "play none none none",
        start: "top 13%",
        end: "bottom 20%",
        scrub: 1,
        // markers: true,
        pin: true,
        pinSpacing: true,
      },
      onComplete: function () {
        gsap.to(firstRowCard2, {
          backdropFilter: "blur(15px)",
        });
      },
    });

    tl.to(firstRowCard1, { opacity: 1, y: "3rem", ease: "power1.out" }).to(
      firstRowCard2,
      { opacity: 1, y: "6rem", ease: "power1.out" }
    );
  }

  mobileThreeSecFirstRowAnimation();

  // for second row
  function infrastructureThreeMobileSecondRowAnimation() {
    gsap.set(secondRowCard, { opacity: 0, y: "8rem" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: secondRow,
        toggleActions: "play none none none",
        start: "top 15%",
        end: "bottom 30%",
        scrub: 1,
        // markers: true,
        pin: true,
        pinSpacing: true,
      },
      onComplete: function () {
        gsap.to(secondRowCard, {
          backdropFilter: "blur(15px)",
        });
      },
    });

    tl.to(secondRowCard, {
      opacity: 1,
      y: "3rem",
      duration: 2,
      ease: "power1.out",
    });
  }

  infrastructureThreeMobileSecondRowAnimation();
}

// infrastructure horizontal scroll animaton
