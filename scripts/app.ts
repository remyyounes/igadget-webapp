# App assets
match($is_app, "mw-phonegap-ios")
{
  $("/html/head") {
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/cordova-2.7.0.js"))

    #urbanairship
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/PushNotification.js"))
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/UrbanAir_Interface.js"))                 
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/Notification_Controls.js"))  
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/index.js"))  

    #phonegap common js
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/barcodescan.js"))
  }
}

match($is_app, "mw-phonegap-android") {
  $("/html/head") {
    #android specific  
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/android/cordova-2.7.0.js"))
    #insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/android/xtify-cordova-plugin-1.5.js"))

    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/PushNotification.js"))
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/UrbanAir_Interface.js"))              
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/Notification_Controls.js"))
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/android/index.js")) 


    #phonegap common js
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/barcodescan.js"))  
  }
}