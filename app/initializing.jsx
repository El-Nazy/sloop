import {
  Button,
  Pressable,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { appName, colors } from "../utils/constants";
import { Image } from "expo-image";
import { H2, UbuntuText } from "../components/Texts";
import { Link } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import LoadingIconSvg from "../assets/loading-icon.svg";

export default function () {
  return (
    <SafeArea>
      <View
        style={{
          marginTop: 76 - StatusBar.currentHeight,
          marginBottom: 8,
        }}
      >
        <UbuntuText
          weight={500}
          style={{ fontSize: 14, lineHeight: 14.4, color: colors.purple2 }}
        >
          Initializing
        </UbuntuText>
      </View>
      <UbuntuText
        style={{
          fontSize: 12,
          lineHeight: 14.4,
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
        <LoadingIconSvg />
      </View>
    </SafeArea>
  );
}
