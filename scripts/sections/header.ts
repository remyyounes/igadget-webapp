# Header
$("./body") {
  # JQM Header
  template("_jqm_header", "_header", "top") {
    $$("div[data-role='header']") {
      # Logo
      insert("a", class:"_logo", href:"/", data-role:"none") {
        insert("h1", "Moovweb")
      }
      # Menu Button (JQM Panel)
      insert("a", data-role:"button", href:"#mypanel", class:"ui-btn-right") {
        insert("div", class:"sprites-menu")
      }
    }
  }
  # Menu Content (JQM Panel)
  template("_jqm_panel", "_menu", "top") {
    $$("div") {
      insert("ul") {
        insert("li", "Home", class:"_bar_gray1")
        insert("li", "Category", class:"_bar_gray1")
        insert("li", "Search", class:"_bar_gray1")
      }
    }
  }
}