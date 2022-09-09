var swiper = new Swiper(".main-slide", {
    slidesPerView: 2,
    spaceBetween: 30,
});

var swiper = new Swiper(".smcard", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

var swiper = new Swiper(".brands-slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".discount-slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".discount-slider-catalog", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".item-slider", {
    slidesPerView: 3,
    direction: 'vertical',
    spaceBetween: 16,
});

var swiper2 = new Swiper(".item-slider-2", {
    slidesPerView: 1,
    allowTouchMove: false,
    effect: "fade",
    thumbs: {
      swiper: swiper,
    },
});

