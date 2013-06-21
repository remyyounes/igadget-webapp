match($is_app) {
  with(/(mw-phonegap-android|mw-phonegap-ios)/) {
    @import "sections/header.ts"
    @import "sections/app/footer.ts"
  }
  else() {
    @import "sections/header.ts"
    @import "sections/footer.ts"
  }
}