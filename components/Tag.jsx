// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";

export function Tag({ text = "CLASS" }) {
  return (
    <View
      style={{
        padding: 4,
        backgroundColor: "#30084F",
        borderRadius: 4,
        // width: "auto",
        // flex: 1,
        maxHeight: 20,
      }}
    >
      <UbuntuText
        weight={500}
        style={{
          fontSize: 12,
          color: "white",
          lineHeight: 12,
        }}
      >
        {text}
      </UbuntuText>
    </View>
  );
}
