match(this()) {
  # This hack is insecure and can't work in production
  # http://mlocal.igadgetcommerce.com/account.php
  # with(/GET \/account\.php/) {
  #   # replace(/GET \/account\.php/, "GET /login.php?from=account")
  #   export("secure", "true")
  # }
  # with(/GET \/login\.php/) {
  #   # replace(/GET \/account\.php/, "GET /login.php?from=account")
  #   export("secure", "true")
  # }
  # with(/GET \/settings/) {
  #   replace(/GET \/settings/, "GET /")
  # }
  else() {

  }
}