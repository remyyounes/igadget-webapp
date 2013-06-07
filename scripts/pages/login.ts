@import "home.ts"

$("body") {
  # Transform product page html
  insert("div", data-role:"page", id:"login") {
    copy_here("/html/body//div[@id='_header']")
    insert("div", class:"_content", data-role:"content") {
      copy_here("/html/body//div[@id='Container']") {
        # Make product images into jqm buttons
        $(".//div[contains(@class, 'ProductImage')]") {
          $(".//a") {
            attribute("data-role", "button")
          }
        }
      }
    }
    copy_here("/html/body//div[@id='_footer']") {
      $$("._more") {
        add_class("active")
      }
    }
  }
  insert("script", "window.location.hash = 'login';")
}


# Remove header content we don't want duplicated
remove("/html/body//div[@id='AjaxLoading']")
remove("/html/body//div[@id='TopMenu']")
remove("/html/body//div[@id='Menu']")
remove("/html/body//div[@id='Wrapper']/div[@id='LayoutColumn1']")
remove("/html/body//div[@id='LayoutColumn1']")
remove("/html/body//div[@id='Header']")
remove("/html/body//div[@id='Footer']")