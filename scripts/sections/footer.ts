# Footer 
$("/html/body") {
  $(".//div[@id='_header']") {
    # JQM Footer
    # Inject footer after the header, then container will later be injected after the header as well.
    template("_footer", "_footer", "after") {
      move_here("/html/body/div[@id='Footer']")

      $$("._shop") {
        insert("a") {
          attributes(data-role:"button", href:"http://"+$host+"/")
          # Prefetching the home page
          # Can't prefetch the home page because then there is no event for
          # reloading the carouse
          # attribute("data-prefetch", "data-prefetch")
          insert("div", class:"sprites-shopOff")
          insert("div", "Shop", class:"title")
        }
      }

      $$("._cart") {
        move_here("/html/body//li[@class='CartLink']") {
          $$("a") {
            text("")
            attribute("data-role", "button")
            # Prefetching the cart page
            # attribute("data-prefetch", "data-prefetch")
            insert("div", class:"sprites-cartOff")
            insert("div", "Cart", class:"title")
          }
        }
      }

      $$("._scan") {
        insert("a") {
          attributes(data-role:"button", href:"javascript:void(0);")
          attribute("onclick", "ScanditSDK_Scan()")
          insert("div", class:"sprites-scanOff")
          insert("div", "Scan", class:"title")
        }
        # Removing from the web app
        match($is_app, "false") {
          remove()  
        }
      }

      $$("._more") {
        move_here("/html/body//div[@id='TopMenu']//li[@class='First']") {
          $$("a") {
            text("")
            attributes(data-role:"button", class:"_cross_domain", data-ajax:"true", data-transition:"fade", href:"/?page=settings")
            insert("div", class:"sprites-moreOff")
            insert("div", "More", class:"title")
          }
        }
        # Removing from the web app
        match($is_app, "false") {
          remove()  
        }
      }
    }
  }
}
