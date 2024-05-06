import React from "react";
import { Pressable, View } from "react-native";
import { colors } from "../utils/constants";

export const CustomButton = React.forwardRef(
  ({ children, style = {}, ...props }, ref) => {
    return (
      <View
        style={{
          overflow: "hidden",
          borderRadius: style && style.borderRadius,
        }}
      >
        <Pressable
          android_ripple={{
            color: colors.darkpurple4,
          }}
          style={style}
          ref={ref}
          {...props}
        >
          {children}
        </Pressable>
      </View>
    );
  }
);
