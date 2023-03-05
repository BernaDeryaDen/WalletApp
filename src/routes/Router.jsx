import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useContext } from "react";
import CurrentPage from "./CurrentPage";

const Router = () => {
  return (
    <View style={styles.container}>
      <CurrentPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    width: "100%",
    flexDirection: "column",
  },
});

export default Router;
