import { View, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { UbuntuText } from "../components/Texts";
import Picture from "../assets/picture.svg";
import Circle from "../assets/Circle.svg";

export function GroupList() {
  return (
    <View style={tw`flex-1`}>
      <ScrollView style={tw`mx-2 p-2`}>
        <UbuntuText weight={500} style={tw`text-[#040009] text-[20px]`}>
          Groups You Joined
        </UbuntuText>
        <View style={tw`flex flex-row gap-1 my-3`}>
          <Picture />
          <View style={tw`flex flex-col gap-2`}>
            <UbuntuText weight={700} style={tw`text-[#040009] `}>
              The candles
            </UbuntuText>
            <UbuntuText style={tw`text-[#0A090C]`}>
              Ade John: Let’s all meet by 8:pm...
            </UbuntuText>
          </View>
          <View style={tw`flex flex-col  gap-1`}>
            <UbuntuText style={tw`text-[#0A090C] relative right-5`}>
              Today, 8:11 PM
            </UbuntuText>
            <View
              style={tw`bg-[#7A1EF7] rounded-full  h-4 w-4 relative left-15 my-1`}
            >
              <UbuntuText
                style={tw`text-[#FEFEFE] text-[10px] my-0.5 text-center `}
              >
                2
              </UbuntuText>
            </View>
          </View>
        </View>
        <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
        <View>
          <View style={tw`flex flex-row gap-1 my-3`}>
            <Picture />
            <View style={tw`flex flex-col gap-2`}>
              <UbuntuText weight={700} style={tw`text-[#040009]`}>
                The candles
              </UbuntuText>
              <UbuntuText style={tw`text-[#0A090C]`}>
                Ade John: Let’s all meet by 8:pm...
              </UbuntuText>
            </View>
            <View style={tw`flex flex-col gap-1  `}>
              <UbuntuText style={tw`text-[#0A090C] relative right-5`}>
                Today, 8:11 PM
              </UbuntuText>
              <View
                style={tw`bg-[#7A1EF7] rounded-full  h-4 w-4 relative left-15 my-1`}
              >
                <UbuntuText
                  style={tw`text-[#FEFEFE] text-[10px] my-0.5 text-center `}
                >
                  2
                </UbuntuText>
              </View>
            </View>
          </View>
          <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
          <View style={tw`my-5 flex flex-row gap-16 my-8`}>
            <UbuntuText weight={700} style={tw`text-[#040009] text-[16px]`}>
              Other groups in this community
            </UbuntuText>
          </View>
          <View style={tw`flex flex-col gap-3 -my-2`}>
            <View style={tw`flex flex-row gap-1 relative `}>
              <Picture />
              <View style={tw`flex flex-col gap-2`}>
                <UbuntuText weight={700} style={tw`text-[#040009] text-[14px]`}>
                  The candles
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
            <View style={tw`flex flex-row gap-1 relative `}>
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
            <View style={tw`flex flex-row gap-1 relative `}>
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
            <UbuntuText
              weight={500}
              style={tw`text-center text-[12px] text-[#9C54FD]`}
            >
              View all
            </UbuntuText>
          </View>
        </View>
      </ScrollView>
      <Circle style={tw`absolute right-0 bottom-0`} />
    </View>
  );
}
