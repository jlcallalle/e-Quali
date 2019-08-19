$(function () {
  $("#div-eye-passwd").mousedown(function () {
    $("#eye-addon").removeClass("fa-eye-slash").addClass("fa-eye");
    $(".input-password").attr("type", "text");
  }).mouseup(function () {
    $("#eye-addon").removeClass("fa-eye").addClass("fa-eye-slash");
    $(".input-password").attr("type", "password")
  });
});
