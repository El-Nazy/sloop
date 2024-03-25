import {
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

export default function () {
  const { emailVerificationId } = useLocalSearchParams();
  console.log("emver", emailVerificationId);
  // todo: switch to ref to avoid the rerenders onChangeText
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profileImageUri, setProfileImageUri] = useState("");

  const handleSubmit = async () => {
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
    <SafeArea>
      <View
        style={{
          position: "absolute",
          right: 21,
          top: 38 - StatusBar.currentHeight,
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
          marginBottom: 11,
          marginTop: 93 - StatusBar.currentHeight,
        }}
      >
        <H2>Profile info</H2>
      </View>
      <View
        style={{
          marginBottom: 30,
          width: 226,
        }}
      >
        <UbuntuText
          style={{
            fontSize: 12,
            lineHeight: 11.49,
            color: colors.mediumGray,
            textAlign: "center",
            width: 220,
          }}
        >
          Adding a profile info makes you more genuine and recognizable,
          fostering trust within your network.
        </UbuntuText>
      </View>
      <View style={{ width: 254, gap: 30 }}>
        <View
          style={{
            height: 38,
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: colors.purple2,
            borderRadius: 4,
            paddingHorizontal: 8,
          }}
        >
          <UbuntuTextInput
            placeholder="Enter your name"
            placeholderTextColor={colors.gray2}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View
          style={{
            height: 38,
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: colors.purple2,
            borderRadius: 4,
            paddingHorizontal: 8,
          }}
        >
          <UbuntuTextInput
            placeholder="Enter a bio"
            placeholderTextColor={colors.gray2}
            value={bio}
            onChangeText={setBio}
          />
        </View>
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
          style={{ borderRadius: 78 / 2 }}
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

      <CustomButton
        style={{
          backgroundColor: colors.purple,
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
      </CustomButton>
    </SafeArea>
  );
}
