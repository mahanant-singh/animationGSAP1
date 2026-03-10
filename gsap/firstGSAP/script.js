gsap.to(".box", {
    x: 1000,
    duration: 2,
    delay:1
})
gsap.from(".box2", {
    x: 1200,
   
    duration: 2,
    delay: 1,
    backgroundColor: "blue",
    borderRadius:"50%"
})
gsap.from("h1", {
    opacity: 0,
    duration:1,
    y: 30,
    delay: 1,
    Stagger: 0.3
    //code one by one chlata ha stagger

    

})
gsap.to(".box3", {
    x: 1200,
    duration: 2,
    delay: 1,
    rotate: 360,
    repeat: 1,
    //two time reoeat kara ga (infinte ka liya -1)
    yoyo:true,
})
// gsap.to(".box4", {
//     x: 1500,
//     rotate: 360,
//     duration: 1.5,
//     delay:1
// })
// gsap.to(".box5", {
//     x: 1500,
//     backgroundColor: 1.5,
//     delay: 2.5,
    
// })
// gsap.to(".box6", {
//     x: 1500,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay:4
// })

//***********TIMELINE************** */


var tl = gsap.timeline()

tl.to(".box4", {
    x: 1500,
    rotate: 360,
    duration: 1.5,
    delay:1
})
tl.to(".box5", {
    x: 1500,
    duration:1.5,
})
tl.to(".box6", {
    x: 1500,
    duration:1.5
})
var tl = gsap.timeline()
tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay:0.5
})
tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger:0.3,

    
})
tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 100,
    scale:0.2
})