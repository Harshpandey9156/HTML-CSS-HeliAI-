$(function () {

  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()

    // CIRCLE 1 — fade & scale in center
    .fromTo(".panel.one", 1,
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 1 }
    )

     .fromTo(".panel.two", 1,
      { x: "120vw", scale: 0.6, opacity: 0 },
      { x: "-50%", scale: 1, opacity: 1 }
    )

    // CIRCLE 3 — FROM FAR LEFT (OFFSCREEN)
    .fromTo(".panel.three", 1,
      { x: "-120vw", scale: 0.6, opacity: 0 },
      { x: "-50%", scale: 1, opacity: 1 }
    )

    // CIRCLE 4 — FROM BOTTOM (OFFSCREEN)
    .fromTo(".panel.four", 1,
      { y: "120vh", scale: 0.6, opacity: 0 },
      { y: "-50%", scale: 1, opacity: 1 }
    );

  new ScrollMagic.Scene({
    triggerElement: ".circle-section",
    triggerHook: 0,
    duration: "300%"
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
});
