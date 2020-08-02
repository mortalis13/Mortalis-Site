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
  

  // ------------------------------------------------------
  
  if (window.opera && window.opera.version() < 12) {
    document.documentElement.className += ' opera11';
  }
  
  if (!!navigator.userAgent.match(/Trident.+rv.+11/)) {
    document.documentElement.className += ' ie11';
  }
  
  
  // ----- toTop config
  var settings = {
    text: '',
    containerID: 'go_to_top',
    min: 200,
    inDelay: 600,
    outDelay: 400,
    scrollSpeed: 300,
    easingType: 'swing'
  };
  
  var toTopHidden = true;
  var toTop = $('#' + settings.containerID);
  
  toTop.click(function(e) {
    e.preventDefault();
    // -- fix in chrome
    // $.scrollTo(0, settings.scrollSpeed, {easing: settings.easingType});
    // $.scrollTo(0);
    $("html, body").scrollTop(0);
    this.blur();
  });
  
  $(window).scroll(function() {
    var sd = $(this).scrollTop();
    if (sd > settings.min && toTopHidden) {
      toTop.addClass('show');
      toTopHidden = false;
    }
    else if(sd <= settings.min && ! toTopHidden) {
      toTop.removeClass('show');
      toTopHidden = true;
    }
  });
})
