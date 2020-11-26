var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        snapOnRelease: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});