gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl= gsap.timeline();
tl.from("#nav h1, #nav h4, #nav Button",{
    delay:0.3,
    y:-30,
    duration:0.5,
    opacity:0,
    stagger: 0.25
})

.from("#page1-containt h1, #page1-containt p, #page1-containt button",{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.4
})
.from("#page2 h1",{
    x:-100,
    duration:0.6,
    opacity:0,
    scrllTrigger:{
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 50%",
        end: "top 50%",
        scrub:1
    }
})
.from("#page2-div",{
    x:100,
    duration:0.2,
    opacity:0,
    scrllTrigger:{
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 20%",
        end: "top 20%",
        scrub:2
    }
})
.from("#page3 h1",{
  y:-100,
  duration:0.8,
  opacity:0,
  stagger: 0.4,
  scrllTrigger:{
      trigger: "#page3 h1",
      scroller: "#main",
      start: "top 60%",
      end: "top 20%",
      scrub:2
  }
})
.from("#page3-div, .elemm",{
  x:-100,
  duration:0.8,
  opacity:0,
  stagger: 0.4,
  scrllTrigger:{
      trigger: "#page3 h1",
      scroller: "#main",
      start: "top 60%",
      end: "top 20%",
      scrub:1
  }
})
