import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Income from "./Income";
import Expense from "./Expense";

const IncomeExpenseContainer = () => {
  return (
    <View style={styles.container}>
      <Income />
      <Expense />
    </View>
  );
};

export default IncomeExpenseContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    width: "100%",
    marginTop: 40,
  },
});
