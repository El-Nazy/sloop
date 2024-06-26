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
      <View style={tw`ml-5`}>
        <CustomButton
          style={{
            borderRadius: 12,
            backgroundColor: colors.black,
            width: 101,
            height: 35,
          }}
        >
          <UbuntuText
            weight={500}
            style={{
              fontSize: 12,
              lineHeight: 16,
              textAlign: "center",
              color: colors.white,
              paddingVertical: 9,
            }}
          >
            Continue
          </UbuntuText>
        </CustomButton>
      </View>
    </View>
  );
}
