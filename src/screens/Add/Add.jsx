import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Top from "./Top";

const Add = () => {
  return (
    <View style={styles.container}>
      <Top />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
