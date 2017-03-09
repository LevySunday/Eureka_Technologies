/*
 Author       : Erastus Nathingo <erassy@techsurgeinvestments.com>
 Website Name: Eureka TEchnologies
 Version      : 1.1
 */

(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*PRELOADER JS*/
        $(window).load(function () {
            $('.status').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });
        /*END PRELOADER JS*/

        /*START MENU JS*/
       $('a.page-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.menu-top').addClass('menu-shrink');
            } else {
                $('.menu-top').removeClass('menu-shrink');
            }
        });

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        /*END MENU JS*/

        /*START PROGRESS-BAR JS*/
        $('.progress-bar > span').each(function () {
            var $this = $(this);
            var width = $(this).data('percent');
            $this.css({
                'transition': 'width 2s'
            });

            setTimeout(function () {
                $this.appear(function () {
                    $this.css('width', width + '%');
                });
            }, 500);
        });
        /*END PROGRESS-BAR JS*/


        /*START MIXITUP JS*/
        $('.work_all_item').mixItUp();

        // jQuery Lightbox
        $('.lightbox').venobox({
            numeratio: true,
            infinigall: true
        });
        /*END MIXITUP JS*/


       

        /*START PARTNER LOGO*/
        $('.partner').owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 5,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
        /*END PARTNER LOGO*/

        /*START TESTIMONIAL JS*/
        $('.carousel').carousel({
            interval: 5000,
            pause: 'false',
        });
        /*END TESTIMONIAL JS*/

        // Owl Carousel for Testimonials	
        var testiCarousel = $('.testimonials_carousel');
        testiCarousel.owlCarousel({
            loop: true,
            autoplay: false,
            dots: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 1
        });

        /*START CONTACT MAP JS*/
        var contact = {'lat': '22.5609000000000', 'lon': '17.0658000000000'}; //Eureka Location dummy Map CoOrdintes
        try {
            $('#map').gmap3({
                action: 'addMarker',
                latLng: [contact.lat, contact.lon],
                map: {
                    center: [contact.lat, contact.lon],
                    zoom: 5
                },
            },
                    {action: 'setOptions', args: [{scrollwheel: false}]}
            );
        } catch (err) {

        }
        /*END CONTACT MAP JS*/

    });

    /*  Stellar for background scrolling  */
    (function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $(window).stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    }());
    /* End Stellar for background scrolling  */
    

    /*START WOW ANIMATION JS*/
    new WOW().init();
    /*END WOW ANIMATION JS*/

})(jQuery);




