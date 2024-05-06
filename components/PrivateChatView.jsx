import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
} from "react-native";
import BackIconSvg from "../assets/back-icon.svg";
import SearchIconSvg from "../assets/search.svg";
import CommentStrokedSvg from "../assets/comment-stroked.svg";
import LikeStrokedSvg from "../assets/like-stroked.svg";
import { UbuntuText } from "./Texts";
import { UbuntuTextInput } from "./UbuntuTextInput";
import { Image } from "expo-image";
import { Tag } from "./Tag";
import { Shadow } from "./Shadow";
import SeenSvg from "../assets/seen.svg";
import DotSvg from "../assets/dot.svg";
import SendSvg from "../assets/send.svg";
import { colors } from "../utils/constants";

export function PrivateChatView() {
  return (
    <>
      <View
        style={{
          backgroundColor: colors.white,
          paddingHorizontal: 16,
          marginTop: StatusBar.currentHeight || 0,
          // height: 60,
          paddingVertical: 12,
          justifyContent: "flex-end",
        }}
      >
        <Shadow />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <BackIconSvg />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Image
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 20,
                }}
                source={require("../assets/profileImage.png")}
              />
              <UbuntuText
                weight={500}
                style={{
                  fontSize: 20,
                }}
              >
                John Doe Nnwajinw...
              </UbuntuText>
            </View>
          </View>
          <SearchIconSvg />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            padding: 10,
          }}
        >
          <View style={{ gap: 20 }}>
            <View
              style={{
                gap: 6,
                width: "75%",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  padding: 14,
                  backgroundColor: colors.lightGray,
                  borderRadius: 22,
                }}
              >
                <UbuntuText style={{ fontSize: 16, lineHeight: 18 }}>
                  Nullam nec mi eu velit ultrices hendrerit. Nunc id fringilla
                  turpis. Aliquam erat
                </UbuntuText>
              </View>
              <View
                style={{
                  padding: 14,
                  backgroundColor: colors.lightGray,
                  borderRadius: 22,
                }}
              >
                <UbuntuText style={{ fontSize: 16, lineHeight: 18 }}>
                  Nullam nec mi eu velit ultrices hendrerit. Nunc id fringilla
                  turpis. Aliquam erat
                </UbuntuText>
              </View>
              <View
                style={{
                  padding: 14,
                  backgroundColor: colors.lightGray,
                  borderRadius: 22,
                  borderBottomLeftRadius: 4,
                }}
              >
                <UbuntuText
                  style={{
                    fontSize: 16,
                    lineHeight: 18,
                  }}
                >
                  Phasellus bibendum, urna a accumsan varius, metus elit congue
                  neque, vel sagittis
                </UbuntuText>
              </View>
              <UbuntuText style={{ fontSize: 12, color: colors.darkGray }}>
                Date/Time
              </UbuntuText>
            </View>
            <View
              style={{
                gap: 6,
                flex: 1,
                alignSelf: "flex-end",
                alignItems: "flex-end",
                width: "80%",
              }}
            >
              <View
                style={{
                  padding: 14,
                  backgroundColor: colors.lightGray,
                  borderRadius: 22,
                  backgroundColor: colors.purple4,
                }}
              >
                <UbuntuText
                  style={{ color: colors.white, fontSize: 16, lineHeight: 18 }}
                >
                  Lorem ipsum dolor sit amet,
                </UbuntuText>
              </View>
              <View
                style={{
                  padding: 14,
                  backgroundColor: colors.lightGray,
                  borderRadius: 22,
                  backgroundColor: colors.purple4,
                }}
              >
                <UbuntuText
                  style={{ color: colors.white, fontSize: 16, lineHeight: 18 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus nec ligula eu velit
                </UbuntuText>
              </View>
              <View
                style={{
                  padding: 14,
                  backgroundColor: colors.lightGray,
                  borderRadius: 22,
                  borderBottomRightRadius: 4,
                  backgroundColor: colors.purple4,
                }}
              >
                <UbuntuText
                  style={{ color: colors.white, fontSize: 16, lineHeight: 18 }}
                >
                  Nullam nec mi eu velit ultrices hendrerit. Nunc id fringilla
                  turpis. Aliquam erat
                </UbuntuText>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <UbuntuText
                  style={{ fontSize: 12, color: "rgba(112, 96, 128, 1)" }}
                >
                  Date/Time
                </UbuntuText>
                <DotSvg />
                <SeenSvg />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          // flexDirection: "row",
          // justifyContent: "space-around",
          // height: 60,
          padding: 10,
          // paddingHorizontal: 12,
        }}
      >
        <Shadow isUpper={true} />
        <View
          style={{
            minHeight: 48,
            maxHeight: 100,
            backgroundColor: colors.lightGray,
            borderRadius: 24,
            paddingHorizontal: 16,
            paddingVertical: 10,
            alignItems: "center",
            flexDirection: "row",
            gap: 16,
          }}
        >
          <UbuntuTextInput
            style={{ flex: 1 }}
            placeholder="Type Your Message"
            multiline
          />
          <SendSvg />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
