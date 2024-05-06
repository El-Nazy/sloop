import { View, Text, Button } from "react-native";

import React, { useState } from "react";

import Back from "../assets/back-arrow.svg";

import tw, { style } from "twrnc";
import { UbuntuText } from "../components/Texts";
import { UbuntuTextInput } from "../components/UbuntuTextInput";

import { StatusBar } from "expo-status-bar";
import { colors } from "../utils/constants";
import { CustomButton } from "../components/Buttons";
import { SafeArea } from "../components/SafeArea";

import { RadioButton } from "react-native-paper";

export default function communitykkkreport() {
  const [selectedValue, setSelectedValue] = useState("option1");
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
  return (
    <SafeArea
      backgroundColor="#FFFF"
      viewStyle={{
        justifyContent: "center",
      }}
    >
      <View style={tw`py-[10.5px] flex-1 w-full px-[19.75px]`}>
        <View style={tw`flex-row items-center gap-15.25px`}>
          <Back />
          <UbuntuText weight={700} style={tw`text-[16px] leading-none`}>
            Report to admin
          </UbuntuText>
        </View>
        <UbuntuText weight={500} style={tw`text-[20px] leading-none p-3 pt-10`}>
          What type of issue are you reporting?
        </UbuntuText>
        <View style={tw`justify-center `}>
          <RadioButton.Group
            onValueChange={(value) => handleRadioButtonPress(value)}
            value={selectedValue}
            style={tw`border-[#30084F] bg-[#30084F] border-b-2`}
          >
            <View style={tw`flex-row items-center`}>
              <RadioButton value="option1" color="#30084F" />
              <UbuntuText weight={400} style={tw`text-[12px] text-black`}>
                Bullying, threats, or hate speech
              </UbuntuText>
            </View>
            <View style={tw`flex-row items-center`}>
              <RadioButton value="option2" color="#30084F" />
              <UbuntuText weight={400} style={tw`text-[12px] text-black`}>
                Content that is violent, graphic, or sexually explicit
              </UbuntuText>
            </View>
            <View style={tw`flex-row items-center`}>
              <RadioButton value="option3" color="#30084F" />
              <UbuntuText weight={400} style={tw`text-[12px] text-black`}>
                Content that promotes illegal activity
              </UbuntuText>
            </View>
            <View style={tw`flex-row items-center`}>
              <RadioButton value="option4" color="#30084F" />
              <UbuntuText weight={400} style={tw`text-[12px] text-black`}>
                Doxing or sharing personal information without consent
              </UbuntuText>
            </View>
            <View style={tw`flex-row items-center`}>
              <RadioButton value="option5" color="#30084F" />
              <UbuntuText weight={400} style={tw`text-[12px] text-black`}>
                Impersonation or harassment
              </UbuntuText>
            </View>
            <View style={tw`flex-row items-center`}>
              <RadioButton value="option6" color="#30084F" />
              <UbuntuText weight={400} style={tw`text-[12px] text-black`}>
                Sexual harassment or assault
              </UbuntuText>
            </View>
            <View style={tw`flex-row items-center`}>
              <RadioButton value="option7" color="#30084F" />

              <UbuntuText weight={400} style={tw`text-[12px] text-black`}>
                Spam, misinformation, or disinformation
              </UbuntuText>
            </View>
            <View style={tw`flex-row items-center`}>
              <RadioButton value="option8" color="#30084F" />
              <UbuntuText weight={400} style={tw`text-[12px] text-black`}>
                Other
              </UbuntuText>
            </View>
          </RadioButton.Group>
        </View>

        <View style={tw`items-center`}>
          <UbuntuTextInput
            placeholder="Enter a report"
            placeholderTextColor={colors.black}
            style={tw`bg-[${colors.gray2}] h-px px-5 w-full py-20  rounded-[12px]`}
          />
          <View style={tw`pt-30`}>
            <CustomButton
              onPress={() => {
                // You can perform an action based on the selected value here as well
                switch (selectedValue) {
                  case "option1":
                    // Execute actions for Option 1 when the button is pressed
                    console.log("Performing action for Option 1");
                    break;
                  case "option2":
                    // Execute actions for Option 2 when the button is pressed
                    console.log("Performing action for Option 2");
                    break;
                  case "option3":
                    // Execute actions for Option 3 when the button is pressed
                    console.log("Performing action for Option 3");
                    break;
                  case "option4":
                    // Execute actions for Option 4
                    console.log("performing action 4");
                    break;
                  case "option5":
                    // Execute actions for Option 5
                    console.log("performing action 5");
                    break;
                  case "option6":
                    // Execute actions for Option 6
                    console.log("performing action 6");
                    break;
                  case "option7":
                    // Execute actions for Option 7
                    console.log("performing action 7");
                    break;
                  case "option8":
                    console.log("performing action 8");
                  default:
                    break;
                }
              }}
              style={tw`w-[184px] h-[38px] bg-[${colors.darkPurple}] rounded-[12px]`}
            >
              <UbuntuText
                weight={700}
                style={tw`text-[14px] text-white leading-[14.5px] self-center pt-3`}
              >
                Sumbit
              </UbuntuText>
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeArea>
  );
}
