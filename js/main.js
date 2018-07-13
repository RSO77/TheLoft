$(function () {

    //slider
    var swiper = new Swiper('.swiper-sl1', {
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 0,
        loop: true,
        // autoplay: {
        //     delay: 7000,
        //     disableOnInteraction: false,
        // },
        // effect : 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //slider2
    var swiper2 = new Swiper('.swiper-sl2', {
        slidesPerView: 3,
        speed: 700,
        centeredSlides: true,
        spaceBetween: 150,
        loop: true,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        // autoplay: {
        //     delay: 7000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //slider3
    var swiper2 = new Swiper('.swiper-sl3', {
        slidesPerView: 'auto',
        centeredSlides: true,
        speed: 700,
        spaceBetween: 172,
        loop: true,
        slidesPerGroup: 1,
    });

    //menu
    $('#nav-icon1').click(function () {
        // $(this).toggleClass('open');
        $('.menu').toggleClass('show');
        $('.headerMenu2').toggleClass('headerMenu-close');
        $('html,body,main').toggleClass('overflow');
    });
    
    //plus-s3 img
    $('.s3-plus-up').click(function () {
        $('.s3-plus-up').toggleClass('s3-plus-up-show');
        $('.s3-pop-up').toggleClass('s3-pop-up-show');
    });
    //plus-s1 img
    $('.s1-plus-up').click(function () {
        $('.s1-plus-up').toggleClass('s1-plus-up-show');
        $('.s1-pop-up').toggleClass('s1-pop-up-show');
    });
    
    //swipe header
    // $(window).scroll(function () {
    //     console.log($(window).scrollTop());
    //     if ($(window).scrollTop() > 70) {
    //         $('.header').addClass('header-swipe')
    //     }
    //     else{$('.header').removeClass('header-swipe')}
    // })

    //scrol
    // $('.detailed').bind('click', function (e) {
    //     e.preventDefault();
    //     if ($(this).hasClass('prevent')) {
    //         return false;
    //     }
    //     var target = this.hash,
    //         $target = $(target);
    //
    //     var top = typeof  $target.offset() != 'undefined' ? $target.offset().top : 0
    //
    //     $('html, body').stop().animate({
    //         'scrollTop': top
    //     }, 500, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });
    
});