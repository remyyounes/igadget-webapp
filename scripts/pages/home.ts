# Homepage Transformation
$("./body") {
  # Homepage
  insert_top("div", id:"home", class:"_home", data-role:"page") {
    move_here("/html/body//div[@id='_header']")
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        # Make product images into jqm buttons
        $(".//div[contains(@class, 'ProductImage')]") {
          $(".//a") {
            attribute("data-role", "button")
          }
        }
      }
    }
    move_here("/html/body//div[@id='_footer']")
  }

  # Category Page
  insert("div", data-role:"page", id:"categories") { 
    attribute("data-add-back-btn", "true")
    move_here("/html/body//div[@id='Wrapper']/div[@id='LayoutColumn1']") {

      move_to("/html/body/div[@data-id='categories']")
      copy_here("/html/body//div[@id='_header']") {
        move_to("..", "top")
        $$("._logo") {
          remove()
        }
      }

      insert("div", data-role:"content") {
        move_here("../div[contains(@class, 'Block')]")
      }
      copy_here("/html/body//div[@id='_footer']") {
        $$("._shop") {
          add_class("active")
        }
      }
    }
  }

  # Remove unwanted content
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}
