$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        lazyLoad: true,
        smartSpeed: 450,
        responsive: {
            0: {  /* 0 <= w */
                items: 1,
                loop: false
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    })
});