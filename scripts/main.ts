# The main file executed by Tritium. The start of all other files.

$detected_content_type = $content_type
match($x_requested_with, /XMLHttpRequest/) {
  $detected_content_type = "application/x-ajax"
}

######################
#check for app cookie
$is_app = "false"

match($cookie) {
  with(/mw-phonegap-ios\=true/){
    $is_app = "mw-phonegap-ios"
  }
  with(/mw-phonegap-android\=true/){
    $is_app = "mw-phonegap-android"
  }
}

log("APPPP: is_app: ", $is_app)
######################

# Temp
# $is_app = "true"


log("Detected Content Type: " + $detected_content_type)
match($detected_content_type) {
  with(/html/) {
    # Rewrite the xmlns nodes before the html parser clobbers them
    replace(/\<(\/?)(\w+)\:\w+\>/, "$2_mwns_")
    
    # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
    # simply remove the "UTF-8" argument.  e.g. html(){ ... }
    html("UTF-8") {
      @import device_detection.ts
      @import "html.ts"
    }

    # Rewrite the xmlns nodes to restore them
    replace(/(\<(\/?)(\w+))_mwns_(\:\w+\>)/, "$1$4") 
  }
  with(/ajax/) {
    replace(/\<(\/?)(\w+)\:\w+\>/, "$2_mwns_")
    html("UTF-8") {
      @import device_detection.ts
      @import "html.ts"
      
      log("--> Importing ajax.ts")
      @import "ajax.ts"
    }
    replace(/(\<(\/?)(\w+))_mwns_(\:\w+\>)/, "$1$4") 
  }
  # with(/javascript/) {
  #   @import "ajax.ts"
  # }
  else() {
    log(concat("Passing through ", $content_type, " unmodified"))
  }
}

#mw-app: hack to send empty response when phonegap requests for cordova_plugins.json
match($is_app, /phonegap/) {
  match($path, /\A\/cordova\_plugins\.json\z/) {
    set("")
  }
}
