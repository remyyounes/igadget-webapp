match(this()) {
  # http://mlocal.igadgetcommerce.com/account.php
  with(/GET \/account\.php/) {
    replace(/GET \/account\.php/, "GET /login.php?from=account")
    export("secure", "true")
  }
  else() {

  }
}