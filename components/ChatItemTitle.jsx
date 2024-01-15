// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";
import { Image } from "expo-image";

export function ChatItemTitle({ title = "Primary 1" }) {
  return (
    <UbuntuText
      weight={500}
      style={{
        fontSize: 18,
      }}
    >
      {title}
    </UbuntuText>
  );
}
