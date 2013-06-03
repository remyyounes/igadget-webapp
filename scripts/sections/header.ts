# Header
$("./body") {
  # JQM Header
  template("_jqm_header", "_header", "top") {
    $$("div[data-role='header']") {
      # Logo
      insert("div", class:"_logo") {
        move_here("/html/body//div[@id='LogoContainer']")
      }

      # Divider
      insert("span", class:"_divider")

      # Search
      insert("div", id:"_search", data-role:"none", href:"#search", class:"ui-btn-right") {
        insert("span", class:"sprites-search")
      }

      # Menu Button
      insert("a", "Browse Categories", data-role:"button", href:"#browse", class:"ui-btn-right") {
      }
    }
  }

}