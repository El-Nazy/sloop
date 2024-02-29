import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import Back from "../assets/arrow_white.svg";
import { UbuntuText } from "../components/Texts";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import { colors } from "../utils/constants";
import Vertical from "../assets/vertical.svg";
import Searched from "../assets/Searched.svg";
import Picture from "../assets/picture.svg";
import Frame from "../assets/Frame300.svg";

export default function subgroup2() {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`bg-[#1D092D]   h-25 `}>
        <View style={tw`flex-row my-8 mx-6 gap-3`}>
          <Back />
          <UbuntuText weight={500} style={tw`text-white text-[20px] `}>
            Create Sub-group
          </UbuntuText>
          <View style={tw`flex-row ml-auto gap-3`}>
            <Searched />
            <Vertical />
          </View>
        </View>
        <UbuntuText
          weight={400}
          style={tw`text-white text-[12px] ml-8 relative bottom-6`}
        >
          Add members
        </UbuntuText>
      </View>
      <View style={tw`mx-6 mt-6 `}>
        <UbuntuText weight={500} style={tw` text-[12px]`}>
          People in Graceville Community
        </UbuntuText>
      </View>
      <ScrollView style={tw`flex-1`}>
        <View style={tw`mx-6 mt-6 gap-4`}>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`text-[12px] mt-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
        </View>
      </ScrollView>
      <Frame style={tw`absolute right-0 bottom-0`} />
    </View>
  );
}
// <View style={tw`flex-1 `}></View>
