# Homepage Transformation
$("./body") {
  # Homepage
  insert_top("div", id:"home", class:"_home", data-role:"page") {
    move_here("/html/body//div[@id='_header']")
    insert("div", class:"_content", data-role:"content", data-iscroll:"data-iscroll") {
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
          $$(".BlockContent") {
            attribute("data-ur-set", "carousel")
            attribute("data-role", "none")
            attribute("data-ur-carousel-component", "view_container")
            attribute("data-ur-id", fetch("@id"))
            attribute("data-ur-fill", "1")
            attribute("data-ur-clones", "0")
            attribute("data-ur-vertical-scroll", "disabled")
            # insert("span", "-- count --",data-ur-carousel-component:"count")
            insert_top("div", data-ur-carousel-component:"button", data-ur-carousel-button-type:"prev") {
              attribute("data-role", "none")
            }
            insert_top("div", data-ur-carousel-component:"button", data-ur-carousel-button-type:"next") {
              attribute("data-role", "none")
            }
            $$(".ProductList") {
              attribute("data-ur-carousel-component", "scroll_container")
              attribute("data-role", "none")
              $$("li") {
                attribute("data-ur-carousel-component", "item")
                attribute("alt", index())
                attribute("data-role", "none")
                $$(".ProductImage") {
                  wrap("div", class:"_flex_box") {
                    move_here("../div[@class='ProductDetails']")
                  }
                  add_class("_flex_box_item_1")
                  $(".//*") {
                    attribute("data-role", "none")
                  }
                }
                $$(".ProductDetails") {
                  wrap("div", class:"_flex_box_item_1") {
                    move_here("../../div[@class='ProductPriceRating'] |
                              ../../div[@class='ProductActionAdd']")
                  }
                  $(".//*") {
                    attribute("data-role", "none")
                  }
                }
              }
            }
            insert("div", data-ur-carousel-component:"dots") {
              attribute("data-role", "none")
            }
            # $(".//*") {
            #   attribute("data-role", "none")
            # }
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
  remove("/html/body//div[@id='SideCartContents']")
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
  remove("/html/body//img[@alt='RSS']")
}
