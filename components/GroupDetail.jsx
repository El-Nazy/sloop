import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import Picture from "../assets/picture.svg";
import { UbuntuText } from "./Texts";
import Circle from "../assets/Circle.svg";

export function GroupDetail() {
  return (
    <View style={tw`flex-1`}>
      <ScrollView style={tw`mx-2 p-2 `}>
        <UbuntuText weight={700} style={tw`text-[16px]`}>
          Groups in this community
        </UbuntuText>
        <View style={tw`flex flex-col gap-3 my-5`}>
          <View style={tw`flex flex-row gap-1 `}>
            <Picture />
            <View style={tw`flex flex-col gap-2`}>
              <UbuntuText weight={700} style={tw`text-[#040009] text-[14px]`}>
                The Candle
              </UbuntuText>
              <UbuntuText
                weight={400}
                style={tw`text-[#B0B0B0] text-[12px] leading-[14px]`}
              >
                Brief bio of the group here...
              </UbuntuText>
            </View>
          </View>
          <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
          <View style={tw`flex flex-row gap-1 `}>
            <Picture />
            <View style={tw`flex flex-col gap-2`}>
              <UbuntuText weight={700} style={tw`text-[#040009] text-[14px]`}>
                Media and light
              </UbuntuText>
              <UbuntuText
                weight={400}
                style={tw`text-[#B0B0B0] text-[12px] leading-[14px]`}
              >
                Brief bio of the group here...
              </UbuntuText>
            </View>
          </View>
          <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
          <View style={tw`flex flex-row gap-1 `}>
            <Picture />
            <View style={tw`flex flex-col gap-2`}>
              <UbuntuText weight={700} style={tw`text-[#040009] text-[14px]`}>
                Light and sound
              </UbuntuText>
              <UbuntuText
                weight={400}
                style={tw`text-[#B0B0B0] text-[12px] leading-[14px]`}
              >
                Brief bio of the group here...
              </UbuntuText>
            </View>
          </View>
          <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
        </View>
        <View style={tw`my-4`}>
          <UbuntuText weight={500} style={tw`text-[#9C54FD] text-center`}>
            View all
          </UbuntuText>
        </View>
      </ScrollView>
      <Circle style={tw`absolute right-0 bottom-0`} />
    </View>
  );
}
