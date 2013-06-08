/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
      # Home page
      with(/^\/$|^\/\?/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import "pages/home.ts"
      }

      with(/search\.php/) {
        log("--> Importing pages/login.ts in mappings.ts")
        @import pages/search.ts
      }
      with(/cart\.php/) {
        log("--> Importing pages/cart.ts in mappings.ts")
        @import pages/cart.ts
      }      

      # Login page has HTTPS access control issue
      # Access-Control-Allow-Origin: https://www.mysite.com
      with(/login\.php|account\.php/) {
        log("--> Importing pages/login.ts in mappings.ts")
        @import pages/login.ts
      }

      # Example:
      with(/(sample\-product|apple\-ipod\-socks|mac\-pro|logitech)/) {
        log("--> Importing pages/product.ts in mappings.ts")
        @import pages/product.ts
      }

      else() {
        log("--> No page match in mappings.ts")
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import "pages/error.ts"
  }

}
