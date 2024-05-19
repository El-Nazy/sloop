import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../components/SafeArea";
import tw, { style } from "twrnc";
import { UbuntuText } from "../components/Texts";
import WhiteBackIconSvg from "../assets/back-arrow";

export default function managecommunity() {
  return (
    <SafeArea>
      <View style={tw`w-full flex-1 py-[38px] gap-30px`}>
        <View style={tw`flex-row items-center gap-4.5px px-[38px]`}>
          <WhiteBackIconSvg />
          <UbuntuText weight={700} style={tw`text-black text-[16px]`}>
            Manage community
          </UbuntuText>
        </View>
        <UbuntuText
          weight={500}
          style={tw`px-16px text-black text-[20px] leading-none`}
        >
          Coummunity overview
        </UbuntuText>
      </View>
    </SafeArea>
  );
}
