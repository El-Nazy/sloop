import { View, StatusBar } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../utils/constants";
import { Image } from "expo-image";
import { UbuntuText } from "../components/Texts";
import { Link } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import LoadingIconSvg from "../assets/white-stroked-loading-icon.svg";

import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function () {
  const [userImageUrl, setUserImageUrl] = useState("");
  AsyncStorage.getItem("user").then((user) => {
    console.log(user);
    setUserImageUrl(JSON.parse(user).profileImageUrl);
    // console.log(userImage);
  });
  // useEffect(() => {
  //   async () => {};
  // }, [userImage]);
  return (
    <SafeArea backgroundColor={colors.purple} barStyle="light">
      <View
        style={{
          position: "absolute",
          right: 16,
          top: 35 - (StatusBar.currentHeight || 0),
          width: 40,
          height: 40,
          borderRadius: 20,
          overflow: "hidden",
          borderColor: colors.white,
          borderWidth: 2,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={userImageUrl || require("../assets/profileImage.png")}
        />
      </View>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <View>
          <LoadingIconSvg />
        </View>
      </View>
      <View
        style={{
          paddingVertical: 50,
          backgroundColor: colors.white,
          width: "100%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: "center",
        }}
      >
        <View style={{ width: 171 }}>
          <View style={{ marginBottom: 30 }}>
            <UbuntuText
              weight={500}
              style={{
                fontSize: 20,
                lineHeight: 24,
                textAlign: "center",
              }}
            >
              Welcome to your Growth hub
            </UbuntuText>
          </View>
          <Link
            href={"/new-community"}
            asChild
            style={{
              backgroundColor: colors.purple,
              borderRadius: 17,
              alignItems: "center",
              justifyContent: "center",
              height: 35,
              marginBottom: 8,
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
                Create a community
              </UbuntuText>
            </CustomButton>
          </Link>
          <Link
            href={"/join-community"}
            asChild
            style={{
              borderColor: colors.purple,
              borderWidth: 2,
              borderRadius: 17,
              alignItems: "center",
              justifyContent: "center",
              height: 35,
            }}
          >
            <CustomButton>
              <UbuntuText
                weight={500}
                style={{
                  fontSize: 14,
                  lineHeight: 14.4,
                  color: colors.purple,
                }}
              >
                Join a community
              </UbuntuText>
            </CustomButton>
          </Link>
        </View>
      </View>
    </SafeArea>
  );
}
