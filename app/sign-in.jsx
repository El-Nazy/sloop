import tw from "twrnc";
import {Platform, Pressable, ScrollView, StatusBar, View,} from "react-native";
import React, {useContext, useState} from "react";
import {colors} from "../utils/constants";
import {H2, UbuntuText} from "../components/Texts";
import {router, useLocalSearchParams} from "expo-router";
import {SafeArea} from "../components/SafeArea";
import {UbuntuTextInput} from "../components/UbuntuTextInput";
import NaijaFlagSvg from "../assets/flag-for-nigeria.svg";
import DropDownSvg from "../assets/dropdown.svg";
import {axiosInstance} from "../utils/axios-instance";
import {OnboardingNextButton} from "./on-boarding";
import {Image} from "expo-image";
import Joi from "joi";
import {AppContext, updateAppData} from "./_layout";

export default function () {
  const {email: emailParam} = useLocalSearchParams();
  const {appState} = useContext(AppContext)
  const [email, setEmail] = useState(emailParam || appState?.email || "");

  const handleSubmit = async () => {
    if (!email) return alert("Please enter your email before you continue.");

    let validEmail;
    try {
      validEmail = await Joi.string()
          .email({tlds: false})
          .validateAsync(email);
    } catch (error) {
      console.log("validation err", error);
      console.log("email", email);
      return alert(
          "Invalid email format, please enter your the email correctly"
      );
    }

    setEmail(validEmail);
    updateAppData({
      email: validEmail,
    })

    console.log("submitting");

    try {
      let r = await axiosInstance.post(
          "/auth/send-otp",
          {
            email,
          },
          {
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers if required
            },
          }
      );
      console.log("submitted");
    } catch (err) {
      return alert(
          err?.response?.data?.message ||
          err?.message ||
          "An error ocurred, please try again later if error persists"
      );
    }

    updateAppData({
      email: validEmail,
      verificationSent: true,
    })
    router.navigate({pathname: "/verify", params: {email}});
  };

  return (
      <SafeArea viewStyle={tw`px-5`}>
        <ScrollView
            style={tw`w-full`}
            contentContainerStyle={tw`items-center`}
        >
          <View
              style={{
                marginBottom: 14,
                marginTop: 93 - (StatusBar.currentHeight || 0),
              }}
          >
            <H2>Enter your email address</H2>
          </View>
          <View
              style={{
                marginBottom: 24,
              }}
          >
            <UbuntuText
                style={{
                  fontSize: 16,
                  // lineHeight: 11.49,
                  color: colors.mediumGray,
                  textAlign: "center",
                }}
            >
              Sloop will need to confirm your account.
            </UbuntuText>
          </View>
          <View style={tw`w-full`}>
            <View style={{marginLeft: 8}}>
              <UbuntuText
                  style={{
                    fontSize: 14,
                    lineHeight: 18,
                    color: colors.neutralGray,
                  }}
              >
                Country/Region
              </UbuntuText>
            </View>
            <View
                style={{
                  flexDirection: "row",
                  height: 38,
                  width: "100%",
                  alignItems: "center",
                  gap: 12,
                  borderBottomWidth: 2,
                  borderBottomColor: colors.newGray1,
                  borderRadius: 4,
                  paddingHorizontal: 4,
                  marginBottom: 20,
                }}
            >
              <View style={{width: 30, alignItems: "center"}}>
                <NaijaFlagSvg/>
              </View>
              <UbuntuText
                  weight={500}
                  style={{
                    fontSize: 14,
                    lineHeight: 16.09,
                    flex: 1,
                    color: "#AFA9B2",
                  }}
              >
                Nigeria
              </UbuntuText>
              <DropDownSvg/>
            </View>
            <OnboardingTxtInput
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={handleSubmit}
                placeholder="Enter email"
            />
          </View>
          {/* <View
          style={{
            marginBottom: 60,
          }}
        >
          <UbuntuText
            style={{
              fontSize: 12,
              lineHeight: 14.4,
            }}
          >
            Already have an account?{" "}
            <Link href={"/sign-up"} style={{ color: colors.purple }}>
              Login
            </Link>
          </UbuntuText>
        </View> */}
        </ScrollView>
        <OnboardingNextButton
            {...(Platform.OS == "web"
                ? {href: "verify"}
                : {onPress: handleSubmit})}
            text="CONFIRM"
        />
        <View style={tw`flex-row gap-4 items-center mb-[40px] mt-[8]`}>
          <View style={tw`bg-[${colors.newGray}] flex-1 h-[.5px]`}/>
          <UbuntuText style={tw`text-[${colors.newGray}]`}>OR</UbuntuText>
          <View style={tw`bg-[${colors.newGray}] flex-1 h-[.5px]`}/>
        </View>
        <View
            style={[
              tw`rounded-[16px] overflow-hidden mb-[32px] w-full`,
              {
                shadowOpacity: 0.25,
                shadowRadius: 4,
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowColor: "#000000",
                elevation: 2,
              },
            ]}
        >
          <Pressable
              onPress={() => {
                // router.navigate();
              }}
              style={tw`flex-row justify-center px-[20px] py-[17px] w-full items-center bg-white`}
              android_ripple={{
                color: colors.newGray,
              }}
          >
            <Image
                style={[
                  {
                    width: 32,
                    height: 32,
                  },
                  tw`absolute left-4`,
                ]}
                source={require("../assets/google-icon.png")}
            />
            <UbuntuText style={tw`text-[16px]`}>Continue with Google</UbuntuText>
          </Pressable>
        </View>
      </SafeArea>
  );
}

export function OnboardingTxtInput({focusListener, styleExt, ...props}) {
  const [focused, setFocused] = useState(false);
  return (
      <UbuntuTextInput
          onEndEditing={() => {
            focusListener && focusListener(false);
            setFocused(false);
          }}
          onFocus={() => {
            focusListener && focusListener(true);
            setFocused(true);
          }}
          style={[
            {
              borderBottomWidth: 2,
              borderBottomColor: focused ? colors.purple : colors.newGray1,
              borderRadius: 4,
              paddingHorizontal: 8,
              paddingVertical: 6,
              width: "100%",
            },
            styleExt,
          ]}
          {...props}
      />
  );
}
