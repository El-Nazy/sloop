import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Back from "../assets/back-arrow.svg";
import { UbuntuText } from "../components/Texts";
import { CustomButton } from "../components/Buttons";
import { colors } from "../utils/constants";

export default function homeschecdule() {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`pt-12 px-5 flex-row gap-2`}>
        <Back />
        <UbuntuText weight={700} style={tw`self-center text-[16px] text-black`}>
          Back to home
        </UbuntuText>
      </View>
      <View style={tw`px-5 py-45`}>
        <UbuntuText weight={500} style={tw`self-start text-[18px]`}>
          Your schedule has been successfully Published
        </UbuntuText>
      </View>
      <View style={tw`pl-5`}>
        <CustomButton
          style={{
            borderRadius: 12,
            backgroundColor: colors.purple,
            width: 142,
            height: 35,
          }}
        >
          <UbuntuText
            weight={500}
            style={{
              fontSize: 16,
              lineHeight: 16,
              textAlign: "center",
              color: colors.white,
              paddingVertical: 9,
            }}
          >
            View Scheduled
          </UbuntuText>
        </CustomButton>
      </View>
    </View>
  );
}
