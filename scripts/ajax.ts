# Ajax specific handling if necessary
$("/html/body") {
  # Remove categories page for AJAXed content
  remove("./div[@id='categories']")

  # Init jQuery Uranium widgets on homepage (may want to match path for these)
  $$("#home") {
    $$("[data-role='content']") {
      insert_top("script", "$(document).ajaxComplete(function() { 
                              $('body').Uranium('lateInit');
                            });")
      insert_top("script", src: asset("javascript/jquery.uranium.js"))
    }
  }
}