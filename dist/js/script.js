var swiper = new Swiper(".main-slide", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    769: {
        slidesPerView: 2,
        spaceBetween: 10,
    }
    }
});

var swiper = new Swiper(".smcard", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        676: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
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
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        360: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        }
    }
});

var swiper = new Swiper(".discount-slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        360: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        577: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: "auto",
            spaceBetween: 10,
        },
    }
});

var swiper = new Swiper(".discount-slider-catalog", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        360: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        577: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
    }
});

var swiper = new Swiper(".item-slider", {
    slidesPerView: 3,
    direction: 'vertical',
    spaceBetween: 16,
});

var swiper = new Swiper(".item-slider-2", {
    slidesPerView: 1,
    allowTouchMove: true,
    effect: "fade",
    thumbs: {
        swiper: swiper,
    },
    breakpoints: {
        320: {
            pagination: {
                el: ".swiper-pagination",
            },
        },
        993: {
            pagination: false
        },
    } 
});

window.addEventListener('load', () => { 
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloader_hidden');
});

const hamburger = document.querySelector('.header-mobile-hamburger');
const topMenu = document.querySelector('#topMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header-mobile-hamburger-active');

    if (hamburger.classList.contains('header-mobile-hamburger-active')) {
        topMenu.style.top = '59px';
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        topMenu.style.top = '';
        document.querySelector('body').style.overflow = '';
    }
});


const catalogBtn = document.querySelector('.header-btn');
const catalog = document.querySelector('.header-catalog');

if (window.innerWidth > 992) {

    catalogBtn.addEventListener('click', (item) => {
        item.preventDefault();
        catalog.classList.toggle('appear');
    });

}

try{
    const brandsWrapper = document.querySelector('.brandsSearch-block');
    const brandsLetter = document.querySelectorAll('.brandsSearch-item');

    brandsWrapper.addEventListener('click', (event)=> {
        let target = event.target;

        if(target.classList.contains('brandsSearch-item')) {
            for(let i = 0; i < brandsLetter.length; i++) {
              brandsLetter[i].classList.remove('active');
            }
            target.classList.add('active');
          }
    });

}catch(e){}

/* try{

    let goTopBtn = document.querySelector('#toTop');
                                                                         
    let trackScroll = function() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            goTopBtn.classList.add('show');
        } else {
            goTopBtn.classList.remove('show');
        }
    };

    let backToTop = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

}catch(e){} */

/* Фильтр */

try {
    const filter = document.querySelector('#filter');
    const filterBlock = document.querySelector('.products-filter');
    const overlay = document.createElement('div');

    const filterToggle = function() {

        filterBlock.classList.toggle('products-filter-active');

        if (filterBlock.classList.contains('products-filter-active')) {

            document.querySelector('body').style.overflow = 'hidden';
            overlay.classList.add('overlay');
            document.querySelector('body').append(overlay);

        } else {
            document.querySelector('body').style.overflow = '';
            overlay.remove();
        }
    }

    filter.addEventListener('click', filterToggle);

    overlay.addEventListener('click', filterToggle);
}catch(e){}

/* Всплывашки */

try{
    const notificationParent = document.querySelector('.notification');
    console.log(window.screen.width);
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 150) {
            notificationParent.style.top = '100px';
        } else if (window.screen.width < 1024) {
            notificationParent.style.top = '70px';
        } else {
            notificationParent.style.top = '';
        }
    });

}catch(e){}






