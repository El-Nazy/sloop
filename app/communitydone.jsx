import { View } from "react-native";

import React, { useState } from "react";

import Back from "../assets/back-arrow.svg";

import tw, { style } from "twrnc";
import { UbuntuText } from "../components/Texts";

import { StatusBar } from "expo-status-bar";
import { colors } from "../utils/constants";
import { CustomButton } from "../components/Buttons";
import { SafeArea } from "../components/SafeArea";
import { Image } from "expo-image";
export default function communitysafe() {
  return (
    <SafeArea
      backgroundColor="#FFFF"
      viewStyle={{
        justifyContent: "center",
      }}
    >
      <View style={tw`py-[10.5px] flex-1 w-full px-[19.75px]`}>
        <View style={tw` items-center pt-[95px]`}>
          <Image
            style={{
              width: 184,
              height: 137.1,
            }}
            source={require("../assets/Done.png")}
          />
        </View>
        <View style={tw` pt-[90px] gap-4`}>
          <UbuntuText
            weight={500}
            style={tw`text-[16px] text-black leading-normal  `}
          >
            Well done! Your report has been sent to the admin and moderators for
            review and neccessary action. You will get notified when admin
            acknowledges your report.
          </UbuntuText>
        </View>
        <View style={tw`pt-[55px]`}>
          <CustomButton
            style={tw`w-[101px] h-[35px] bg-[${colors.darkPurple}] rounded-[12px]`}
          >
            <UbuntuText
              weight={700}
              style={tw`text-[14px] text-white leading-[14.5px] self-center pt-3`}
            >
              CONTINUE
            </UbuntuText>
          </CustomButton>
        </View>
      </View>
    </SafeArea>
  );
}
