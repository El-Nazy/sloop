import "react-native-get-random-values";
// import { v4 as uuid } from "uuid";

import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import "expo-router/entry";

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./app");
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
