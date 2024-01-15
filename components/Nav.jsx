// CustomText.tsx
import React from "react";
import { View } from "react-native";
import CommunicationsFilledSvg from "../assets/communications-filled.svg";
import ResultsStrokedSvg from "../assets/results-stroked.svg";
import { UbuntuText } from "./Texts";
import { Image } from "expo-image";

export function Nav() {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 60,
        // flex: 1,
      }}
    >
      <View>
        <CommunicationsFilledSvg />
        <UbuntuText>Communications</UbuntuText>
      </View>
      <View
        style={{
          width: 2,
          backgroundColor: "rgba(238, 238, 238, 0.93)",
          height: "100%",
        }}
      />
      <View
        style={{
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 28,
            height: 28,
          }}
          source={require("../assets/results-stroked.png")}
        />
      </View>
    </View>
  );
}
