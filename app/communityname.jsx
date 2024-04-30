import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  Pressable,
  PixelRatio,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Rectangle from "../assets/Frame 52.svg";
import Back from "../assets/back-arrow.svg";
import Picture from "../assets/picture.svg";
import Exit from "../assets/ci_exit.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { UbuntuText } from "../components/Texts";
import { StatusBar } from "expo-status-bar";
import { colors } from "../utils/constants";
import { CustomButton } from "../components/Buttons";

export default function communityname() {
  const [modalVisible, setModalVisible] = useState(false);
  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const paddingIOS = 18;
  const paddingAndroid = 12;
  const paddingDP_IOS = PixelRatio.roundToNearestPixel(
    paddingIOS * PixelRatio.get()
  );
  const paddingDP_Android = PixelRatio.roundToNearestPixel(
    paddingAndroid * PixelRatio.get()
  );

  return (
    <SafeAreaView style={tw` flex-1  bg-[#FEFEFE] `}>
      <View style={tw`  `}>
        <Back style={tw`px-7 `} />
        <Rectangle style={tw`self-center`} />
        <UbuntuText weight={500} style={tw`text-center text-[20px]`}>
          Long Community Name
        </UbuntuText>
        <UbuntuText
          weight={500}
          style={tw`text-center text-[#9E9CA0] text-[14px] pt-2`}
        >
          23 Groups 2 Sub Groups
        </UbuntuText>
        <View style={tw`pt-7 flex-row justify-between px-7`}>
          <UbuntuText weight={700} style={tw`text-[14px]`}>
            Community Info
          </UbuntuText>
          <UbuntuText weight={400} style={tw`text-[14px] text-[#706080]`}>
            Community Settings
          </UbuntuText>
        </View>
        <View style={tw`w-[167px] border-[#310A50] border-b-2 `} />
        <View style={tw`px-7 pt-5`}>
          <UbuntuText weight={400} style={tw`text-[12px]  text-[#9E9CA0]`}>
            Long community infoodio ornare sed. Rhoncus hendrerit tincidunt sit
            iaculis commodo vitae suscipit nibh. Sit sit sed celerisque nunc sed
            dictum eleifend mollis. Elementum id vitae malesuada enim
            consectetur hac curabitur diam
          </UbuntuText>
        </View>
      </View>
      <View
        style={[tw`pt-9 gap-3 `, Platform.OS === "ios" ? tw`pt-9` : tw`pt-14`]}
      >
        <View style={tw`w-full bg-[#FEFEFE] shadow-lg  gap-3`}>
          <UbuntuText weight={700} style={tw`text-[14px] pt-[16px] px-[16px] `}>
            View Groups (23)
          </UbuntuText>
          <View style={tw`h-px bg-[#9E9CA0] w-full`} />
          <UbuntuText
            weight={400}
            style={tw`text-[14px] pt-[16px] text-[#9E9CA0] px-[16px]`}
          >
            People in this community (23)
          </UbuntuText>
          <ScrollView style={tw``}>
            <View style={tw`flex-1 gap-1`}>
              <View style={tw`flex-row justify-between w-full px-[16px] `}>
                <View style={tw`flex-row gap-3`}>
                  <Picture />
                  <UbuntuText
                    weight={400}
                    style={tw`text-[14px] text-[#0A090C] self-center`}
                  >
                    You (Full Creator Name)
                  </UbuntuText>
                </View>
                <TouchableOpacity style={tw`self-center`}>
                  <CustomButton
                    style={{
                      borderRadius: 4,
                      backgroundColor: colors.purple,
                      width: 47,
                      height: 19,
                    }}
                  >
                    <UbuntuText
                      weight={400}
                      style={{
                        fontSize: 10,
                        lineHeight: 10,
                        textAlign: "center",
                        color: colors.purple2,
                        paddingVertical: 4,
                      }}
                    >
                      create
                    </UbuntuText>
                  </CustomButton>
                </TouchableOpacity>
              </View>
              <View style={tw`h-px bg-[#9E9CA0] w-full`} />
              <View style={tw`flex-row justify-between w-full px-[16px]`}>
                <View style={tw`flex-row gap-3`}>
                  <Picture />
                  <UbuntuText
                    weight={400}
                    style={tw`text-[14px] text-[#0A090C] self-center`}
                  >
                    Member Name
                  </UbuntuText>
                </View>
                <TouchableOpacity style={tw`self-center`}>
                  <CustomButton
                    style={{
                      borderRadius: 4,
                      backgroundColor: colors.purple,
                      width: 47,
                      height: 19,
                    }}
                  >
                    <UbuntuText
                      weight={400}
                      style={{
                        fontSize: 10,
                        lineHeight: 10,
                        textAlign: "center",
                        color: colors.purple2,
                        paddingVertical: 4,
                      }}
                    >
                      Admin
                    </UbuntuText>
                  </CustomButton>
                </TouchableOpacity>
              </View>
              <View style={tw`flex-row justify-between w-full px-[16px]`}>
                <View style={tw`flex-row gap-3`}>
                  <Picture />
                  <UbuntuText
                    weight={400}
                    style={tw`text-[14px] text-[#0A090C] self-center`}
                  >
                    Member Name
                  </UbuntuText>
                </View>
                <TouchableOpacity style={tw`self-center`}>
                  <CustomButton
                    style={{
                      borderRadius: 4,
                      backgroundColor: colors.purple,
                      width: 47,
                      height: 19,
                    }}
                  >
                    <UbuntuText
                      weight={400}
                      style={{
                        fontSize: 10,
                        lineHeight: 10,
                        textAlign: "center",
                        color: colors.purple2,
                        paddingVertical: 4,
                      }}
                    >
                      Admin
                    </UbuntuText>
                  </CustomButton>
                </TouchableOpacity>
              </View>
              <View style={tw`flex-row justify-between w-full px-[16px]`}>
                <View style={tw`flex-row gap-3`}>
                  <Picture />
                  <UbuntuText
                    weight={400}
                    style={tw`text-[14px] text-[#0A090C] self-center`}
                  >
                    Member Name
                  </UbuntuText>
                </View>
                <TouchableOpacity style={tw`self-center`}>
                  <CustomButton
                    style={{
                      borderRadius: 4,
                      backgroundColor: colors.purple,
                      width: 47,
                      height: 19,
                    }}
                  >
                    <UbuntuText
                      weight={400}
                      style={{
                        fontSize: 10,
                        lineHeight: 10,
                        textAlign: "center",
                        color: colors.purple2,
                        paddingVertical: 4,
                      }}
                    >
                      Admin
                    </UbuntuText>
                  </CustomButton>
                </TouchableOpacity>
              </View>
              <View style={tw`h-px bg-[#9E9CA0] w-full`} />
            </View>

            <View style={tw`flex justify-center items-center pt-3`}>
              <TouchableOpacity>
                <UbuntuText
                  weight={500}
                  style={tw`text-[14px] text-[#310A50] self-center pb-3`}
                >
                  View all (19 more)
                </UbuntuText>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View
          style={[
            tw`gap-3`,
            Platform.OS === "ios"
              ? { paddingTop: paddingDP_IOS }
              : { paddingTop: paddingDP_Android },
          ]}
        >
          <View style={tw`w-full bg-[#FFFFFF] shadow-lg h-[48px]`}>
            <View style={tw`flex-row px-[16px] pt-3`}>
              <Pressable
                style={tw`self-center flex-row gap-2 `}
                onPress={handlePress}
              >
                <Exit />

                <UbuntuText
                  weight={700}
                  style={tw`text-[14px] text-[#D41D2B] self-center`}
                >
                  Exit Community
                </UbuntuText>
              </Pressable>
              {modalVisible && (
                <View
                  style={tw`absolute inset-0 z-20  bg-black bg-opacity-30   flex-1  w-full h-full flex-1 `}
                >
                  <View
                    style={tw`absolute inset-0 z-20 bg-black bg-opacity-30 flex-1  `}
                  >
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={handleCloseModal}
                    >
                      <View
                        style={tw`flex-1 absolute bottom-0 w-full bg-white  items-start h-[149px]  rounded-t-[12px]`}
                      >
                        <View style={tw`gap-4 pt-8 px-12`}>
                          <UbuntuText weight={400} t style={tw`text-[14px]`}>
                            Message (Profile Name)
                          </UbuntuText>
                          <UbuntuText weight={500} style={tw`text-[14px]`}>
                            View profile
                          </UbuntuText>
                          <UbuntuText
                            weight={500}
                            style={tw`text-[14px] text-[#D41D2B]`}
                          >
                            Report to admins
                          </UbuntuText>
                          <Pressable onPress={handleCloseModal}>
                            <UbuntuText style={tw`self-center`}>
                              Close Modal
                            </UbuntuText>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
