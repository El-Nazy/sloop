import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { appName, colors } from "../utils/constants";
import { Image } from "expo-image";
import { H2, UbuntuText } from "../components/Texts";
import { Link } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";

export default function () {
  return (
    <SafeArea
      viewStyle={{
        justifyContent: "center",
        padding: 16,
      }}
    >
      <Image
        style={{
          width: 210.84,
          height: 157.1,
          marginBottom: 50,
        }}
        source={require("../assets/on-boarding.png")}
      />
      <View
        style={{
          marginBottom: 11,
        }}
      >
        <H2>Welcome to {appName}</H2>
      </View>
      <View
        style={{
          // width: 250,
          marginBottom: 52,
        }}
      >
        <UbuntuText
          style={{
            fontSize: 12,
            lineHeight: 14,
            color: colors.mediumGray,
            textAlign: "center",
          }}
        >
          Discover, learn, and thrive with a supportive community.
        </UbuntuText>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 48,
          left: 16,
          right: 16,
        }}
      >
        <Link
          href={"/sign-up"}
          asChild
          style={{
            backgroundColor: colors.purple,
            borderRadius: 12,
            paddingHorizontal: 30,
            justifyContent: "center",
            alignItems: "center",
            height: 44,
            width: "100%",
          }}
        >
          <CustomButton>
            <UbuntuText
              weight={500}
              style={{
                fontSize: 16,
                lineHeight: 16,
                color: colors.white,
              }}
            >
              CONTINUE
            </UbuntuText>
          </CustomButton>
        </Link>
      </View>
    </SafeArea>
  );
}
