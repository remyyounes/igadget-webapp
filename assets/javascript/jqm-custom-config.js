$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    // ajaxEnabled: false
  });
});

// Caching pages in the DOM
$.mobile.page.prototype.options.domCache = true;
