import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/Text";
import { Feather } from "@expo/vector-icons";

const Income = ({
  title = "INCOME",
  balance = "42,500",
  iconName = "arrow-down-left",
  color = "#04c79c",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather
          // @ts-ignore
          name={iconName}
          size={16}
          color={color}
        />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.balance}>$ {balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  textsContainer: {
    marginStart: 16,
  },
  title: {},
  balance: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 600,
  },
});

export default Income;
