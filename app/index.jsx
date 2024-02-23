import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { Home } from "../components/Home";
import React, { useCallback, useEffect, useState } from "react";
import { colors } from "../utils/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { router } from "expo-router";
import { useRootNavigationState, Redirect } from "expo-router";

export default function () {
  // router.replace("/on-boarding");
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  // return <Redirect href={"/on-boarding"} />;
  return <Redirect href={"/home"} />;
  // return <Redirect href={"/sign-up"} />;
  // return <Redirect href={"/verify"} />;
  // return <Redirect href={"/profile-setup"} />;
  // return <Redirect href={"/initializing"} />;
  // return <Redirect href={"/welcome-page"} />;
  // return <Redirect href={"/new-community2"} />;
  // return <Redirect href={"/request-sent"} />;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  activeSubMenuText: {
    fontSize: 18,
  },
  subMenuText: {
    fontSize: 18,
    color: "#706080",
  },
  activeSubMenuView: {
    // flex: 1,
    alignItems: "center",
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderBottomColor: "#7A1EF7",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  subMenuView: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    // flex: 1,
    // alignItems: "center",
  },
});
