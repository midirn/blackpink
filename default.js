gsap.registerPlugin(ScrollTrigger)
let width = window.innerWidth;
let thirdWidth = width /3;
let speed = 350;
let endX = width / 2;
let duration = endX / speed;


gsap.to("#magazine1", {
  x: endX,
  duration: duration,
  scrollTrigger: {
      trigger: "#magazine1",
      start: "top 80%", 
      end: "+=300",
      scrub: true,
      
  } 
})
gsap.to("#magazine2", {
  x: endX + (thirdWidth * 1.2),
  duration: duration,
  scrollTrigger: {
      trigger: "#magazine2",
      start: "top 100%", 
      end: "+=300",
      scrub: true,
      
  } 
})


gsap.to("#magazine3", {
  x: endX,
  duration: duration,
  scrollTrigger: {
      trigger: "#magazine3",
      start: "top 80%",
      end: "+=300",
      scrub: true,
      
  } 
})

gsap.to("#magazine4", {
  x: endX + (thirdWidth * 1.3),
  duration: duration,
  scrollTrigger: {
      trigger: "#magazine4",
      start: "top 100%", 
      end: "+=300",
      scrub: true,
      
  } 
})


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#members",
    scrub: true,
    pin: true,
    start: "26% 100%",
    end: "+=60%"
  }
})

tl.from(".jisoo", {
  scale: 0.5, 
  ease: "none"
})

tl.to(".jisoo", {
  scale: 1.0,
  ease: "none"
})



const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#members",
    scrub: true,
    pin: true,
    start: "100% 100%",
    end: "+=60%"
  }
})

tl2.to(".rose", {
  scale: 0.5, 
  ease: "none"
  
})




var frame_count  = 13,
    offset_value = 500;
    height_value = 270;

gsap.to(".viewer", {
  backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
  ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=" + (frame_count * height_value),
    pin: true,
    scrub: true
  }
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function openNav() {
  document.getElementById("navOverlay").style.width = "100%";
}

function closeNav() {
  document.getElementById("navOverlay").style.width = "0%";
}

