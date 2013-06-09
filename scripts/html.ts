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

  

  add_assets()

  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

  @import "jqm.ts"

  @import "optimize.ts"


  ###############################
  #ADD ALL JS ASSETS FOR THE APP
  match($is_app, "mw-phonegap-ios")
  {
    $("head") {
      
      #ios specific
      insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/cordova-2.7.0.js"))
      insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/index.js"))            

      #phonegap common js
      insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/barcodescan.js"))
    }
  }

  match($is_app, "mw-phonegap-android") {

    $("head") {
    
      #android specific  
      insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/android/cordova-2.7.0.js"))
      insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/android/xtify-cordova-plugin-1.5.js"))
      insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/android/index.js"))            
      
      #phonegap common js
      insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/barcodescan.js"))  
    }
  }
  ###############################

}