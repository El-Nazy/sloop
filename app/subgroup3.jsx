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
import XXXX from "../assets/X.svg";

export default function subgroup3() {
  return (
    <View style={tw`flex-1 h-full`}>
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
          6 of 554 selected
        </UbuntuText>
      </View>
      <View style={tw``}>
        <ScrollView
          style={tw``}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`flex-grow`}
        >
          <View style={tw` flex-row gap-3 my-4 mx-6`}>
            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>
            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>
            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>
            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>
            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>
            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>
            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>
            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>

            <View>
              <Picture />
              <XXXX style={tw`absolute left-6`} />
              <UbuntuText weight={400} style={tw`text-[14px] text-[#0A090C]`}>
                Emman...
              </UbuntuText>
            </View>
          </View>
        </ScrollView>
        <View style={tw`h-px bg-[#EEEEEE] w-full`} />
      </View>

      <UbuntuText weight={500} style={tw`mx-6 mt-4`}>
        People in Graceville Community
      </UbuntuText>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1 `}>
        <View style={tw`flex-1 gap-3 mx-6 mt-6 `}>
          <View style={tw`flex-row  gap-4 flex-1`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-4 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
          <View style={tw`flex-row flex-1 gap-4`}>
            <Picture />
            <UbuntuText weight={400} style={tw`mt-3 text-[12px]`}>
              Emmanuel Davies
            </UbuntuText>
          </View>
        </View>
      </ScrollView>
      <Frame style={tw`absolute right-0 bottom-0`} />
    </View>
  );
}
