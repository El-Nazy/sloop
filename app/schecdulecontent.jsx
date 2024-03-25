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
      <View style={tw`my-2 mx-7`}>
        <Back />
      </View>

      <View style={tw`my-30 mx-7 gap-2`}>
        <UbuntuText
          weight={500}
          style={tw`text-[20px] text-center text-[#040009] self-start ml-3`}
        >
          Schedule contents
        </UbuntuText>
        <UbuntuText
          weight={400}
          style={tw`text-[14px] text-center text-[#040009] self-start`}
        >
          Schedule shows, go live instantly, and connect deeper with your
          community.
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
