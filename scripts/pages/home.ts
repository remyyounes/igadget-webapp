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
        # Headers
        $$("h2") {
          wrap_text_children("span", class:"_h2")
        }

        $$("#LayoutColumn2, #LayoutColumn3") {
          $$(".Block") {
            attribute("data-ur-set", "carousel")
            attribute("data-ur-carousel-component", "view_container")
            attribute("data-ur-id", fetch("@id"))
            insert("span", "-- count --",data-ur-carousel-component:"count")
            insert("div", data-ur-carousel-component:"button", data-ur-carousel-button-type:"prev") {
              text("Prev")
            }
            insert("div", data-ur-carousel-component:"button", data-ur-carousel-button-type:"next") {
              text("Next")
            }
            $$(".BlockContent") {
              attribute("data-ur-carousel-component", "scroll_container")
              $$("li") {
                attribute("data-ur-carousel-component", "item")
                attribute("alt", index())
              }
            }
            insert("div", data-ur-carousel-component:"dots")
          }
        }
      }
    }
    move_here("/html/body//div[@id='_footer']") {
      $$("._shop") {
        add_class("active")
      }
    }
  }

  # Category Page
  insert("div", data-role:"page", id:"categories", data-add-back-btn: "false") { 
    move_here("/html/body//div[@id='Wrapper']/div[@id='LayoutColumn1']") {

      move_to("/html/body/div[@data-id='categories']")
      copy_here("/html/body//div[@id='_header']") {
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
