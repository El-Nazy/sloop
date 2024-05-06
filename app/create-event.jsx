import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../components/SafeArea";
import tw, { style } from "twrnc";
import Back from "../assets/back-arrow.svg";
import { UbuntuText } from "../components/Texts";
import { colors } from "../utils/constants";
import { CustomButton } from "../components/Buttons";

export default function createevent() {
  return (
    <SafeArea>
      <View style={tw`w-full flex-1 py-48px px-16px`}>
        <View style={tw`flex-row items-center gap-3`}>
          <Back />
          <UbuntuText
            weight={700}
            style={tw`text-[16px] text-black leading-[19.2px]`}
          >
            create event
          </UbuntuText>
        </View>
        <View style={tw`pt-[213px] gap-20px`}>
          <UbuntuText
            weight={500}
            style={tw`text-[18px] text-black leading-[20.68px]`}
          >
            Do it better with events
          </UbuntuText>
          <UbuntuText
            weight={400}
            style={tw`text-[12px] leading-[14.4px] text-[${colors.gray2}]`}
          >
            Events bring communities together: Build bonds & boost engagement.
          </UbuntuText>
          <CustomButton
            style={tw`w-[100px] h-[35px] bg-[${colors.darkPurple}] rounded-[12px]`}
          >
            <UbuntuText
              weight={700}
              style={tw`text-[14px] text-white leading-[14.5px] self-center pt-3`}
            >
              Continue
            </UbuntuText>
          </CustomButton>
        </View>
      </View>
    </SafeArea>
  );
}
