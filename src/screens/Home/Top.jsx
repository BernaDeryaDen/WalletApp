import { Platform, StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import Text from "../../components/Text";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import IncomeExpenseContainer from "./IncomeExpenseContainer/IncomeExpenseContainer";

const Top = () => {
  const statusBarHeight =
    Platform.OS === "web" ? 42 : Constants.statusBarHeight;
  const colorScheme = useColorScheme();

  return (
    <LinearGradient
      colors={
        colorScheme === "light"
          ? ["#5535b9", "#8f4ed6"]
          : ["#271866", "#4a1b63"]
      }
      style={{ ...styles.container, paddingTop: statusBarHeight }}
    >
      <Text style={styles.currentBalance}>CURRENT BALANCE</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.currency}>$</Text>
        <Text style={styles.balance}>32,465</Text>
      </View>
      <Text style={styles.date}>September 2018</Text>
      <IncomeExpenseContainer />
    </LinearGradient>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 328,
  },
  currentBalance: {
    marginTop: 12,
  },
  balanceContainer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  currency: {
    fontSize: 24,
  },
  balance: {
    marginStart: 8,
    fontSize: 48,
  },
  date: {
    marginTop: 10,
  },
  background: {
    width: 200,
    height: 200,
  },
});
