$(document).ready(function () {
  var $big = $("#big img");

  $("#small a").click(function (e) {
    e.preventDefault();
    var $attr = $(this).attr("href");

    $big.fadeOut(function () {
      $big.attr("src", $attr);

      $(this).fadeIn();
    });
  });
});
