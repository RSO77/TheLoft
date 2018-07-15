$(function () {

    //scrol
    $('.bot-anim').bind('click', function (e) {
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

    //slider
    var swiper = new Swiper('.swiper-sl1', {
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        effect : 'fade',
        pagination: {
            el: '.sp1',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (("0")+(index+1)) + '</span>';
            },
        },
    });

    //slider2
    var swiper2 = new Swiper('.swiper-sl2', {
        slidesPerView: 2.8,
        speed: 700,
        centeredSlides: true,
        spaceBetween: 150,
        loop: true,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1042: {
                slidesPerView: 1.4,
                spaceBetween: 70
            }
        }
    });
    //slider3
    var swiper2 = new Swiper('.swiper-sl3', {
        slidesPerView: 'auto',
        centeredSlides: true,
        speed: 700,
        spaceBetween: 172,
        loop: true,
        slidesPerGroup: 1,
        breakpoints: {
            768: {
                slidesPerView: 2.2,
                spaceBetween: 50
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 60
            }
        }
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

    //переключатель s2
    $('.command-b').click(function () {
        $('.command-b').addClass('activ-s2-b');  $('.command').addClass('activ-s2');
        $('.history-b, .achievements-b').removeClass('activ-s2-b');   $('.history,.achievements').removeClass('activ-s2');
    });
    $('.history-b').click(function () {
        $('.history-b').addClass('activ-s2-b'); $('.history').addClass('activ-s2');
        $('.command-b,.achievements-b').removeClass('activ-s2-b'); $('.command,.achievements').removeClass('activ-s2');
    });
    $('.achievements-b').click(function () {
        $('.achievements-b').addClass('activ-s2-b'); $('.achievements').addClass('activ-s2');
        $('.command-b,.history-b').removeClass('activ-s2-b');$('.command,.history').removeClass('activ-s2');
    });
    //переключатель s3
    $('.Curbstones-b').click(function () {
        $('.Curbstones-b').addClass('activ-s3-b');  $('.Curbstones').addClass('activ-s3');
        $('.tables, .racks, .Coffee-tables').removeClass('activ-s3');   $('.Coffee-tables-b,.tables-b,.racks-b').removeClass('activ-s3-b');
    });
    $('.Coffee-tables-b').click(function () {
        $('.Coffee-tables').addClass('activ-s3'); $('.Coffee-tables-b').addClass('activ-s3-b');
        $('.Curbstones-b,.tables-b,.racks-b').removeClass('activ-s3-b'); $('.Curbstones,.racks,.tables').removeClass('activ-s3');
    });
    $('.racks-b').click(function () {
        $('.racks').addClass('activ-s3'); $('.racks-b').addClass('activ-s3-b');
        $('.Curbstones-b,.tables-b,.Coffee-tables-b').removeClass('activ-s3-b');$('.Curbstones,.tables,.Coffee-tables').removeClass('activ-s3');
    });
    $('.tables-b').click(function () {
        $('.tables').addClass('activ-s3'); $('.tables-b').addClass('activ-s3-b');
        $('.Curbstones-b,.racks-b,.Coffee-tables-b').removeClass('activ-s3-b');$('.Curbstones,.racks,.Coffee-tables').removeClass('activ-s3');
    });

});