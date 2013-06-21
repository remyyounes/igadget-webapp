# The main file executed by Tritium. The start of all other files.

# set ajax variable
$is_ajax = "false"
match($x_requested_with, /XMLHttpRequest/) {
  $is_ajax = "true"
}

# set app variable
$is_app = "false"
match($cookie) {
  with(/mw-phonegap-ios\=true/){
    $is_app = "mw-phonegap-ios"
  }
  with(/mw-phonegap-android\=true/){
    $is_app = "mw-phonegap-android"
  }
  log("$is_app = ", $is_app)
}

# temp for testing
# $is_app = "mw-phonegap-ios"

match($content_type) {
  with(/html/) {
    # Rewrite the xmlns nodes before the html parser clobbers them
    replace(/\<(\/?)(\w+)\:\w+\>/, "$2_mwns_")
    # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
    # simply remove the "UTF-8" argument.  e.g. html(){ ... }
    html("UTF-8") {
      @import device_detection.ts
      @import "html.ts"

      match($is_ajax, "true") {      
        log("--> Importing ajax.ts")
        @import "ajax.ts"
      }
    }
    # Rewrite the xmlns nodes to restore them
    replace(/(\<(\/?)(\w+))_mwns_(\:\w+\>)/, "$1$4") 
  }
  with(/javascript/) {
    # JavaScript transformations go here
  }
  with(/json/) {    
    #mw-app: hack to send empty response when phonegap requests for cordova_plugins.json
    match($is_app, /phonegap/) {
      match($path, /\A\/cordova\_plugins\.json\z/) {
        set("")
      }
    }
  }
  else() {
    log(concat("Passing through ", $content_type, " unmodified"))
  }
}