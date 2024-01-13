// CustomText.tsx
import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

const fontWeights = {
  400: "Ubuntu-Regular",
  500: "Ubuntu-Medium",
  700: "Ubuntu-Bold",
};

export function UbuntuText({
  weight,
  style,
  children,
  ...restProps
}) {
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
      style={{
        fontFamily: fontWeights[weight],
      }}
    >
      <Text style={style} {...restProps}>
        {children}
      </Text>
    </Text>
  );
}
