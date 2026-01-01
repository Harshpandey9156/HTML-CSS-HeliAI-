

// wait for document ready
    // var controller = new ScrollMagic.Controller();
    // var scene = new ScrollMagic.Scene({ 
    //     triggerElement: '.red'
    // })
    // .setClassToggle('.red','show')
    // .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();
    // tl.fromTo(
    //   "section.panel.turqoise",
    //   1,
    //   { xPercent: 100 },
    //   { xPercent: 0, ease: Linear.easeNone},
    //   "+=1"
    // );
    // tl.fromTo(
    //   "section.panel.bordeaux",
    //   1,
    //   { xPercent: -100 },
    //   { xPercent: 0, ease: Linear.easeNone },
    //   "+=1"
    // );
    tl.fromTo("section.panelll.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}); // in from left
    tl.fromTo("section.panelll.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone});// in from right
    tl.fromTo("section.panelll.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top
   
    
    new ScrollMagic.Scene({
      triggerElement: "#pinMaster",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#pinMaster")
      .setTween(tl)
    //   .addIndicators({
    //     colorTrigger: "white",
    //     colorStart: "white",
    //     colorEnd: "white",
    //     indent: 40
    //   })
      .addTo(controller);



      