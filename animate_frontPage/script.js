let tl = gsap.timeline();
tl.from("#nav h3",{
    y: -50,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.3
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.9,
    stagger:0.4
})
tl.from("img",{
    x:120,
    rotate:45,
    opacity:0,
    duration:1,
    stagger:0.8
})
tl.from("#footer h3",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3
})