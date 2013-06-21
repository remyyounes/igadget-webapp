# App assets

#insert all plugin, other JS common to iOS, Android
match_not($is_app, "false")
{
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/common/PushNotification.js"))
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/common/UrbanAir_Interface.js"))                 
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/common/Notification_Controls.js"))
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/common/barcodescan.js"))
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/common/index.js"))  
}

#insert platform specific JS
match($is_app, "mw-phonegap-ios")
{
  $("/html/head") {
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/ios/cordova-2.7.0.js"))
  }
}
match($is_app, "mw-phonegap-android") {
  $("/html/head") {
    insert_bottom("script", type: "text/javascript", src: asset("javascript/app/phonegap/android/cordova-2.7.0.js"))
  }
}