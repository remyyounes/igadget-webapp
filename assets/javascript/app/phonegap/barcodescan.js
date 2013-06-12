// barcodescan.js - ScanditSDK


function success(concatResult) {
    /**    
    navigator.notification.alert(concatResult);
    resultArray = concatResult.split("|");
    navigator.notification.alert(resultArray[0]);
    navigator.notification.alert(resultArray[1]);
    alert("Scanned " + resultArray[0] + " code: " + resultArray[1]);
    */
    //alert("Success:  " + concatResult);
    productURL = "http://" + window.location.hostname + "/sample-product-incase-sports-armband-for-ipod-nano";
    alert(productURL);
    window.location = productURL; 
}
            
function failure(error) {
    //alert("Scan Failed: " + error);
    alert("Scan Fail: Item Unavailable or Not Supported");
  
}


function ScanditSDK_Scan()
{
    ////alert("before scan")
    cordova.exec(success, failure, "ScanditSDK", "scan",
                             ["McicjMNJEeKU5+0YSj0U2c769M7xrZaOVx+htZY7Ovk",
                              {"beep": true,
                              "1DScanning" : true,
                              "2DScanning" : true,
                              "scanningHotspot" : "0.5/0.5",
                              "vibrate" : true
                              }]);
    //alert("after scan")
}