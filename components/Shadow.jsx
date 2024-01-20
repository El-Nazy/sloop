// CustomText.tsx
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export function Shadow({ isUpper = false }) {
  const colors = ["rgba(80,80,80,0.1)", "rgba(255,255,255,0.0)"];
  const position = isUpper ? "top" : "bottom";
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={isUpper ? colors.reverse() : colors}
      style={{
        height: 7,
        position: "absolute",
        left: 0,
        right: 0,
        [position]: -7,
      }}
    />
  );
}
