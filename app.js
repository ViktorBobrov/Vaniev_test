let acc = document.getElementsByClassName("accordion");
let acordi = document.getElementsByClassName("accordeon_wrap-item");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      
    }
  });
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  grabCursor:true,
  freeMode:true,
});
