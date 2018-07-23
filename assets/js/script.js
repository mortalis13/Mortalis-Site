
$(function(){
  
  $("#contacts-menu a").click(function(){
    $(this).blur()
  });
  
  $('[data-toggle="tooltip"]').tooltip();
  
  $('#projects .images a').hover(
    function(){
      $(this).find('img').css({'opacity': 0.8});
    },
    function(){
      $(this).find('img').css({'opacity': 1});
    }
  );
  
  $('#nav').affix({
    offset: {
      // top: $('#nav').offset().top
      top: $('#projects').offset().top
      // bottom: $('footer').outerHeight(true) + $('.application').outerHeight(true) + 40
    }
  });
  
  $('#projects-nav').css({top: $('#projects').offset().top});
  
  $("#toTop").click(function(){
    // $("html, body").animate({ scrollTop: 0 }, "slow");
    $("html, body").scrollTop(0);
    return false;
  });
  
  // ------------------------------------------------------
  
  if (window.opera && window.opera.version() < 12) {
    document.documentElement.className += ' opera11';
  }
  
  if (!!navigator.userAgent.match(/Trident.+rv.+11/)) {
    document.documentElement.className += ' ie11';
  }
  
})
