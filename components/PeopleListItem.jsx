// CustomText.tsx
import React from "react";
import { View } from "react-native";
import { UbuntuText } from "./Texts";
import { Image } from "expo-image";
import { UnreadCount } from "./UnreadCount";
import { ItemDateTime } from "./ItemDateTime";
import { ChatItemTitle } from "./ChatItemTitle";
import { ChatPreview } from "./ChatPreview";

export function PeopleListItem() {
  return (
    <View
      style={{
        marginBottom: 10,
        gap: 16,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 52,
          height: 52,
          borderRadius: 52 / 2,
        }}
        source={require("../assets/profileImage.png")}
      ></Image>
      <View
        style={{
          flex: 1,
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
          <ChatItemTitle title={"Solomon Imaga"} />
          <ItemDateTime />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ChatPreview />
          <UnreadCount />
        </View>
      </View>
    </View>
  );
}
