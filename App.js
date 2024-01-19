import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { Home } from "./components/Home";
import { UpdateView } from "./components/UpdateView";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          flex: 1,
          // paddingTop: 25,
          // backgroundColor: "#fff",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        {/* <Home /> */}
        <UpdateView />
      </SafeAreaView>
    </>
  );
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
