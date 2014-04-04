$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 100) {
      $('.apos-admin-bar').addClass('collapsed');
    } else {
      $('.apos-admin-bar').removeClass('collapsed');
    }
  });
});