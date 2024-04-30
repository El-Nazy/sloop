import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Cancel from "../assets/cancel.svg";
import Rightarrow from "../assets/rightarrow.svg";
import Photo from "../assets/photos.svg";
import tw from "twrnc";
import { colors } from "../utils/constants";
import { UbuntuText } from "../components/Texts";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import Buttontoggle from "../assets/buttontoggle.svg";
import { CustomButton } from "../components/Buttons";
import Rectangle from "../assets/Rectangle.svg";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function shecdulecontent() {
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

  return (
    <SafeAreaView style={tw` flex-1 bg-white`}>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`py-2 px-4 flex-row gap-3 `}>
          <Cancel />
          <UbuntuText weight={500} style={tw`items-center text-[20px]`}>
            Schedule contents
          </UbuntuText>
        </View>
        <View style={tw`h-[528px] bg-white w-full shadow-lg `}>
          <View style={tw`pt-2 px-4`}>
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
                    upload
                  </UbuntuText>
                </View>
              </View>
            </View>
            <View style={tw`pt-2 `}>
              <View
                style={tw`rounded-[12px] w-full  h-[79px]  bg-[#EEEEEE] flex items-center justify-center`}
              >
                <View style={tw`flex items-center justify-center `}>
                  <View
                    style={tw`bg-[#706080] w-[148px] h-[32px] flex-row rounded-[4px]`}
                  >
                    <Photo style={tw`self-center px-5`} />
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
          </View>
          <View style={tw`gap-2`}>
            <View style={tw`px-4 flex-row justify-between pt-2`}>
              <UbuntuText
                weight={400}
                style={tw`text-[14px] text-[#040009] self-center`}
              >
                Date
              </UbuntuText>
              <TouchableOpacity onPress={showDatePicker}>
                <View style={tw`flex-row gap-3`}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    date={selectedDate || new Date()}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                  <UbuntuText style={tw` self-center  `}>
                    {selectedDate.toLocaleDateString()}
                  </UbuntuText>
                  <Rightarrow style={tw`self-center`} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={tw`px-4 flex-row justify-between pt-2`}>
              <UbuntuText
                weight={400}
                style={tw`text-[14px] text-[#040009] self-center`}
              >
                From
              </UbuntuText>
              <TouchableOpacity onPress={showDatePicker}>
                <View style={tw`flex-row gap-3`}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time" // Change the mode to "time" for selecting time
                    date={selectedDate || new Date()}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                  <UbuntuText style={tw`self-center`}>
                    {Platform.OS === "ios"
                      ? selectedDate.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : selectedDate.toLocaleTimeString()}
                  </UbuntuText>
                  <Rightarrow style={tw`self-center`} />
                </View>
              </TouchableOpacity>
            </View>
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
                placeholder="Description"
                placeholderTextColor={colors.black}
              />
            </View>

            <View style={tw`px-4 flex-row justify-between pt-2`}>
              <UbuntuText weight={400} style={tw`text-[14px] text-[#040009]`}>
                To
              </UbuntuText>
              <TouchableOpacity onPress={showDatePicker}>
                <View style={tw`flex-row gap-3`}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    date={selectedDate || new Date()}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                  <UbuntuText style={tw`self-center`}>
                    {Platform.OS === "ios"
                      ? selectedDate.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : selectedDate.toLocaleTimeString()}
                  </UbuntuText>
                  <Rightarrow style={tw`self-center`} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`px-4  flex items-center justify-center pt-3`}>
            <UbuntuText
              weight={500}
              style={[
                tw`text-[18px] self-start relative`,
                Platform.select({
                  ios: { top: 39 },
                  android: { top: 25 },
                }),
              ]}
            >
              Access
            </UbuntuText>
          </View>
          <View style={tw`pt-12`}>
            <View style={tw` w-full shadow-lg bg-white h-[180px]`}>
              <View style={tw`gap-2`}>
                <View style={tw`px-4 flex-row justify-between pt-4`}>
                  <UbuntuText
                    weight={400}
                    style={tw`text-[14px] text-[#040009]`}
                  >
                    Participants
                  </UbuntuText>
                  <View style={tw`flex-row gap-3`}>
                    <UbuntuText weight={500} style={tw`text-[#9E9CA0]`}>
                      All community members
                    </UbuntuText>
                    <Rightarrow style={tw`self-center`} />
                  </View>
                </View>
                <View style={tw`h-px bg-[#EEEEEE]  w-[323.6px]  `} />
                <View style={tw`px-4 flex-row justify-between `}>
                  <UbuntuText
                    weight={400}
                    style={tw`text-[14px] text-[#040009]`}
                  >
                    Automatically publish as update
                  </UbuntuText>

                  <Buttontoggle style={tw`self-center`} />
                </View>
                <View style={tw`px-4 flex-row justify-between `}>
                  <UbuntuText
                    weight={400}
                    style={tw`text-[14px] text-[#9E9CA0]`}
                  >
                    Participants will see this in the update section
                  </UbuntuText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
