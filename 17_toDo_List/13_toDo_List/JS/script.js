$(document).ready(function () {
  var $btn = $(".btn");
  var $inp = $(".form-control");
  var $list = $(".list-group");

  $btn.click(function () {
    var $val = $inp.val();
    $inp.val("");
    $list.append(`<li>${$val} <button class="btn-close">x</button> </li>`);
  });

//   $(".btn-close").click(function () {
//     alert("asdasd");
//   });
  
});
