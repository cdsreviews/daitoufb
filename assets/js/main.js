(function(a) {
    jQuery(document).ready(function() {
        var b = a("#body-overlay");
        var c = a("#search-popup");
        a(document).on("click", "#body-overlay", function(d) {
            d.preventDefault();
            b.removeClass("active");
            c.removeClass("active")
        });
        a(document).on("click", "#search", function(d) {
            d.preventDefault();
            c.addClass("active");
            b.addClass("active")
        });
        a(document).on("click", ".navbar-area .navbar-nav li.menu-item-has-children>a", function(d) {
            d.preventDefault()
        });
        a(".cropium-hero-slider").slick({
            dots: true,
            infinite: true,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
        });
        a(".feature-slider").slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left"></i>',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right"></i>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, ]
        });
        a(".counter").counterUp({
            delay: 10,
            time: 1500
        });
        a(".tab-accordion ul li").on("click", function() {
            var d = a(this).attr("class");
            a(this).addClass("active").siblings().removeClass("active");
            a("." + d + "-content").addClass("active").siblings().removeClass("active")
        });
        a(".video-play-button a").magnificPopup({
            type: "iframe"
        });
        a(".client-slider").slick({
            dots: false,
            infinite: true,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: true,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left"></i>',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right"></i>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }, ]
        });
        a(".blog-slider").slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left"></i>',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right"></i>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, ]
        });
        a(".service-slider").slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left"></i>',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right"></i>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, ]
        });
        a(".brand-slider").slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, ]
        });
        a(".case-study-slider").slick({
            dots: false,
            infinite: true,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left"></i>',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right"></i>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, ]
        });
        a(".client-slider-home-2").slick({
            dots: false,
            infinite: true,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, ]
        });
        a(".service-widget-tab ul li").on("click", function() {
            var d = a(this).attr("class");
            a(this).addClass("active").siblings().removeClass("active");
            a("." + d + "-content").addClass("active").siblings().removeClass("active")
        })
    });
    jQuery(window).on("load", function() {
        new WOW().init();
        var b = a("#preloader");
        b.fadeOut(0)
    })
})(jQuery);