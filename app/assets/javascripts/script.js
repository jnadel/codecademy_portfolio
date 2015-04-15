$(document).ready(function () {

  // $(function() {
  //     $('.banner').unslider( {
  //       speed: 1000,               //  The speed to animate each slide (in milliseconds)
  // 	    delay: 1000,              //  The delay between slide animations (in milliseconds)
  // 	    complete: function() {},  //  A function that gets called after every slide animation
  // 	    keys: true,               //  Enable keyboard (left, right) arrow shortcuts
  // 	    dots: true,               //  Display dot navigation
  // 	    fluid: false              //  Support responsive design. May break non-responsive designs
  //     });
  // });


});




// $(document).ready(function() {
//
//   // Activate carousel
//   $("#myCarousel").carousel();
//
//   // Enable carousel control
// $(".left").click(function(){
//   	$("#myCarousel").carousel('prev');
//   });
//   $(".right").click(function(){
//   	$("#myCarousel").carousel('next');
//   });
//
//   // Enable carousel indicators
//   $(".slide-one").click(function(){
//   	$("#myCarousel").carousel(0);
//   });
//   $(".slide-two").click(function(){
//   	$("#myCarousel").carousel(1);
//   });
//   $(".slide-three").click(function(){
//   	$("#myCarousel").carousel(2);
//   });
// });


$(window).on('page:change', function(){
  // Activate carousel
  $("#myCarousel").carousel();

  // Enable carousel control
$(".left").click(function(){
    $("#myCarousel").carousel('prev');
  });
  $(".right").click(function(){
    $("#myCarousel").carousel('next');
  });

  // Enable carousel indicators
  $(".slide-one").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".slide-two").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".slide-three").click(function(){
    $("#myCarousel").carousel(2);
  });
});
