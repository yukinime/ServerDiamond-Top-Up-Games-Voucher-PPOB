const swiper = new Swiper('.swiper', {
    
    loop: true,
    autoplay: {
        delay: 3000,
      },
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });