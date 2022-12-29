var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    duration:5,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var classes = document.querySelectorAll(".cno h1");
  values = [];

for(var i = 0; i < classes.length; i++) {
  values.push(classes[i]);
}

var pag2 = document.querySelector("#page2")
const initialcoords = page2.getBoundingClientRect().top;
console.log(initialcoords);
window.addEventListener('scroll',function(){
  console.log(this.window.scrollY);
  if(this.window.scrollY>250){
    values.forEach(function(elem,index){
      gsap
      .to(elem,{
        y:(-150),
       duration: 2,
       stagger:1,
   }
  );
  }
)}});