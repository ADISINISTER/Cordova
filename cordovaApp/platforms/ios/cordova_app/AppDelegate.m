/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

#import "AppDelegate.h"
#import <UserNotifications/UserNotifications.h>
#import <CleverTap.h>
#import "MainViewController.h"


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary<UIApplicationLaunchOptionsKey, id> *)launchOptions
{
    // Initialize CleverTap
    [[CleverTap sharedInstance] enableDeviceNetworkInfoReporting:YES];
    [CleverTap setDebugLevel:CleverTapLogDebug];

//    // Set up push notifications
//    [self registerForPushNotifications];

    self.viewController = [[MainViewController alloc] init];
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
//// Handle push registration failure
//- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
//    NSLog(@"Failed to register for remote notifications: %@", error.localizedDescription);
//}
//
//// Handle successful push registration
//- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
//    NSLog(@"Registered for remote notifications: %@", deviceToken.description);
//    [[CleverTap autoIntegrate] setPushToken:deviceToken];
//}
//
//// Handle push tap action (when user interacts with notification)
//- (void)userNotificationCenter:(UNUserNotificationCenter *)center
//       didReceiveNotificationResponse:(UNNotificationResponse *)response
//       withCompletionHandler:(void (^)(void))completionHandler {
//    NSLog(@"Push notification tapped: %@", response.notification.request.content.userInfo);
//    [[CleverTap sharedInstance] handleNotificationWithData:response.notification.request.content.userInfo];
//    completionHandler();
//}
//
// Handle foreground push notification (when app is open)
//- (void)userNotificationCenter:(UNUserNotificationCenter *)center
//       willPresentNotification:(UNNotification *)notification
//       withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
//    NSLog(@"Push received while app is in foreground: %@", notification.request.content.userInfo);
//    [[CleverTap sharedInstance] recordNotificationViewedEventWithData:notification.request.content.userInfo];
//    completionHandler(UNNotificationPresentationOptionBadge | UNNotificationPresentationOptionSound | UNNotificationPresentationOptionAlert);
//}
//
//// Handle background push notification
//- (void)application:(UIApplication *)application
//didReceiveRemoteNotification:(NSDictionary *)userInfo
//fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
//    NSLog(@"Received background push notification: %@", userInfo);
//    completionHandler(UIBackgroundFetchResultNoData);
//}
//
//// Handle custom extra data in push notification
//- (void)pushNotificationTappedWithCustomExtras:(NSDictionary *)customExtras {
//    NSLog(@"Push notification customExtras: %@", customExtras);
//}
//
//// Register push notification delegate
//- (void)registerForPushNotifications {
//    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
//    center.delegate = self;
//    [center requestAuthorizationWithOptions:(UNAuthorizationOptionAlert | UNAuthorizationOptionBadge | UNAuthorizationOptionSound)
//                          completionHandler:^(BOOL granted, NSError * _Nullable error) {
//        if (granted) {
//            dispatch_async(dispatch_get_main_queue(), ^{
//                [[UIApplication sharedApplication] registerForRemoteNotifications];
//            });
//        } else {
//            NSLog(@"Push notifications permission denied.");
//        }
//    }];
//}
@end
