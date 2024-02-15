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
            <Image
              style={{
                width: 110,
                height: 110,
              }}
              source={require("../assets/profile-image-placeholder.png")}
            />
          </View>

          <View style={{ width: "100%", gap: 30 }}>
            <UbuntuTextInput
              placeholder="Community name"
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
                placeholder="Display name"
                placeholderTextColor={colors.gray2}
              />
            </View>

            <UbuntuTextInput
              placeholder="Community description"
              placeholderTextColor={colors.gray2}
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
              FINISH
            </UbuntuText>
          </CustomButton>
        </Link>
      </View>
    </SafeArea>
  );
}
