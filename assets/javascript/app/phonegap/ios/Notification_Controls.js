function controlNotifications() {
  $('#flip-1').change(function() {
    //alert("inside bingo")

    push = window.pushNotification


    if ($('#flip-1').val() == "On") {
    // This means we want to turn it on
      push.enablePush()
      //alert("enable push")
    } else {
      push.disablePush()
      //alert("disable push")
    }
  })
}

function controlLocation() {
  $('#flip-2').change(function() {

    push = window.pushNotification

    if ($('#flip-2').val() == "On") {
      //This means we want to turn it on
      push.enableLocation()
      //alert("enable Location")
    } else {
      push.disableLocation()
      //alert("disable Location")
    }
  })
}