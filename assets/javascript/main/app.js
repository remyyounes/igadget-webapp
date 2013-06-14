// Any JavaScript in the main/ folder will be compiled into main.js after the 
// input files specified in bundles.yml.

// Caching pages in the DOM
$.mobile.page.prototype.options.domCache = true;

// Remove address bar when app is loaded in phone
// When ready...
window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
});

console.log("Running app.js...")