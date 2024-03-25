import { View, Text } from "react-native";
import React from "react";
import Cancel from "../assets/cancel.svg";
import Rightarrow from "../assets/rightarrow.svg";
import Photo from "../assets/photos.svg";
import tw from "twrnc";
import { colors } from "../utils/constants";
import { UbuntuText } from "../components/Texts";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import Buttontoggle from "../assets/buttontoggle.svg";
import { CustomButton } from "../components/Buttons";

export default function shecdulecontent() {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`py-8 px-4 flex-row gap-3 `}>
        <Cancel />
        <UbuntuText weight={500} style={tw`items-center text-[20px]`}>
          Schedule contents
        </UbuntuText>
      </View>
      <View style={tw`h-[441px] bg-white w-full shadow-lg`}>
        <View style={tw`pt-6 px-4`}>
          <View style={tw`rounded-[12px] w-full  h-[229px]  bg-[#EEEEEE]`}>
            <View style={tw`flex items-center justify-center pt-20`}>
              <View
                style={tw`bg-[#706080] w-[148px] h-[32px] flex-row rounded-[4px]`}
              >
                <Photo style={tw`self-center px-6`} />
                <UbuntuText
                  weight={400}
                  style={tw`text-white text-[14px] self-center`}
                >
                  Add thumbnail
                </UbuntuText>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`gap-2`}>
          <View style={tw`px-4 flex-row justify-between pt-2`}>
            <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
              Date
            </UbuntuText>
            <View style={tw`flex-row gap-3`}>
              <UbuntuText weight={500} style={tw`text-[#9E9CA0]`}>
                4/10/2024
              </UbuntuText>
              <Rightarrow style={tw`self-center`} />
            </View>
          </View>

          <View style={tw`h-px bg-[#EEEEEE]  w-[323.6px] self-center `} />
          <View style={tw`px-4 flex-row justify-between pt-2`}>
            <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
              From
            </UbuntuText>
            <View style={tw`flex-row gap-3`}>
              <UbuntuText weight={500} style={tw`text-[#9E9CA0]`}>
                4:00 PM
              </UbuntuText>
              <Rightarrow style={tw`self-center`} />
            </View>
          </View>
          <View style={tw`h-px bg-[#EEEEEE]  w-[323.6px] self-center `} />
          <View style={tw`px-4 flex-row justify-between pt-2`}>
            <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
              To
            </UbuntuText>
            <View style={tw`flex-row gap-3`}>
              <UbuntuText weight={500} style={tw`text-[#9E9CA0]`}>
                5:00 PM
              </UbuntuText>
              <Rightarrow style={tw`self-center`} />
            </View>
          </View>
          <View style={tw`h-px bg-[#EEEEEE]  w-[323.6px] self-center`} />
          <View
            style={{
              height: 38,
              width: 328,
              borderBottomWidth: 2,
              borderBottomColor: colors.gray2,
              borderRadius: 4,
              paddingHorizontal: 8,

              marginVertical: 14,
              alignSelf: "center",
            }}
          >
            <UbuntuTextInput
              weight={400}
              placeholder="Title"
              placeholderTextColor={colors.black}
            />
          </View>
        </View>
        <View style={tw`px-4 pt-3`}>
          <UbuntuText weight={500} style={tw`text-[18px]`}>
            Access
          </UbuntuText>
        </View>
        <View style={tw`pt-2`}>
          <View style={tw` w-full shadow-lg bg-white h-[131px]`}>
            <View style={tw`gap-3`}>
              <View style={tw`px-4 flex-row justify-between pt-4`}>
                <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
                  Participants
                </UbuntuText>
                <View style={tw`flex-row gap-3`}>
                  <UbuntuText weight={500} style={tw`text-[#9E9CA0]`}>
                    All community members
                  </UbuntuText>
                  <Rightarrow style={tw`self-center`} />
                </View>
              </View>
              <View style={tw`h-px bg-[#EEEEEE]  w-[323.6px] self-center `} />
              <View style={tw`px-4 flex-row justify-between `}>
                <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
                  Automatically publish as update
                </UbuntuText>

                <Buttontoggle style={tw`self-center`} />
              </View>
              <View style={tw`px-4 flex-row justify-between `}>
                <UbuntuText weight={400} style={tw`text-[14px] text-[#9E9CA0]`}>
                  Participants will see this in the update section
                </UbuntuText>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`py-3 pl-5 w-full flex `}>
          <CustomButton
            style={{
              borderRadius: 12,
              backgroundColor: colors.purple,
              width: 93,
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
              Confirm
            </UbuntuText>
          </CustomButton>
        </View>
      </View>
    </View>
  );
}
