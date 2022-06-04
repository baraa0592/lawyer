$(document).ready(function () {
    'use strict'

    $('.menu-list .menu-item, .the-btn').click(function(){
        // $('.menu-holder').removeClass('open');
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000)
    })

    $('.menu-icon, .navbar .navbar-mobile .menu-list .menu-item').click(function(){
        
        $('.slides, .services-page-content').toggleClass('margin-top')
        $('.navbar-2').toggleClass('opacity')
    })

    $('.slides .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        rtl: true,
        items: 1,
        outplay: true
    })
    $('.our-team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        rtl: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            }

        }
    })
    $('.partner-content .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        rtl: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 4,

            }

        }
    })


    AOS.init({
        duration: 1500,
        once: true,
    });
})