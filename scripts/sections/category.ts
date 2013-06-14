$("/html/body") {
  # Category Page
  insert("div", data-role:"page", id:"categories", data-add-back-btn: "false") { 
    move_here("/html/body//div[@id='Wrapper']/div[@id='LayoutColumn1']") {
      copy_here("/html/body/div[@id='_header']") {
        move_to("..", "top")
        $$("._logo") {
          add_class("_back")
          $$(".sprites-logo") {
            name("a")
            attributes(data-rel:"back", data-role:"button")
            insert("span", "BACK", class:"_back_text")
          }
        }
      }
      insert("div", data-role:"content") {
        # adding iscroll
        attribute("data-iscroll", "data-iscroll")
        move_here("../div[contains(@class, 'Block')]") {
          # Hide unwanted elements
          $$("h2, #subscribe_form") {
            add_class("hidden")
          }
          # Style categories
          $$("li") {
            add_class("_bar_white1")
          }
        }
      }
      copy_here("/html/body/div[@id='_footer']") {
        $$("._shop") {
          add_class("active")
        }
      }
    }
  }
}