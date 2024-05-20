import {Platform, ScrollView, View} from "react-native";
import React, {useState} from "react";
import {colors} from "../utils/constants";
import {Image} from "expo-image";
import {H2, UbuntuText} from "../components/Texts";
import {router} from "expo-router";
import {SafeArea} from "../components/SafeArea";
import {CustomButton} from "../components/Buttons";
import {UbuntuTextInput} from "../components/UbuntuTextInput";
import {handleImageSelection} from "../utils/media-selection";
import {Back} from "../components/icons/Back";
import {HandleInput} from "./join-community";
import {OnboardingTxtInput} from "./sign-in";
import {getAuthToken} from "../utils/user-utils";
import {axiosInstance} from "../utils/axios-instance";
import {resetNavigationTo, updateAppData} from "./_layout";

export default function () {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [description, setDescription] = useState("");
  const [logoImageUri, setLogoImageUri] = useState("");

  const handleSubmit = async () => {
    if (Platform.OS === "web") return router.navigate("home");

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

    let response
    try {
      response = await axiosInstance.post("/communities", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${await getAuthToken()}`,
        },
      });
      console.log("res data", response?.data);

      // console.log("went home")
    } catch (err) {
      console.error(err);

      console.log("error", JSON.stringify(err, null, 2));
      // return alert("failed verification");
      console.error("type of error", err);
      return alert(
          err?.response?.data?.message ||
          err?.message ||
          "An error ocurred, please try again later if error persists"
      );
      // return null;
    }

    if (response?.status === 201 && response?.data?._id) {
      updateAppData({
        currentCommunityId: response.data._id
      })
      resetNavigationTo("home");
      return;
      // router.replace({href: "home", params: {communityId: response.data._id});
    }

    alert("Failed to create community, please review your inputs and try again.")
  };

  return (
      <SafeArea
          statusProps={{backgroundColor: colors.purple4}}
          barStyle="light"
      >
        <View
            style={{
              width: "100%",
              backgroundColor: colors.purple4,
              flexDirection: "row",
              paddingHorizontal: 12,
              height: 62,
              alignItems: "center",
              gap: 8,
            }}
        >
          <Back light prevHref="new-community"/>
          <View>
            <UbuntuText
                weight={500}
                style={{fontSize: 20, color: colors.white}}
            >
              New Community
            </UbuntuText>
          </View>
        </View>
        <ScrollView
            style={{
              width: "100%",
              paddingHorizontal: 20,
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
                  style={{borderRadius: 110 / 2}}
                  borderRadius={110 / 2}
                  android_ripple={{foreground: true}}
              >
                <Image
                    style={{
                      width: 110,
                      height: 110,
                      zIndex: -10,
                    }}
                    source={logoImageUri || require("../assets/select-image.png")}
                />
              </CustomButton>
            </View>

            <View style={{width: "100%", gap: 30}}>
              <OnboardingTxtInput
                  placeholder="Community name"
                  value={name}
                  onChangeText={setName}
              />
              <HandleInput
                  placeholder="community_handle"
                  value={handle}
                  onChangeText={setHandle}
              />
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
                    // height: 86,
                    // minheight: 86,
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
              borderRadius={12}
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
