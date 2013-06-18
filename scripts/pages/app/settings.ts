$("html") {
  $("body") {
    insert_top("div", data-role:"page", id:"settings") {
      move_here("/html/body/div[@id='_header']") {

      }
      insert("div", class:"_content", data-role:"content") {
        move_here("/html/body//div[@id='Container']") {
          # Remove page not found content
          inner("")
          insert("div", class:"_notifications") {
            insert("label", "Notifications", for:"flip-1")
            insert("select", name:"flip-1", id:"flip-1", data-role:"slider") {
              insert("option", "Off", value:"Off")
              insert("option", "On", value:"On")
            }
          }
          insert("div", class:"_locations") {
            insert("label", "Locations", for:"flip-2")
            insert("select", name:"flip-2", id:"flip-2", data-role:"slider") {
              insert("option", "Off", value:"Off")
              insert("option", "On", value:"On")
            }
          }
        }
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