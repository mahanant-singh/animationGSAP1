// //scrollTrigger

// gsap.from(".page1 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })
// gsap.from(".page2 .box", {
//     scale: 0,
//    // delay: 1,
//     duration: 2,
//     rotate: 360,  // scroollTrigger short hand proparty scrollTrigger:(".page1 .box")
//     scrollTrigger: {
//         trigger: ".page2 .box",
//         scroller: "body",  /// marker denote that firsting point end ending point
//         markers: true,
//         start:"top 60%"
        
//     }


// })
// gsap.from(".page3 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

// gsap.from(".page2 h1", {
//     opacity: 0,
//     rotate:720,
//     duration: 2,
//     scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 10%",
//         //scrub page ki smootnesh ka liya
//         scrub: 2,
//       pin: true   // elemem=nt ko pin karana ka liya
        
        
//     }
// })


///******************************************* */

gsap.to(".page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        //  trigger: ".page2 h1",  pin proparty use ham sirf parent ka sat hota ha (page2)
        trigeer:".page2",
        scroller: "body",
        markers: true,
      
        start: "top 0%",
        end:"top -150%",
        scrub: 2,
        pin:true
        
    }
})
