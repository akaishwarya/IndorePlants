const navMenu = document.getElementById("navmenu");
const icon = document.getElementById("hamburger");
const navlink = document.querySelectorAll("#navlink");

icon.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  icon.classList.toggle("ri-menu-4-line");
  icon.classList.toggle("ri-close-line");
  
})


navlink.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("left-[0]");
    icon.classList.remove("ri-close-line")
    icon.classList.add("ri-menu-4-line")
  })

})

// Review Animation

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
       640: {
        slidesPerView: 1
       },
       768: {
        slidesPerView: 2
       },
       1024: {
        slidesPerView: 3
       }

    }
  
   
  });

