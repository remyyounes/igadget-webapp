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
          insert("div", class:"sprites-shopOff")
          insert("div", "Shop", class:"title")
        }
      }

      $$("._cart") {
        move_here("/html/body//li[@class='CartLink']") {
          $$("a") {
            text("")
            attribute("data-role", "button")
            insert("div", class:"sprites-cartOff")
            insert("div", "Cart", class:"title")
          }
        }
      }

      $$("._scan") {
        insert("a") {
          attributes(data-role:"button", href:"javascript:void(0);")
          attribute("onclick", "scan_function();")
          insert("div", class:"sprites-scanOff")
          insert("div", "Scan", class:"title")
        }
      }

      $$("._more") {
        move_here("/html/body//div[@id='TopMenu']//li[@class='First']") {
          $$("a") {
            text("")
            attributes(data-role:"button", class:"_cross_domain", data-ajax:"true")
            # Rewriting URL to https and to the final redirect location...
            # Seems super hack and difficult to maintain.
            # This also breaks pages
            # $url = fetch("@href")
            # inner() {            
            #   $new_url = url($url) {
            #     scheme("https")
            #     path("/login.php")
            #     param("from", "account.php")
            #   }
            # }
            # log($new_url)
            # attribute("href", $new_url)
            insert("div", class:"sprites-moreOff")
            insert("div", "More", class:"title")
          }
        }
      }

      # If you are launching a production site for free, you must leave this information.
      # placeholder(".//div[@class='_info']", "Mobile Site Powered By Moovweb")
    }
  }
}
