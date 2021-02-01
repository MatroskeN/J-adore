const MainSwiper = document.querySelector('.main-swiper');
if(MainSwiper){
    var swiper1 = new Swiper('.main-swiper', {
        slidesPerView: 'auto',
        pagination: {
            el: '.main-pagination',
            type: 'bullets',
            clickable: true
        },
    });
}
const MiniSwiper = document.querySelector('.mini-swiper');
if(MiniSwiper){
    var swiper2 = new Swiper('.mini-swiper', {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });
}
const DressSwiper = document.querySelector('.dress-swiper');
if(DressSwiper){
    var swiper3 = new Swiper('.dress-swiper', {
        slidesPerView: 'auto',
        scrollbar: {
            el: '.dress-scroll',
            hide: false,
            draggable: true,
            snapOnRelease: false,
        },
    });
}
const PrimSwiper = document.querySelector('.prim-swiper');
if(PrimSwiper){
    var swiper4 = new Swiper('.prim-swiper', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.nav-right',
            prevEl: '.nav-left',
        },
    });
}
const TopSwiper = document.querySelector('.top-swiper');
if(TopSwiper){
    var swiper5 = new Swiper('.top-swiper', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.top-nav-right',
            prevEl: '.top-nav-left',
        },
    });
}
const ChooseSwiper = document.querySelector('.choose-swiper');
if(ChooseSwiper){
    var swiper6 = new Swiper('.choose-swiper', {
        slidesPerView: 'auto',
        //choose-nav-right
        navigation: {
            nextEl: '.choose-nav-right',
            prevEl: '.choose-nav-left',
        },
    });  
}
const BrandSwiper = document.querySelector('.brand-swiper');
if(BrandSwiper){
    var swiper7 = new Swiper('.brand-swiper', {
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });
}


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

$("#sign1").on("click", function () {
    document.getElementById("signing").style.display = "block";
    document.getElementById("dark").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
})

$("#close-sign").on("click", function () {
    document.getElementById("signing").style.display = "none";
    document.getElementById("dark").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
})


            $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 5000,
            max: 40000,
            from: 5000,
            to: 10000,
            grid: false
        });