# $("head") {
#   remove()
# }
$("body") {
  # Transform product page html
  log("Transform product page here.")
  insert("div", data-role:"page", id:"product") {
    move_here("/html/body//div[@id='_header']")
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        $(".//div[contains(@class, 'ProductImage')]") {
          $(".//a") {
            attribute("data-role", "button")
          }
        }
      }
    }
    move_here("/html/body//div[@id='_footer']")
  }

  # Remove header content we don't want duplicated
  remove("/html/body//div[@id='Wrapper']/div[@id='LayoutColumn1']")

  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='LayoutColumn1']")
}