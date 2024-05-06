import * as SecureStore from "expo-secure-store";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export function storeUser({ user, authToken }) {
  SecureStore.setItemAsync("authToken", authToken);
  // AsyncStorage.setItem("user", JSON.stringify(user));
}

export function getAuthToken() {
  return SecureStore.getItem("authToken");
}
