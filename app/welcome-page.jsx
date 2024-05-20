import {View} from "react-native";
import React, {useContext} from "react";
import {colors} from "../utils/constants";
import {Image} from "expo-image";
import {UbuntuText} from "../components/Texts";
import {Link} from "expo-router";
import {SafeArea} from "../components/SafeArea";
import {CustomButton} from "../components/Buttons";
import Logo from "../components/icons/Logo";
import {AppContext} from "./_layout";

export default function () {
  const {appState} = useContext(AppContext);
  return (
      <SafeArea backgroundColor={colors.purple4} barStyle="light">
        <View
            style={{
              position: "absolute",
              right: 20,
              top: 35,
              width: 40,
              height: 40,
              borderRadius: 20,
              overflow: "hidden",
              borderColor: colors.white,
              borderWidth: 2,
            }}
        >
          <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={appState?.user?.profileImageUrl || require("../assets/profileImage.png")}
          />
        </View>
        <View style={{justifyContent: "center", flex: 1}}>
          <View>
            <Logo white/>
          </View>
        </View>
        <View
            style={{
              paddingVertical: 50,
              backgroundColor: colors.white,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              alignItems: "center",
            }}
        >
          <View style={{width: "80%", gap: 12}}>
            <View style={{marginBottom: 30 - 12}}>
              <UbuntuText
                  weight={500}
                  style={{
                    fontSize: 20,
                    lineHeight: 24,
                    textAlign: "center",
                  }}
              >
                Welcome to your{"\n"}Growth hub
              </UbuntuText>
            </View>
            <Link href={"/new-community"} asChild>
              <CustomButton
                  borderRadius={12}
                  style={{
                    backgroundColor: colors.purple4,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 38,
                    // marginBottom: 8,
                  }}
              >
                <UbuntuText
                    style={{
                      fontSize: 14,
                      lineHeight: 18,
                      color: colors.white,
                    }}
                >
                  Create a community
                </UbuntuText>
              </CustomButton>
            </Link>
            <View style={{marginHorizontal: 8}}>
              <Link
                  href={"/join-community"}
                  asChild
                  // style={{ marginHorizontal: 8 }}
              >
                <CustomButton
                    borderRadius={12}
                    style={{
                      borderColor: colors.purple4,
                      borderWidth: 2,
                      borderRadius: 12,
                      alignItems: "center",
                      justifyContent: "center",
                      height: 38,
                      // marginHorizontal: 8,
                    }}
                >
                  <UbuntuText
                      style={{
                        fontSize: 14,
                        lineHeight: 18,
                        color: colors.purple4,
                      }}
                  >
                    Join a community
                  </UbuntuText>
                </CustomButton>
              </Link>
            </View>
          </View>
        </View>
      </SafeArea>
  );
}
