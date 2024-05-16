import { View, Text } from "react-native";
import React from "react";
import tw, { style } from "twrnc";
import { UbuntuText } from "./Texts";
import { colors } from "../utils/constants";

export default function NotificationCard({ title, content, time, Icon, Dot }) {
  return (
    <>
      <View style={tw`w-full bg-white shadow-lg py-2`}>
        <View style={tw`pt-3 px-3 gap-4`}>
          <View style={tw`flex-row gap-3 items-center`}>
            {Dot}
            <UbuntuText
              weight={500}
              style={tw`text-[16px] text-black leading-none`}
            >
              {title}
            </UbuntuText>
          </View>
          <UbuntuText
            weight={400}
            style={tw`text-[14px] text-[${colors.newgray}] leading-none`}
          >
            {time}
          </UbuntuText>
          <View style={tw`absolute right-4 top-9`}>{Icon}</View>
          <UbuntuText
            weight={500}
            style={tw`text-[16px] text-black px-[12px] leading-none pt-2`}
          >
            {content}
          </UbuntuText>
        </View>
      </View>
    </>
  );
}
