# Footer 
$("./body") {
  $(".//div[@id='_header']") {
    # JQM Footer
    # Inject footer after the header, then container will later be injected after the header as well.
    template("_footer", "_footer", "after") {
      move_here("/html/body/div[@id='Footer']")

      $$("._shop") {
        insert("a") {
          attributes(data-role:"button", href:"#categories")
          text("Shop")
        }
      }

      $$("._cart") {
        move_here("/html/body//li[@class='CartLink']") {
          $$("a") {
            attribute("data-role", "button")
            text("Cart")
          }
        }
      }

      $$("._scan") {
        insert("a") {
          attributes(data-role:"button", href:"javascript:void()")
          attribute("onclick", "scan_function()")
          text("Scan")
        }
      }

      $$("._more") {
        move_here("/html/body//div[@id='TopMenu']//li[@class='First']") {
          # attribute("style", "float:left;")
          $$("a") {
            attributes(data-role:"button", data-ajax:"true")
            text("More")
          }
        }
      }

      # If you are launching a production site for free, you must leave this information.
      # placeholder(".//div[@class='_info']", "Mobile Site Powered By Moovweb")
    }
  }
}
