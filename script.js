 function loco(){
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

 }
 loco();
 
 var line1 = document.querySelector("#line1")
 var line2 = document.querySelector("#line2")
 var line3 = document.querySelector("#line3")
 
var flag = 0
 document.querySelector("#nav-part1").addEventListener("click",function(){
   if(flag==0){
    line2.style.opacity = 0;
    line1.style.rotate = "20deg"
    line3.style.rotate= "-20deg"
    line3.style.cursor = "pointer"
    flag++
   }
   else{
    line2.style.opacity = 1;
    line1.style.rotate = "0deg"
    line3.style.rotate= "0deg"
    line2.style.cursor = "pointer"
    flag--
   }
 })

 gsap.to("nav",{
    scrollTrigger:{
        trigger:"nav",
        scroller:"#main",
        start:"top -30%",
        end:"top -50%",
        
        scrub:true,
    },
    top:"-15vh"

 })
//  gsap.to("nav",{
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"#main",
//         start:"top -100%",
//         end:"top 10%",
//         markers:true,
//         scrub:true,
//     },
//     top:"-15vh",
//      backgroundColor:"black"
//  })
 gsap.to("nav>svg",{
    scrollTrigger:{
        trigger:"nav>svg",
        scroller:"#main",
        start:"top -30%",
        
        end:"top -50%",
        
        scrub:true,
    },
    y:"-10vh",
    scale:0.5
 })
 var tl = gsap.timeline();
 tl.from("nav svg",{
    y:-100,
    opacity:0
 })
 tl.from("#page1 img ",{
     scale:0.5,
     delay:1,
     duration:0.5,

 })
 tl.from("nav #nav-part1 , #nav-part2 #btn1,#nav-part2 #btn2",{
    y:-100,
    stagger:0.09
 })
 var page2_h1 =  document.querySelector("#page2 h1")
 