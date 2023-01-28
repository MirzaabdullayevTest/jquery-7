$(document).ready(function () {
    $('.nav-pills li a').click(clicked)

    function clicked() {
        $('.nav-pills li a').not(this).parent().removeClass('active')
        $(this).parent().addClass('active')

        var $attr = $(this).attr('href')  // #profile

        // $($attr).show()  /* d-block */
        // $('.tab-pane').not($attr).hide() /* d-none */

        $($attr).addClass('active')
        $('.tab-pane').not($attr).removeClass('active')
    }
});