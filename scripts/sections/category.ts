$("/html/body") {
  # Category Page
  # Right now this is a global import but it is inconsistent throughout the site, which means we may have to make it it's own page if we want it to be the same throughout...
  # Right now if you reload on the cart page and then navigate to categories you'll have less of them because they aren't all on the cart page when this transformation occurs.
  insert_top("div", data-role:"page", id:"categories", data-add-back-btn: "false") { 
    move_here("/html/body/div[@id='_header']") {
      move_to("..", "top")
      addBackBtn()
    }
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        move_here("/html/body//div[@id='Wrapper']/div[@id='LayoutColumn1']") {
            # Hide unwanted elements
            $$("h2, #subscribe_form") {
              add_class("hidden")
            }
            # Style categories
            $$("li") {
              add_class("_bar_white1 orange")
            }
        }
        remove(".//div[@id='LayoutColumn2']")
        remove(".//div[@id='LayoutColumn3']")
        remove(".//div[@id='SideNewsletterBox']")
      }
    }
    move_here("/html/body/div[@id='_footer']") {
      $$("._shop") {
        add_class("active")
      }
    }
  }
  # Remove persistent content that would be duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='SideNewProducts']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}