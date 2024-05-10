import tw from "twrnc";
import {
  ScrollView,
  Button,
  Pressable,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { apiBaseUrl, colors } from "../utils/constants";
import { handleImageSelection } from "../utils/media-selection";
import { Image } from "expo-image";
import { H2, UbuntuText } from "../components/Texts";
import { Link, useLocalSearchParams, router } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import BackArrowSvg from "../assets/back-arrow.svg";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { storeUser } from "../utils/user-utils";
import { OnboardingTxtInput } from "./sign-in";
import { OnboardingNextButton } from "./on-boarding";

export default function () {
  const { emailVerificationId } = useLocalSearchParams();
  console.log("emver", emailVerificationId);
  // todo: switch to ref to avoid the rerenders onChangeText
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profileImageUri, setProfileImageUri] = useState("");

  const handleSubmit = async () => {
    return router.replace("welcome-page");
    console.log("submitting");
    const formData = new FormData();

    if (profileImageUri)
      formData.append("profileImage", {
        uri: profileImageUri,
        type: "image/jpeg",
        name: "image.jpg",
        filename: profileImageUri,
      });

    if (bio) formData.append("bio", bio); // Another example

    // todo: demand name
    if (!name) return alert("you must specify your name");
    formData.append("name", name); // Example additional field
    formData.append("emailVerificationId", emailVerificationId); // Example additional field

    try {
      const response = await axios.post(apiBaseUrl + "/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
      console.log(response.data);
      router.replace("welcome-page");
      storeUser(response.data);
    } catch (error) {
      console.error(error);
      console.error("err", JSON.stringify(error));
      // return null;
    }
    console.log("submited");
  };

  return (
    <SafeArea viewStyle={tw`px-4`}>
      <ScrollView
        style={tw`flex-1 w-full `}
        contentContainerStyle={tw`items-center px-8`}
      >
        <View
          style={{
            position: "absolute",
            right: 5,
            top: 38 - (StatusBar.currentHeight || 0),
            padding: 10,
          }}
        >
          <UbuntuText
            style={{ fontSize: 12, lineHeight: 14.4, color: colors.purple2 }}
          >
            skip
          </UbuntuText>
        </View>
        <View
          style={{
            marginBottom: 20,
            marginTop: 93 - (StatusBar.currentHeight || 0),
          }}
        >
          <H2>Profile info</H2>
        </View>
        <View
          style={{
            marginBottom: 30,
            // width: "226",
          }}
        >
          <UbuntuText
            style={{
              fontSize: 16,
              lineHeight: 19.2,
              color: colors.newGray,
              textAlign: "center",
              // width: "100%",
            }}
          >
            Adding a profile info makes you more genuine and recognizable,
            fostering trust within your network.
          </UbuntuText>
        </View>
        <View style={{ width: 254, gap: 30 }}>
          <OnboardingTxtInput
            placeholder="Enter your name"
            placeholderTextColor={colors.gray2}
            value={name}
            onChangeText={setName}
          />

          <OnboardingTxtInput
            placeholder="Enter a bio"
            placeholderTextColor={colors.gray2}
            value={bio}
            onChangeText={setBio}
          />
        </View>
        <View
          style={{
            marginTop: 30,
            marginBottom: 60,
          }}
        >
          <CustomButton
            onPress={async () => {
              setProfileImageUri(await handleImageSelection());
            }}
            borderRadius={78 / 2}
            android_ripple={{ foreground: true }}
          >
            <Image
              style={{
                width: 78,
                height: 78,
              }}
              source={
                profileImageUri ||
                require("../assets/profile-image-placeholder.png")
              }
            />
          </CustomButton>
        </View>
      </ScrollView>

      {/* <CustomButton
        style={{
          backgroundColor: colors.purple4,
          borderRadius: 15,
          paddingHorizontal: 30,
          justifyContent: "center",
          height: 30,
        }}
        onPress={handleSubmit}
      >
        <UbuntuText
          weight={500}
          style={{
            fontSize: 14,
            lineHeight: 14.4,
            color: colors.white,
          }}
        >
          CONTINUE
        </UbuntuText>
      </CustomButton> */}
      <OnboardingNextButton onPress={handleSubmit} text="CONTINUE" />
    </SafeArea>
  );
}
