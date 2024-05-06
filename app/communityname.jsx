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
import { Checkbox } from "expo-checkbox";
import Back from "../assets/back-arrow.svg";
import Picture from "../assets/picture.svg";
import Right from "../assets/righedtarrow.svg";
import Exit from "../assets/ci_exit.svg";
import Down from "../assets/Downed.svg";
import tw, { style } from "twrnc";
import { UbuntuText } from "../components/Texts";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { StatusBar } from "expo-status-bar";
import { colors } from "../utils/constants";
import { CustomButton } from "../components/Buttons";
import { SafeArea } from "../components/SafeArea";

export default function communityname() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalactive, setModalactive] = useState(false);
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const [isChecked, setChecked] = useState(false);
  const [isChecke, setChecke] = useState(false);
  const [toggle, setToggled] = useState("left");
  const [current, setCurrent] = useState("test");
  const [radio, setRadio] = useState("tested");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handlePress = () => {
    setModalVisible(true);
  };
  const handlePressed = () => {
    setModalactive(true);
  };
  const handleCloseModals = () => {
    setModal(false);
  };
  const handleClosePressModals = () => {
    setModalactive(false);
  };
  const handlePressModal = () => {
    setModalactive(false);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCheckbox = () => {
    setChecked(!isChecked);
  };

  const handleCheckboxed = () => {
    setChecke(!isChecke);
  };
  const togglePosition = () => {
    setToggled(toggle === "left" ? "right" : "left");
  };
  const paddingIOS = 32;
  const paddingAndroid = 38;
  const paddingDP_IOS = PixelRatio.roundToNearestPixel(
    paddingIOS * PixelRatio.get()
  );
  const paddingDP_Android = PixelRatio.roundToNearestPixel(
    paddingAndroid * PixelRatio.get()
  );

  return (
    <SafeArea>
      <View style={tw` w-full `}>
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
        <View style={tw`pt-7 flex-row justify-between `}>
          <View
            style={[
              tw`flex-1 items-center`,
              activeTab === "info" ? tw`border-b-2` : tw`border-b-0`,
            ]}
          >
            <Pressable onPress={() => handleTabChange("info")}>
              <UbuntuText
                weight={activeTab === "info" ? 700 : undefined}
                style={[tw`text-[14px]`, activeTab === "info" && tw``]}
              >
                Community Info
              </UbuntuText>
            </Pressable>
          </View>
          <View
            style={[
              tw`flex-1 items-center`,
              activeTab !== "settings" && tw`border-b-0`,
              activeTab === "settings" && tw`border-b-2`,
            ]}
          >
            <Pressable onPress={() => handleTabChange("settings")}>
              <UbuntuText
                weight={activeTab === "settings" ? 700 : undefined}
                style={[
                  tw`text-[14px] text-[#706080]`,
                  activeTab === "settings" && tw`text-black`,
                  activeTab !== "settings" && tw`font-bold`,
                ]}
              >
                Community Settings
              </UbuntuText>
            </Pressable>
          </View>
        </View>

        {activeTab === "info" && (
          <View>
            <View style={tw`px-7 pt-5`}>
              <UbuntuText weight={400} style={tw`text-[12px] text-[#9E9CA0]`}>
                Long community infoodio ornare sed. Rhoncus hendrerit tincidunt
                sit iaculis commodo vitae suscipit nibh. Sit sit sed celerisque
                nunc sed dictum eleifend mollis. Elementum id vitae malesuada
                enim consectetur hac curabitur diam
              </UbuntuText>
            </View>
            <View>
              <View
                style={[
                  tw`pt-9 gap-3 `,
                  Platform.OS === "ios" ? tw`pt-9` : tw`pt-14`,
                ]}
              >
                <View style={tw`w-full bg-[#FEFEFE] shadow-lg  gap-3`}>
                  <UbuntuText
                    weight={700}
                    style={tw`text-[14px] pt-[16px] px-[16px] `}
                  >
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
                      <View
                        style={tw`flex-row justify-between w-full px-[16px] `}
                      >
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
                      <View
                        style={tw`flex-row justify-between w-full px-[16px]`}
                      >
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
                      <View
                        style={tw`flex-row justify-between w-full px-[16px]`}
                      >
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
                      <View
                        style={tw`flex-row justify-between w-full px-[16px]`}
                      >
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
                      <TouchableOpacity onPress={handlePressed}>
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
                    tw``,
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
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        {activeTab === "settings" && (
          <View style={tw`pt-6 `}>
            <View style={tw`w-full bg-white shadow-sm py-3 px-3`}>
              <UbuntuText weight={700} style={tw` text-[16px] leading-none`}>
                Privacy
              </UbuntuText>
              <View style={tw`gap-5 pt-5`}>
                <Pressable onPress={handlePressed}>
                  <View style={tw`flex-row justify-between  `}>
                    <View style={tw`gap-2`}>
                      <UbuntuText
                        weight={400}
                        style={tw` text-[12px] leading-none`}
                      >
                        Active Status
                      </UbuntuText>
                      <UbuntuText
                        weight={700}
                        style={tw` text-[12px] leading-none text-[${colors.newgray}]`}
                      >
                        Everyone
                      </UbuntuText>
                    </View>
                    <Right style={tw`self-center pt-3`} />
                  </View>
                </Pressable>
                <View style={tw`flex-row justify-between  `}>
                  <View style={tw`gap-2`}>
                    <UbuntuText
                      weight={400}
                      style={tw` text-[12px] leading-none`}
                    >
                      Profile photo
                    </UbuntuText>
                    <UbuntuText
                      weight={700}
                      style={tw` text-[12px] leading-none text-[${colors.newgray}]`}
                    >
                      Everyone
                    </UbuntuText>
                  </View>
                  <Right style={tw`self-center pt-3`} />
                </View>
                <View style={tw`flex-row justify-between  `}>
                  <View style={tw`gap-2`}>
                    <UbuntuText
                      weight={400}
                      style={tw` text-[12px] leading-none`}
                    >
                      Phone Number
                    </UbuntuText>
                    <UbuntuText
                      weight={700}
                      style={tw` text-[12px] leading-none text-[${colors.newgray}]`}
                    >
                      Everyone
                    </UbuntuText>
                  </View>
                  <Right style={tw`self-center pt-3`} />
                </View>
                <View style={tw`flex-row justify-between  `}>
                  <View style={tw`gap-2`}>
                    <UbuntuText
                      weight={400}
                      style={tw` text-[12px] leading-none`}
                    >
                      About
                    </UbuntuText>
                    <UbuntuText
                      weight={700}
                      style={tw` text-[12px] leading-none text-[${colors.newgray}]`}
                    >
                      Everyone
                    </UbuntuText>
                  </View>
                  <Right style={tw`self-center pt-3`} />
                </View>
              </View>
            </View>
            <View style={tw`pt-6 gap-4`}>
              <View style={tw`w-full bg-white shadow-sm py-5 px-5 `}>
                <UbuntuText
                  weight={700}
                  style={tw`text-black text-[16px] leading-none`}
                >
                  Notifications
                </UbuntuText>
                <View style={tw`pt-8 gap-6`}>
                  <Pressable onPress={handleCheckbox}>
                    <View style={tw`flex-row justify-between items-center`}>
                      <UbuntuText
                        weight={400}
                        style={tw`text-black text-[12px] leading-none`}
                      >
                        Show notifications for new messages
                      </UbuntuText>
                      <Checkbox
                        style={tw`h-[12px] w-[12px]`}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? "#310A50" : undefined}
                      />
                    </View>
                  </Pressable>
                  <View
                    style={tw`h-px w-full border-[${colors.gray2}] border-b-2`}
                  />
                  <Pressable onPress={handleCheckboxed}>
                    <View style={tw`flex-row justify-between items-center`}>
                      <UbuntuText
                        weight={400}
                        style={tw`text-black text-[12px] leading-none`}
                      >
                        Play sound for incoming messages
                      </UbuntuText>
                      <Checkbox
                        style={tw`h-[12px] w-[12px]`}
                        value={isChecke}
                        onValueChange={setChecke}
                        color={isChecke ? "#310A50" : undefined}
                      />
                    </View>
                  </Pressable>
                  <View
                    style={tw`h-px w-full border-[${colors.gray2}] border-b-2`}
                  />
                </View>
              </View>
            </View>
            <View style={tw`pt-6 `}>
              <View style={tw`w-full bg-white shadow-sm py-3 px-3`}>
                <UbuntuText
                  weight={700}
                  style={tw`text-black text-[12px] leading-none`}
                >
                  Theme
                </UbuntuText>
                <View style={tw`flex-row justify-between`}>
                  <UbuntuText
                    weight={400}
                    style={tw`text-[${colors.darkgray}] text-[12px] leading-none pt-3`}
                  >
                    Dark mode
                  </UbuntuText>
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
                              toggle === "right"
                                ? colors.white
                                : colors.darkGray,
                          },
                          toggle === "right" && tw`right-0`,
                        ]}
                      />
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      {modalVisible && (
        <View
          style={tw`absolute inset-0 z-20  bg-black bg-opacity-30     w-full h-full flex-1 `}
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
                <UbuntuText weight={500} style={tw`text-[14px] text-[#D41D2B]`}>
                  Report to admins
                </UbuntuText>
              </View>
            </View>
            <Pressable onPress={handleCloseModal}>
              <View style={tw`h-full bg-transparent`}></View>
            </Pressable>
          </Modal>
        </View>
      )}
      {modal && (
        <View
          style={tw`absolute inset-0 z-20  bg-black bg-opacity-30     w-full h-full flex-1 `}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={handleCloseModals}
          >
            <Pressable onPress={handleCloseModals}>
              <View style={tw`h-full bg-transparent`}></View>
            </Pressable>
            <View
              style={tw`flex-1 absolute bottom-0 w-full bg-white  items-start h-[387px]  rounded-t-[12px]`}
            >
              <View style={tw``}>
                <ScrollView>
                  <View style={tw`px-[38px] py-[28px] gap-4`}>
                    <View
                      style={tw`flex-row justify-between w-full items-center`}
                    >
                      <View style={tw`flex-row items-center gap-4`}>
                        <Picture />
                        <UbuntuText
                          weight={400}
                          style={tw`text-[14px] text-[${colors.darkGray}] leading-none `}
                        >
                          Group name
                        </UbuntuText>
                      </View>
                      <Down style={tw`justify-center`} />
                    </View>
                    <View
                      style={tw`h-px w-full border-[${colors.gray2}] border-b-2`}
                    />
                    <View
                      style={tw`flex-row justify-between w-full items-center`}
                    >
                      <View style={tw`flex-row items-center gap-4`}>
                        <Picture />
                        <UbuntuText
                          weight={400}
                          style={tw`text-[14px] text-[${colors.darkGray}] leading-none `}
                        >
                          Group name
                        </UbuntuText>
                      </View>
                      <Down style={tw`justify-center`} />
                    </View>
                    <View style={tw`flex-row items-center gap-4`}>
                      <Picture />
                      <UbuntuText
                        weight={400}
                        style={tw`text-[14px] text-[${colors.darkGray}] leading-none `}
                      >
                        Group name
                      </UbuntuText>
                    </View>
                    <View style={tw`flex-row items-center gap-4`}>
                      <Picture />
                      <UbuntuText
                        weight={400}
                        style={tw`text-[14px] text-[${colors.darkGray}] leading-none `}
                      >
                        Group name
                      </UbuntuText>
                    </View>
                    <View
                      style={tw`h-px w-full border-[${colors.gray2}] border-b-2`}
                    />
                    <View style={tw`flex-row items-center gap-4`}>
                      <Picture />
                      <UbuntuText
                        weight={400}
                        style={tw`text-[14px] text-[${colors.darkGray}] leading-none `}
                      >
                        Group name
                      </UbuntuText>
                    </View>
                    <View
                      style={tw`h-px w-full border-[${colors.gray2}] border-b-2`}
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      )}
      {modalactive && (
        <View
          style={tw`absolute inset-0 z-20  bg-black bg-opacity-30     w-full h-full flex-1 `}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalactive}
            onRequestClose={handleCloseModal}
          >
            <Pressable onPress={handleClosePressModals}>
              <View style={tw`h-full bg-transparent`}></View>
            </Pressable>
            <View
              style={tw`flex-1 absolute bottom-0 w-full bg-white  items-start h-[200px]  rounded-t-[12px]`}
            >
              <UbuntuText
                weight={700}
                style={tw`py-[12px] self-center text-[14px] text-black`}
              >
                Active Status
              </UbuntuText>
              <UbuntuText
                weight={400}
                style={tw`text-[14px] px-[16px] text-[${colors.darkGray}]`}
              >
                Who can see your active status?
              </UbuntuText>
              <View style={tw`pt-[12px] px-[16px] gap-3 `}>
                <RadioButtonGroup
                  containerStyle={{}}
                  selected={current}
                  onSelected={(value) => setCurrent(value)}
                  radioBackground="#310A50"
                  radioStyle={tw`bg-white border-[#310A50] border-b-2 w-[20px] h-[20px]  gap-3`}
                >
                  <RadioButtonItem
                    value="test"
                    label={
                      <UbuntuText style={tw`text-black text-[12px] pl-3`}>
                        Everyone in the community
                      </UbuntuText>
                    }
                  />

                  <RadioButtonItem
                    value="test2"
                    label={
                      <UbuntuText
                        weight={400}
                        style={tw`text-black text-[12px] pl-3`}
                      >
                        Only group members
                      </UbuntuText>
                    }
                  />

                  <RadioButtonItem
                    value="test3"
                    label=<UbuntuText style={tw`text-black text-[12px] pl-3`}>
                      Only members of:
                    </UbuntuText>
                  />
                </RadioButtonGroup>
              </View>
              <UbuntuText
                weight={400}
                style={tw`text-[10px] text-[${colors.darkgray}] px-[16px] pt-3`}
              >
                Changes made to groups is same for sub-groups
              </UbuntuText>
              <View style={tw`px-[16px] pt-3`}>
                <RadioButtonGroup
                  containerStyle={{}}
                  selected={current}
                  onSelected={(value) => setCurrent(value)}
                  radioBackground="#310A50"
                  radioStyle={tw`bg-white border-[#310A50] border-b-2 w-[20px] h-[20px]  gap-3`}
                >
                  <RadioButtonItem
                    value="test4"
                    label=<UbuntuText style={tw`text-black text-[12px] pl-3`}>
                      Nobody
                    </UbuntuText>
                  />
                </RadioButtonGroup>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </SafeArea>
  );
}
