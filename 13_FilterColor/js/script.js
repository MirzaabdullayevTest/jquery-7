$(document).ready(function () {
  var $colors = $(".color");

  $(".f-red").click(function () {
    cb(".red");
  });

  $(".f-blue").click(function () {
    cb(".blue");
  });

  $(".f-all").click(function () {
    cb(".color");
  });

  function cb(color) {
    $colors.slideUp();

    $colors.filter(color).slideDown();
  }

  $(".f-green").click(function () {
    $colors.slideDown();

    $colors.not($(".green")).slideUp();
    // $colors.filter(".red").slideDown();
  });
});
