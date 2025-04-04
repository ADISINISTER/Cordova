/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('onCleverTapProfileSync', onCleverTapProfileSync, false); // optional: to be notified of CleverTap user profile synchronization updates
document.addEventListener('onCleverTapProfileDidInitialize', onCleverTapProfileDidInitialize, false); // optional, to be notified when the CleverTap user profile is initialized
document.addEventListener('onCleverTapInAppNotificationDismissed', onCleverTapInAppNotificationDismissed, false); // optional, to be receive a callback with custom in-app notification click data
document.addEventListener('onDeepLink', onDeepLink, false); // optional, register to receive deep links.
document.addEventListener('onPushNotification', onPushNotification, false); // optional, register to receive push notification payloads.
document.addEventListener('onCleverTapInboxDidInitialize', onCleverTapInboxDidInitialize, false); // optional, to check if CleverTap Inbox intialized
document.addEventListener('onCleverTapInboxMessagesDidUpdate', onCleverTapInboxMessagesDidUpdate, false); // optional, to check if CleverTap Inbox Messages were updated
document.addEventListener('onCleverTapInboxButtonClick', onCleverTapInboxButtonClick, false); // optional, to check if Inbox button was clicked with custom payload
document.addEventListener('onCleverTapInAppButtonClick', onCleverTapInAppButtonClick, false); // optional, to check if InApp button was clicked with custom payload
document.addEventListener('onCleverTapFeatureFlagsDidUpdate', onCleverTapFeatureFlagsDidUpdate, false); // optional, to check if Feature Flags were updated
document.addEventListener('onCleverTapProductConfigDidInitialize', onCleverTapProductConfigDidInitialize, false); // optional, to check if Product Config was initialized
document.addEventListener('onCleverTapProductConfigDidFetch', onCleverTapProductConfigDidFetch, false); // optional, to check if Product Configs were updated
document.addEventListener('onCleverTapProductConfigDidActivate', onCleverTapProductConfigDidActivate, false); // optional, to check if Product Configs were activated
document.addEventListener('onCleverTapDisplayUnitsLoaded', onCleverTapDisplayUnitsLoaded, false); // optional, to check if Native Display units were loaded
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    // Notify CleverTap that the device is ready
    CleverTap.notifyDeviceReady();

    
}
document.getElementById("Login").addEventListener("click", function () {
    console.log("Login function called");
    CleverTap.onUserLogin(profile,stuff);
  });
    var stuff = ["bags", "shoes"];
    var profile = {
        'Name': 'adit',
        'Identity': '11112',
        'Email': 'captain@gmail.com',
        'Phone': '+14155551234',
        'stuff': stuff
    }   

document.getElementById("Login").addEventListener("click", function () {
    console.log("Login function called");
    CleverTap.onUserLogin(profile);
  });

  function onCleverTapProfileSync(e) {
    console.log("onCleverTapProfileSync", e);
  }
  function onCleverTapProfileDidInitialize(e) {
    console.log("onCleverTapProfileDidInitialize", e);
  }
  function onCleverTapInAppNotificationDismissed(e) {
    console.log("onCleverTapInAppNotificationDismissed", e);
  }
// deep link handling  
function onDeepLink(e) {
    console.log(e.deeplink);  
}

// push notification data handling
function onPushNotification(e) {
    console.log(JSON.stringify(e.notification));
}

function onCleverTapInboxDidInitialize() {
    CleverTap.showInbox({"navBarTitle":"My App Inbox","tabs": ["tag1", "tag2"],"navBarColor":"#FF0000"});
}
    
function onCleverTapInboxMessagesDidUpdate() {
    CleverTap.getInboxMessageUnreadCount(function(val) {console.log("Inbox unread message count"+val);})
    CleverTap.getInboxMessageCount(function(val) {console.log("Inbox read message count"+val);});
}

function onCleverTapInAppButtonClick(e) {
    console.log("onCleverTapInAppButtonClick");
    console.log(e.customExtras);
}

function onCleverTapInboxButtonClick(e) {
    console.log("onCleverTapInboxButtonClick");
    console.log(e.customExtras);
}

function onCleverTapFeatureFlagsDidUpdate() {
    console.log("onCleverTapFeatureFlagsDidUpdate");
}

function onCleverTapProductConfigDidInitialize() {
    console.log("onCleverTapProductConfigDidInitialize");
}

function onCleverTapProductConfigDidFetch() {
    console.log("onCleverTapProductConfigDidFetch");
}

function onCleverTapProductConfigDidActivate() {
    console.log("onCleverTapProductConfigDidActivate");
}

function onCleverTapDisplayUnitsLoaded(e) {
    console.log("onCleverTapDisplayUnitsLoaded");
    console.log(e.units);
}
document.getElementById("btn2").addEventListener("click", function () {
    console.log("Record Event function called");
    CleverTap.recordEventWithName("Product Viewed");
  });
  let localInApp = {
    inAppType: "alert",
    titleText: "Get Notified",
    messageText: "Enable Notification permission",
    followDeviceOrientation: true,
    positiveBtnText: "Allow",
    negativeBtnText: "Cancel",
    fallbackToSettings: true, //Setting this parameter to true will open an in-App to redirect you to Mobile's OS settings page.
  };
  document.getElementById("btn3").addEventListener("click", function () {
    console.log("Prompt Push Primer function called");
    CleverTap.promptPushPrimer(localInApp);
  });
  
  document.getElementById("btn4").addEventListener("click", function () {
    console.log("Inbox function called");
    CleverTap.recordEventWithName("AppInboxClicked");
    CleverTap.initializeInbox();
    
  });
  document.addEventListener("onCleverTapInboxDidInitialize", () => {
    CleverTap.showInbox();
  });
//   CleverTap.getInboxMessageCount((val) => log("Inbox read message count" + val));
//   CleverTap.getInboxMessageUnreadCount((val) =>
//     log("Inbox unread message count" + val)
//   );
  document.getElementById("btn5").addEventListener("click", function () {
    console.log("Raise InApp");
    CleverTap.recordEventWithName("Raise InApp");
    
  });