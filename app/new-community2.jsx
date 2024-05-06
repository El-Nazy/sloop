import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, apiBaseUrl } from "../utils/constants";
import { Image } from "expo-image";
import { H2, UbuntuText } from "../components/Texts";
import { Link, router } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import WhiteBackIconSvg from "../assets/white-back-icon.svg";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { handleImageSelection } from "../utils/media-selection";

export default function () {
  const [name, setName] = useState("My Comm");
  const [handle, setHandle] = useState("hand");
  const [description, setDescription] = useState("desc");
  const [logoImageUri, setLogoImageUri] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();

    if (logoImageUri)
      formData.append("logoImage", {
        uri: logoImageUri,
        type: "image/jpeg",
        name: "image.jpg",
        filename: logoImageUri,
      });

    if (description) formData.append("description", description); // Another example

    // todo: demand name and handle properly
    if (!name) return alert("you must specify the community's name");
    formData.append("name", name); // Example additional field
    if (!handle) return alert("you must specify the community's handle");
    formData.append("handle", handle); // Example additional field

    try {
      const response = await axios.post(apiBaseUrl + "/communities", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${await SecureStore.getItemAsync(
            "authToken"
          )}`,
        },
      });
      console.log(response.data);
      // router.replace("welcome-page");
      // SecureStore.setItemAsync("authToken", response.data.authToken);
      // AsyncStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.error(error);
      // return null;
    }
  };

  return (
    <SafeArea statusProps={{ backgroundColor: colors.purple }} barStyle="light">
      <View
        style={{
          width: "100%",
          backgroundColor: colors.purple4,
          flexDirection: "row",
          paddingHorizontal: 16,
          height: 62,
          alignItems: "center",
          gap: 16,
        }}
      >
        <WhiteBackIconSvg />
        <View>
          <UbuntuText
            weight={500}
            style={{ fontSize: 20, color: colors.white }}
          >
            New Community
          </UbuntuText>
        </View>
      </View>
      <ScrollView
        style={{
          width: "100%",
          paddingHorizontal: 16,
          // backgroundColor: "green",
        }}
      >
        <View
          style={[
            {
              flex: 1,
              // height: "100%",
              // paddingBottom: 25,
              // backgroundColor: "yellow",
              alignItems: "center",
            },
            // viewStyle,
          ]}
        >
          {/* {children} */}
          <View
            style={{
              marginBottom: 11,
              marginTop: 30,
            }}
          >
            <H2>Community Profile</H2>
          </View>

          <View
            style={{
              marginVertical: 30,
            }}
          >
            <CustomButton
              onPress={async () => {
                setLogoImageUri(await handleImageSelection());
              }}
              style={{ borderRadius: 110 / 2 }}
            >
              <Image
                style={{
                  width: 110,
                  height: 110,
                }}
                source={
                  logoImageUri ||
                  require("../assets/profile-image-placeholder.png")
                }
              />
            </CustomButton>
          </View>

          <View style={{ width: "100%", gap: 30 }}>
            <UbuntuTextInput
              placeholder="Community name"
              placeholderTextColor={colors.gray2}
              value={name}
              onChangeText={setName}
              style={{
                height: 38,
                width: "100%",
                borderBottomWidth: 2,
                borderBottomColor: colors.purple2,
                borderRadius: 4,
                paddingHorizontal: 8,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                // backgroundColor: "green",
                // gap: 3,
                height: 38,
                width: "100%",
                borderBottomWidth: 2,
                borderBottomColor: colors.purple2,
                borderRadius: 4,
                paddingHorizontal: 8,
              }}
            >
              <UbuntuText style={{ color: colors.gray2 }}>@</UbuntuText>
              <UbuntuTextInput
                placeholder="community_handle"
                placeholderTextColor={colors.gray2}
                value={handle}
                onChangeText={setHandle}
              />
            </View>

            <UbuntuTextInput
              placeholder="Community description"
              placeholderTextColor={colors.gray2}
              value={description}
              onChangeText={setDescription}
              multiline
              style={{
                borderRadius: 12,
                backgroundColor: colors.gray3,
                padding: 10,
                height: 86,
                textAlignVertical: "top",
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingBottom: 48,
          width: "100%",
          paddingHorizontal: 16,
          paddingTop: 20,
        }}
      >
        <CustomButton
          style={{
            backgroundColor: colors.purple4,
            borderRadius: 12,
            paddingHorizontal: 30,
            justifyContent: "center",
            alignItems: "center",
            height: 44,
            width: "100%",
          }}
          onPress={handleSubmit}
        >
          <UbuntuText
            weight={500}
            style={{
              fontSize: 16,
              lineHeight: 16,
              color: colors.white,
            }}
          >
            FINISH
          </UbuntuText>
        </CustomButton>
      </View>
    </SafeArea>
  );
}
