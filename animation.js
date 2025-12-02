

gsap.set("body > *", { autoAlpha: 1 });

const tl = gsap.timeline({ delay: 0.5, repeat: -1, repeatDelay: 2 });
const plane = document.querySelector("svg.plane");

tl.set(plane, { transformOrigin: "50% 50%" });
tl.from(plane, { scale: 0.8, duration: 1.8, autoAlpha: 0, ease: "power2.out" });
tl.to(plane, {
  rotate: "40deg",
  ease: "sine.inOut",
  duration: 0.5
});
tl.to(plane, {
  translateX: "60%",
  ease: "sine.in",
  duration: 0.75
});
tl.to(plane, {
  translateX: "20%",
  rotate: "0deg",
  ease: "sine.out",
  duration: 0.75
});
tl.to(plane, {
  rotate: "-360deg",
  translateX: "-75%",
  duration: 2.5,
  ease: "sine.inOut"
});
tl.to(plane, {
  translateY: "-20%",
  ease: "sine.inOut",
  duration: 0.7
});
tl.to(plane, {
  rotate: "-290deg",
  ease: "sine.inOut",
  duration: 0.8
});
tl.to(plane, {
  translateY: "20%",
  translateX: "60%",
  duration: 2,
  ease: "sine.in"
});
tl.to(plane, {
  translateY: "10",
  translateX: "20",
  rotate: "-360deg",
  duration: 1.5,
  ease: "sine.out"
});
tl.to(plane, {
  translateX: "-500%",
  rotate: "-450deg",
  duration: 5,
  ease: "sine.inOut"
});


// Banner Animation 
 document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero__content",
        start: "top 80%",
        end: "top 50%",
        scrub: false,           
      }
    });

    tlText
      .from(".hero__tagline", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      })
      .from(".hero__title", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.3")
      .from(".hero__desc", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.2")
      .from(".hero__buttons a", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,   
         ease: "power2.out"
      }, "-=0.2");
  });





  // Animate Heading
gsap.from(".headingBlock span, .headingBlock .section-title", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".headingBlock",
    start: "top 80%",
  }
});

// Animate Destination Cards
gsap.from(".destination-card", {
  opacity: 0,
  y: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".destinations__grid",
    start: "top 80%",
  }
});

// Floating Animation for Circle Image
gsap.to(".circleImage", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});


gsap.fromTo(".treeImage img",
  { y: -100, opacity: 0 },   
  {
    y: 0,                   
    opacity: 1,
    duration: 4,
    ease: "power3.out"
  }
);

gsap.fromTo(".hero__image",
  { x: 400, opacity: 0 },   
  {
    x: 0,                   
    opacity: 1,
    duration: 6,
    ease: "power3.out"
  }
);

gsap.to(".shippImage img", {
  x: 300,             
  duration: 6,
  ease: "linear",      
  repeat: -1,         
  repeatDelay: 0,      
  yoyo: true         
});

gsap.to(".planeImage img", {
  x: 20,             
  duration: 3,
  ease: "linear",      
  repeat: -1,          
  repeatDelay: 0,      
  yoyo: true         
});



gsap.to(".peraImage img", {
  y: 100,             
  duration: 3,
  ease: "linear",      
  repeat: -1,          
  repeatDelay: 0,      
  yoyo: true         
});


gsap.to(".movingImagePl img", {
  x: 100,             
  duration: 2,
  ease: "linear",      
  repeat: -1,          
  repeatDelay: 0,      
  yoyo: true         
});


