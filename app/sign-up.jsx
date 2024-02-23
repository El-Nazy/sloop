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
import NaijaFlagSvg from "../assets/flag-for-nigeria.svg";
import DropDownSvg from "../assets/dropdown.svg";

export default function () {
  return (
    <SafeArea>
      <View
        style={{
          marginBottom: 6,
          marginTop: 93 - StatusBar.currentHeight,
        }}
      >
        <H2>Enter your phone number</H2>
      </View>
      <View
        style={{
          marginBottom: 24,
        }}
      >
        <UbuntuText
          style={{
            fontSize: 10,
            lineHeight: 11.49,
            color: colors.mediumGray,
          }}
        >
          {appName} will need to confirm your account
        </UbuntuText>
      </View>
      <View
        style={{
          width: 254,
        }}
      >
        <View style={{ marginLeft: 8 }}>
          <UbuntuText
            style={{
              fontSize: 12,
              lineHeight: 13.79,
              color: colors.neutralGray,
            }}
          >
            Country/Region
          </UbuntuText>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 38,
            width: "100%",
            alignItems: "center",
            gap: 12,
            borderBottomWidth: 2,
            borderBottomColor: colors.purple2,
            borderRadius: 4,
            paddingHorizontal: 8,
            marginBottom: 20,
          }}
        >
          <View style={{ width: 30, alignItems: "center" }}>
            <NaijaFlagSvg />
          </View>
          <UbuntuText
            weight={500}
            style={{
              fontSize: 14,
              lineHeight: 16.09,
              flex: 1,
            }}
          >
            Nigeria
          </UbuntuText>
          <DropDownSvg />
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 38,
            width: "100%",
            alignItems: "center",
            gap: 12,
            borderBottomWidth: 2,
            borderBottomColor: colors.purple2,
            borderRadius: 4,
            paddingHorizontal: 8,
            marginBottom: 60,
          }}
        >
          <UbuntuText
            weight={500}
            style={{
              fontSize: 13,
              lineHeight: 14.94,
              color: colors.mediumGray,
            }}
          >
            +234
          </UbuntuText>
          <UbuntuTextInput />
        </View>
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
          }}
        >
          Already have an account?{" "}
          <Link href={"/sign-up"} style={{ color: colors.purple }}>
            Login
          </Link>
        </UbuntuText>
      </View>
      <Link
        href={"/verify"}
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