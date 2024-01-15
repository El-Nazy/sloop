// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";

export function UpdateListItem() {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "white",
        borderRadius: 8,
        flexDirection: "row",
        overflow: "hidden",
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, .1)",
      }}
    >
      <View
        style={{
          width: 80,
          backgroundColor: "rgba(176, 176, 176, 1)",
        }}
      ></View>
      <View
        style={{
          padding: 10,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignContent: "center",
          }}
        >
          <UbuntuText
            weight={500}
            style={{
              fontSize: 16,
            }}
          >
            Opening Day Ann...
          </UbuntuText>
          <UbuntuText
            weight={400}
            style={{
              fontSize: 12,
              color: "#706080",
            }}
          >
            Date/Time
          </UbuntuText>
        </View>
        <UbuntuText
          weight={400}
          style={{
            fontSize: 14,
            color: "#706080",
          }}
        >
          This is the first day of school and we loerm ipsom dolom you all, t...
        </UbuntuText>
      </View>
    </View>
  );
}
