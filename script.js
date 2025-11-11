const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const page2Animation = () =>{
    
let elems = document.querySelectorAll(".elem");
elems.forEach((e)=>{
    let Image = e.getAttribute("data-image");
e.addEventListener("mouseenter",()=>{
    fixedimage.style.backgroundImage=`url(${Image})`
})
})

let fixedimage =  document.querySelector("#fixed-image");
let elemContainer = document.querySelector("#elem-container");
elemContainer.addEventListener("mouseenter",()=>{
    fixedimage.style.display="block";
    
})
elemContainer.addEventListener("mouseleave",()=>{
    fixedimage.style.display="none";
})
}

const menuAnimation = () =>{
    let menu = document.querySelector("#page1 .menu");
let fullScreen = document.querySelector(".full-screen")
let navImg = document.querySelector("nav img");
let flag = 0
menu.addEventListener("click",()=>{
if(flag == 0){
    fullScreen.style.top=0;
navImg.style.opacity="0";
flag = 1
}else{
      fullScreen.style.top="-100%";
navImg.style.opacity="1";
flag = 0
}
})
}
const swipperJs = () =>{
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });
}

page2Animation();
menuAnimation()
swipperJs();

const LoaderAnimation = () =>{
  let loader =  document.querySelector("#loader");
setTimeout(()=>{
loader.style.top="-100%";
},4000)
}
LoaderAnimation();
