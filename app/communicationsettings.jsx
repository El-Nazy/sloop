import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { UbuntuText } from "../components/Texts";
import Back from "../assets/back-arrow.svg";
import Circle from "../assets/Component 8.svg";
import Picture from "../assets/picture.svg";
import XXXX from "../assets/X.svg";
import { CustomButton } from "../components/Buttons";
import { colors } from "../utils/constants";

export default function communicationsettings() {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-row mx-5 my-5 gap-3`}>
        <Back />
        <UbuntuText weight={500} style={tw`text-[20px]`}>
          Settings
        </UbuntuText>
      </View>
      <View style={tw`mx-5 gap-3`}>
        <UbuntuText weight={400} style={tw`text-[#9E9CA0] text-[14px]`}>
          TV privacy
        </UbuntuText>
        <View style={tw`flex-row gap-3`}>
          <Circle />
          <UbuntuText weight={400} style={tw`text-[12px]`}>
            Everyone in the community
          </UbuntuText>
        </View>
        <View style={tw`flex-row gap-3`}>
          <Circle />
          <UbuntuText weight={400} style={tw`text-[12px] text-center`}>
            Only those in:
          </UbuntuText>
        </View>
      </View>
      <View style={tw`mx-8 gap-3`}>
        <View style={tw`flex-row gap-1 mt-3 `}>
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
        <View style={tw`flex-row gap-1 `}>
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
      </View>
      <View style={tw``}>
        <ScrollView showsVerticalScrollIndicator={false} style={tw``}>
          <View style={tw` mx-8 mt-3 gap-3`}>
            <View style={tw`flex-row gap-2`}>
              <Picture />
              <UbuntuText weight={400} style={tw`text-[12px] mt-2.5`}>
                Group name
              </UbuntuText>
            </View>
            <View style={tw`flex-row gap-2`}>
              <Picture />
              <UbuntuText weight={400} style={tw`text-[12px] mt-2.5`}>
                Group name
              </UbuntuText>
            </View>
            <View style={tw`flex-row gap-2`}>
              <Picture />
              <UbuntuText weight={400} style={tw`text-[12px] mt-2.5`}>
                Group name
              </UbuntuText>
            </View>
            <View style={tw`flex-row gap-2`}>
              <Picture />
              <UbuntuText weight={400} style={tw`text-[12px] mt-2.5`}>
                Group name
              </UbuntuText>
            </View>
            <View style={tw`flex-row gap-2`}>
              <Picture />
              <UbuntuText weight={400} style={tw`text-[12px] mt-2.5`}>
                Group name
              </UbuntuText>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={tw` mx-5 my-5 gap-3`}>
        <UbuntuText weight={500} style={tw`text-[14px] text-[#9E9CA0]`}>
          Schecdule privacy
        </UbuntuText>
        <View style={tw`flex-row gap-3`}>
          <Circle />
          <UbuntuText weight={400} style={tw`text-[12px]`}>
            Everyone in the community
          </UbuntuText>
        </View>
        <View style={tw`flex-row gap-3`}>
          <Circle />
          <UbuntuText weight={400} style={tw`text-[12px] text-center`}>
            Only those in:
          </UbuntuText>
        </View>
      </View>
      <View style={tw`ml-25 mt-9  w-full flex `}>
        <CustomButton
          style={{
            borderRadius: 40,
            backgroundColor: colors.purple2,
            width: 138,
            height: 39,
          }}
        >
          <UbuntuText
            weight={500}
            style={{
              fontSize: 12,
              lineHeight: 16,
              textAlign: "center",
              color: colors.white,
              paddingVertical: 9,
            }}
          >
            Save changes
          </UbuntuText>
        </CustomButton>
      </View>
    </View>
  );
}
