# jQuery Mobile Initialization
$("/html") {
  # Important: scripts are backwards so they are in the proper order
  $("./head") {
    remove("//script[contains(@src, 'jquery')]")
    insert_top("script", src: asset("javascript/jquery.mobile.subpage.js"))
    insert_top("link", rel: "stylesheet", href: asset("stylesheets/jquery.mobile.iscrollview-pull.css"))
    insert_top("link", rel: "stylesheet", href: asset("stylesheets/jquery.mobile.iscrollview.css"))
    insert_top("link", rel: "stylesheet", href: "http://code.jquery.com/mobile/1.3.1/jquery.mobile.structure-1.3.1.css")

    insert_top("script", src: asset("javascript/jquery.mobile.iscrollview.js"))
    insert_top("script", src: asset("javascript/iscroll.js"))
    insert_top("script", src: asset("javascript/jquery.uranium.js"))
    insert_top("script", src: "http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js")
    insert_top("script", src: asset("javascript/jqm-custom-config.js"))
    insert_top("script", src: "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
  }
  
  # $("body") {
  #   attribute("data-role", "page")
  # }

  # Web-App Initialization
  # Move your content into this scaffold in the appropriate places 
  # $("body") {
  #   insert("div", data-role: "page") {
  #     insert("div", data-role: "header")
  #     insert("div", data-role: "content")
  #     insert("div", data-role: "footer")
  #   }

    # Uranium Handler
    # insert("script", data-mw_keep: "true") {
    #   text() {
    #     set("(function() { $(document).live('pageshow', function(event, ui) { Ur.setup(); }); $(document).ready(function() { Ur.setup(); }); })();")
    #   }
    # }
  # }

  $("//a[not(@data-transition)]") {
    attribute("data-transition", "slide")
  }

  # # Move in Content
  # $("/html/body") {
  #   $(".//div[@id='Container']") {
  #     attribute("data-role", "content")
  #     # Move the container to after the header
  #     move_to("../div[@id='_header']", "after")
  #   }
  # }

  # Use data-ajax attribute to prevent node links from being AJAXified. 
  # attribute("data-ajax", "false")

  # Remove jQuery Mobile Default Styles
  # # remove default jqm padding on the content
  jqm.content() {
    attribute("style", "padding: 0px")
  }

  # # don't let jqm apply default css for all nodes
  # $("/html/body//*[not(@data-role)]") {
  #   attribute("data-role", "none")
  # }

  # Move scripts to bottom of the body
  # because the HEAD doesn't get loaded everytime when using JQM
  # so if you want your scripts imported they need to be in the body

  # not sure this will work... may need to move it inside your data-role="page"
  $("/html/body/div[@data-role][1]") {  
    $("//script") {
      move_to("/html/body")
    }
  }
}