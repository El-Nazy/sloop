import { StatusBar, View } from "react-native";
import React from "react";
import { colors } from "../utils/constants";
import { UbuntuText } from "../components/Texts";
import { SafeArea } from "../components/SafeArea";
import Logo from "../components/icons/Logo";

export default function () {
  return (
    <SafeArea>
      <View
        style={{
          marginTop: 76 - (StatusBar.currentHeight || 0),
          marginBottom: 8,
        }}
      >
        <UbuntuText
          weight={500}
          style={{ fontSize: 16, lineHeight: 19.2, color: colors.purple4 }}
        >
          Initializing
        </UbuntuText>
      </View>
      <UbuntuText
        style={{
          fontSize: 16,
          lineHeight: 19.2,
          color: colors.gray2,
        }}
      >
        Please wait a moment...
      </UbuntuText>

      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          justifyContent: "center",
        }}
      >
        <Logo />
      </View>
    </SafeArea>
  );
}
