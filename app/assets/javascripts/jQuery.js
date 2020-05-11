$(function() {
  var $btn = $(".about_btn")
  $btn.fadeIn(3000);
  $btn.click(function() {
    $('.modal-wrapper').fadeIn();
  });
  $('.fa-times').click(function() {
    $('.modal-wrapper').fadeOut();
  });
});