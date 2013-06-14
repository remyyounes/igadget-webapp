$("body") {
  # Transform product page html
  # Must be insert_top because JQM looks for first legitimate page to set as active...
  insert_top("div", data-role:"page", id:"search") {
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
    insert("div", class:"_content", data-role:"content", data-iscroll:"data-iscroll") {
      move_here("/html/body//div[@id='Container']") {
        # Make product images into jqm buttons
        $(".//div[contains(@class, 'ProductImage')]") {
          $(".//a") {
            attribute("data-role", "button")
          }
        }

        # remove content we don't need
        $$(".AdvancedSearch, #SearchTabsList, #SearchResultsBrand,
            .SearchSorting, #SearchResultsCategoryAndBrand, .ToggleSearchFormLink") {
          remove()
        }

        $$("h2") {
          add_class("_bar_header")
        }

        $$(".ProductList") {
          $$("li") {
            add_class("_flex_box")
            $$("ProductImage") {
              add_class("_flex_box_item_3")
            }
            $$("ProductDetails") {
              add_class("_flex_box_item_1")
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

        $$(".CompareButtonContainer, .FeedLink") {
          remove()
        }

        remove(".//br")
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