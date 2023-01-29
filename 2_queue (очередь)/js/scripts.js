$(".item .ask").click(function () {
  var $answ = $(this).parent().find(".answer");
  //   var $answ = $(this).next();
  
  $(".item .ask").not(this).parent().find(".answer").slideUp();
  
  $answ.slideToggle();
});
