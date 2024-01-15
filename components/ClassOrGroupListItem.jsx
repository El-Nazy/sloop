// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";
import { UnreadCount } from "./UnreadCount";
import { ItemDateTime } from "./ItemDateTime";
import { ChatItemTitle } from "./ChatItemTitle";
import { ChatPreview } from "./ChatPreview";

export function ClassOrGroupListItem() {
  return (
    <View
      style={{
        height: 57,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(238, 238, 238, 0.93)",
        gap: 3,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 9,
            alignItems: "center",
          }}
        >
          <ChatItemTitle />
          <View
            style={{
              padding: 3,
              backgroundColor: "#7A1EF7",
              borderRadius: 4,
            }}
          >
            <UbuntuText
              weight={700}
              style={{
                fontSize: 8,
                color: "white",
                lineHeight: 8,
              }}
            >
              CLASS
            </UbuntuText>
          </View>
        </View>
        <ItemDateTime />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 4,
          }}
        >
          <UbuntuText
            weight={500}
            style={{
              fontSize: 14,
              color: "#706080",
            }}
          >
            John Doe:
          </UbuntuText>
          <ChatPreview />
        </View>
        <UnreadCount />
      </View>
    </View>
  );
}
