import { StyleSheet, Text as RNText, View } from "react-native";
import React from "react";

const Text = ({ children }) => {
  return <RNText style={{ ...styles.text, ...style }}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "white",
    fontFamily: "Montserrat_500Medium",
  },
});
export default Text;
