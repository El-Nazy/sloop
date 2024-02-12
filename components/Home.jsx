import { Nav } from "./Nav";
import { Communications } from "./Communications";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../utils/constants";

export function Home() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          flex: 1,
          // paddingTop: 25,
          backgroundColor: colors.white,
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        {/* <Home /> */}
        {/* <PrivateChatView /> */}
        {/* <OnBoarding /> */}
        <Communications />
        <Nav />
      </SafeAreaView>
    </>
  );
}
