function controlNotifications() {
  $('#notifications').change(function() {
    alert("inside bingo");

    push = window.pushNotification;


    if ($('#notifications').val() == "On") {
    // This means we want to turn it on
      push.enablePush();
      //alert("enable push");
    } else {
      push.disablePush();
      //alert("disable push");
    }
  })
}

function controlLocation() {
  $('#location').change(function() {

    push = window.pushNotification;

    if ($('#location').val() == "On") {
      //This means we want to turn it on
      push.enableLocation();
      //alert("enable Location")
    } else {
      push.disableLocation();
      //alert("disable Location")
    }
  })
}

function setSliderState(){

  alert("setting slider state");

  push = window.pushNotification;
  
  push.isPushEnabled(function(has_push) {
    if (has_push) {
      alert("has push");
      $('#notifications').val('on').change();
      //alert("push is enabled")
    }
    else {
      alert("no push");
      $('#notifications').val('off').change();
      //alert("push is diabled")
    }
   })
}