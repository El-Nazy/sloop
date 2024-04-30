import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import Back from "../assets/back-arrow.svg";
import Picture from "../assets/picture.svg";
import Rectangle from "../assets/Frame 52.svg";
import Icon from "../assets/Group 31.svg";
import Icons from "../assets/ant-design_message-outlined.svg";

import tw from "twrnc";
import { SafeArea } from "../components/SafeArea";
import { UbuntuText } from "../components/Texts";
import Bell from "../assets/Bell.svg";
import Warning from "../assets/warning.svg";
import Blocked from "../assets/block.svg";
import { CustomButton } from "../components/Buttons";
import { colors } from "../utils/constants";

export default function communityblock() {
  const [toggle, setToggled] = useState("left");
  const [showCard, setShowCard] = useState(false);
  const [blockText, setBlockText] = useState("Block");

  const togglePosition = () => {
    setToggled(toggle === "left" ? "right" : "left");
  };

  const handlePress = () => {
    setShowCard(true);
    setBlockText(blockText === "Block" ? "Unblock" : "Block");
  };

  const closeCard = () => {
    setShowCard(false);
    setBlockText("Block");
  };

  return (
    <SafeArea style={tw`pt-12 `}>
      <View style={tw` px-[20.5px] `}>
        <View style={tw`flex-row justify-between pt-5`}>
          <Back />
          <View style={tw`flex-row items-center gap-8`}>
            <Icon />
            <Icons />
          </View>
        </View>

        <View style={tw`self-center gap-3`}>
          <Rectangle style={tw`self-center pt-20px`} />
          <UbuntuText
            weight={500}
            style={tw`leading-none text-center text-[20px]`}
          >
            Long Profile Name
          </UbuntuText>
          <UbuntuText
            weight={400}
            style={tw`leading-none text-[10px] text-center`}
          >
            +234 (phone number is permitted to show in settings)
          </UbuntuText>
          <UbuntuText
            weight={400}
            style={tw`text-[12px] text-center leading-none pt-3`}
          >
            Long About here lorem li vitae malesuada enim consectetur hac
            curabitur diam
          </UbuntuText>
        </View>
      </View>
      <View style={tw`pt-12 `}>
        <View style={tw`h-[148px] bg-white w-[360px] shadow-sm`}>
          <View style={tw`py-[20px] px-[22px] gap-6`}>
            <View style={tw`flex-row justify-between`}>
              <View style={tw`flex-row gap-4 items-center`}>
                <Bell />
                <UbuntuText
                  weight={400}
                  style={tw`text-[14px] leading-none text-center`}
                >
                  Mute notification
                </UbuntuText>
              </View>
              <Pressable onPress={togglePosition}>
                <View
                  style={[
                    tw`bg-[${
                      toggle === "right" ? colors.purple3 : colors.white
                    }] w-[31.7px] h-[20px] rounded-full border-[${
                      colors.darkGray
                    }] border-[3px] items-start rounded-[18px]`,
                  ]}
                >
                  <View
                    style={[
                      tw`rounded-full w-[14px] h-[14px] p-1.5 absolute transform `,
                      {
                        backgroundColor:
                          toggle === "right" ? colors.white : colors.darkGray,
                      },
                      toggle === "right" && tw`right-0`,
                    ]}
                  />
                </View>
              </Pressable>
            </View>
            <View style={tw`flex-row items-center gap-4`}>
              <Warning />
              <UbuntuText
                weight={400}
                style={tw`text-[14px] leading-none text-center`}
              >
                Report to admins
              </UbuntuText>
            </View>
            <Pressable onPress={handlePress}>
              <View style={tw`flex-row items-center gap-4`}>
                <Blocked />
                <UbuntuText
                  weight={400}
                  style={tw`text-[14px] leading-none text-center`}
                >
                  {blockText}
                </UbuntuText>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      {showCard && (
        <View
          style={tw`absolute inset-0 top-0 bottom-0 bg-[${colors.overlay}]`}
        >
          <View style={tw`bg-[${colors.purple3}] p-[16px]  shadow-lg w-full`}>
            <UbuntuText style={tw`text-[${colors.white}] text-center`}>
              (Long profile Name) has been blocked
            </UbuntuText>
          </View>
          <Pressable onPress={closeCard}>
            <View style={tw`h-full bg-transparent`}></View>
          </Pressable>
        </View>
      )}
    </SafeArea>
  );
}
