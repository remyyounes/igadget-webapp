# Since JQM errors out when AJAXing in content that returns a 302 redirect,
# the workaround is to change it from 302 to 200 and serve up a page
# that has a JQM changePage() call to the "Location" header of the 302.
# Boom.
insert("html") {
  insert("head")
  insert("body") {
    insert("div", data-role:"page", id:"redirect") {
      insert("div", data-role:"header")
      insert("div", data-role:"content") {
        # Rewriting location logic
        # Don't forget to override the $status code in response_main.ts      

        # problem: we need to check if it's cors or not, if it is we can't ajax we have to do a full page reload, if it's not we can ajax...
        # solution: rewrite $location and compare it to $host, use $secure to see if it's true or false and compare to $location scheme().
        # alternative: could also use $location before rewritten and compare to $source_host depending on when you want to do the comparison.

        # what if it does a full page reload into a redirect?
        # then we don't have JQM initialized on the page any more...

        $cors = "true"

        inner() {
          $new_location = url($location) {
            # Check Scheme
            match(scheme()) {
              with("https") {
                match($secure, "true") {
                  $cors = "false"
                }
              }
              else() {
                match($secure, "false") {
                  $cors = "false"
                }
              }
            }
            $new_host = host()
          }
        }

        # Check Domain
        $new_location {
          rewrite_link()
        }
        match($new_host) {
          with($host) {
            $cors = "false"
          }
          else() {

          }
        }

        log("302 Location: " + $new_location)

        # TODO:
        # update JS history so back button works properly
        # has to be an AJAX 302 also, check for $x_requested_with header
        # $isAjax global variable using above header
      
        match($cors) {
          # Full page reload
          with("true") {
            insert("script", "window.location.href='"+$new_location+"';", type:"text/javascript")
            log("FULL PAGE RELOAD")
          }
          # AJAX
          else() {
            insert("script", "$.mobile.changePage('"+$new_location+"');", type:"text/javascript")
            log("AJAX PAGE")
          }
        }
      }
      insert("div", data-role:"footer")
    }
  }
}