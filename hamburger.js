var tl = 0;
var magnitude = 0.3;
var fixed = $('.navigation');

addEventListener('scroll', function(){
    var top = $(document).scrollTop();
    interp(top);

    var window_offset = fixed.offset().top - $(window).scrollTop();

    if(window_offset < 0){
      $('.navigation').addClass('fixed');
      $('.content').css({'padding-top': '65px'});
    }else if(top < 300){
      $('.navigation').removeClass('fixed');
      $('.content').css({'padding-top': '20px'});
    }
});

function interp(t){
  var x = t-(tl-t);
  $('.header').css({top: x*magnitude});
  $('.header').children().css({bottom: x*magnitude/2});
}

$('img').click(function(){
  $('.menu').removeClass('slideout');
  $('.menu').addClass('slidein');
});

$(document).swipeleft(function(evt){
  $.event.special.swipe.horizontalDistanceThreshold = 15;
  $('.menu').removeClass('slidein');
  $('.menu').addClass('slideout');
})
