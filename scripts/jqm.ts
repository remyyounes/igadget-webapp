# jQuery Mobile Initialization
$("/html") {
  # Important: scripts are backwards so they are in the proper order
  # but also at the top above previously existing scripts.
  $("head") {
    remove("//script[contains(@src, 'jquery')]")
    insert_top("script", src: asset("javascript/jquery.mobile.subpage.js"))
    insert_top("link", rel: "stylesheet", href: "http://code.jquery.com/mobile/1.3.1/jquery.mobile.structure-1.3.1.min.css")
    insert_top("script", src: asset("javascript/jquery.uranium.js"))
    insert_top("script", src: asset("javascript/jquery.mobile-1.3.1.min.js"))
    insert_top("script", src: asset("javascript/jqm-custom-config.js"))
    insert_top("script", src: "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
  }

  # Set default transitions to slide
  $("//a[not(@data-transition)]") {
    attribute("data-transition", "slide")
  }

  # Remove default styles
  jqm.content() {
    attribute("style", "padding: 0px")
  }
}