import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Cancel from "../assets/cancel.svg";
import { UbuntuText } from "../components/Texts";
import Frame from "../assets/Framecircle.svg";
import Framevid from "../assets/Framevid.svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function viewschecduled() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-white gap-4`}>
        <View style={tw`pt-6 px-5 flex-row gap-2`}>
          <Cancel />
          <UbuntuText weight={700} style={tw`self-center text-[16px]`}>
            Scheduled
          </UbuntuText>
        </View>
        <View style>
          <View style={tw`bg-white shadow-lg w-full h-[522px] `}>
            <View style={tw`px-3 pt-4 gap-2`}>
              <UbuntuText weight={400} style={tw`self-start text-[14px]`}>
                Meet is scheduled to start in:
              </UbuntuText>
              <View style={tw`self-center`}>
                <Frame />
              </View>
              <View style={tw`flex-row gap-2 justify-between`}>
                <View style={tw`bg-white shadow-lg w-[80.5px] h-[64px]`}>
                  <UbuntuText
                    weight={500}
                    style={tw`self-center pt-2 text-[48px]`}
                  >
                    {" "}
                    3
                  </UbuntuText>
                </View>
                <View style={tw`bg-white shadow-lg w-[80.5px] h-[64px]`}>
                  <UbuntuText
                    weight={500}
                    style={tw`self-center pt-2 text-[48px]`}
                  >
                    {" "}
                    72
                  </UbuntuText>
                </View>
                <View style={tw`bg-white shadow-lg w-[80.5px] h-[64px]`}>
                  <UbuntuText
                    weight={500}
                    style={tw`self-center pt-2 text-[48px]`}
                  >
                    {" "}
                    32
                  </UbuntuText>
                </View>
                <View style={tw`bg-white shadow-lg w-[80.5px] h-[64px]`}>
                  <UbuntuText
                    weight={500}
                    style={tw`self-center pt-2 text-[48px]`}
                  >
                    {" "}
                    01
                  </UbuntuText>
                </View>
              </View>
              <View style={tw`flex-row gap-2 justify-between`}>
                <View style={tw`bg-white shadow-lg w-[80.5px] h-[24px]`}>
                  <UbuntuText
                    weight={400}
                    style={tw`text-[12px] self-center pt-2`}
                  >
                    DAYS
                  </UbuntuText>
                </View>
                <View style={tw`bg-white shadow-lg w-[80.5px] h-[24px]`}>
                  <UbuntuText
                    weight={400}
                    style={tw`text-[12px] self-center pt-2`}
                  >
                    HOURS
                  </UbuntuText>
                </View>
                <View style={tw`bg-white shadow-lg w-[80.5px] h-[24px]`}>
                  <UbuntuText
                    weight={400}
                    style={tw`text-[12px] self-center pt-2`}
                  >
                    {" "}
                    MINUTES
                  </UbuntuText>
                </View>
                <View style={tw`bg-white shadow-lg w-[80.5px] h-[24px]`}>
                  <UbuntuText
                    weight={400}
                    style={tw`text-[12px] self-center pt-2`}
                  >
                    SECONDS
                  </UbuntuText>
                </View>
              </View>
              <View style={tw`self-center`}>
                <Framevid />
              </View>
              <UbuntuText weight={400} style={tw`text-[12px]`}>
                Video description lorem lipsum odio ornare sed. Rhoncus
                hendrerit tincidunt sit iaculis commodo vitae suscipit nibh. See
                more
              </UbuntuText>
            </View>
          </View>
        </View>
        <View style={tw`bg-white w-full h-[187px] shadow-lg px-5 gap-4`}>
          <View style={tw`flex-row  pt-5 justify-between`}>
            <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
              Description
            </UbuntuText>
            <UbuntuText weight={500} style={tw`text-[14px] text-[#9E9CA0]`}>
              Graceville Community chat
            </UbuntuText>
          </View>
          <View style={tw`flex-row  justify-between items-center`}>
            <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
              Participants
            </UbuntuText>
            <UbuntuText weight={500} style={tw`text-[14px] text-[#9E9CA0]`}>
              All Community members
            </UbuntuText>
          </View>
          <UbuntuText weight={500} style={tw`text-[14px] text-black`}>
            Your Schedule was published as an update
          </UbuntuText>
          <UbuntuText weight={500} style={tw`text-[12px] text-[#9E9CA0]`}>
            Participants will see this in the update section
          </UbuntuText>
        </View>
      </View>
    </SafeAreaView>
  );
}
