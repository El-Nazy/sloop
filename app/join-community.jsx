import { View, ScrollView } from "react-native";
import React from "react";
import { colors } from "../utils/constants";
import { Image } from "expo-image";
import { H2, UbuntuText } from "../components/Texts";
import { Link } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import WhiteBackIconSvg from "../assets/white-back-icon.svg";

export default function () {
  return (
    <SafeArea statusProps={{ backgroundColor: colors.purple }} barStyle="light">
      <View
        style={{
          width: "100%",
          backgroundColor: colors.purple,
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
            <H2>Search for a community by entering their unique username.</H2>
          </View>

          <View style={{ width: "100%", marginBottom: 30 }}>
            <UbuntuTextInput
              placeholder="@username"
              placeholderTextColor={colors.gray2}
              style={{
                height: 38,
                width: "100%",
                borderBottomWidth: 2,
                borderBottomColor: colors.purple2,
                borderRadius: 4,
                paddingHorizontal: 8,
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
            backgroundColor: colors.purple,
            borderRadius: 12,
            paddingHorizontal: 30,
            justifyContent: "center",
            alignItems: "center",
            height: 44,
            width: "100%",
          }}
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
      />
      <View
        style={{
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
            source={require("../assets/profileImage.png")}
          />
          <View
            style={{
              gap: 3,
            }}
          >
            <UbuntuText weight={700} style={{ fontSize: 16, lineHeight: 19.2 }}>
              Graceville Christian Center
            </UbuntuText>
            <UbuntuText
              style={{
                fontSize: 10,
                lineHeight: 11.9,
                color: colors.darkGray,
              }}
            >
              Short Description of Bio Here...
            </UbuntuText>
          </View>
        </View>
        <Link
          href={"/home"}
          asChild
          style={{
            backgroundColor: colors.purple,
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
    </SafeArea>
  );
}
