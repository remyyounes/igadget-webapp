var XtifySDK = function() {
}

XtifySDK.prototype.start = function(successCallback, failureCallback) {
	return cordova.exec(successCallback, failureCallback, 'XtifyCordovaPlugin',
			'startSdk', [ {
				'successCallback' : successCallback.name
			} ]);
};

XtifySDK.prototype.getXid = function(successCallback, failureCallback) {
	return cordova.exec(successCallback, failureCallback, 'XtifyCordovaPlugin',
			'getXid', []);
};

XtifySDK.prototype.isRegistered = function(successCallback, failureCallback) {
	return cordova.exec(successCallback, failureCallback, 'XtifyCordovaPlugin',
			'isRegistered', []);
};

XtifySDK.prototype.setNotifIcon = function(iconName, failureCallback) {
	return cordova.exec(null, failureCallback, 'XtifyCordovaPlugin',
			'setNotifIcon', [ {
				'notifIconName' : iconName
			} ]);
};

cordova.addConstructor(function() {
	window.XtifySDK = new XtifySDK();
});