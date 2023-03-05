import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Income from "./Income";

const Expense = () => {
  return (
    <Income
      title={"EXPENSE"}
      balance={"12,421"}
      iconName={"arrow-up-right"}
      color={"#f93462"}
    />
  );
};

export default Expense;

const styles = StyleSheet.create({});
