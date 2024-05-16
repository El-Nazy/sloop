import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Platform,
  Modal,
} from "react-native";
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
import Add from "../assets/addperson.svg";
import Tag from "../assets/tag.svg";
import Carbon from "../assets/carbon_event.svg";
import Event from "../assets/round-event.svg";
import Address from "../assets/entypo_address.svg";
import PremiumTag from "../assets/premium.svg";
import Ticket from "../assets/Ticket.svg";
import Good from "../assets/Good.svg";
import Fail from "../assets/Fail.svg";
import Checkbox from "expo-checkbox";
import { RadioButton } from "react-native-paper";

export default function createdevent() {
  const [CardVisible, setCardVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisibled, setDatePickerVisibilities] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState(new Date());
  const [showSetDateButton, setShowSetDateButton] = useState(false);
  const [showSetDateButtons, setShowSetDateButtons] = useState(false);
  // const [isChecked, setChecked] = useState(false);
  const [groups, setGroups] = useState([
    { id: 1, name: "Group 1", isChecked: false },
    { id: 2, name: "Group 2", isChecked: false },
    { id: 3, name: "Group 3", isChecked: false },
  ]);
  const [modal, setModal] = useState(false);
  const [Participant, setParticipant] = useState(false);
  const [Premium, setPremium] = useState(false);
  const [event, setEvent] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showDatePicked = () => {
    setDatePickerVisibilities(true);
  };
  const hideDatePicked = () => {
    setDatePickerVisibilities(false);
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

  const handleConfirms = (dates) => {
    setSelectedDates(dates);
    console.log(dates);
    hideDatePicked();
    setShowSetDateButtons(false);
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

  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
    // You can add your custom logic here based on the selected value
    switch (value) {
      case "option1":
        // Execute actions for Option 1
        console.log("Option 1 selected");
        break;
      case "option2":
        // Execute actions for Option 2
        console.log("Option 2 selected");
        break;
      case "option3":
        // Execute actions for Option 3
        console.log("Option 3 selected");
        break;
      case "option4":
        // Execute actions for Option 4
        console.log("Option 4 selected");
        break;
      case "option5":
        // Execute actions for Option 5
        console.log("Option 5 selected");
        break;
      case "option6":
        // Execute actions for Option 6
        console.log("Option 6 selected");
        break;
      case "option7":
        // Execute actions for Option 7
        console.log("Option 7 selected");
        break;
      case "option8":
        // Execute actions for Option 8
        console.log("Option 8 selected");
        break;
      default:
        break;
    }
  };
  const handleCheckboxChange = (groupId) => {
    setGroups(
      groups.map((group) => {
        if (group.id === groupId) {
          return { ...group, isChecked: !group.isChecked };
        }
        return group;
      })
    );
  };
  return (
    <SafeArea>
      <View style={tw`flex-1 w-full py-28px px-16px`}>
        <View style={tw`flex-row items-center gap-3 pb-14px`}>
          <Back />
          <UbuntuText
            weight={700}
            style={tw`text-[16px] text-black leading-[19.2px]`}
          >
            create event
          </UbuntuText>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1 `}>
          <View style={tw`flex-row items-center gap-16px pt-16px flex-1`}>
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
                      style={tw`bg-[${colors.lightGray}] p-4 rounded-[8px] absolute top-0 z-50`}
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
              multiline
              placeholderTextColor={colors.gray2}
              style={{
                height: 58,
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
          <View style={tw`pt-20px`}>
            <View
              style={tw`rounded-[12px] w-full  h-[229px]  bg-[${colors.newgray}]`}
            >
              <View style={tw`flex items-center justify-center pt-20`}>
                <View
                  style={tw`bg-[${colors.darkGray}] w-[187px] h-[32px] flex-row rounded-[4px]`}
                >
                  <Photo style={tw`self-center px-6`} />
                  <UbuntuText
                    weight={400}
                    style={tw`text-white text-[14px] self-center`}
                  >
                    Add event thumbnail
                  </UbuntuText>
                </View>
              </View>
            </View>
          </View>
          <View style={tw`px-4  pt-2 gap-4 w-full `}>
            <View style={tw`flex-row  w-full gap-5`}>
              <UbuntuText
                weight={400}
                style={tw`text-[16px] text-[${colors.newgray}] flex-1 `}
              >
                StartDate
              </UbuntuText>
              <UbuntuText
                weight={400}
                style={tw`text-[16px] text-[${colors.newgray}] flex-1`}
              >
                EndDate
              </UbuntuText>
            </View>
          </View>
          <View style={tw`flex-row  pt-2`}>
            <Pressable
              onPress={showDatePicker}
              style={tw`border-[${colors.black}] border-b-2 w-[154px] rounded-b-[20px] flex-1`}
            >
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date" // Change the mode to "time" for selecting time
                date={selectedDate || new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <UbuntuText
                weight={400}
                style={tw`text-[16px] text-[${colors.newgray}] self-start pl-3`}
              >
                {Platform.OS === "ios"
                  ? selectedDate.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : selectedDate.toLocaleTimeString()}
              </UbuntuText>
            </Pressable>
            <Pressable
              onPress={showDatePicked}
              style={tw`border-[${colors.black}] border-b-2 w-[154px] rounded-b-[20px] flex-1`}
            >
              <View style={tw``}>
                <DateTimePickerModal
                  isVisible={isDatePickerVisibled}
                  mode="date" // Change the mode to "time" for selecting time
                  date={selectedDates || new Date()}
                  onConfirm={handleConfirms}
                  onCancel={hideDatePicked}
                />
              </View>
              <UbuntuText
                weight={400}
                style={tw`text-[16px] text-[${colors.newgray}] self-start pl-3`}
              >
                {Platform.OS === "ios"
                  ? selectedDates.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : selectedDates.toLocaleTimeString()}
              </UbuntuText>
            </Pressable>
          </View>
          <View style={tw`flex-row  w-full gap-5 pt-7 px-4 `}>
            <UbuntuText
              weight={400}
              style={tw`text-[16px] text-[${colors.newgray}] flex-1 `}
            >
              StartDate
            </UbuntuText>
            <UbuntuText
              weight={400}
              style={tw`text-[16px] text-[${colors.newgray}] flex-1`}
            >
              EndDate
            </UbuntuText>
          </View>
          <View style={tw`flex-row  pt-2`}>
            <Pressable
              onPress={showDatePicker}
              style={tw`border-[${colors.black}] border-b-2 w-[154px] rounded-b-[20px] flex-1`}
            >
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time" // Change the mode to "time" for selecting time
                date={selectedDate || new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <UbuntuText
                weight={400}
                style={tw`text-[16px] text-[${colors.newgray}] self-start pl-3`}
              >
                {Platform.OS === "ios"
                  ? selectedDate.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : selectedDate.toLocaleTimeString()}
              </UbuntuText>
            </Pressable>
            <Pressable
              onPress={showDatePicked}
              style={tw`border-[${colors.black}] border-b-2 w-[154px] rounded-b-[20px] flex-1`}
            >
              <View style={tw``}>
                <DateTimePickerModal
                  isVisible={isDatePickerVisibled}
                  mode="time" // Change the mode to "time" for selecting time
                  date={selectedDates || new Date()}
                  onConfirm={handleConfirms}
                  onCancel={hideDatePicked}
                />
              </View>
              <UbuntuText
                weight={400}
                style={tw`text-[16px] text-[${colors.newgray}] self-start pl-3`}
              >
                {Platform.OS === "ios"
                  ? selectedDates.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : selectedDates.toLocaleTimeString()}
              </UbuntuText>
            </Pressable>
          </View>
          <View style={tw`pt-5  gap-2`}>
            <Pressable onPress={() => setModal(true)}>
              <View style={tw`flex-row items-center gap-4`}>
                <Add />
                <UbuntuText weight={400} style={tw`text-[16px]`}>
                  Add speaker
                </UbuntuText>
              </View>
            </Pressable>
            <Pressable onPress={() => setParticipant(true)}>
              <View style={tw`flex-row items-center gap-4`}>
                <Tag />
                <UbuntuText weight={400} style={tw`text-[16px]`}>
                  “Participant name” and 1 other
                </UbuntuText>
              </View>
            </Pressable>
            <Pressable onPress={() => setPremium(true)}>
              <View style={tw`flex-row items-center gap-4`}>
                <Carbon />
                <UbuntuText weight={400} style={tw`text-[16px]`}>
                  Mark as premium
                </UbuntuText>
              </View>
            </Pressable>
            <Pressable onPress={() => setEvent(true)}>
              <View style={tw`flex-row items-center gap-4`}>
                <Event />
                <UbuntuText weight={400} style={tw`text-[16px]`}>
                  Disable event room
                </UbuntuText>
              </View>
            </Pressable>
            <Pressable>
              <View style={tw`flex-row items-center gap-4`}>
                <Address />
                <UbuntuText weight={400} style={tw`text-[16px]`}>
                  Event venue: Jovya meet
                </UbuntuText>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      {modal && (
        <View
          style={tw`absolute inset-0 z-20  bg-black bg-opacity-30     w-full h-full flex-1 `}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => setModal(false)}
          >
            <Pressable onPress={() => setModal(false)}>
              <View style={tw`h-full bg-transparent`}></View>
            </Pressable>
            <View
              style={tw`flex-1 absolute bottom-0 w-full bg-white  items-start h-[268px]  rounded-t-[12px]`}
            >
              <View style={tw`px-43px pt-25px gap-4`}>
                <UbuntuText weight={700} style={tw` text-[16px]`}>
                  Add one or more speaker
                </UbuntuText>
                <View style={tw` h-[38px] min-w-full`}>
                  <UbuntuTextInput
                    placeholder="@username"
                    multiline
                    placeholderTextColor={colors.gray2}
                    style={{
                      height: 58,
                      width: "100%",
                      borderBottomWidth: 2,
                      borderBottomColor: colors.gray2,
                      borderRadius: 12,
                      paddingHorizontal: 8,
                    }}
                  />
                </View>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={tw`flex-1`}
                >
                  <View style={tw` gap-3 flex-1  pb-8`}>
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
                      style={tw`h-px w-full border-[${colors.gray2}] border-b-2 bg-white`}
                    />

                    <CustomButton
                      style={{
                        borderRadius: 40,
                        backgroundColor: colors.white,
                        width: 278,
                        height: 38,
                        borderColor: colors.darkPurple,
                        borderWidth: 1.5,
                      }}
                    >
                      <UbuntuText
                        weight={500}
                        style={tw` text-center text-[12px] py-2 text-[${colors.darkPurple}]`}
                      >
                        Add
                      </UbuntuText>
                    </CustomButton>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      )}
      {Participant && (
        <View
          style={tw`absolute inset-0 z-20  bg-black bg-opacity-30     w-full h-full flex-1 `}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={Participant}
            onRequestClose={() => setParticipant(false)}
          >
            <Pressable onPress={() => setParticipant(false)}>
              <View style={tw`h-full bg-transparent`}></View>
            </Pressable>
            <View
              style={tw`flex-1 absolute bottom-0 w-full bg-white  items-start h-[268px]  rounded-t-[12px]`}
            >
              <View style={tw`px-43px pt-25px gap-4`}>
                <UbuntuText weight={700} style={tw` text-[16px]`}>
                  Tag participants
                </UbuntuText>
                <View style={tw` h-[38px] min-w-full`}>
                  <UbuntuTextInput
                    placeholder="Search"
                    multiline
                    placeholderTextColor={colors.gray2}
                    style={{
                      height: 58,
                      width: "100%",
                      borderBottomWidth: 2,
                      borderBottomColor: colors.gray2,
                      borderRadius: 12,
                      paddingHorizontal: 8,
                    }}
                  />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={tw`pb-12 gap-2`}>
                    {groups.map((group) => (
                      <View key={group.id}>
                        <View style={tw`flex-row justify-between items-center`}>
                          <View style={tw`flex-row items-center gap-4`}>
                            <Picture />
                            <UbuntuText
                              weight={400}
                              style={tw`text-[14px] leading-none `}
                            >
                              {group.name}
                            </UbuntuText>
                          </View>
                          <Checkbox
                            style={tw`h-[12px] w-[12px]`}
                            value={group.isChecked}
                            onValueChange={() => handleCheckboxChange(group.id)}
                            color={group.isChecked ? "#4630EB" : undefined}
                          />
                        </View>
                        <View
                          style={tw`h-px w-full border-[#E5E5E5] border-b-2`}
                        />
                      </View>
                    ))}
                  </View>

                  <CustomButton
                    style={{
                      borderRadius: 40,
                      backgroundColor: colors.white,
                      width: 278,
                      height: 38,
                      borderColor: colors.darkPurple,
                      borderWidth: 1.5,
                    }}
                  >
                    <UbuntuText
                      weight={500}
                      style={tw` text-center text-[12px] py-2 text-[${colors.darkPurple}]`}
                    >
                      Done
                    </UbuntuText>
                  </CustomButton>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      )}
      {Premium && (
        <View
          style={tw`absolute inset-0 z-20  bg-black bg-opacity-30     w-full h-full flex-1 `}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={Premium}
            onRequestClose={() => setPremium(false)}
          >
            <Pressable onPress={() => setPremium(false)}>
              <View style={tw`h-full bg-transparent`}></View>
            </Pressable>
            <View
              style={tw`flex-1 absolute bottom-0 w-full bg-white  items-start h-[424px]  rounded-t-[12px]`}
            >
              <View style={tw`gap-3 px-43px pt-25px`}>
                <View style={tw``}>
                  <View style={tw`flex-row justify-between w-full`}>
                    <View style={tw`flex-row items-center gap-3  w-full`}>
                      <PremiumTag />
                      <UbuntuText weight={700} style={tw` text-[16px]`}>
                        premium event
                      </UbuntuText>
                    </View>
                    <RadioButton.Group
                      onValueChange={(value) => handleRadioButtonPress(value)}
                      value={selectedValue}
                      style={tw`border-[#30084F] bg-[#30084F] border-b-2 `}
                    >
                      <RadioButton value="option1" color="#30084F" />
                    </RadioButton.Group>
                  </View>
                </View>
                <View
                  style={tw`h-px w-[273px] self-center border-[${colors.newgray}] border-b`}
                />
                <UbuntuText
                  weight={700}
                  style={tw`text-[16px] text-black leading-none `}
                >
                  Enter your payment details
                </UbuntuText>
                <UbuntuText
                  weight={400}
                  style={tw`text-[14px] text-[${colors.newgray}] leading-none `}
                >
                  All particiapants must have to purchase a ticket before
                  entering your event room
                </UbuntuText>
                <View style={tw` h-[38px] min-w-full`}>
                  <UbuntuTextInput
                    placeholder="Your Bank Account Name"
                    multiline
                    placeholderTextColor={colors.gray2}
                    style={{
                      height: 58,
                      width: "100%",
                      borderBottomWidth: 2,
                      borderBottomColor: colors.gray2,
                      borderRadius: 12,
                      paddingHorizontal: 8,
                    }}
                  />
                </View>
                <View style={tw` h-[38px] min-w-full`}>
                  <UbuntuTextInput
                    placeholder="Your Bank Account Number"
                    multiline
                    placeholderTextColor={colors.gray2}
                    style={{
                      height: 58,
                      width: "100%",
                      borderBottomWidth: 2,
                      borderBottomColor: colors.gray2,
                      borderRadius: 12,
                      paddingHorizontal: 8,
                    }}
                  />
                </View>
                <View style={tw` h-[38px] min-w-full`}>
                  <UbuntuTextInput
                    placeholder="Bank Name"
                    multiline
                    placeholderTextColor={colors.gray2}
                    style={{
                      height: 58,
                      width: "100%",
                      borderBottomWidth: 2,
                      borderBottomColor: colors.gray2,
                      borderRadius: 12,
                      paddingHorizontal: 8,
                    }}
                  />
                </View>
                <View style={tw`flex-row justify-between w-full`}>
                  <View style={tw`flex-row items-center gap-3  w-full`}>
                    <Ticket />
                    <UbuntuText weight={700} style={tw` text-[16px]`}>
                      Free event
                    </UbuntuText>
                  </View>
                  <RadioButton.Group
                    onValueChange={(value) => handleRadioButtonPress(value)}
                    value={selectedValue}
                    style={tw`border-[#30084F] bg-[#30084F] border-b-2 `}
                  >
                    <RadioButton value="option2" color="#30084F" />
                  </RadioButton.Group>
                </View>
                <CustomButton
                  style={{
                    borderRadius: 40,
                    backgroundColor: colors.white,
                    width: 278,
                    height: 38,
                    borderColor: colors.darkPurple,
                    borderWidth: 1.5,
                  }}
                >
                  <UbuntuText
                    weight={500}
                    style={tw` text-center text-[12px] py-2 text-[${colors.darkPurple}]`}
                  >
                    Done
                  </UbuntuText>
                </CustomButton>
              </View>
            </View>
          </Modal>
        </View>
      )}
      {event ||
        (true && (
          <View
            style={tw`absolute inset-0 z-20  bg-black bg-opacity-30     w-full h-full flex-1 `}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={event || true}
              onRequestClose={() => setEvent(false)}
            >
              <Pressable onPress={() => setEvent(false)}>
                <View style={tw`h-full bg-transparent`}></View>
              </Pressable>
              <View
                style={tw`flex-1 absolute bottom-0 w-full bg-white  items-start   rounded-t-[12px]`}
              >
                <View style={tw`gap-3 px-43px pt-25px`}>
                  <UbuntuText weight={700} style={tw` text-[16px]`}>
                    Event Room
                  </UbuntuText>

                  <UbuntuText
                    weight={400}
                    style={tw`text-[14px] text-[${colors.newgray}] leading-none `}
                  >
                    Keep intersted participants waiting in a temporal group that
                    automatically dissolves 24hrs after the event.
                  </UbuntuText>
                  <View style={tw`flex-row justify-between items-center`}>
                    <View style={tw`flex-row items-center gap-3`}>
                      <Good />

                      <UbuntuText
                        weight={400}
                        style={tw`text-[16px] text-[${colors.newgray}] leading-none `}
                      >
                        Enable
                      </UbuntuText>
                    </View>
                    <RadioButton.Group
                      onValueChange={(value) => handleRadioButtonPress(value)}
                      value={selectedValue}
                      style={tw`border-[#30084F] bg-[#30084F] border-b-2 `}
                    >
                      <RadioButton value="option3" color="#30084F" />
                    </RadioButton.Group>
                  </View>
                  <View style={tw`flex-row justify-between items-center`}>
                    <View style={tw`flex-row items-center gap-4`}>
                      <Fail />

                      <UbuntuText
                        weight={400}
                        style={tw`text-[16px] text-[${colors.newgray}] leading-none `}
                      >
                        Disable
                      </UbuntuText>
                    </View>
                    <RadioButton.Group
                      onValueChange={(value) => handleRadioButtonPress(value)}
                      value={selectedValue}
                      style={tw`border-[#30084F] bg-[#30084F] border-b-2 `}
                    >
                      <RadioButton value="option4" color="#30084F" />
                    </RadioButton.Group>
                  </View>
                  <View style={tw`pb-5`}>
                    <CustomButton
                      style={{
                        borderRadius: 40,
                        backgroundColor: colors.white,
                        width: 278,
                        height: 38,
                        borderColor: colors.darkPurple,
                        borderWidth: 1.5,
                      }}
                    >
                      <UbuntuText
                        weight={500}
                        style={tw` text-center text-[12px] py-2 text-[${colors.darkPurple}]`}
                      >
                        Continue
                      </UbuntuText>
                    </CustomButton>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        ))}
    </SafeArea>
  );
}
