
$(function() {
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.back-to-top').fadeIn();
      $('.live-chat').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
      $('.live-chat').fadeOut();
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({
      scrollTop:0
    },100)
  });
})

var date = new Date();
var year = $('.date').html(date.getFullYear())
