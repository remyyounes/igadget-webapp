$("/html/body") {
  insert_top("div", data-role:"page", id:"settings") {
    move_here("/html/body/div[@id='_header']")
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        # Remove page not found content
        inner("")
        insert("h1", "Settings", class:"_h1")
        insert("hr")
        insert("div", class:"_notifications") {
          insert("label", "Push Notifications", for:"notifications")
          insert("p", "Receive push notifications on your device about packages and online deals.")
          insert("select", name:"notifications", id:"notifications", data-role:"slider") {
            insert("option", "Off", value:"Off")
            insert("option", "On", value:"On")
          }
        }
        insert("hr")
        insert("div", class:"_locations") {
          insert("label", "Share Location", for:"location")
          insert("p", "Enable geolocation to locate the nearest stores in your area.")
          insert("select", name:"location", id:"location", data-role:"slider") {
            insert("option", "Off", value:"Off")
            insert("option", "On", value:"On")
          }
        }
        insert("script", "controlNotifications();", type:"text/javascript")
        insert("script", "controlLocation();", type:"text/javascript")
        # need onload event listener which calls cordova to check
      }
      #insert("script", "
      #  $('#notifications').change(function(){alert('hi')})
      #  ", type:"text/javascript")
    }
    move_here("/html/body/div[@id='_footer']") {
      $$("._shop, ._scan, ._cart") {
        remove_class("active")
      }
      $$("._more") {
        add_class("active")
      }
    }
  }
  $("//a[not(@data-transition)]") {
    attribute("data-transition", "slide")
  }
  jqm.content() {
    attribute("style", "padding: 0px")
  }

  # Remove header content we don't want duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='SideNewProducts']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}