$(function() {

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $("p#one").css("transform","translateX(" +  (scroll *(1))  + "px)");
    $("p#two").css("transform","translateX(" +  (scroll *(-7/10))  + "px)");
    $("p#three").css("transform","translateX(" +  (scroll *(-7/10))  + "px)");
    $("p#four").css("transform","translateX(" +  (scroll *(8/10))  + "px)");
    $("p#five").css("transform","translateX(" +  (scroll *(1))  + "px)");
  });

});
