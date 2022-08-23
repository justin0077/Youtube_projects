/*=============== SWIPER JS GALLERY ===============*/
let swiperCards = new Swiper('.gallery-cards', {
    loop: true,
    looopedSlides: 5,
    cssMode: true,
    effect: 'fade'
})

let swiperThumbs = new Swiper('.gallery-thumbs', {
    loop: true,
    looopedSlides: 5,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

swiperThumbs.controller.control = swiperCards
