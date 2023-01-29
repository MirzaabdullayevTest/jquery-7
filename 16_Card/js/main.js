$(document).ready(function () {
  var $inp = $(".input-cart-number");
  var $ccv = $("#card-ccv");
  var $creditBox = $(".credit-card-box");
  var $ccvDiv = $(".ccv div");

  $inp.on("input", function () {
    var $val = $(this).val(); // 'ads45'
    var $length = $val.length;
    var $maxLength = $(this).attr("maxlength"); // 4 45 6

    if ($length == $maxLength) {
      $(this).next().focus();
    }

    var $idx = $(this).index(); // 2

    $(`.number span:nth-child(${$idx})`).html($val);
  });

  $ccv.on("focus", function () {
    $creditBox.addClass("hover");
  });

  $ccv.on("input", function () {
    var $val = $(this).val();

    $ccvDiv.html($val);
  });

  $ccv.on("blur", function () {
    $creditBox.removeClass("hover");
  });
});
