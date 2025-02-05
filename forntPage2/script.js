var tl = gsap.timeline();
function page1Animate(){
    tl.from("nav h1, nav h4",{
        y:-30,
        opacity:0,
        delay:0.3,
        duration:0.5,
        stagger:0.2,
    })
    tl.from("nav button",{
        x:50,
        opacity:0,
        duration:0.4,
    })
    tl.from(".center-part1 h1",{
        x:-450,
        opacity:0,
        duration:0.5,
    },"-=1")
    tl.from(".center-part1 p",{
        x:-450,
        opacity:0,
        duration:0.5,
    },"-=0.5")
    tl.from(".center-part1 button",{
        scale:0,
        opacity:0,
        duration:0.4,
    })
    tl.from(".center-part2 img",{
        opacity:0,
        duration:0.4,
    },"-=1")
    
    tl.from(".section1bottom img",{
        opacity:0,
        y:30,
        stagger:0.1,
        duration:0.2,
        scrollTrigger:{
            trigger:".section1bottom img",
            scroller:"body",
            // markers:true,
            start:"top 100%",
            scrub:2,
        }
    })
}
page1Animate();

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top -50%",
        scrub:2,
    }
})
tl2.from(".services h1",{
    x:-100,
    opacity:0,
    dusration:0.5,
   
})
tl2.from(".services p",{
    x:100,
    opacity:0,
    dusration:0.5,
})

tl2.from(".elem.line1.leftt",{
    x:-300,
    opacity:0,
    duration:1,
},"davi")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1,
},"davi")

tl2.from(".elem.line2.leftt",{
    x:-300,
    opacity:0,
    duration:1,
},"animat")

tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1,
},"animate")

gsap.from(".contain",{
    y:40,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".contain",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 12%",
        scrub:2,
    }
})
gsap.from(".study",{
    x:-50,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".study",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 62%",
        scrub:2,
    }
})