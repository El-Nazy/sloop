import {StatusBar} from "expo-status-bar";
import {SafeAreaView, StatusBar as RnStatusBar} from "react-native";
import {colors} from "../utils/constants";

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
            animated={true}
        />
        <SafeAreaView
            style={[
              {
                flex: 1,
                marginTop: (RnStatusBar.currentHeight || 0),
                // paddingTop: (RnStatusBar.currentHeight || 0),
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
