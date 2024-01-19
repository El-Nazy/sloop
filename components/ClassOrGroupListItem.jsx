// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";
import { UnreadCount } from "./UnreadCount";
import { ItemDateTime } from "./ItemDateTime";
import { ChatItemTitle } from "./ChatItemTitle";
import { ChatPreview } from "./ChatPreview";
import { Tag } from "./Tag";

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
          <Tag />
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
