# Footer 
$("./body") {
  $(".//div[@id='_header']") {
    # JQM Footer
    template("_footer", "footer", "after") {
      placeholder(".//div[@class='_copyright']", "Copyright © 2013")

      # If you are launching a production site for free, you must leave this information.
      placeholder(".//div[@class='_info']", "Mobile Site Powered By Moovweb")
    }
  }
}
