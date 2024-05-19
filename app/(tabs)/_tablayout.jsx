import { withLayoutContext } from "expo-router";
import {
  MaterialTopTabNavigationOptions,
  TabNavigationState,
  MaterialTopTabNavigationEventMap,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";

const { Navigator } = createMaterialTopTabNavigator;

export const MaterialTopTabs = withLayoutContext(Navigator);
export default function layout() {
  return <MaterialTopTabs></MaterialTopTabs>;
}
