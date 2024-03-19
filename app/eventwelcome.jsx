import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { UbuntuText } from "../components/Texts";
import Vertical from "../assets/mi_options-vertical.svg";
import Circle from "../assets/Circle.svg";

export default function eventwelcome() {
  return (
    <View style={tw`flex-1 gap-5`}>
      <View style={tw`mx-4 my-6 flex-row `}>
        <UbuntuText weight={500} style={tw`text-[20px]`}>
          Graceville TV
        </UbuntuText>
        <Vertical style={tw`ml-auto`} />
      </View>
      <View style={tw`mx-4`}>
        <UbuntuText weight={700} style={tw`text-[16px] text-[#9E9CA0]`}>
          Spotlight
        </UbuntuText>
      </View>
      <View style={tw`mx-4`}>
        <UbuntuText weight={500} style={tw`text-[18px]`}>
          Nothing to see yet!
        </UbuntuText>
      </View>
      <View style={tw`h-px bg-[#EEEEEE]  w-full `} />
      <View style={tw`mx-4`}>
        <UbuntuText weight={700} style={tw`text-[16px] text-[#9E9CA0]`}>
          Upcoming
        </UbuntuText>
      </View>
      <View style={tw`mx-4`}>
        <UbuntuText weight={500} style={tw`text-[18px] `}>
          Nothing to see yet!
        </UbuntuText>
      </View>
      <Circle style={tw`absolute right-0 bottom-5`} />
    </View>
  );
}
