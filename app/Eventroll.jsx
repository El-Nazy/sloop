import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { UbuntuText } from "../components/Texts";
import Vertical from "../assets/mi_options-vertical.svg";
import Circle from "../assets/Circle.svg";
import Frame from "../assets/Frame 332.svg";
import Frame2 from "../assets/Frame 333.svg";
import Up from "../assets/Vector 1.svg";
import Frame3 from "../assets/Frame 341.svg";

export default function Eventroll() {
  return (
    <View style={tw`flex-1  `}>
      <View style={tw`flex-row mx-4 my-6 `}>
        <UbuntuText weight={500} style={tw`text-[20px]`}>
          Graceville TV
        </UbuntuText>
        <Vertical style={tw`ml-auto`} />
      </View>
      <View style={tw`mt-3 mx-4 `}>
        <UbuntuText weight={700} style={tw`text-[16px] text-[#9E9CA0]`}>
          Spotlight
        </UbuntuText>
      </View>
      <View style={tw``}>
        <ScrollView
          style={tw`w-full`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`flex-grow`}
        >
          <View style={tw`mt-2 flex-row mx-4 `}>
            <Frame />
            <Frame2 />
            <Frame />
            <Frame2 />
            <Frame />
            <Frame2 />
            <Frame />
            <Frame2 />
          </View>
        </ScrollView>
      </View>
      <View style={tw`mt-8 flex-row mx-4 `}>
        <UbuntuText weight={400} style={tw`text-[14px] text-[#9E9CA0]`}>
          Viewed Spotlight
        </UbuntuText>
        <Up style={tw`ml-auto mt-1`} />
      </View>
      <View style={tw``}>
        <ScrollView
          style={tw`w-full`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`flex-grow`}
        >
          <View style={tw`mt-2 flex-row mx-4`}>
            <Frame />
            <Frame2 />
            <Frame />
            <Frame2 />
            <Frame />
            <Frame2 />
            <Frame />
            <Frame2 />
          </View>
        </ScrollView>
      </View>
      <View style={tw`mt-4`}>
        <View style={tw`h-px bg-[#EEEEEE]  w-full `} />
      </View>
      <View style={tw`mt-5  mx-4 `}>
        <UbuntuText weight={400} style={tw`text-[14px] text-[#9E9CA0]`}>
          Upcoming
        </UbuntuText>
      </View>
      <View style={tw`mx-4 mt-3 gap-3`}>
        <View style={tw`flex-row gap-2`}>
          <Frame3 />
          <View style={tw`flex-col gap-2`}>
            <UbuntuText weight={700} style={tw`text-[12px] mt-1`}>
              Title here
            </UbuntuText>
            <UbuntuText weight={400} style={tw`text-[12px] text-[#9E9CA0]`}>
              23/03/2024 | 6:00PM
            </UbuntuText>
          </View>
        </View>
        <View style={tw`flex-row gap-2`}>
          <Frame3 />
          <View style={tw`flex-col gap-2`}>
            <UbuntuText weight={700} style={tw`text-[12px] mt-1`}>
              Title here
            </UbuntuText>
            <UbuntuText weight={400} style={tw`text-[12px] text-[#9E9CA0]`}>
              23/03/2024 | 6:00PM
            </UbuntuText>
          </View>
        </View>
        <View style={tw`flex-row gap-2`}>
          <Frame3 />
          <View style={tw`flex-col gap-2`}>
            <UbuntuText weight={700} style={tw`text-[12px] mt-1`}>
              Title here
            </UbuntuText>
            <UbuntuText weight={400} style={tw`text-[12px] text-[#9E9CA0]`}>
              23/03/2024 | 6:00PM
            </UbuntuText>
          </View>
        </View>
      </View>
      <Circle style={tw`absolute bottom-0 right-0`} />
    </View>
  );
}
