// LENIS SMOOTH SCROLL

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// CUSTOM CURSOR

const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"

})


// LOADER ANIMATION

gsap.to(".loader",{

  y:"-100%",
  duration:1.5,
  delay:1,
  ease:"power4.inOut"

})


// HERO ANIMATION

gsap.from("nav",{

  y:-100,
  opacity:0,
  duration:1,
  delay:1.2

})

gsap.from(".hero-title",{

  y:150,
  opacity:0,
  duration:1.5,
  delay:1.4,
  ease:"power4.out"

})

gsap.from(".hero-content p",{

  y:50,
  opacity:0,
  duration:1,
  delay:1.8

})

gsap.from(".hero-content button",{

  scale:0,
  duration:0.6,
  delay:2

})


// ABOUT ANIMATION

gsap.from(".about-left",{

  scrollTrigger:{
    trigger:".about",
    start:"top 70%"
  },

  x:-100,
  opacity:0,
  duration:1.2

})

gsap.from(".about-right",{

  scrollTrigger:{
    trigger:".about",
    start:"top 70%"
  },

  x:100,
  opacity:0,
  duration:1.2

})


// CARDS ANIMATION

gsap.from(".card",{

  scrollTrigger:{
    trigger:".cards",
    start:"top 70%"
  },

  y:100,
  opacity:0,
  duration:1,
  stagger:0.2

})


// PARALLAX TEXT

gsap.from(".parallax h1",{

  scrollTrigger:{
    trigger:".parallax",
    start:"top 80%"
  },

  scale:0.5,
  opacity:0,
  duration:1.2

})
window.addEventListener("scroll",()=>{

  const scroll =
  window.scrollY

  const height =
  document.body.scrollHeight -
  window.innerHeight

  const progress =
  (scroll / height) * 100

  document.querySelector(".progress-bar")
  .style.width = progress + "%"

})
gsap.utils.toArray(".card").forEach((card)=>{

  gsap.from(card,{

    opacity:0,
    y:80,

    scrollTrigger:{
      trigger:card,
      start:"top 85%"
    }

  })

})
document.addEventListener("mousemove",(e)=>{

  gsap.to(".parallax-text",{

    x:(e.clientX - window.innerWidth/2) * 0.02,
    y:(e.clientY - window.innerHeight/2) * 0.02

  })

})
if(window.innerWidth > 900){

  gsap.to(".cards",{

    scrollTrigger:{

      trigger:".cards",
      start:"top top",
      end:"+=300",
      scrub:true,
      

    }

  })

}

window.addEventListener("scroll",()=>{

  if(window.scrollY > 50){

    document.querySelector("nav")
    .classList.add("active")

  }else{

    document.querySelector("nav")
    .classList.remove("active")

  }

})

// POPUPS

const bookingPopup =
document.querySelector(".booking-popup")

const galleryPopup =
document.querySelector(".gallery-popup")


// BUTTONS

document.getElementById("bookBtn")
.addEventListener("click",()=>{

  bookingPopup.classList.add("active")

})

document.getElementById("galleryBtn")
.addEventListener("click",()=>{

  galleryPopup.classList.add("active")

})


// CLOSE

document.querySelector(".close-btn")
.addEventListener("click",()=>{

  bookingPopup.classList.remove("active")

})

document.querySelector(".close-gallery")
.addEventListener("click",()=>{

  galleryPopup.classList.remove("active")

})


// WHATSAPP BOOKING

document.getElementById("whatsappBtn")
.addEventListener("click",()=>{

  const name =
  document.getElementById("name").value

  const phone =
  document.getElementById("phone").value

  const guests =
  document.getElementById("guests").value

  const date =
  document.getElementById("date").value

  const time =
  document.getElementById("time").value


  const message =
`☕ BREW HAVEN TABLE BOOKING

Name: ${name}
Phone: ${phone}
Guests: ${guests}
Date: ${date}
Time: ${time}`


  const ownerNumber =
  "918109944185"


  const url =
`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`


  window.open(url,"_blank")

})


// GSAP POPUP ANIMATION

gsap.from(".popup-content",{

  scale:0.8,
  opacity:0,
  duration:0.5

})
