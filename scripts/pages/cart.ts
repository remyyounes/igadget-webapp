$("body") {
  # Transform product page html
  insert("div", data-role:"page", id:"cart") {
    move_here("/html/body//div[@id='_header']")
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        # Make product images into jqm buttons
        $(".//div[contains(@class, 'ProductImage')]") {
          $(".//a") {
            attribute("data-role", "button")
          }
        }
        $$("#CartHeader") {
          add_class("_bar_header")
        }
        $$("#CartContent") {
          move_here("../../div[@id='LayoutColumn3']")
          table_dump(".//table")
          $$(".mw_was_thead") {
            add_class("labels")
            remove()
          }
          $$(".mw_was_tfoot") {
            add_class("totals")
            move_to("..", "bottom")
          }
          $$(".mw_was_tbody") {
            add_class("cart_items")
            $$("> div") {
              add_class("_flex_box")
              $$(".CartThumb") {
                add_class("_flex_box_item_1")
              }
              $$(".ProductName") {
                wrap("div", class:"_flex_box_item_3") {
                  move_here("../div[contains(@class, 'CartItemQuantity')]") {
                    $(".//*") {
                      attribute("data-role", "none")
                    }
                    $$("a") {
                      remove()
                    }
                  }
                  move_here("../div[contains(@class, 'CartItemIndividualPrice')]")
                }
              }
              $$(".CartItemTotalPrice") {
                remove()
              }
            }
          }
        }

        # Remove content we don't need
        $$("#CartBreadcrumb, #SideProductRecentlyViewed, #SideTopSellers, #SuggestiveCartContent") {
          remove()
        }
      }
    }
    move_here("/html/body//div[@id='_footer']") {
      $$("._cart") {
        add_class("active")
      }
    }
  }

  # Remove header content we don't want duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='LayoutColumn1']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}