# Since JQM errors out when AJAXing in content that returns a 302 redirect,
# the workaround is to change it from 302 to 200 and serve up a page
# that has a JQM changePage() call to the "Location" header of the 302.
insert("html") {
  insert("head")
  insert("body") {
    insert("div", data-role:"page", id:"redirect") {
      insert("div", data-role:"content") {
        # Rewriting location logic
        # Don't forget to override the $status code in response_main.ts

        # Check Scheme
        $cors = "true"
        inner() {
          $new_location = url($location) {
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
        match($new_host, $host) {
          $cors = "false"
        }
        log("302 Location: " + $new_location)
        # Rewrite new location
        $new_location {
          rewrite_link()
        }
        log("302 Location: " + $new_location)
      
        # Some mobile optimize transformations similar to html.ts that need to be rerun due to no HTML tag in 302s.
        $("/html") {        
          clean_mobile_meta_tags()
          add_assets()
          @import "app.ts"
        }

        # TODO:
        # update JS history so back button works properly
        # has to be an AJAX 302 also, check for $x_requested_with header
        # $is_ajax global variable using above header

        match($cors) {
          # Full page reload
          with("true") {
            log("FULL PAGE RELOAD")

            # Started testing out managing back button states
            # insert("script", "
            #   window.history.replaceState({}, 'redirect', '/categories');"
            #     , type:"text/javascript")

            # JQM history for back button
            # insert("script", "$.mobile.urlHistory.add('http://mlocal.igadgetcommerce.com/categories');"
            #     , type:"text/javascript")

            insert("script", "window.location.href='"+$new_location+"';", type:"text/javascript")
          }

          # AJAX
          else() {
            log("AJAX PAGE")

            # Started testing out managing back button states
            # insert("script", "
            #   window.history.replaceState({}, 'redirect', 'http://mlocal.igadgetcommerce.com');"
            #     , type:"text/javascript")
            # insert("script", "$.mobile.urlHistory.add('http://mlocal.igadgetcommerce.com');"
            #     , type:"text/javascript")

            # Need to change page either on document.ready() for full page reload or just once it's AJAXed in...
            insert("script", "$.mobile.changePage('"+$new_location+"', {reverse: false, changeHash: false});", type:"text/javascript")
            insert("script", "$(document).ready(function(){$.mobile.changePage('"+$new_location+"', {reverse: false, changeHash: false})});", type:"text/javascript")
          }
        }
      }
    }
  }
}