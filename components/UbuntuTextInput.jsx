// CustomText.tsx
import React from "react";
import { TextInput } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "../utils/constants";

const fontWeights = {
  400: "Ubuntu-Regular",
  500: "Ubuntu-Medium",
  700: "Ubuntu-Bold",
};

export function UbuntuTextInput({ weight = 400, style, ...restProps }) {
  const [fontsLoaded, fontError] = useFonts({
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Medium": require("../assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TextInput
      style={[
        {
          fontFamily: fontWeights[weight],
          fontSize: 16,
          color: colors.black,
          flex: 1,
        },
        style,
      ]}
      {...restProps}
    />
  );
}
