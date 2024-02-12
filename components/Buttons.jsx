import React from "react";
import { Pressable, View } from "react-native";
import { colors } from "../utils/constants";

export function CustomButton({ children, style, ...props }) {
  return (
    <View
      style={{
        overflow: "hidden",
        borderRadius: style.borderRadius,
      }}
    >
      <Pressable
        android_ripple={{
          color: colors.darkPurple,
        }}
        style={style}
        {...props}
      >
        {children}
      </Pressable>
    </View>
  );
}
