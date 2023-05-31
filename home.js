// Hero Animation for website

document.addEventListener("DOMContentLoaded", function () {
  // Create a GSAP timelin
  const timeline = new TimelineMax();

  // Define the path elements
  const path1 = document.getElementById("linefirst");
  const path2 = document.getElementById("linesecond");
  const path3 = document.getElementById("linethird");
  const headingHero = document.querySelector("[gsaphero='heading']");
  const navHero = document.querySelector("[gsaphero='nav']");
  const linesWrapper = document.querySelector("[gsaphero='lineswrapper']");

  // Define the total lengths of the paths
  const path1Length = path1.getTotalLength();
  const path2Length = path2.getTotalLength();
  const path3Length = path3.getTotalLength();

  // Set initial attributes for the paths
  path1.style.strokeDasharray = path1Length;
  path1.style.strokeDashoffset = path1Length;
  path2.style.strokeDasharray = path2Length;
  path2.style.strokeDashoffset = path2Length;
  path3.style.strokeDasharray = path3Length;
  path3.style.strokeDashoffset = path3Length;

  let curveease = "outQuint";

  // Add the animations to the timeline
  timeline
    .to(linesWrapper, { opacity: 1, ease: curveease, duration: 0.5 })
    .to(path1, { strokeDashoffset: 0, ease: curveease, duration: 1 }, 0)
    .to(path2, { strokeDashoffset: 0, ease: curveease, duration: 0.85 }, 0.25)
    .to(path3, { strokeDashoffset: 0, ease: curveease, duration: 1 }, 0.2)
    .to(headingHero, {
      opacity: 1,
      ease: "ease-in",
      duration: 0.75,
      delay: 0.25
    })
    .to(navHero, { opacity: 1, ease: "ease-in", duration: 0.5 });

  // Start the timeline
  timeline.play();
});
