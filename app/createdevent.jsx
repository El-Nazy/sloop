import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeArea } from "../components/SafeArea";
import tw, { style } from "twrnc";
import Back from "../assets/back-arrow.svg";
import Picture from "../assets/picture.svg";
import World from "../assets/world.svg";
import Down from "../assets/Downed.svg";
import { UbuntuText } from "../components/Texts";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import { colors } from "../utils/constants";
import { CustomButton } from "../components/Buttons";
import Photo from "../assets/photos.svg";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Rightarrow from "../assets/rightarrow.svg";

export default function createdevent() {
  const [CardVisible, setCardVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showSetDateButton, setShowSetDateButton] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setSelectedDate(date);
    console.log(date);
    hideDatePicker();
    setShowSetDateButton(false);
  };

  const toggleCard = () => {
    setCardVisible(!CardVisible);
  };
  const [selectedText, setSelectedText] = useState("Public");

  const handleTextPress = (text) => {
    setSelectedText(text);
    setCardVisible(false);
    // console.log(setCardVisible);
  };
  return (
    <SafeArea>
      <View style={tw`flex-1 w-full py-28px px-16px`}>
        <View style={tw`flex-row items-center gap-3 `}>
          <Back />
          <UbuntuText
            weight={700}
            style={tw`text-[16px] text-black leading-[19.2px]`}
          >
            create event
          </UbuntuText>
        </View>
        <View style={tw`flex-row items-center gap-16px pt-39px`}>
          <Picture />
          <View style={tw`gap-1`}>
            <UbuntuText weight={500} style={tw`text-[18px]`}>
              Graceville Christian Center
            </UbuntuText>
            <View
              style={tw`w-[115px] h-[35px] bg-[${colors.gray3}] rounded-[8px] px-4 items-center justify-between`}
            >
              <View style={tw` flex-row gap-2 items-center pt-2 gap`}>
                <World />
                {selectedText !== "" && (
                  <UbuntuText> {selectedText}</UbuntuText>
                )}
                <Pressable style={tw`items-end`} onPress={toggleCard}>
                  <Down />
                </Pressable>
                {CardVisible && (
                  <View
                    style={tw`bg-[${colors.lightGray}] p-4 rounded-[8px] absolute bottom-8`}
                  >
                    <View style={tw`gap-2`}>
                      <Pressable onPress={() => handleTextPress("Public")}>
                        <UbuntuText>Public</UbuntuText>
                      </Pressable>
                      <Pressable onPress={() => handleTextPress("Private")}>
                        <UbuntuText>Private</UbuntuText>
                      </Pressable>
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={tw`h-[38px] mt-3 gap-6`}>
          <UbuntuTextInput
            placeholder="Add Event title"
            placeholderTextColor={colors.gray2}
            style={{
              height: 38,
              width: "100%",
              borderBottomWidth: 2,
              borderBottomColor: colors.gray2,
              borderRadius: 4,
              paddingHorizontal: 8,
            }}
          />
        </View>

        <View style={tw` h-[86px] mt-9 rounded-[18px] `}>
          <UbuntuTextInput
            placeholder="Add Event description"
            placeholderTextColor={colors.darkGray}
            style={{
              height: 86,
              // width: "264",
              backgroundColor: colors.gray2,
              borderRadius: 12,
              paddingHorizontal: 8,
              paddingBottom: 24,
            }}
          />
        </View>
      </View>
    </SafeArea>
  );
}
