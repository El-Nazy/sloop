import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../utils/constants";

export function SafeArea({
  children,
  statusProps,
  viewProps,
  viewStyle,
  barStyle,
  backgroundColor = colors.white,
}) {
  return (
    <>
      <StatusBar
        style={barStyle || "auto"}
        backgroundColor={backgroundColor}
        {...statusProps}
      />
      <SafeAreaView
        style={[
          {
            flex: 1,
            // paddingTop: 25,
            backgroundColor: backgroundColor,
            alignItems: "center",
          },
          viewStyle,
        ]}
        {...viewProps}
      >
        {children}
      </SafeAreaView>
    </>
  );
}
