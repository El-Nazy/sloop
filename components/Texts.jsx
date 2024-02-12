// CustomText.tsx
import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "../utils/constants";

const fontWeights = {
  400: "Ubuntu-Regular",
  500: "Ubuntu-Medium",
  700: "Ubuntu-Bold",
};

export function UbuntuText({ weight = 400, style, children, ...restProps }) {
  const [fontsLoaded, fontError] = useFonts({
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Medium": require("../assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Text
      style={[
        {
          fontFamily: fontWeights[weight],
          color: colors.black,
        },
        style,
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}

export function H2({ props, children }) {
  return (
    <UbuntuText
      weight={500}
      style={{
        fontSize: 20,
        lineHeight: 24,
        // textAlign: "center",
      }}
      {...props}
    >
      {children}
    </UbuntuText>
  );
}
