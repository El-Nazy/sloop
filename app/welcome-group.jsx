import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Back from "../assets/ep_back.svg";
import { UbuntuText } from "../components/Texts";
import { CustomButton } from "../components/Buttons";
import { colors } from "../utils/constants";

export default function welcomegroup() {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`my-2 mx-9`}>
        <Back />
      </View>

      <View style={tw`mx-9 my-30`}>
        <UbuntuText
          weight={400}
          style={tw`text-[14px] text-center text-[#040009]`}
        >
          Stay connected to community Events. Join conversations, live webinars
          and share thoughts on the go
        </UbuntuText>
      </View>
      <View style={tw`relative left-12`}>
        <CustomButton
          style={{
            backgroundColor: colors.black,
            borderRadius: 12,
            paddingHorizontal: 59,
            paddingVertical: 20,

            height: 25,
            width: 100,
          }}
        >
          <UbuntuText
            weight={400}
            style={{
              color: colors.white,
              fontSize: 14,
              lineHeight: 14.4,
            }}
          >
            Continue
          </UbuntuText>
        </CustomButton>
      </View>
    </View>
  );
}
