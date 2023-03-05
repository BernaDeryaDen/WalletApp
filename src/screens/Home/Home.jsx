import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import Top from "./Top";
import BalanceOperations from "./BalanceOperations/BalanceOperations";
import BottomBar from "./BottomBar/BottomBar";

const Home = () => {
  const statusBarHeight = Constants.statusBarHeight;

  const theme = useColorScheme();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme === "light" ? "#fff" : "#000",
      }}
    >
      <Top />

      <View style={{ alignItems: "center" }}>
        <BalanceOperations />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
