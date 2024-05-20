import React from "react";
import { Pressable, View } from "react-native";
import { colors } from "../utils/constants";

export const CustomButton = React.forwardRef(
  ({ children, borderRadius = 12, android_ripple, ...props }, ref) => {
    return (
      <View
        style={{
          overflow: "hidden",
          borderRadius,
        }}
      >
        <Pressable
          android_ripple={{
            color: colors.purple,
            ...android_ripple,
          }}
          ref={ref}
          {...props}
        >
          {children}
        </Pressable>
      </View>
    );
  }
);
