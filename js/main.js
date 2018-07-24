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
        speed: 800,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        // scrollbar: {
        //     el: '.ss1',
        //     hide: false,
        //     dragSize: 130,
        // },
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
        speed: 3000,
        centeredSlides: true,
        spaceBetween: 150,
        loop: true,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        // autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
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
        speed: 4000,
        spaceBetween: 172,
        loop: true,
        slidesPerGroup: 1,autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },
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

    //map
    if(window.location.pathname=='/'){
        // initMap() - функция инициализации карты
        function initMap() {
            // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
            var centerLatLng = new google.maps.LatLng(50.463696, 30.513968);
            // Обязательные опции с которыми будет проинициализированна карта
            var mapOptions = {
                center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
                zoom: 11,               // Зум по умолчанию. Возможные значения от 0 до 21
                styles:[
                    { "featureType": "all", "elementType": "labels.text.fill",
                        "stylers": [
                            {"saturation": 36},
                            {"color": "#333333"},
                            {"lightness": 40}
                        ]
                    },
                    {"featureType": "all","elementType": "labels.text.stroke",
                        "stylers": [
                            {"visibility": "on"},
                            {"color": "#ffffff"},
                            {"lightness": 16}
                        ]
                    },
                    {"featureType": "all","elementType": "labels.icon",
                        "stylers": [
                            {"visibility": "off"}
                        ]
                    },
                    {"featureType": "administrative","elementType": "geometry.fill",
                        "stylers": [
                            {"color": "#f7f7f7"},
                            {"lightness": 20}
                        ]
                    },
                    {"featureType": "administrative","elementType": "geometry.stroke",
                        "stylers": [
                            {"color": "#f7f7f7"},
                            {"lightness": 17},
                            {"weight": 1.2}
                        ]
                    },
                    {"featureType": "landscape","elementType": "geometry",
                        "stylers": [
                            {"color": "#f7f7f7"},
                            {"lightness": 20}
                        ]
                    },
                    { "featureType": "poi","elementType": "geometry",
                        "stylers": [
                            {"color": "#f5f5f5"},
                            {"lightness": 21}
                        ]
                    },
                    {"featureType": "poi.park","elementType": "geometry",
                        "stylers": [
                            {"color": "#dedede"},
                            {"lightness": 21}
                        ]
                    },
                    {"featureType": "road.highway","elementType": "geometry.fill",
                        "stylers": [
                            {"color": "#ffffff"},
                            {"lightness": 17}
                        ]
                    },
                    {"featureType": "road.highway","elementType": "geometry.stroke",
                        "stylers": [
                            { "color": "#ffffff"},
                            {"lightness": 29},
                            {"weight": 0.2}
                        ]
                    },
                    {"featureType": "road.arterial","elementType": "geometry",
                        "stylers": [
                            {"color": "#ffffff"},
                            {"lightness": 18}
                        ]
                    },
                    {"featureType": "road.local","elementType": "geometry",
                        "stylers": [
                            {"color": "#ffffff"},
                            {"lightness": 16}
                        ]
                    },
                    {"featureType": "transit","elementType": "geometry",
                        "stylers": [
                            {"color": "#f2f2f2"},
                            {"lightness": 19}
                        ]
                    },
                    {"featureType": "water","elementType": "geometry",
                        "stylers": [
                            {"color": "#99ccc0"},
                            {"lightness": 17}
                        ]
                    }
                ]
            };
            // Создаем карту внутри элемента #map
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        }
// Ждем полной загрузки страницы, после этого запускаем initMap()
//         setTimeout(initMap, 3000);
        google.maps.event.addDomListener(window, "load", initMap);
    }
    else if(window.location.pathname=='/contacts.html'){
        function initMap() {
            // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
            var centerLatLng = new google.maps.LatLng(50.463696, 30.513968);
            // Обязательные опции с которыми будет проинициализированна карта
            var mapOptions = {
                center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
                zoom: 11,               // Зум по умолчанию. Возможные значения от 0 до 21
                styles:[
                    { "featureType": "all", "elementType": "labels.text.fill",
                        "stylers": [
                            {"saturation": 36},
                            {"color": "#333333"},
                            {"lightness": 40}
                        ]
                    },
                    {"featureType": "all","elementType": "labels.text.stroke",
                        "stylers": [
                            {"visibility": "on"},
                            {"color": "#ffffff"},
                            {"lightness": 16}
                        ]
                    },
                    {"featureType": "all","elementType": "labels.icon",
                        "stylers": [
                            {"visibility": "off"}
                        ]
                    },
                    {"featureType": "administrative","elementType": "geometry.fill",
                        "stylers": [
                            {"color": "#f7f7f7"},
                            {"lightness": 20}
                        ]
                    },
                    {"featureType": "administrative","elementType": "geometry.stroke",
                        "stylers": [
                            {"color": "#f7f7f7"},
                            {"lightness": 17},
                            {"weight": 1.2}
                        ]
                    },
                    {"featureType": "landscape","elementType": "geometry",
                        "stylers": [
                            {"color": "#f7f7f7"},
                            {"lightness": 20}
                        ]
                    },
                    { "featureType": "poi","elementType": "geometry",
                        "stylers": [
                            {"color": "#f5f5f5"},
                            {"lightness": 21}
                        ]
                    },
                    {"featureType": "poi.park","elementType": "geometry",
                        "stylers": [
                            {"color": "#dedede"},
                            {"lightness": 21}
                        ]
                    },
                    {"featureType": "road.highway","elementType": "geometry.fill",
                        "stylers": [
                            {"color": "#ffffff"},
                            {"lightness": 17}
                        ]
                    },
                    {"featureType": "road.highway","elementType": "geometry.stroke",
                        "stylers": [
                            { "color": "#ffffff"},
                            {"lightness": 29},
                            {"weight": 0.2}
                        ]
                    },
                    {"featureType": "road.arterial","elementType": "geometry",
                        "stylers": [
                            {"color": "#ffffff"},
                            {"lightness": 18}
                        ]
                    },
                    {"featureType": "road.local","elementType": "geometry",
                        "stylers": [
                            {"color": "#ffffff"},
                            {"lightness": 16}
                        ]
                    },
                    {"featureType": "transit","elementType": "geometry",
                        "stylers": [
                            {"color": "#f2f2f2"},
                            {"lightness": 19}
                        ]
                    },
                    {"featureType": "water","elementType": "geometry",
                        "stylers": [
                            {"color": "#99ccc0"},
                            {"lightness": 17}
                        ]
                    }
                ]
            };

            // Создаем карту внутри элемента #map
            var map = new google.maps.Map(document.getElementById("map-contact"), mapOptions);
        }
// Ждем полной загрузки страницы, после этого запускаем initMap()
        google.maps.event.addDomListener(window, "load", initMap);
    }

    //slider card
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-litl'
    });
    $('.slider-litl').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-big',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        breakpoints: {
            1024: {
                slidesToShow: 3,
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }]
    });
    //menu
    $('#nav-icon1').click(function () {
        $('#nav-icon2').toggleClass('open');
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
        $('.command-b').addClass('activ-s2-b');  $('.command').addClass('activ-s2'); $('.l-block').addClass('l-command');
        $('.history-b, .achievements-b').removeClass('activ-s2-b');   $('.history,.achievements').removeClass('activ-s2');
        $('.l-block').removeClass('l-history');$('.l-block').removeClass('l-achievements');
    });
    $('.history-b').click(function () {
        $('.history-b').addClass('activ-s2-b'); $('.history').addClass('activ-s2'); $('.l-block').addClass('l-history');
        $('.command-b,.achievements-b').removeClass('activ-s2-b'); $('.command,.achievements').removeClass('activ-s2');
        $('.l-block').removeClass('l-command');$('.l-block').removeClass('l-achievements');
    });
    $('.achievements-b').click(function () {
        $('.achievements-b').addClass('activ-s2-b'); $('.achievements').addClass('activ-s2'); $('.l-block').addClass('l-achievements');
        $('.command-b,.history-b').removeClass('activ-s2-b');$('.command,.history').removeClass('activ-s2');
        $('.l-block').removeClass('l-history');$('.l-block').removeClass('l-command');
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

    //
    // $('.section4 ').click(function () {
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
    $('.plus').click(function (){
        if($('.section4 .plus').hasClass("active-plus")){
            document.querySelector('.swiper-button-next ').style.display="none";
            document.querySelector('.swiper-button-prev ').style.display="none";}
        else{document.querySelector('.swiper-button-next').style.display="block";
            document.querySelector('.swiper-button-prev').style.display="block";}
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


    ///////////////parallax and animation
    if(window.location.pathname=='/'){
        $(window).on('scroll', function() {
            if($(window).width() > 1024) {
                parallax('#section2', '#bg-parallax-1');
                parallax('#section3', '#bg-parallax-2');
                parallax('#section5', '#bg-parallax-3');
                elTransition('#section2', '.home .section2 .l-block');
                elTransition('#section2', '.home .section2 .r-block');
                elVisibility('#section2', '.home .section2 .bot-block');
                elTransition('#section3', '.home .section3 .l-block');
                elTransition('#section3', '.home .section3 .r-block');
                elVisibility('#section3', '.home .section3 .bot-block');
            } else {
                $('#bg-parallax-1').css({"transform":"translateY(" + 0 + "px)"});
                $('#bg-parallax-2').css({"transform":"translateY(" + 0 + "px)"});
            }
        });
    }
    else return false;


    function elTransition(parentBlock, elementClass) {
        var wScroll = $(window).scrollTop();
        var blockOffset = $(parentBlock).offset().top;

        if((wScroll) > (blockOffset/1.5)) {
            $(elementClass).css({"transform":"translateX(" + 0 + "px)"});
        }
    }

    function elVisibility(parentBlock, elementClass) {
        var wScroll = $(window).scrollTop();
        var blockOffset = $(parentBlock).offset().top;
        if((wScroll + 100) > blockOffset) {
            $(elementClass).css({'visibility': 'visible', 'opacity': '1' });
        }
    }

    function parallax(parentBlock, elementId) {
        var wScroll = $(window).scrollTop();
        var blockOffset = $(parentBlock).offset().top;
        var parallaxElement = $(elementId);

        if((wScroll - 20) > blockOffset) {
            $(parallaxElement).css({"transform":"translateY(" + ((blockOffset - wScroll)*0.2) + "px)"});
        } else {
            $(parallaxElement).css({"transform":"translateY(" + 0 + "px)"});
        }
    }

});