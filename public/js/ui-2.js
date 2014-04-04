$(function(){
  setTimeout(function(){
    $(window).on('scroll', function(){
      $(window).off();
      setTimeout(function(){
        $('.apos-admin-bar').addClass('collapsed');
      }, 1000); 
    });
  }, 1000);

  $('.apos-logo-tiny').on('click', function(){ 
    $('.apos-admin-bar').css('overflow', 'hidden');  
    $('.apos-admin-bar').toggleClass('collapsed');  
  });

  $('.apos-admin-bar').on('transitionend', function(){
    if(!$(this).hasClass('collapsed')) { $(this).css('overflow', 'visible'); }
  });
});