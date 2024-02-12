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
          right: 21,
          top: 38 - StatusBar.currentHeight,
          padding: 10,
        }}
      >
        <UbuntuText
          style={{ fontSize: 12, lineHeight: 14.4, color: colors.purple2 }}
        >
          skip
        </UbuntuText>
      </View>
      <View
        style={{
          marginBottom: 11,
          marginTop: 93 - StatusBar.currentHeight,
        }}
      >
        <H2>Profile info</H2>
      </View>
      <View
        style={{
          marginBottom: 30,
          width: 226,
        }}
      >
        <UbuntuText
          style={{
            fontSize: 12,
            lineHeight: 11.49,
            color: colors.mediumGray,
            textAlign: "center",
            width: 220,
          }}
        >
          Adding a profile info makes you more genuine and recognizable,
          fostering trust within your network.
        </UbuntuText>
      </View>
      <View style={{ width: 254, gap: 30 }}>
        <View
          style={{
            height: 38,
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: colors.purple2,
            borderRadius: 4,
            paddingHorizontal: 8,
          }}
        >
          <UbuntuTextInput
            placeholder="Enter your name"
            placeholderTextColor={colors.gray2}
          />
        </View>
        <View
          style={{
            height: 38,
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: colors.purple2,
            borderRadius: 4,
            paddingHorizontal: 8,
          }}
        >
          <UbuntuTextInput
            placeholder="Enter a bio"
            placeholderTextColor={colors.gray2}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          marginBottom: 60,
        }}
      >
        <Image
          style={{
            width: 78,
            height: 78,
          }}
          source={require("../assets/profile-image-placeholder.png")}
        />
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
