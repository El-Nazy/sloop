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
        backgroundColor: "white",
        shadowColor: "rgba(0, 0, 0, 1)",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        borderTopWidth: 2,
        borderColor: "rgba(176, 176, 176, .1)",
        flexDirection: "row",
        // width: "100%",
        height: 60,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          width: 65,
          alignItems: "center",
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
