// index.js

// Wait for Cordova to load
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    //navigator.notification.alert("bingo");

    alert("pg android is listening");

    UrbanAirship();

    /*
    window.plugins.XtifySDK.start(
    	alert("xtify is listening")
       	notificationCallBack, function (error) {
           document.body.innerHTML += '<h2> Error occurred while starting Xtify SDK. </h2><br />';
       });
     */
 }

 /*
 function notificationCallBack(data) {
 		alert("xtify notif received")
       document.body.innerHTML += '<h2> Notification Received. Title: ' + data["com.xtify.sdk.NOTIFICATION_TITLE"] + ' <br /> ' + ' Content: ' + data["com.xtify.sdk.NOTIFICATION_CONTENT"];
 }
 */