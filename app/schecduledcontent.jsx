import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { UbuntuText } from "../components/Texts";
import Horizontal from "../assets/mi_options-vertical.svg";
import Framecircle from "../assets/Framecircle.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { colors } from "../utils/constants";
import { CustomButton } from "../components/Buttons";

export default function schecduledcontent() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-white gap-3`}>
        <View
          style={tw`pt-[20px] flex-row justify-between items-center px-[16px]`}
        >
          <UbuntuText weight={500} style={tw`text-[20px]`}>
            Graceville TV
          </UbuntuText>
          <Horizontal />
        </View>
        <View style={tw`h-px w-full bg-[#9E9CA0]`} />
        <View style={tw`flex-row justify-between items-center gap-12`}>
          <View
            style={tw`px-[16px] flex-row items-center justify-center gap-1`}
          >
            <UbuntuText weight={500} style={tw`text-[#706080] text-[18px]`}>
              Scheduled
            </UbuntuText>
            <View
              style={tw`w-[14px] h-[16px] bg-[#310A50] flex justify-center items-center rounded-lg self-center`}
            >
              <UbuntuText
                weight={400}
                style={tw`text-white self-center text-[10px] leading-[10px]`}
              >
                2
              </UbuntuText>
            </View>
          </View>
          <View style={tw`gap-4 justify-center `}>
            <UbuntuText
              weight={700}
              style={tw`text-[#0A090C] text-[18px] self-center pt-3`}
            >
              Live
            </UbuntuText>
            <View
              style={tw`border-[#310A50] w-[38px] border-2 rounded-[8px]`}
            />
          </View>
        </View>
        <View style={tw`gap-3`}>
          <View style={tw`px-[8px] flex-row justify-between w-full pt-5`}>
            <View style={tw`flex-row gap-[14px]`}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 500,
                }}
                source={require("../assets/Framecircle2.jpg")}
              />
              <View style={tw`self-center gap-3`}>
                <UbuntuText weight={500} style={tw`text-[14px] text-[#0A090C]`}>
                  Long Schedule Title Here
                </UbuntuText>
                <UbuntuText weight={400} style={tw`text-[12px] text-[#9E9CA0]`}>
                  23/03/2024 | 6:00PM
                </UbuntuText>
              </View>
            </View>
            <TouchableOpacity style={tw`self-center`}>
              <CustomButton
                style={{
                  borderRadius: 4,
                  backgroundColor: colors.white,
                  width: 55,
                  height: 31,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: colors.purple4,
                }}
              >
                <UbuntuText
                  weight={400}
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    textAlign: "center",
                    color: colors.purple4,
                    paddingVertical: 4,
                  }}
                >
                  watch
                </UbuntuText>
              </CustomButton>
            </TouchableOpacity>
          </View>
          <View style={tw`px-[8px] flex-row justify-between w-full pt-5`}>
            <View style={tw`flex-row gap-[14px]`}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 500,
                }}
                source={require("../assets/Framecircle2.jpg")}
              />
              <View style={tw`self-center gap-3`}>
                <UbuntuText weight={500} style={tw`text-[14px] text-[#0A090C]`}>
                  Long Schedule Title Here
                </UbuntuText>
                <UbuntuText weight={400} style={tw`text-[12px] text-[#9E9CA0]`}>
                  23/03/2024 | 6:00PM
                </UbuntuText>
              </View>
            </View>
            <TouchableOpacity style={tw`self-center`}>
              <CustomButton
                style={{
                  borderRadius: 4,
                  backgroundColor: colors.white,
                  width: 55,
                  height: 31,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: colors.darkpurple4,
                }}
              >
                <UbuntuText
                  weight={400}
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    textAlign: "center",
                    color: colors.purple4,
                    paddingVertical: 4,
                  }}
                >
                  watch
                </UbuntuText>
              </CustomButton>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
