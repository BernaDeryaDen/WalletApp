import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Top from "./Top";

const Category = () => {
  return (
    <View style={styles.container}>
      <Top />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
