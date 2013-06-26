$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    // Enable momentum scrolling
    touchOverflowEnabled: true,
    touchOverflow: true,
    // Enable CORS
    allowCrossDomainPages: true
  });
});

// Enable CORS
$.support.cors = true;
$.support.touchOverflow = true;

// Other Options
// ajaxEnabled: false
