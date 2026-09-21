/* =========================
AOS SCROLL ANIMATION
========================= */


AOS.init({

    duration:1000,

    once:true,

    offset:100

});








/* =========================
REELS SLIDER
========================= */
/* =========================
REELS SLIDER
========================= */

const projectSlider = new Swiper(".projectSwiper", {
    loop: true,

    // Increase transition duration (slower slide animation)
    speed: 900, // was 900

    autoplay: {
        // Show each slide for 8 seconds
        delay: 3000, // was 2500 (2.5s)
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    spaceBetween: 30,
    slidesPerView: 1,

    navigation: {
        nextEl: ".projectSwiper .swiper-button-next",
        prevEl: ".projectSwiper .swiper-button-prev"
    },

    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1100: {
            slidesPerView: 3
        }
    }
});
/*
const projectSlider = new Swiper(".projectSwiper", {


    loop:true,


    speed:900,


    autoplay:{


        delay:2500,


        disableOnInteraction:false


    },


    spaceBetween:30,


    slidesPerView:1,



    navigation:{


        nextEl:".projectSwiper .swiper-button-next",


        prevEl:".projectSwiper .swiper-button-prev"


    },



    breakpoints:{


        768:{


            slidesPerView:2


        },


        1100:{


            slidesPerView:3


        }


    }


});


*/






/* =========================
CLIENT REVIEWS SLIDER
========================= */


const reviewSlider = new Swiper(".reviewSwiper", {



    loop:true,


    speed:1000,



    autoplay:{


        delay:3000,


        disableOnInteraction:false


    },



    spaceBetween:30,



    slidesPerView:1,



    navigation:{


        nextEl:".reviewSwiper .swiper-button-next",


        prevEl:".reviewSwiper .swiper-button-prev"


    },



    pagination:{


        el:".reviewSwiper .swiper-pagination",


        clickable:true


    },



    breakpoints:{


        768:{


            slidesPerView:2


        },



        1100:{


            slidesPerView:3


        }


    }


});









/* =========================
NAVBAR ACTIVE EFFECT
========================= */


const sections=document.querySelectorAll("section");

const links=document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";



    sections.forEach(section=>{


        const sectionTop=section.offsetTop-150;



        if(scrollY>=sectionTop){


            current=section.getAttribute("id");


        }


    });



    links.forEach(link=>{


        link.style.color="#333";



        if(link.getAttribute("href")=="#"+current){


            link.style.color="#f107a3";


        }


    });



});










/* =========================
BUTTON RIPPLE EFFECT
========================= */


document.querySelectorAll(".btn").forEach(button=>{


    button.addEventListener("click",function(){


        let ripple=document.createElement("span");



        ripple.classList.add("ripple");



        this.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();



        },600);



    });



});