window.addEventListener('DOMContentLoaded', (event) => {


    const reviewsCarousel = new Swiper('.reviews-carousel__swiper', {
        loop: true,
        pagination: {
            el: '.reviews-carousel__pagination',
        },
        navigation: {
            nextEl: '.reviews-carousel__button-next',
            prevEl: '.reviews-carousel__button-prev',
        },
    });

});