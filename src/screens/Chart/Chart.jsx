import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Top from "./Top";

const Chart = () => {
  return (
    <View style={styles.container}>
      <Top />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
