import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import { Frame } from "../assets/Frame.svg";
import { colors } from "../utils/constants";
import { Image } from "expo-image";
import { NavigationContainer } from "@react-navigation/native";
import { UbuntuText } from "../components/Texts";
import React, { useState } from "react";

// import { GroupDetail } from "../components/GroupDetail";
import Tab from "../components/Tab";
import { SafeArea } from "../components/SafeArea";
import HomeBanner from "../components/HomeBanner";

export default function () {
  const [focusedTab, setFocusedTab] = useState(0);
  const handleTabPress = (tabIndex) => {
    setFocusedTab(tabIndex);
  };

  return (
    <SafeArea>
      <View style={tw`flex-1 bg-white w-full`}>
        <HomeBanner />
      </View>
    </SafeArea>
  );
}
