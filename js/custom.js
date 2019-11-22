$(document).ready(function() {
 
 $(".slider-1").owlCarousel({
 
      autoPlay: false, //Set AutoPlay to 3 seconds
      navigation : true,
    navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
 
      items : 8,
      itemsDesktop : [1199,8],
      itemsDesktopSmall : [991,5],
      itemsTablet : [767,4],
      itemsMobile : [602,3],

 
  });

});