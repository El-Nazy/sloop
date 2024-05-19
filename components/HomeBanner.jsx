import { View, Text } from "react-native";
import React from "react";
import Notify from "../assets/BellNotification.svg";
import Search from "../assets/SearchBar.svg";
import Horizontal from "../assets/mi_options-vertical.svg";
import { UbuntuText } from "../components/Texts";
import tw, { style } from "twrnc";
export default function HomeBanner() {
  return (
    <>
      <View style={tw`bg-white  shadow-lg h-[60px] w-full `}>
        <View style={tw` flex-row justify-between py-2 `}>
          <View
            style={tw`px-2  h-[44px] bg-white   rounded-[12px] flex-row gap-3 items-center  shadow-md`}
          >
            <View
              style={tw` rounded-[12px] bg-[#E2E200] h-[44px] w-[44px] items-center`}
            >
              <UbuntuText
                weight={500}
                style={tw`font-bold text-center   text-[20px] items-center py-2`}
              >
                C
              </UbuntuText>
            </View>

            <UbuntuText weight={500} style={tw`text-[20px] py-2`}>
              GracevilleCC
            </UbuntuText>
          </View>

          <View style={tw`flex-row items-center gap-3 `}>
            <Notify />
            <Search />
            <Horizontal />
          </View>
        </View>
      </View>
    </>
  );
}
