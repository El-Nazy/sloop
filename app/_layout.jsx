import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Add from "../assets/addperson.svg";
import { Image } from "expo-image";
export default function layout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="(tabs)/tabindex"
        options={{
          headerLeft: () => {
            <Image
              style={{
                width: 458,
                maxWidth: "100%",
                height: 421.62,
                position: "absolute",
                backgroundColor: "black",
                // top: 0,
              }}
              source={require("../assets/group-discussion.png")}
            />;
          },
          headerRight: () => {
            <Image
              style={{
                width: 458,
                maxWidth: "100%",
                height: 421.62,
                position: "absolute",
                backgroundColor: "black",
                // top: 0,
              }}
              source={require("../assets/group-discussion.png")}
            />;
          },
          headerTitle: () => {
            <Image
              style={{
                width: 458,
                maxWidth: "100%",
                height: 421.62,
                position: "absolute",
                backgroundColor: "black",
                // top: 0,
              }}
              source={require("../assets/group-discussion.png")}
            />;
          },
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          headerTitle: "home",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
