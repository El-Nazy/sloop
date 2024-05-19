import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function tabindex() {
  return (
    <View>
      <Link href={"/home"}> home</Link>
    </View>
  );
}
