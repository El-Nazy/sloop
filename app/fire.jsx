import React, { useEffect } from "react";
import { PermissionsAndroid, Text, View } from "react-native";
import messaging from "@react-native-firebase/messaging";

export default function fire() {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );

    const token = messaging()
      .getToken
      // {appName: ""}
      ();
    alert(`messaging token ${token}`);

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      alert(`'A new FCM message arrived!', ${JSON.stringify(remoteMessage)}`);
    });

    return unsubscribe;
  }, []);

  return <Text>Showing something</Text>;
}
