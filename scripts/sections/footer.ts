# Footer 
$("/html/body") {
  $(".//div[@id='_header']") {
    # JQM Footer
    # Inject footer after the header, then container will later be injected after the header as well.
    template("_footer", "_footer", "after") {
      add_class("mobile_footer")
      $$("._footer") {
        inner("")
        move_here("/html/body/div[@id='Footer']") {
          remove(".//a")
          unwrap()
        }
        insert_after("p", "Mobile Site powered by Moovweb") 
      }
    }
  }
}
