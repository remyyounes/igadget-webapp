$("body") {
  # Transform product page html
  # Must be insert_top because JQM looks for first legitimate page to set as active...
  insert_top("div", data-role:"page", id:"shop_by") {
    move_here("/html/body/div[@id='_header']") {
      $$("._logo") {
        add_class("_back")
        $$(".sprites-logo") {
          name("a")
          attributes(data-rel:"back", data-role:"button")
          insert("span", "BACK", class:"_back_text")
        }
      }
    }
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        # remove sorting for now
        $$(".SortBox, #CategoryBreadcrumb, .SubCategoryList") {
          remove()
        }
        $$("h2") {
          add_class("_h2 _bar_header")
        }
        $$(".ProductList") {
          $$("li") {
            add_class("_flex_box")
            $$(".ProductImage") {
              add_class("_flex_box_item_2")
            }
            $$(".ProductDetails") {
              add_class("_flex_box_item_1")
              move_here("../div[@class='ProductPriceRating']")
              move_here("../div[@class='ProductActionAdd']")
            }
            $$(".ProductQty") {
              remove()
            }
            $$("strong") {
              move_to("..", "top")
            }
            $$(".ProductCompareButton") {
              remove()
            }
          }
        }
      }
    }
    move_here("/html/body/div[@id='_footer']")
  }

  # Remove header content we don't want duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='SideNewProducts']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}