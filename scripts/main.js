var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});
var swiper = new Swiper('.mini-swiper', {
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});
var swiper1 = new Swiper('.dress-swiper', {
    slidesPerView: 'auto',
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        snapOnRelease: false,
    },
});
var swiper2 = new Swiper('.prim-swiper', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.nav-right',
        prevEl: '.nav-left',
    },
});
var swiper3 = new Swiper('.top-swiper', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.top-nav-right',
        prevEl: '.top-nav-left',
    },
});
var swiper4 = new Swiper('.choose-swiper', {
    slidesPerView: 'auto',
    //choose-nav-right
    navigation: {
        nextEl: '.choose-nav-right',
        prevEl: '.choose-nav-left',
    },
});
var swiper5 = new Swiper('.brand-swiper', {
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
    },
    loop: true,
});

//search
$("#opener").on("click", function () {
    document.getElementById("opened").style.display = "none";
    document.getElementById("search").style.display = "block";
});

$("#close").on("click", function () {
    document.getElementById("opened").style.display = "flex";
    document.getElementById("search").style.display = "none";
});

//burger
$("#burger").on("click", function () {
    document.getElementById("burger").style.display = "none";
    document.getElementById("xclose").style.display = "block";
    document.getElementById("burger-menu").style.display = "flex";
});

$("#xclose").on("click", function () {
    document.getElementById("burger").style.display = "block";
    document.getElementById("xclose").style.display = "none";
    document.getElementById("burger-menu").style.display = "none";
});


$("#open-pop").on("click", function () {
    document.getElementById("popup").style.display = "block";
    document.getElementById("dark").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
})

$("#close-pop").on("click", function () {
    document.getElementById("popup").style.display = "none";
    document.getElementById("dark").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
})

$("#sign").on("click", function () {
    document.getElementById("signing").style.display = "block";
    document.getElementById("dark").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
})

$("#close-sign").on("click", function () {
    document.getElementById("signing").style.display = "none";
    document.getElementById("dark").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
})