$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    // Enable momentum scrolling
    touchOverflowEnabled: true,
    // Enable CORS
    allowCrossDomainPages: true
  });
});

// Enable CORS
$.support.cors = true;

// Other Options
// ajaxEnabled: false
