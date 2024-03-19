import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Back from "../assets/back-arrow.svg";
import { UbuntuText } from "../components/Texts";
import { CustomButton } from "../components/Buttons";
import { colors } from "../utils/constants";

export default function eventupdate() {
  return (
    <View style={tw`flex-1 mx-4 my-3`}>
      <View>
        <Back />
      </View>
      <View style={tw`mt-35 gap-5`}>
        <UbuntuText weight={500} style={tw`text-[20px]`}>
          More than just a TV!
        </UbuntuText>
        <UbuntuText weight={400} style={tw`text-[14px]`}>
          It's a community connection station with a curated schedule. Get ready
          for a curated schedule of contents that brings your community closer.
        </UbuntuText>
      </View>
      <View style={tw`p-6 w-full mt-20 `}>
        <CustomButton
          style={{
            borderRadius: 16,
            backgroundColor: colors.black,
            width: 101,
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
            Continue
          </UbuntuText>
        </CustomButton>
      </View>
    </View>
  );
}
