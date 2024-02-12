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
import BackArrowSvg from "../assets/back-arrow.svg";

export default function () {
  return (
    <SafeArea>
      <View
        style={{
          position: "absolute",
          left: 16,
          top: 39 - StatusBar.currentHeight,
        }}
      >
        <BackArrowSvg />
      </View>
      <View
        style={{
          marginBottom: 11,
          marginTop: 93 - StatusBar.currentHeight,
        }}
      >
        <H2>Confirm your mobile number</H2>
      </View>
      <View
        style={{
          marginBottom: 30,
          width: 226,
        }}
      >
        <UbuntuText
          style={{
            fontSize: 10,
            lineHeight: 11.49,
            color: colors.mediumGray,
            textAlign: "center",
          }}
        >
          {appName} has sent a 4-digits confirmation code to +234 903 ****39
        </UbuntuText>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 60,
          gap: 12,
        }}
      >
        <CircleInput />
        <CircleInput />
        <CircleInput />
        <CircleInput />
      </View>
      <View
        style={{
          marginBottom: 60,
        }}
      >
        <UbuntuText
          style={{
            fontSize: 12,
            lineHeight: 14.4,
            color: colors.purple,
          }}
        >
          RESEND CODE
        </UbuntuText>
      </View>
      <Link
        href={"/profile-setup"}
        asChild
        style={{
          backgroundColor: colors.purple,
          borderRadius: 15,
          paddingHorizontal: 30,
          justifyContent: "center",
          height: 30,
        }}
      >
        <CustomButton>
          <UbuntuText
            weight={500}
            style={{
              fontSize: 14,
              lineHeight: 14.4,
              color: colors.white,
            }}
          >
            CONTINUE
          </UbuntuText>
        </CustomButton>
      </Link>
    </SafeArea>
  );
}

function CircleInput() {
  return (
    <View
      style={{
        width: 42,
        height: 42,
        borderRadius: 21,
        borderColor: colors.purple2,
        borderRightWidth: 2,
        transform: [{ rotate: "90deg" }],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UbuntuTextInput
        style={{ textAlign: "center", transform: [{ rotate: "-90deg" }] }}
      />
    </View>
  );
}
