// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";
import { Image } from "expo-image";

export function ItemDateTime() {
  return (
    <UbuntuText
      weight={400}
      style={{
        color: "#706080",
        fontSize: 12,
      }}
    >
      Date/Time
    </UbuntuText>
  );
}
