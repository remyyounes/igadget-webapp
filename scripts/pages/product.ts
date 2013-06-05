$("body") {
  # Transform product page html
  # data-role="page"
      # data-role="header"
      # data-role="content"
      # data-role="footer"
  insert("div", data-role:"page", id:"product") {
    move_here("/html/body//div[@id='_header']")
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        # Make product images into jqm buttons
        $(".//div[contains(@class, 'ProductImage')]") {
          $(".//a") {
            attribute("data-role", "button")
          }
        }
        # Product page transformations go here

        # Remove unnecessary page elements

        # Move elements into proper structure

        # Add necessary attributes and classes to elements

      }
    }
    move_here("/html/body//div[@id='_footer']") {
      $$("._shop") {
        add_class("active")
      }
    }
  }

  # Remove persistent content that would be duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='LayoutColumn1']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}