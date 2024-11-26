(function () {
    const root = document.documentElement;
  
    // Remove no-js class and add js class
    root.classList.remove("no-js");
    root.classList.add("js");
  
    // Check if body has animations enabled
    if (document.body.classList.contains("has-animations")) {
      // Initialize ScrollReveal
      const sr = ScrollReveal();
      sr.reveal(".feature, .pricing-table-inner", {
        duration: 600,
        distance: "20px",
        easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
        origin: "bottom",
        interval: 100
      });
  
      root.classList.add("anime-ready");
  
      // Hero figure box 05 animation
      anime
        .timeline({ targets: ".hero-figure-box-05" })
        .add({
          duration: 400,
          easing: "easeInOutExpo",
          scaleX: [0.05, 0.05],
          scaleY: [0, 1],
          perspective: "500px",
          delay: anime.random(0, 400)
        })
        .add({
          duration: 400,
          easing: "easeInOutExpo",
          scaleX: 1
        })
        .add({
          duration: 800,
          rotateY: "-15deg",
          rotateX: "8deg",
          rotateZ: "-1deg"
        });
  
      // Hero figure boxes 06 and 07 animation
      anime
        .timeline({ targets: ".hero-figure-box-06, .hero-figure-box-07" })
        .add({
          duration: 400,
          easing: "easeInOutExpo",
          scaleX: [0.05, 0.05],
          scaleY: [0, 1],
          perspective: "500px",
          delay: anime.random(0, 400)
        })
        .add({
          duration: 400,
          easing: "easeInOutExpo",
          scaleX: 1
        })
        .add({
          duration: 800,
          rotateZ: "20deg"
        });
  
      // Other hero figure boxes animation
      anime({
        targets:
          ".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10",
        duration: anime.random(600, 800),
        delay: anime.random(600, 800),
        rotate: [
          anime.random(-360, 360),
          function (el) {
            return el.getAttribute("data-rotation");
          }
        ],
        scale: [0.7, 1],
        opacity: [0, 1],
        easing: "easeInOutExpo"
      });
    }
  })();
  