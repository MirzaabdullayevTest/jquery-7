$(document).ready(function () {
  $(".item .answer").slideUp();

  $(".item .ask").click(function () {
    var $answ = $(this).parent().find(".answer");

    $answ.slideToggle();

    $answ
      .animate(
        {
          height: "500px",
          width: "600px",
          borderRadius: "50%",
        },
        4000
      )
      .animate(
        {
          height: "200px",
          width: "600px",
          borderRadius: "10%",
        },
        2000
      )
      .animate(
        {
          height: "500px",
          width: "700px",
          borderRadius: "30%",
        },
        3000
      )
      .animate(
        {
          height: "500px",
          width: "600px",
          borderRadius: "50%",
        },
        1000
      );
  });
});
