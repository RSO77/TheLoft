$(function () {

    //scrol
    $('.bot-anim,.btn-catalog').bind('click', function (e) {
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
    var swiper3 = new Swiper('.swiper-sl3', {
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
        $('.Curbstones-b').addClass('activ-s3-b');  $('.Curbstones').addClass('activ-s3'); $('.s3-img1').addClass('activ-s3-img'); $('.up1').addClass('up-active-s3');
        $('.tables, .racks, .Coffee-tables').removeClass('activ-s3');   $('.Coffee-tables-b,.tables-b,.racks-b').removeClass('activ-s3-b');
        $('.s3-img2, .s3-img3, .s3-img4').removeClass('activ-s3-img');   $('.up2,.up3,.up4').removeClass('up-active-s3');
    });
    $('.Coffee-tables-b').click(function () {
        $('.Coffee-tables').addClass('activ-s3'); $('.Coffee-tables-b').addClass('activ-s3-b'); $('.s3-img2').addClass('activ-s3-img'); $('.up2').addClass('up-active-s3');
        $('.Curbstones-b,.tables-b,.racks-b').removeClass('activ-s3-b'); $('.Curbstones,.racks,.tables').removeClass('activ-s3');
        $('.s3-img1, .s3-img3, .s3-img4').removeClass('activ-s3-img');   $('.up1,.up3,.up4').removeClass('up-active-s3');
    });
    $('.racks-b').click(function () {
        $('.racks').addClass('activ-s3'); $('.racks-b').addClass('activ-s3-b'); $('.s3-img3').addClass('activ-s3-img'); $('.up3').addClass('up-active-s3');
        $('.Curbstones-b,.tables-b,.Coffee-tables-b').removeClass('activ-s3-b');$('.Curbstones,.tables,.Coffee-tables').removeClass('activ-s3');
        $('.s3-img2, .s3-img1, .s3-img4').removeClass('activ-s3-img');   $('.up2,.up1,.up4').removeClass('up-active-s3');
    });
    $('.tables-b').click(function () {
        $('.tables').addClass('activ-s3'); $('.tables-b').addClass('activ-s3-b'); $('.s3-img4').addClass('activ-s3-img'); $('.up4').addClass('up-active-s3');
        $('.Curbstones-b,.racks-b,.Coffee-tables-b').removeClass('activ-s3-b');$('.Curbstones,.racks,.Coffee-tables').removeClass('activ-s3');
        $('.s3-img2, .s3-img3, .s3-img1').removeClass('activ-s3-img');   $('.up2,.up3,.up1').removeClass('up-active-s3');
    });


    // $('.section4 .plus').click(function () {
    //     $(this).toggleClass('active-plus');
    // });
    $('.plus-inf1').click(function () {
        $('.plus-inf1').toggleClass('active-plus');  $('.inf-sl1').toggleClass('inform-s4-active');
        $('.plus-inf2,.plus-inf3,.plus-inf4,.plus-inf5,.plus-inf6').removeClass('active-plus');
        $('.inf-sl2,.inf-sl3,.inf-sl4,.inf-sl5,.inf-sl6').removeClass('inform-s4-active');
    });
    $('.plus-inf2').click(function () {
        $('.plus-inf2').toggleClass('active-plus');  $('.inf-sl2').toggleClass('inform-s4-active');
        $('.plus-inf1,.plus-inf3,.plus-inf4,.plus-inf5,.plus-inf6').removeClass('active-plus');
        $('.inf-sl1,.inf-sl3,.inf-sl4,.inf-sl5,.inf-sl6').removeClass('inform-s4-active');
    });
    $('.plus-inf3').click(function () {
        $('.plus-inf3').toggleClass('active-plus');  $('.inf-sl3').toggleClass('inform-s4-active');
        $('.plus-inf2,.plus-inf1,.plus-inf4,.plus-inf5,.plus-inf6').removeClass('active-plus');
        $('.inf-sl2,.inf-sl1,.inf-sl4,.inf-sl5,.inf-sl6').removeClass('inform-s4-active');
    });
    $('.plus-inf4').click(function () {
        $('.plus-inf4').toggleClass('active-plus');  $('.inf-sl4').toggleClass('inform-s4-active');
        $('.plus-inf2,.plus-inf3,.plus-inf1,.plus-inf5,.plus-inf6').removeClass('active-plus');
        $('.inf-sl2,.inf-sl3,.inf-sl1,.inf-sl5,.inf-sl6').removeClass('inform-s4-active');
    });
    $('.plus-inf5').click(function () {
        $('.plus-inf5').toggleClass('active-plus');  $('.inf-sl5').toggleClass('inform-s4-active');
        $('.plus-inf2,.plus-inf3,.plus-inf4,.plus-inf1,.plus-inf6').removeClass('active-plus');
        $('.inf-sl2,.inf-sl3,.inf-sl4,.inf-sl1,.inf-sl6').removeClass('inform-s4-active');
    });
    $('.plus-inf6').click(function () {
        $('.plus-inf6').toggleClass('active-plus');  $('.inf-sl6').toggleClass('inform-s4-active');
        $('.plus-inf2,.plus-inf3,.plus-inf4,.plus-inf5,.plus-inf1').removeClass('active-plus');
        $('.inf-sl2,.inf-sl3,.inf-sl4,.inf-sl5,.inf-sl1').removeClass('inform-s4-active');
    });


 //CARD

    $('.border4').click(function () {
        $('.border4').addClass('color-border-active');  $('.color4').addClass('color-name-active');
        $('.border3, .border2, .border1').removeClass('color-border-active');   $('.color3,.color2,.color1').removeClass('color-name-active');
    });
    $('.border1').click(function () {
        $('.border1').addClass('color-border-active');  $('.color1').addClass('color-name-active');
        $('.border3, .border2, .border4').removeClass('color-border-active');   $('.color3,.color2,.color4').removeClass('color-name-active');
    });
    $('.border2').click(function () {
        $('.border2').addClass('color-border-active');  $('.color2').addClass('color-name-active');
        $('.border3, .border4, .border1').removeClass('color-border-active');   $('.color3,.color4,.color1').removeClass('color-name-active');
    });
    $('.border3').click(function () {
        $('.border3').addClass('color-border-active');  $('.color3').addClass('color-name-active');
        $('.border4, .border2, .border1').removeClass('color-border-active');   $('.color4,.color2,.color1').removeClass('color-name-active');
    });


    $('.category-col .color-border').click(function () {
        $('.category-col .border4, .border2, .border1, .border3').removeClass('color-border-active2');
        $(this).addClass('color-border-active2');
    });

    $('.description').click(function () {
        $('.section2').toggleClass('cart-open');
    });
    
    //slider card
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-litl'
    });
    $('.slider-litl').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-big',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });



});