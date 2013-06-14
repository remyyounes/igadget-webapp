$("body") {
  # Transform product page html
  # Must be insert_top because JQM looks for first legitimate page to set as active...
  insert_top("div", data-role:"page", id:"cart") {
    move_here("/html/body/div[@id='_header']") {
      $$("._logo") {
        add_class("_back")
        $$(".sprites-logo") {
          name("a")
          attributes(data-rel:"back", data-role:"button")
          insert("span", "BACK", class:"_back_text")
        }
      }
      $$("> div > a, #_search, ._divider") {
        remove()
      }
    }
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
            $$(".EstimateShippingLink") {
              # add_class("_btn_green1")
            }
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
          $$("input[type='image'][alt='Update']") {
            # attribute("src", " ")
            # attribute("data-role", "none")
            # # $("..") {
            # #   add_class("_btn_green1")
            # # }
          }
        }

        $$("#SideCouponCodeBox") {
          remove(".//p")
          $(".//*") {
            attribute("data-role", "none")
          }
        }

        # Remove content we don't need
        $$("#CartBreadcrumb, #SideProductRecentlyViewed, #SideTopSellers, #SuggestiveCartContent, .KeepShopping") {
          remove()
        }
      }
    }
    move_here("/html/body/div[@id='_footer']") {
      $$("._cart") {
        add_class("active")
      }
    }
  }

  # Remove header content we don't want duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='SideNewProducts']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}