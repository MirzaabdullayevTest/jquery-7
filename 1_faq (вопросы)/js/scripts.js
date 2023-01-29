$(".item .ask").click(function () {
  var $answ = $(this).parent().find(".answer");

  $answ.slideDown();

  $answ.slideToggle(3000, function () {
    alert("msg");
  });
});
