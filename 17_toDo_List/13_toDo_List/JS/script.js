$(document).ready(function () {
    var $inp = $('.form-control')
    var $btn = $('.btn')
    var $listGroup = $('.list-group')

    $btn.click(function () {
        var val = $inp.val()

        $listGroup.append(`<li class="alert alert-dark"><input type="checkbox"><span>${val}</span> <button type="button" class="btn-close remove" aria-label="Close">x</button></li>`)

        $inp.val('')
    })

    $listGroup.on('click', '.btn-close', function () {
        $(this).parent().remove()
    })


});