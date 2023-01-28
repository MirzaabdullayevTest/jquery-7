$(document).ready(function () {
    $('.menu a').click(function (e) {
        e.preventDefault()
        $('.menu a').not(this).removeClass('active')
        // var $attr = $(this).attr('href')
        var $attr = $(this).addClass('active').attr('href')
        var top = $($attr).offset().top - 55
        $('html, body').animate({
            scrollTop: top,
        }, 500)
    })

    $(window).scroll(function () {
        var $top = $(this).scrollTop()

        $('.menu a').each(function (index, elem) {
            var $attr = $(this).attr('href')
            var $elemTop = $($attr).offset().top - 150

            if ($top >= $elemTop) {
                $('.menu a').not(this).removeClass('active')
                $(this).addClass('active')
            }
        })
    })

});