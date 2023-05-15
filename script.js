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
    duration:1.0,
    opacity:0,
    scrllTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 50%"
    }
})
.from("#page2-div",{
    x:100,
    duration:0.7,
    opacity:0,
    scrllTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 60%"
    }
})
