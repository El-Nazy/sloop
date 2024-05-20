import {Platform, ScrollView, View} from "react-native";
import React, {useState} from "react";
import {colors} from "../utils/constants";
import {getAuthToken} from "../utils/user-utils";
import {Image} from "expo-image";
import {H2, UbuntuText} from "../components/Texts";
import {Link} from "expo-router";
import {SafeArea} from "../components/SafeArea";
import {CustomButton} from "../components/Buttons";
import {axiosInstance} from "../utils/axios-instance";
import {Back} from "../components/icons/Back";
import {OnboardingTxtInput} from "./sign-in";
import tw from "twrnc";

export default function () {
  const [handle, setHandle] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [community, setCommunity] = useState({
    name: "Comm",
    description: "desc",
    logoImageUrl: "",
  });

  const handleSearch = async () => {
    // make call to backend for results
    if (Platform.OS === "web") return setShowResults(true);

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
          statusProps={{backgroundColor: colors.purple4}}
          barStyle="light"
      >
        <View
            style={{
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
              Join a Community
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
            <View
                style={{
                  marginBottom: 30,
                  marginTop: 30,
                  width: "100%",
                  // gap: 30,
                }}
            >
              <H2>Search for a community by entering their unique handle.</H2>
            </View>
            <HandleInput
                placeholder="community_handle"
                value={handle}
                onChangeText={setHandle}
                styleExt2={tw`mb-[30px]`}
                onSubmitEditing={handleSearch}
                // focusListener={setHandleActive}
            />
            {/* <View style={tw`w-full `}>
            <UbuntuText
              style={tw`${
                handleActive || handle ? "" : `text-[${colors.gray2}] `
              }absolute left-[8px] top-[10px] text-[18px]`}
            >
              @
            </UbuntuText>
            <OnboardingTxtInput
              placeholder="community_handle"
              placeholderTextColor={colors.gray2}
              value={handle}
              onChangeText={setHandle}
              focusListener={setHandleActive}
              styleExt={tw`pl-[${7 + 18}px] mb-[30px]`}
            />
          </View> */}
            <UbuntuText
                style={{
                  fontSize: 14,
                  lineHeight: 18,
                  color: colors.mediumGray,
                  textAlign: "center",
                  width: "100%",
                }}
            >
              Ensure you properly enter the community’s unique handle. A request
              may be sent to the admin(s) to approve your request.
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
              borderRadius={12}
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
                  // width: "100%",
                  padding: 16,
                  backgroundColor: colors.white,
                  borderTopEndRadius: 16,
                  borderTopLeftRadius: 16,
                }}
            >
              <View
                  style={{
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "start",
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
                      gap: 4,
                      flex: 1
                    }}
                >
                  <UbuntuText
                      weight={700}
                      style={{fontSize: 16, lineHeight: 16}}
                  >
                    {community.name}
                  </UbuntuText>
                  <UbuntuText
                      style={{
                        fontSize: 12,
                        lineHeight: 18,
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
                >
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

export function HandleInput({value, styleExt2, ...props}) {
  const [handleActive, setHandleActive] = useState(false);
  return (
      <View style={tw`w-full `}>
        <UbuntuText
            style={tw`${
                handleActive || value ? "" : `text-[${colors.gray2}] `
            }absolute left-[8px] top-[10px] text-[18px]`}
        >
          @
        </UbuntuText>
        <OnboardingTxtInput
            // placeholder="community_handle"
            placeholderTextColor={colors.gray2}
            value={value}
            // onChangeText={setHandle}
            focusListener={setHandleActive}
            styleExt={[tw`pl-[${7 + 18}px]`, styleExt2]}
            {...props}
        />
      </View>
  );
}