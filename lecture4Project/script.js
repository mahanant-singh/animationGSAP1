var main = document.querySelector(".main")
var box = document.querySelector(".box")
var imageDiv=document.querySelector(".image")
main.addEventListener("mousemove", function (dets) {
    gsap.to(box,{
        x: dets.x,
        y: dets.y,
        duration: 1,
      
        
        
  })
})
imageDiv.addEventListener("mouseenter", function(){
   box.innerHTML="view more"
    
    gsap.to(box, {
        scale: 4,
        backgroundColor:"#ffff8a"
    })
})
imageDiv.addEventListener("mouseleave", function () {
    box.innerHTML=""
    gsap.to(box, {
        scale: 1,
        backgroundColor:"#fff"
    })
})

