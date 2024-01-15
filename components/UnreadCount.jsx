// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";
import { Image } from "expo-image";

export function UnreadCount() {
  return (
    <View
      style={{
        backgroundColor: "#F71E2E",
        // padding: 3,
        borderRadius: 17 / 2,
        width: 16,
        height: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UbuntuText
        weight={700}
        style={{
          fontSize: 9,
          color: "white",
          lineHeight: 9,
        }}
      >
        99
      </UbuntuText>
    </View>
  );
}
