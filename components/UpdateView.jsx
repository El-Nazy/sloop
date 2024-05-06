import { ScrollView, StyleSheet, View, StatusBar } from "react-native";
import BackIconSvg from "../assets/back-icon.svg";
import SearchIconSvg from "../assets/search.svg";
import CommentStrokedSvg from "../assets/comment-stroked.svg";
import LikeStrokedSvg from "../assets/like-stroked.svg";
import { UbuntuText } from "./Texts";
import { Image } from "expo-image";
import { Tag } from "./Tag";
import { Shadow } from "./Shadow";

export function UpdateView() {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
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
              <View
                style={{
                  height: 44,
                  width: 44,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(238, 238, 238, 0.93)",
                  borderRadius: 12,
                }}
              >
                <UbuntuText
                  weight={700}
                  style={{
                    fontSize: 20,
                  }}
                >
                  LS
                </UbuntuText>
              </View>
              <UbuntuText
                weight={700}
                style={{
                  fontSize: 22,
                }}
              >
                Long School Na...
              </UbuntuText>
            </View>
          </View>
          <SearchIconSvg />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            paddingTop: 12,
            paddingBottom: 16,
            paddingHorizontal: 36,
            gap: 16,
          }}
        >
          <View
            style={
              {
                // lineHeight: 20,
                // fontSize: 20,
                // marginBottom: 16,
              }
            }
          >
            <UbuntuText
              weight={500}
              style={{
                // lineHeight: 20,
                fontSize: 20,
                marginBottom: 16,
              }}
            >
              Message Title as is no matter how long it is
            </UbuntuText>
          </View>
          <UbuntuText
            weight={400}
            style={{
              fontSize: 16,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vivamus nec ligula eu
            velit facilisis dignissim. Nullam nec mi eu velit ultrices
            hendrerit. Nunc id fringilla turpis. Aliquam erat volutpat. Nulla
            facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Integer non bibendum odio. Aenean
            commodo metus eu odio rhoncus, in gravida justo consequat. Phasellus
            bibendum, urna a accumsan varius, metus elit congue neque, vel
            sagittis tellus risus non eros. Aenean tincidunt a tellus id
            ultrices. Fusce hendrerit turpis nec dolor sodales, id fermentum
            libero consequat. Vestibulum tincidunt euismod massa, non iaculis
            purus tincidunt id. In hac habitasse platea dictumst. Sed vel
            tincidunt felis. Suspendisse potenti. Curabitur eu quam vel purus
            sollicitudin dignissim. Curabitur vitae ex sed quam efficitur
            lacinia id at justo. Proin id luctus elit. Sed sit amet luctus
            libero. Donec id eros in velit malesuada fermentum ut nec justo.nt
            euismod massa, non iaculis purus tincidunt id. In hac habitasse
            platea dictumst. Sed vel tincidunt felis. Suspendisse potenti.
            Curabitur eu quam vel purus sollicitudin dignissim. Curabitur vitae
            ex sed quam efficitur lacinia id at justo. Proin id luctus elit. Sed
            sit amet luctus libero. Donec id eros in velit malesuada fermentum
            ut nec justo.
          </UbuntuText>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              paddingBottom: 12,
            }}
          >
            <UbuntuText weight={500} style={{ fontSize: 18 }}>
              Comments
            </UbuntuText>
          </View>
          <View style={{ gap: 14 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                gap: 16,
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}
                source={require("../assets/results-stroked.png")}
              />
              <View style={{ gap: 6 }}>
                <View
                  style={{
                    padding: 14,
                    backgroundColor: "rgba(238, 238, 238, 0.93)",
                    maxWidth: 270,
                    borderRadius: 22,
                    borderBottomLeftRadius: 4,
                    gap: 4,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                    }}
                  >
                    <UbuntuText weight={500} style={{ fontSize: 16 }}>
                      Tr. Jane Doe
                    </UbuntuText>
                    <Tag text={"Teacher"} />
                  </View>
                  <UbuntuText style={{ fontSize: 16, lineHeight: 18 }}>
                    Phasellus bibendum, urna a accumsan varius, metus elit
                    congue neque, vel sagittis{" "}
                  </UbuntuText>
                </View>
                <UbuntuText
                  style={{ fontSize: 12, color: "rgba(112, 96, 128, 1)" }}
                >
                  Date/Time
                </UbuntuText>
              </View>
            </View>
            <View
              style={{
                gap: 6,
                flex: 1,
                alignSelf: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  padding: 14,
                  backgroundColor: "rgba(238, 238, 238, 0.93)",
                  maxWidth: 270,
                  borderRadius: 22,
                  borderBottomRightRadius: 4,
                  // gap: 4,
                  backgroundColor: "rgba(122, 30, 247, 1)",
                }}
              >
                <UbuntuText
                  style={{ color: "white", fontSize: 16, lineHeight: 18 }}
                >
                  Nullam nec mi eu velit ultrices hendrerit. Nunc id fringilla
                  turpis. Aliquam erat
                </UbuntuText>
              </View>
              <UbuntuText
                style={{ fontSize: 12, color: "rgba(112, 96, 128, 1)" }}
              >
                Date/Time
              </UbuntuText>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          height: 60,
          paddingVertical: 10,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CommentStrokedSvg />
          <UbuntuText weight={700} style={{ fontSize: 11 }}>
            1.1K
          </UbuntuText>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LikeStrokedSvg />
          <UbuntuText weight={700} style={{ fontSize: 11 }}>
            1.1K
          </UbuntuText>
        </View>
        <Shadow isUpper={true} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
