# Footer 
$("./body") {
  $(".//div[@id='_header']") {
    # JQM Footer
    # Inject footer after the header, then container will later be injected after the header as well.
    template("_footer", "footer", "after") {


      # If you are launching a production site for free, you must leave this information.
      # placeholder(".//div[@class='_info']", "Mobile Site Powered By Moovweb")
    }
  }
}
