// index.js

// Wait for Cordova to load
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    

	alert("device ready")
    //UrbanAirship();

    //navigator.notification.alert("exiting deviceready")

    $('#flip-1').change(function() {
    	alert("inside bingo")
    	if ($('#flip-1').val() == "on") {
    	// This means we want to turn it on
      		alert("enable push")
      		push.enablePush()
    	} 
    	else {
      		alert("disable push")
      		push.disablePush()
    	}
  	}
}