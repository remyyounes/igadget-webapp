# Ajax specific handling if necessary
$("/html/body") {
  remove("./div[@id='categories']")
  # Init jQuery Uranium widgets
  insert("script", "$('body').Uranium('init');")
}