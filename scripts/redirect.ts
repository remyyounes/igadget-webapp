# Since JQM errors out when AJAXing in content that returns a 302 redirect,
# the workaround is to change it from 302 to 200 and serve up a page
# that has a JQM changePage() call to the "Location" header of the 302.
# Boom.
insert("html") {
  insert("head")
  insert("body") {
    insert("div", data-role:"page", id:"redirect") {
      # insert("div", data-role:"header")
      insert("div", data-role:"content") {
        # Rewriting location logic
        # Don't forget to override the $status code in response_main.ts      

        # problem: we need to check if it's cors or not, if it is we can't ajax we have to do a full page reload, if it's not we can ajax...
        # solution: rewrite $location and compare it to $host, use $secure to see if it's true or false and compare to $location scheme().
        # alternative: could also use $location before rewritten and compare to $source_host depending on when you want to do the comparison.

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
      
        $("/html") {        
          # Some mobile optimize transformations similar to html.ts
          rewrite_links()
          absolutize_srcs()
          # Add the mobile meta tags
          clean_mobile_meta_tags()
          # Needed to begin mobilizing
          remove_all_styles()
          remove_html_comments()
          add_assets()
          @import "app.ts"
        }

        match($cors) {
          # Full page reload
          with("true") {
            log("FULL PAGE RELOAD")
            insert("script", "window.location.href='"+$new_location+"';", type:"text/javascript")
          }
          # AJAX
          else() {
            # Need to change page either on document.ready() for full page reload or just once it's AJAXed in...
            log("AJAX PAGE")
            $("/html/head") {
              remove("//script[contains(@src, 'jquery')]")
              insert_top("script", src: asset("javascript/jquery.mobile.subpage.js"))
              insert_top("link", rel: "stylesheet", href: "http://code.jquery.com/mobile/1.3.1/jquery.mobile.structure-1.3.1.css")
              insert_top("script", src: asset("javascript/jquery.uranium.js"))
              insert_top("script", src: "http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js")
              insert_top("script", src: asset("javascript/jqm-custom-config.js"))
              insert_top("script", src: "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
            }
          }
          insert("script", "$.mobile.changePage('"+$new_location+"');", type:"text/javascript")
          insert("script", "$(document).ready(function(){$.mobile.changePage('"+$new_location+"')});", type:"text/javascript")
        }
      }
      # insert("div", data-role:"footer")
    }
  }

  $("//a[not(@data-transition)]") {
    attribute("data-transition", "slide")
  }
  jqm.content() {
    attribute("style", "padding: 0px")
  }
}