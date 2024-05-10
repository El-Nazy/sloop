import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  SafeAreaView,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { appName, colors } from "../utils/constants";
import { Image } from "expo-image";
import { H2, UbuntuText } from "../components/Texts";
import { Link, router } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import OnBoardingSvg from "../assets/on-boarding.svg";

export default function () {
  return (
    <SafeArea viewStyle={tw`p-4`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <OnBoardingSvg
          style={{
            marginBottom: 32,
          }}
        />
        <View
          style={{
            marginBottom: 16,
          }}
        >
          <H2>Welcome to Sloop</H2>
        </View>
        <View
          style={{
            marginBottom: 52,
          }}
        >
          <UbuntuText
            style={{
              fontSize: 14,
              lineHeight: 18,
              color: colors.mediumGray,
              textAlign: "center",
            }}
          >
            Discover, learn, and thrive with{"\n"}a supportive community.
          </UbuntuText>
        </View>
      </View>
      <OnboardingNextButton href={"/sign-in"} />
    </SafeArea>
  );
}

export function OnboardingNextButton({ href, text = "CONTINUE", ...props }) {
  return (
    <View style={tw`rounded-[12px] overflow-hidden mb-[32px] mt-4 w-full`}>
      <Pressable
        onPress={() => {
          router.navigate(href);
        }}
        style={{
          backgroundColor: colors.purple4,
        }}
        android_ripple={{
          color: colors.newGray,
          foreground: true,
        }}
        {...props}
      >
        <UbuntuText
          weight={500}
          style={{
            fontSize: 16,
            lineHeight: 18,
            color: colors.white,
            textAlign: "center",
            paddingVertical: 16,
          }}
        >
          {text}
        </UbuntuText>
      </Pressable>
    </View>
  );
}
