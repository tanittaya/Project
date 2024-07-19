$(function() {
    var text = $(".text");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
  
        if (scroll >= 200) {
            text.removeClass("hidden");
        } else {
            text.addClass("hidden");
        }
    });
<<<<<<< HEAD
  });
  $(window).on('load',function(){
    //$('#bg').addClass('loaded');
=======
>>>>>>> 77856d6dc2d9980bf6fb4e69e2b9f2e3ef9f8807
  });