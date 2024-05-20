import {View} from "react-native";
import React from "react";
import {colors} from "../utils/constants";
import {Image} from "expo-image";
import {UbuntuText} from "../components/Texts";
import {Link} from "expo-router";
import {SafeArea} from "../components/SafeArea";
import {CustomButton} from "../components/Buttons";
import {Back} from "../components/icons/Back";

export default function () {
  return (
    <SafeArea
      statusProps={{backgroundColor: colors.purple4}}
      viewStyle={{justifyContent: "center"}}
      barStyle="light"
    >
      <Image
        style={{
          width: 458,
          maxWidth: "100%",
          height: 421.62,
          position: "absolute",
          top: 80,
        }}
        source={require("../assets/group-discussion.png")}
      />

      <View
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          backgroundColor: colors.purple4,
          flexDirection: "row",
          paddingHorizontal: 8,
          height: 62,
          alignItems: "center",
          gap: 8,
        }}
      >
        <Back light prevHref="/welcome-page"/>

        <View>
          <UbuntuText
            weight={500}
            style={{fontSize: 20, color: colors.white}}
          >
            New Community
          </UbuntuText>
        </View>
      </View>

      <View
        style={{
          width: 284,
          paddingVertical: 20,
          backgroundColor: colors.black,
          borderRadius: 16,
          // position: "absolute",
          // top: 94,
          // gap: 10,
        }}
      >
        <View>
          <UbuntuText
            weight={500}
            style={{
              lineHeight: 24,
              fontSize: 20,
              color: colors.white,
              paddingHorizontal: 15,
              marginBottom: 28,
            }}
          >
            Welcome to your growth hub!
          </UbuntuText>
        </View>
        <View
          style={{
            paddingHorizontal: 7,
            gap: 12,
          }}
        >
          <View
            style={{flexDirection: "row", gap: 7, alignItems: "flex-start"}}
          >
            <UbuntuText
              style={{fontSize: 14, lineHeight: 18, color: colors.white}}
            >
              •
            </UbuntuText>
            <UbuntuText
              style={{fontSize: 14, lineHeight: 18, color: colors.white}}
            >
              Share resources and expertise.
            </UbuntuText>
          </View>
          <View
            style={{flexDirection: "row", gap: 7, alignItems: "flex-start"}}
          >
            <UbuntuText
              style={{fontSize: 14, lineHeight: 18, color: colors.white}}
            >
              •
            </UbuntuText>
            <UbuntuText
              style={{fontSize: 14, lineHeight: 18, color: colors.white}}
            >
              Gain access to knowledge, skills, and expertise from other
              members. Communities often offer workshops, discussions, and other
              learning opportunities.
            </UbuntuText>
          </View>
          <View
            style={{flexDirection: "row", gap: 7, alignItems: "flex-start"}}
          >
            <UbuntuText
              style={{fontSize: 14, lineHeight: 18, color: colors.white}}
            >
              •
            </UbuntuText>
            <UbuntuText
              style={{fontSize: 14, lineHeight: 18, color: colors.white}}
            >
              Ready to Dive In? Explore, Learn, Belong!
            </UbuntuText>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 48,
          left: 16,
          right: 16,
        }}
      >
        <Link href={"/new-community2"} asChild>
          <CustomButton
            borderRadius={12}
            style={{
              backgroundColor: colors.purple4,
              borderRadius: 12,
              paddingHorizontal: 30,
              justifyContent: "center",
              alignItems: "center",
              height: 44,
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
              CONTINUE
            </UbuntuText>
          </CustomButton>
        </Link>
      </View>
    </SafeArea>
  );
}
