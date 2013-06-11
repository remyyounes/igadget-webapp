# Since JQM errors out when AJAXing in content that returns a 302 redirect,
# the workaround is to change it from 302 to 200 and serve up a page
# that has a JQM changePage() call to the "Location" header of the 302.
# Boom.
insert("html") {
  insert("head")
  insert("body") {
    insert("div", "", data-role:"page", id:"redirect") {
      insert("div", data-role:"content") {
        # Rewriting location logic
        # Don't forget to override the $status code in response_main.ts      
        # $new_location = rewrite_insecure($location)
        inner() {
          $new_location = url($new_location) {
            host($host)
          }
        }
        log("NEW LOCATION: " + $new_location)
        # update JS history so back button works properly
        # has to be an AJAX 302 also, check for $x_requested_with header
        # $isAjax global variable using above header
        insert("script", "$.mobile.changePage('"+$new_location+"');")
        export("Location", $new_location)
      }
    }
  }
}

# set("TESTING HARD CODED SET")