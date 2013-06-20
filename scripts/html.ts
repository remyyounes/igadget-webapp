# HTML Transformations go here
$("/html") {
  rewrite_links()
  absolutize_srcs()

  # Add the mobile meta tags
  clean_mobile_meta_tags()

  # Needed to begin mobilizing
  remove_all_styles()
  remove_html_comments()

  # Late load all the images on the site
  # lateload()

  # Remove all script tags not marked with "data-keep" attribute
  # remove_desktop_js();

  # new performance logging function
  # print_asset_count()  

  add_assets()

  @import "app.ts"

  @import "mappings.ts"

  @import "jqm.ts"

  @import "optimize.ts"
}

# Script for redirects, won't run otherwise because there is no HTML element and so mappings.ts won't be called...
match($status, "302") {
  @import "redirect.ts"
}