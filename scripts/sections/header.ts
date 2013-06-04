# Header
$("./body") {
  # JQM Header
  template("_jqm_header", "_header", "top") {
    $$("div[data-role='header']") {
      attribute("data-id", "header")
      # Logo
      insert("div", class:"_logo") {
        move_here("/html/body//div[@id='LogoContainer']") {
          $$("a") {
            attributes(href:"#home", data-role:"button")
          }
        }
      }

      # Divider
      insert("span", class:"_divider")

      # Search
      insert("div", id:"_search", data-role:"collapsible", href:"#search", data-inset:"false") {
        insert("h3", class:"sprites-search")
        insert("div", class:"_collapsible_content") {
          move_here("/html/body//div[@id='SearchForm']")
        }
      }

      # Menu Button
      insert("a", "Browse Categories", data-role:"button",
              href:"#categories", class:"ui-btn-right") {
      }
    }
  }

}