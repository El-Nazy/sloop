// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";
import { Image } from "expo-image";

export function ChatPreview() {
  return (
    <UbuntuText
      weight={400}
      style={{
        fontSize: 14,
        color: "#706080",
      }}
    >
      How is the work going over there, ...
    </UbuntuText>
  );
}
