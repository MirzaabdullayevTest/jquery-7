$(document).ready(function () {
  $(".show").click(function () {
    $(this).hide();

    $(".hide").show();
    $("section").slideDown();
  });

  $(".success").click(function () {
    $("footer").slideDown();
  });

  $(".hide").click(function () {
    $(this).hide();

    $(".show").show();
    $("section").slideUp();
    $("footer").slideUp();
  });
});
