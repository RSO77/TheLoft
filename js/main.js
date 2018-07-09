$(function () {

    //slider
    var swiper = new Swiper('.swiper-sl1', {
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 0,
        loop: true,
        autoplay : 5000,
        // effect : 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'fraction',
        },
    });
    //slider2
    var swiper2 = new Swiper('.swiper-sl2', {
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 0,
        // loop: true,
        // autoplay : 5000,
        // effect : 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'fraction',
        },
    });

    //swipe header
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 70) {
            $('.header').addClass('header-swipe')
        }
        else{$('.header').removeClass('header-swipe')}
    })

    //scrol
    $('.detailed').bind('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('prevent')) {
            return false;
        }
        var target = this.hash,
            $target = $(target);

        var top = typeof  $target.offset() != 'undefined' ? $target.offset().top : 0

        $('html, body').stop().animate({
            'scrollTop': top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    
});