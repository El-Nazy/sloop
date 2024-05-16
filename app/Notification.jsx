import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../components/SafeArea";
import tw, { style } from "twrnc";
import Notify from "../assets/basil_notification-outline.svg";
import Search from "../assets/Icon.svg";
import Horizontal from "../assets/mi_options-vertical.svg";
import { colors } from "../utils/constants";
import Like from "../assets/RedLike.svg";
import Chat from "../assets/Chat.svg";
import Dot from "../assets/dot.svg";
import { UbuntuText } from "../components/Texts";

export default function Notification() {
  return (
    <SafeArea>
      <View style={tw`flex-1 w-full  gap-[14px]`}>
        <View style={tw`bg-white  shadow-lg h-[60px] w-full `}>
          <View style={tw` flex-row justify-between py-2 `}>
            <View
              style={tw`px-2 w-[172px] h-[44px] bg-white   rounded-[12px] flex-row gap-3 items-center  shadow-md`}
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
        <UbuntuText weight={500} style={tw`text-[20px] text-black px-[12px] `}>
          Notifications
        </UbuntuText>
        <View style={tw`bg-white  shadow-lg h-[40px]  w-full`}>
          <UbuntuText
            weight={700}
            style={tw`text-[16px] text-[${colors.darkPurple}] text-center py-2`}
          >
            Mark all as read
          </UbuntuText>
        </View>
        <UbuntuText weight={500} style={tw`text-[20px] text-black px-[12px] `}>
          Today
        </UbuntuText>
        <View style={tw`w-full bg-white shadow-lg py-2`}>
          <View style={tw`pt-3 px-3 gap-4`}>
            <View style={tw`flex-row gap-3 items-center`}>
              <Dot />
              <UbuntuText
                weight={500}
                style={tw`text-[16px] text-black leading-none`}
              >
                Emma commented on an update you posted
              </UbuntuText>
            </View>
            <UbuntuText
              weight={400}
              style={tw`text-[14px] text-[${colors.newgray}] leading-none`}
            >
              Today at 4:50 AM
            </UbuntuText>
            <View style={tw`absolute right-4 top-9`}>
              <Chat />
            </View>
            <UbuntuText
              weight={500}
              style={tw`text-[16px] text-black px-[12px] leading-none pt-2`}
            >
              Lorem ipsum dolor sit amet, consectur adipisciang elit, sed do
              eiusmod impor...
            </UbuntuText>
          </View>
        </View>
        <View style={tw`w-full bg-white shadow-lg py-2`}>
          <View style={tw`pt-3 px-3 gap-4`}>
            <View style={tw`flex-row gap-3 items-center`}>
              <Dot />
              <UbuntuText
                weight={500}
                style={tw`text-[16px] text-black leading-none`}
              >
                Emma commented on an update you posted
              </UbuntuText>
            </View>
            <UbuntuText
              weight={400}
              style={tw`text-[14px] text-[${colors.newgray}] leading-none`}
            >
              Today at 4:50 AM
            </UbuntuText>
            <View style={tw`absolute right-4 top-9`}>
              <Like />
            </View>
            <UbuntuText
              weight={500}
              style={tw`text-[16px] text-black px-[12px] leading-none pt-2`}
            >
              Lorem ipsum dolor sit amet, consectur adipisciang elit, sed do
              eiusmod impor...
            </UbuntuText>
          </View>
        </View>
        <View style={tw`w-full bg-white shadow-lg py-2`}>
          <View style={tw`pt-3 px-3 gap-4`}>
            <View style={tw`flex-row gap-3 items-center`}>
              <Dot />
              <UbuntuText
                weight={500}
                style={tw`text-[16px] text-black leading-none`}
              >
                Emma commented on an update you posted
              </UbuntuText>
            </View>
            <UbuntuText
              weight={400}
              style={tw`text-[14px] text-[${colors.newgray}] leading-none`}
            >
              Today at 4:50 AM
            </UbuntuText>
            <View style={tw`absolute right-4 top-9`}>
              <Like />
            </View>
            <UbuntuText
              weight={500}
              style={tw`text-[16px] text-black px-[12px] leading-none pt-2`}
            >
              Lorem ipsum dolor sit amet, consectur adipisciang elit, sed do
              eiusmod impor...
            </UbuntuText>
          </View>
        </View>
      </View>
    </SafeArea>
  );
}
