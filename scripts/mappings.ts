/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($path) {
  # App-specific settings page (new mobile content)
  # Example: www.igadgetcommerce.com/?page=settings
  with(/settings/) {
    log("--> Importing pages/app/settings.ts in mappings.ts")
    @import pages/app/settings.ts
  }

  # Category page (using home page content)
  # Example: www.igadgetcommerce.com/?page=categories
  with(/categories/) {
    log("--> Importing sections/category.ts in mappings.ts")
    @import "sections/category.ts"
  }

  # Home page
  with(/^\/$|^\/\?/) {
    log("--> Importing pages/home.ts in mappings.ts")
    @import "pages/home.ts"
  }

  # Search page
  with(/search\.php/) {
    log("--> Importing pages/login.ts in mappings.ts")
    @import pages/search.ts
  }

  # Cart page
  with(/cart\.php/) {
    log("--> Importing pages/cart.ts in mappings.ts")
    @import pages/cart.ts
  }      

  # Login page
  with(/login\.php|account\.php/) {
    log("--> Importing pages/login.ts in mappings.ts")
    @import pages/login.ts
  }

  # Product page
  with(/(sample\-product|apple\-ipod\-socks|mac\-pro|logitech|higher\-ground\-shuttle|apple\-wireless\-mighty\-mouse)/) {
    log("--> Importing pages/product.ts in mappings.ts")
    @import pages/product.ts
  }

  # Shop by page
  with(/(shop-|brands|mobile-only|new-product-category)/) {
    log("--> Importing pages/shop_by.ts in mappings.ts")
    @import pages/shop_by.ts
  }

  else() {
    log("--> No page match in mappings.ts")
    @import pages/catchall.ts
  }
}

