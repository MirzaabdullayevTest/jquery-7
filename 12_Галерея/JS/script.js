$(document).ready(function () {
    $('#small a').click(function (e) {
        e.preventDefault()
        var $attr = $(this).attr('href')

        // $('#big img').attr('src', $attr)
        // fadeIn // d-block // fade-out // d-none

        $('#big img').fadeOut(1000, function () {
            $(this).attr('src', $attr)

            $('#big img').fadeIn(1000)
        })
    })
});