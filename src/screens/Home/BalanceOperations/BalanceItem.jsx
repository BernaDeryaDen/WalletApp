// @ts-ignore
import { StyleSheet, View, useColorScheme, Platform } from "react-native";
// @ts-ignore
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../../../components/Text";

const BalanceItem = ({
  // @ts-ignore
  data: { id, iconName, iconColor, title, date, amount, isIncome },
}) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colorScheme === "light" ? "#fff" : "#000",
      }}
    >
      <View style={styles.iconContainer}>
        <View
          style={{ ...styles.iconBackground, backgroundColor: iconColor }}
        />
        <MaterialCommunityIcons
          style={styles.icon}
          name={iconName}
          size={32}
          color={iconColor}
        />
      </View>

      <View style={styles.textsContainer}>
        <Text
          // @ts-ignore
          style={{
            ...styles.title,
            color: colorScheme === "dark" ? "#fff" : "#393963",
          }}
        >
          {title}
        </Text>
        <Text
          // @ts-ignore
          style={{
            ...styles.date,
            color: colorScheme === "dark" ? "#fff" : "#393963",
          }}
        >
          {date}
        </Text>
      </View>
      <View style={styles.amountContainer}>
        <Text
          // @ts-ignore
          style={{ ...styles.amount, color: isIncome ? "#04c79c" : "#f93462" }}
        >
          {isIncome ? "+" : "-"} {amount}
        </Text>
      </View>
    </View>
  );
};

export default BalanceItem;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flex: 1,
    maxWidth: 500,
    width: "100%",
    flexDirection: "row",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00000009",
    shadowColor: "#00000066",

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: 48,
    opacity: 0.15,
  },
  icon: {
    position: "absolute",
  },
  textsContainer: {
    flex: 1,
    marginStart: 16,
    justifyContent: "space-around",
  },
  title: {
    color: "#393963",
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
  },
  date: {
    color: "#393963",
    opacity: 0.5,
  },
  amountContainer: {
    justifyContent: "center",
  },
  amount: {
    fontSize: 20,
    fontWeight: "600",
  },
});
