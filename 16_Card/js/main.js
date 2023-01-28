$(document).ready(function () {
    var $inp = $('.input-cart-number')
    var $cardCcv = $('#card-ccv')
    var $ccv = $('.ccv div')


    $inp.on('input', function () {
        var val = $(this).val()
        var length = val.length
        var idx = $(this).index()
        var $span = $(`.number span:nth-child(${idx})`)

        var maxLength = +$(this).attr('maxlength')

        if (length >= maxLength) {
            $(this).next().focus()
        }

        $span.html(val)
    })

    $cardCcv.on('focus', function () {
        $('.credit-card-box .flip').css({
            'transform': 'rotateY(180deg)'
        })
    })

    $cardCcv.on('blur', function () {
        $('.credit-card-box .flip').css({
            'transform': 'rotateY(0deg)'
        })
    })

    $cardCcv.on('input', function () {
        $ccv.html($(this).val())
    })

});