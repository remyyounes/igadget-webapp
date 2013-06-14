// index.js

// Wait for Cordova to load
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    
    //setupTabBar(); // defined in tabbar.js

    UrbanAirship();

    //navigator.notification.alert("exiting deviceready")
}