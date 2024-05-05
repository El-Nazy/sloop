import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, apiBaseUrl } from "../utils/constants";
import { getAuthToken } from "../utils/user-utils";
import { Image } from "expo-image";
import { H2, UbuntuText } from "../components/Texts";
import { Link } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import WhiteBackIconSvg from "../assets/white-back-icon.svg";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { axiosInstance } from "../utils/axios-instance";

export default function () {
  const [handle, setHandle] = useState("grace");
  const [showResults, setShowResults] = useState(false);
  const [community, setCommunity] = useState({
    name: "Comm",
    description: "desc",
    logoImageUrl: "",
  });
  const handleSearch = async () => {
    // make call to backend for results
    console.log("sending");
    try {
      // const res = await fetch(apiBaseUrl + "/communities", {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json",
      //     Authorization: `Bearer ${getAuthToken()}`,
      //     // "Content-Type": "application/json",
      //   },
      //   // body: JSON.stringify({
      //   //   email,
      //   //   // email: "emmanuelchinazangene@gmail.com",
      //   //   otp,
      //   // }),
      // });

      const r = await axiosInstance.get(`/communities?query=${handle}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getAuthToken()}`,
        },
      });
      console.log("sent");
      console.log(r.data);
      // console.log(await res.json());
      // display populate results view with it
      if (r.data[0]?.name) {
        setCommunity(r.data[0]);

        setShowResults(true);
      } else {
        alert("The community was not found or has not been created");
      }
    } catch (e) {
      console.log("\n\nerror", JSON.stringify(e));
      console.log("\n\nerror", e);
    }
  };
  return (
    <SafeArea
      statusProps={{ backgroundColor: colors.purple4 }}
      barStyle="light"
    >
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
        <Link href={"/welcome-page"} asChild>
          <WhiteBackIconSvg />
        </Link>
        <View>
          <UbuntuText
            weight={500}
            style={{ fontSize: 20, color: colors.white }}
          >
            Join a Community
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
              marginBottom: 30,
              marginTop: 30,
              width: "100%",
            }}
          >
            <H2>Search for a community by entering their unique handle.</H2>
          </View>

          <View
            style={{
              width: "100%",
              marginBottom: 30,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 8,
              borderBottomWidth: 2,
              borderBottomColor: colors.purple2,
              borderRadius: 4,
            }}
          >
            <UbuntuText style={{ color: colors.gray2 }}>@</UbuntuText>
            <UbuntuTextInput
              placeholder="community_handle"
              placeholderTextColor={colors.gray2}
              value={handle}
              onChangeText={setHandle}
              style={{
                height: 38,
                width: "100%",
              }}
            />
          </View>
          <UbuntuText
            style={{
              fontSize: 12,
              lineHeight: 11.49,
              color: colors.mediumGray,
              textAlign: "center",
              width: "100%",
            }}
          >
            Adding a profile info makes you more genuine and recognizable,
            fostering trust within your network.
          </UbuntuText>
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
          onPress={handleSearch}
        >
          <UbuntuText
            weight={500}
            style={{
              fontSize: 16,
              lineHeight: 16,
              color: colors.white,
            }}
          >
            SEARCH
          </UbuntuText>
        </CustomButton>
      </View>
      {showResults && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: colors.black,
            opacity: 0.5,
          }}
        ></View>
      )}
      {showResults && (
        <View
          style={{
            position: "absolute",
            // top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            padding: 16,
            backgroundColor: colors.white,
            borderTopEndRadius: 16,
            borderTopLeftRadius: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              paddingBottom: 16,
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
              source={
                community.logoImageUrl || require("../assets/profileImage.png")
              }
            />
            <View
              style={{
                gap: 3,
              }}
            >
              <UbuntuText
                weight={700}
                style={{ fontSize: 16, lineHeight: 19.2 }}
              >
                {community.name}
              </UbuntuText>
              <UbuntuText
                style={{
                  fontSize: 10,
                  lineHeight: 11.9,
                  color: colors.darkGray,
                }}
              >
                {community.description}
              </UbuntuText>
            </View>
          </View>
          <Link
            href={"/request-sent"}
            asChild
            style={{
              backgroundColor: colors.purple4,
              borderRadius: 12,
              paddingHorizontal: 30,
              justifyContent: "center",
              alignItems: "center",
              height: 44,
              width: "100%",
            }}
          >
            <CustomButton>
              <UbuntuText
                weight={500}
                style={{
                  fontSize: 16,
                  lineHeight: 16,
                  color: colors.white,
                }}
              >
                Join Community
              </UbuntuText>
            </CustomButton>
          </Link>
        </View>
      )}
    </SafeArea>
  );
}
