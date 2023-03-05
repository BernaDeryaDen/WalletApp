import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Reference = () => {
  return (
    <Image
      style={styles.image}
      // @ts-ignore
      source={require("../../../assets/reference_category.png")}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.0,
    zIndex: -1,
  },
});

export default Reference;
