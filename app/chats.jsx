import { View, Text, ScrollView } from "react-native";
import React from "react";
import Picture from "../assets/picture.svg";
import tw from "twrnc";
import Back from "../assets/arrow_white.svg";
import Message from "../assets/Group31.svg";
import Down from "../assets/down.svg";
import Vertical from "../assets/vertical.svg";
import { UbuntuText } from "../components/Texts";
import { StatusBar } from "expo-status-bar";
import Tick from "../assets/charm_tick.svg";

export default function chats() {
  return (
    <View style={tw`flex-1 bg-gray-200`}>
      <StatusBar barStyle="default" style="dark" backgroundColor="" />
      <View style={tw`bg-[#140B20] h-25 p-5 `}>
        <View style={tw`flex flex-row gap-3`}>
          <Back style={tw`my-2`} />
          <Picture />
          <View style={tw`flex flex-col gap-2`}>
            <UbuntuText weight={500} style={tw`text-white text-[18px]`}>
              THE CANDLE...
            </UbuntuText>
            <UbuntuText weight={400} style={tw`text-white text-[14px]`}>
              28 members
            </UbuntuText>
          </View>
          <View style={tw`flex flex-row ml-auto gap-4`}>
            <Message />
            <Down style={tw`my-1`} />
            <Vertical />
          </View>
        </View>
      </View>
      <View style={tw`bg-[#7A1EF7] flex-1 `}>
        <ScrollView>
          <View>
            <View style={tw`my-2 mx-20 gap-4`}>
              <View
                style={tw` rounded-full bg-[#BF8FFF] mx-10   h-8  border-[#BF8FFF] border-2  flex justify-center  `}
              >
                <UbuntuText
                  weight={400}
                  style={tw`text-[10px] text-white text-center`}
                >
                  February 10, 2023
                </UbuntuText>
              </View>
              <View
                style={tw` rounded-full bg-[#BF8FFF] h-8  mx-10    border-[#BF8FFF] border-2  flex justify-center  `}
              >
                <UbuntuText
                  weight={400}
                  style={tw`text-[10px] text-white text-center`}
                >
                  Group was created
                </UbuntuText>
              </View>
              <View
                style={tw` rounded-full bg-[#BF8FFF]   h-8 border-[#BF8FFF] border-2  flex justify-center`}
              >
                <UbuntuText
                  weight={400}
                  style={tw`text-[10px] text-white text-center whitespace-normal`}
                >
                  An admin updated the bio
                </UbuntuText>
              </View>
              <View
                style={tw` rounded-full bg-[#BF8FFF]   h-8 border-[#BF8FFF] border-2  flex justify-center`}
              >
                <UbuntuText
                  weight={400}
                  style={tw`text-[10px] text-white text-center whitespace-normal`}
                >
                  An admin changed the profile photo
                </UbuntuText>
              </View>
              <View
                style={tw` rounded-full bg-[#BF8FFF] h-8  mx-10    border-[#BF8FFF] border-2  flex justify-center  `}
              >
                <UbuntuText
                  weight={400}
                  style={tw`text-[10px] text-white text-center`}
                >
                  Emmanuel Onyema joined
                </UbuntuText>
              </View>
              <View
                style={tw` rounded-full bg-[#BF8FFF] h-8  mx-10    border-[#BF8FFF] border-2  flex justify-center  `}
              >
                <UbuntuText
                  weight={400}
                  style={tw`text-[10px] text-white text-center`}
                >
                  Victory David
                </UbuntuText>
              </View>
              <View
                style={tw` rounded-full bg-[#BF8FFF]   h-8 border-[#BF8FFF] border-2  flex justify-center`}
              >
                <UbuntuText
                  weight={400}
                  style={tw`text-[10px] text-white text-center whitespace-normal`}
                >
                  Augustine Micheal Okechukwu joined
                </UbuntuText>
              </View>
            </View>
            <View style={tw`gap-3 flex-1 pr-30`}>
              <View style={tw`flex-row`}>
                <Picture />
                <View style={tw`gap-3 items-start`}>
                  <View
                    style={tw`bg-white py-2 rounded-bl-lg rounded-r-lg flex-col w-auto`}
                  >
                    <View style={tw`flex-row justify-between bg-black`}>
                      <UbuntuText
                        weight={400}
                        style={tw` text-[12px] text-[#BF8FFF]`}
                      >
                        Victor Davies
                      </UbuntuText>
                      <UbuntuText
                        weight={400}
                        style={tw`text-[#D4CCDF] text-[12px]`}
                      >
                        Admin
                      </UbuntuText>
                    </View>
                    <View style={tw`flex-row `}>
                      <UbuntuText
                        weight={400}
                        style={tw`text-[#040009] text-[12px]`}
                      >
                        Welcome everyone
                      </UbuntuText>
                      <UbuntuText
                        weight={400}
                        style={tw`text-[#B0B0B0] text-[10px] self-end`}
                      >
                        10:00 AM
                      </UbuntuText>
                    </View>
                  </View>
                  <View style={tw`items-start`}>
                    <View
                      style={tw`bg-white  py-2 rounded-bl-lg rounded-r-lg flex-row  gap-3`}
                    >
                      <UbuntuText
                        weight={400}
                        style={tw`mx-2 text-[#040009] text-[12px]`}
                      >
                        I greet y’all
                      </UbuntuText>
                      <UbuntuText
                        weight={400}
                        style={tw`text-[10px] text-[#B0B0B0]`}
                      >
                        10:00 AM
                      </UbuntuText>
                    </View>
                  </View>
                  <View style={tw``}>
                    <View
                      style={tw`bg-white  py-2 rounded-bl-lg rounded-r-lg `}
                    >
                      <UbuntuText
                        weight={700}
                        style={tw`mx-2 text-[#040009] text-[12px]`}
                      >
                        Vitae et sem lobortis odio ornare sed. Rhoncus hendrerit
                        tincidunt sit iaculis commodo vitae suscipit nibh. Sit
                        sit sed.
                      </UbuntuText>
                      <UbuntuText
                        weight={700}
                        style={tw`mx-2 my-5 text-[12px] text-[#B0B0B0]`}
                      >
                        celerisque nunc sed dictum eleifend mollis. Elementum id
                        vitae malesuada enim consectetur hac curabitur diam
                        scelerisque.
                      </UbuntuText>
                      <UbuntuText
                        weight={400}
                        style={tw`mx-2 text-[#0A090C] text-[12px]`}
                      >
                        see more
                      </UbuntuText>
                    </View>
                  </View>
                </View>
              </View>
              <View style={tw`px-15 relative left-9`}>
                <View
                  style={tw`bg-white ml-auto  py-2 rounded-bl-lg rounded-r-lg bg-[#1D092D] `}
                >
                  <UbuntuText
                    weight={400}
                    style={tw`mx-2 text-white text-[12px]`}
                  >
                    Vitae et sem lobortis odio ornare sed. Rhoncus hendrerit
                    tincidunt sit iaculis commodo vitae suscipit nibh. Sit sit
                    sed.
                  </UbuntuText>
                  <UbuntuText
                    weight={400}
                    style={tw`mx-2 text-white text-[12px] my-3`}
                  >
                    celerisque nunc sed dictum eleifend mollis. Elementum id
                    vitae malesua
                  </UbuntuText>
                  <UbuntuText
                    weight={400}
                    style={tw`ml-auto -my-2 relative bottom-2 right-2 text-[#7A1EF7] text-[10px]`}
                  >
                    10:00 AM <Tick style={tw`relative bottom-1 -my-1`} />
                  </UbuntuText>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
// <View style={tw`h-15px bg-black`}></View>
