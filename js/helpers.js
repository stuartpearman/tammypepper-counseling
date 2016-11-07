function stickyFooter () {
  var bodyHeight = $('body').height();
  var windowHeight = $(window).height();
  var footer = $('footer');
  if (footer.hasClass('sticky-footer')){
    bodyHeight += footer.height();
  }
  if (bodyHeight < windowHeight) {
    footer.addClass('sticky-footer');
  } else if (footer.hasClass('sticky-footer')) {
    footer.removeClass('sticky-footer');
  }
};


stickyFooter();

$(window).resize(function(){
  stickyFooter();
});