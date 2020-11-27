$(function(){
  $("#contacts-menu a").click(function(){ $(this).blur() });
  $('[data-toggle="tooltip"]').tooltip();
  
  // $(".prof").html("[" + $(window).outerWidth() + ", " + $(window).outerHeight() + "]");
  
  // ----- browsers
  if (window.opera && window.opera.version() < 12) {
    document.documentElement.className += ' opera11';
  }
  if (!!navigator.userAgent.match(/Trident.+rv.+11/)) {
    document.documentElement.className += ' ie11';
  }
  
  // ----- affix
  $('#projects-nav').affix({offset: {top: $('#projects').offset().top-30}})
  
  // ----- toTop config
  var settings = {
    text: '',
    containerID: 'go-to-top',
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