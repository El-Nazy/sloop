import tw from "twrnc";
import {
  ScrollView,
  StatusBar,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { appName, colors } from "../utils/constants";
import { H2, UbuntuText } from "../components/Texts";
import { Link, router } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import NaijaFlagSvg from "../assets/flag-for-nigeria.svg";
import DropDownSvg from "../assets/dropdown.svg";
import GoogleIconSvg from "../assets/google-icon.svg";
import { axiosInstance } from "../utils/axios-instance";
import { OnboardingNextButton } from "./on-boarding";
import { Image } from "expo-image";
import { ShadowedView } from "react-native-fast-shadow";

export default function () {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    // console.log("submitting");
    // await axiosInstance.post(
    //   "/auth/send-otp",
    //   {
    //     email,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Add any additional headers if required
    //     },
    //   }
    // );

    // console.log("submitted");
    router.navigate({ pathname: "/verify", params: { email } });
  };

  return (
    <SafeArea viewStyle={tw`px-4`}>
      <ScrollView
        style={tw`w-full`}
        contentContainerStyle={tw`items-center px-8`}
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
          <View style={{ marginLeft: 8 }}>
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
              paddingHorizontal: 8,
              marginBottom: 20,
            }}
          >
            <View style={{ width: 30, alignItems: "center" }}>
              <NaijaFlagSvg />
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
            <DropDownSvg />
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
      <View
        style={[
          tw`rounded-full overflow-hidden mt-4 w-full`,
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
          style={tw`flex-row justify-center px-[20px] gap-[60px] py-[8px]  w-full items-center bg-white`}
          android_ripple={{
            color: colors.newGray,
          }}
        >
          <Image
            style={[
              {
                width: 36,
                height: 36,
              },
              tw`relative`,
            ]}
            source={require("../assets/google-icon.png")}
          />
          <UbuntuText style={tw`text-[16px]`}>Continue with Google</UbuntuText>
        </Pressable>
      </View>
      <OnboardingNextButton href={"verify"} text="CONFIRM" />
    </SafeArea>
  );
}

export function OnboardingTxtInput({ ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <UbuntuTextInput
      onEndEditing={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      style={{
        borderBottomWidth: 2,
        borderBottomColor: focused ? colors.purple : colors.newGray1,
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
      }}
      {...props}
    />
  );
}
