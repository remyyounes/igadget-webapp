# jQuery Mobile Initialization
$("/html") {
  $("./head") {
    remove("//script[contains(@src, 'jquery')]")
    $("./script[1]") {
      insert_before("script", src: "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
      insert_before("script", src: asset("javascript/jqm-custom-config.js"))
      insert_before("script", src: "http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js")
    }
    insert_before("link", rel: "stylesheet", href: "http://code.jquery.com/mobile/1.3.1/jquery.mobile.structure-1.3.1.css")
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

  # jqm.set_all_transitions("slide")

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
  $("/html/body//*[not(@data-role)]") {
    attribute("data-role", "none")
  }

  # Move scripts to bottom of the body
  # because the HEAD doesn't get loaded everytime when using JQM
  # so if you want your scripts imported they need to be in the body
  $("/html//script") {
    move_to("/html/body", "bottom")
  }
}