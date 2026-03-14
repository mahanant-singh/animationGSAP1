// gsap.from(".page1 .box1", {
//     scale: 0,
//     delay: 1,
//     duration: 3,
//     rotate:360
// })
// gsap.from(".page2 .box2", {
//     scale: 0,
   
//     duration: 3,
//     rotate: 360,
//   //  scrollTrigger: ".page2 .box2"
//     //shorThand
//     scrollTrigger: {
//         trigger: ".page2 .box2",
//         scroller: "body",
//         markers: true,
//         start:"top 60%"
        
//     }
    
// })
// gsap.from(".page3 .box3", {
//     scale: 0,
//     delay: 1,
//     duration: 3,
//     rotate:360
// })
// gsap.from(".text h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: ".text  h1",
//         scroller: "body",
//         markers: true,
//         start:"top 50%"
//     }
// }
// gsap.from(".page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: "body",
//         markers: true,
//         start:"top 50%"
//     }
// })
// gsap.from(".page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "top 30%",
//         scrub: 2
//         //scrub define statring point and starting point and page smothnesh ka liya

//     }
// })
gsap.to(".page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".page2 ",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin:true
        
        //rule jab hum pin ki property ka use karta ha to parent ko dd krta ha ------> exmple  trigger ma page2
        
    }
})