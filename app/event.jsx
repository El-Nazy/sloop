import { View, Text, ScrollView } from "react-native";
import React from "react";
import Picture from "../assets/picture.svg";
import tw from "twrnc";
import Back from "../assets/ep_back.svg";
import { UbuntuText } from "../components/Texts";
import Dancer from "../assets/Frame130.jpg";
import { Image } from "expo-image";
import { CustomButton } from "../components/Buttons";
import { colors } from "../utils/constants";

export default function event() {
  return (
    <ScrollView>
      <View style={tw`mx-6 my-4`}>
        <View style={tw`flex flex-col gap-3`}>
          <View style={tw`flex flex-row gap-3`}>
            <Back />
            <UbuntuText weight={700} style={tw`text-[16px] my-0.5`}>
              Event
            </UbuntuText>
          </View>
          <View style={tw`flex flex-row gap-2`}>
            <Picture />
            <UbuntuText weight={700} style={tw`text-[14px] my-3`}>
              Extravagant praise
            </UbuntuText>
            <View style={tw`bg-[#7A1EF7] rounded-full h-5 w-10 my-3 ml-auto`}>
              <UbuntuText
                weight={400}
                style={tw`text-[8px] my-1 text-white text-center`}
              >
                free
              </UbuntuText>
            </View>
          </View>
          <Image
            style={{
              height: 260,
              width: 328,
              borderRadius: 10,
            }}
            source={require("../assets/Frame130.jpg")}
          />
          <UbuntuText weight={700} style={tw`text-[14px] text-[#040009]`}>
            Description
          </UbuntuText>
          <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
            Lorem ipsum dolor sit amet consectetur. Scelerisque nunc sed dictum
            eleifend mollis. Elementum id vitae
          </UbuntuText>
          <UbuntuText weight={700} style={tw`text-[10px]`}>
            See more
          </UbuntuText>
          <View style={tw`h-px bg-[#EEEEEE]  w-full `}></View>
        </View>

        <View style={tw`flex flex-col my-5 gap-2`}>
          <UbuntuText weight={700} style={tw``}>
            Speakers (3)
          </UbuntuText>
          <View style={tw`flex flex-row gap-2`}>
            <Picture />
            <UbuntuText weight={500} style={tw`text-[14px] my-3`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex flex-row gap-2`}>
            <Picture />
            <UbuntuText weight={500} style={tw`text-[14px] my-3`}>
              Godswill dan
            </UbuntuText>
          </View>
          <View style={tw`flex flex-row gap-2`}>
            <Picture />
            <UbuntuText weight={500} style={tw`text-[14px] my-3`}>
              Evans Tobechukwu
            </UbuntuText>
          </View>
        </View>
        <View style={tw`h-px bg-[#EEEEEE]  w-full `}></View>
        <View style={tw`my-3 flex flex-col gap-2`}>
          <View style={tw`flex flex-row gap-2`}>
            <UbuntuText weight={700}>Duration:</UbuntuText>
            <UbuntuText>2days</UbuntuText>
            <UbuntuText style={tw`text-gray-200`}>
              (22nd March - 23rd March, 2023)
            </UbuntuText>
          </View>
          <View style={tw`flex flex-row gap-2`}>
            <UbuntuText weight={700}>Day 1:</UbuntuText>
            <UbuntuText weight={400} style={tw`text-[#eeeeee]`}>
              7:00 PM
            </UbuntuText>
          </View>
          <View style={tw`flex flex-row gap-2`}>
            <UbuntuText weight={700}>Day 2:</UbuntuText>
            <UbuntuText weight={400} style={tw`text-[#eeeeee]`}>
              7:00 PM
            </UbuntuText>
          </View>
          <CustomButton
            style={{
              backgroundColor: colors.black,
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: 100,
              borderRadius: 18,
            }}
          >
            <UbuntuText
              weight={400}
              style={tw`text-white text-[12px] text-center`}
            >
              set reminder
            </UbuntuText>
          </CustomButton>
        </View>
        <View style={tw`h-px bg-[#EEEEEE]  w-full `}></View>
      </View>
    </ScrollView>
  );
}
