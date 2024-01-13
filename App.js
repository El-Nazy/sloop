import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import SearchIconSvg from "./assets/search.svg";
import { UbuntuText } from "./components/Texts";
import { UpdateListItem } from "./components/UpdateListItem";
// import { Platform } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView
        style={
          {
            // flex: 1,
            // backgroundColor: "#fff",
            // alignItems: "center",
            // justifyContent: "center",
          }
        }
      >
        <View
          style={{
            // width: "100%",
            // height: 120,
            paddingTop: 16,
            backgroundColor: "white",
            shadowColor: "rgba(0, 0, 0, 0.5)",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 20,
          }}
        >
          <View>
            <View
              style={{
                margin: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "rgba(238, 238, 238, 0.93)",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 12,
                  }}
                >
                  <UbuntuText weight={700} style={{ fontSize: 20 }}>
                    LS
                  </UbuntuText>
                </View>
                <UbuntuText weight={500} style={{ fontSize: 22 }}>
                  Long School Na...
                </UbuntuText>
              </View>
              <SearchIconSvg />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.activeSubMenuView}>
              <UbuntuText weight={700} style={styles.activeSubMenuText}>
                Updates
              </UbuntuText>
            </View>
            <View style={styles.subMenuView}>
              <UbuntuText weight={500} style={styles.subMenuText}>
                Class/Groups
              </UbuntuText>
            </View>
            <View style={styles.subMenuView}>
              <UbuntuText weight={500} style={styles.subMenuText}>
                People
              </UbuntuText>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 16,
            gap: 16,
          }}
        >
          <UpdateListItem />
          <UpdateListItem />
          <UpdateListItem />
          <UpdateListItem />
          <UpdateListItem />
          <UpdateListItem />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  activeSubMenuText: {
    fontSize: 18,
  },
  subMenuText: {
    fontSize: 18,
    color: "#706080",
  },
  activeSubMenuView: {
    // flex: 1,
    alignItems: "center",
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderBottomColor: "#7A1EF7",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  subMenuView: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    // flex: 1,
    // alignItems: "center",
  },
});
