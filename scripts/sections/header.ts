# Header
$("/html/body") {
  # JQM Header
  template("_jqm_header", "_header", "top") {
    $$("div[data-role='header']") {
      # Logo
      insert("div", class:"_logo") {
        move_here("/html/body//div[@id='LogoContainer']") {
          $$("a") {
            attributes(href:"/", data-role:"none", class:"sprites-logo")
            text("")
            match_not($is_app, "false") {
              name("div")
              attribute("href", "")
            }
          }
        }
      }

      # Divider
      insert("span", class:"_divider") {
        remove()
      }

      # Search
      insert("div", id:"_search", data-role:"collapsible", href:"#search", data-inset:"false") {
        insert("h3", class:"sprites-searchTap")
        insert("div", class:"_collapsible_content") {
          move_here("/html/body//div[@id='SearchForm']") {
            $$("[for='search_query']") {
              text("")
              add_class("_search_label sprites-searchBar")
              wrap("div", class:"_search_input") {
                move_here("../..//input[@id='search_query']") {
                  attribute("data-role", "none")
                }
              }
            }
            $$("[type='image']") {
              remove()
            }
            $$(" > p") {
              remove()
            }
          }
        }
      }

      # Menu Button
      insert("a", "Browse Categories", data-role:"button",
              href:"/?page=categories", class:"ui-btn-right browse_btn") {
        # attribute("data-prefetch", " ")
        remove()
      }
    }
  }
}