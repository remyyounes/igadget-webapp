# Match the Ajax path
match($path) {
  with(/foo/) {
    html_fragment() {
      log("--> Importing ajax/foo.ts in ajax.ts")
      # @import ajax/foo.ts
    }
  }
  else() {
    log("--> No AJAX mapping found.")
  }
}

# needed for product images
# replace("%24", "$")
# replace("&amp;", "&")