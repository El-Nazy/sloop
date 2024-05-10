import React from "react";
import { Pressable, View } from "react-native";
import { colors } from "../utils/constants";

export const CustomButton = React.forwardRef(
  ({ children, borderRadius, android_ripple, ...props }, ref) => {
    return (
      <View
        style={{
          overflow: "hidden",
          // borderRadius,
        }}
      >
        <Pressable
          android_ripple={{
            color: colors.newGray,
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
