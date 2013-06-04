# Homepage Transformation
$("./body") {
  insert_top("div", class:"_home", data-role:"page") {
    move_here("/html/body//div[@id='_header']")
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']")
    }
    move_here("/html/body//div[@id='_footer']")
  }

  $$("#Wrapper") {
    $$("#LayoutColumn1") {
      attribute("data-role", "page")
      move_to("/html/body")
      copy_here("/html/body//div[@id='_header']") {
        move_to("..", "top")
      }

      insert("div", data-role:"content") {
        move_here("../div[contains(@class, 'Block')]")
      }
      copy_here("/html/body//div[@id='_footer']")
    }
  }
}
