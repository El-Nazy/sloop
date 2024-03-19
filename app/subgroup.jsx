import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Back from "../assets/arrow_white.svg";
import Stack from "../assets/Stack.svg";
import { UbuntuText } from "../components/Texts";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import { Image } from "expo-image";
import { colors } from "../utils/constants";
import { CustomButton } from "../components/Buttons";

export default function subgroup() {
  return (
    <View style={tw` flex-1 `}>
      <View style={tw`bg-[#1D092D]   h-25 `}>
        <View style={tw`flex-row my-8 mx-6 gap-3`}>
          <Back />
          <UbuntuText weight={500} style={tw`text-white text-[20px] `}>
            Create Sub-group
          </UbuntuText>
        </View>
        <View style={tw`my-6 mx-4 flex-row gap-2`}>
          <Image
            style={{
              width: 78,
              height: 78,
            }}
            source={require("../assets/profile-image-placeholder.png")}
          />
          <View
            style={{
              height: 38,
              width: "70%",
              borderBottomWidth: 2,
              borderBottomColor: colors.purple2,
              borderRadius: 4,
              paddingHorizontal: 8,
              marginVertical: 14,
            }}
          >
            <UbuntuTextInput
              weight={400}
              placeholder="Sub-group name"
              placeholderTextColor={colors.black}
            />
          </View>
        </View>
        <View style={tw`h-px bg-[#EEEEEE]  w-full `}></View>
      </View>
      <View style={tw`mt-35 h-86px px-12`}>
        <UbuntuTextInput
          placeholder="Description"
          placeholderTextColor={colors.gray2}
          multiline
          style={{
            borderRadius: 12,
            backgroundColor: colors.gray3,
            padding: 10,
            height: 86,
            textAlignVertical: "top",
          }}
        />
      </View>
      <View style={tw`h-px bg-[#EEEEEE]  w-full mt-7`}></View>
      <View style={tw`mt-3 mx-5 gap-3`}>
        <UbuntuText>Add members</UbuntuText>
        <Stack />
      </View>
      <View style={tw`p-6 w-full flex mt-20 ml-18`}>
        <CustomButton
          style={{
            borderRadius: 16,
            backgroundColor: colors.purple,
            width: 189,
            height: 38,
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
            Create
          </UbuntuText>
        </CustomButton>
      </View>
    </View>
  );
}
