$("body") {
  # Transform product page html
  # Must be insert_top because JQM looks for first legitimate page to set as active...
  insert_top("div", data-role:"page", id:"shop_by") {
    move_here("/html/body/div[@id='_header']") {
      $$("._logo") {
        add_class("_back")
        $$(".sprites-logo") {
          name("a")
          attributes(data-rel:"back", data-role:"button")
          insert("span", "BACK", class:"_back_text")
        }
      }
    }
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {

      }
    }
    move_here("/html/body/div[@id='_footer']")
  }

  # Remove header content we don't want duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='SideNewProducts']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}