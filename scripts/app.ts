###############################
#ADD ALL JS ASSETS FOR THE APP
match($is_app, "mw-phonegap-ios")
{
  $("head") {
    
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/cordova-2.7.0.js"))

    #urbanairship
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/PushNotification.js"))
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/UA_PushInterface.js"))            

    
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