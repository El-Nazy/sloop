import { View } from "react-native";
import React from "react";
import { colors } from "../utils/constants";
import { Image } from "expo-image";
import { UbuntuText } from "../components/Texts";
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
          marginBottom: 32,
        }}
        source={require("../assets/confirmed.png")}
      />
      <UbuntuText
        style={{
          fontSize: 20,
          lineHeight: 24,
          textAlign: "center",
          width: "100%",
        }}
      >
        Your request to join Graceville Christian Center has been sent to an
        admin for approval.
      </UbuntuText>
      <View
        style={{
          position: "absolute",
          bottom: 48,
          left: 16,
          right: 16,
        }}
      >
        <Link
          href={"/home"}
          asChild
          style={{
            backgroundColor: colors.purple4,
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
