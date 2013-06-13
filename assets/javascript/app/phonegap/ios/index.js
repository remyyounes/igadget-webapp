// index.js

// Wait for Cordova to load
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    //navigator.notification.alert("bingo");
    
    //setupTabBar(); // defined in tabbar.js

    UrbanAirship();

    //navigator.notification.alert("exiting deviceready")
}