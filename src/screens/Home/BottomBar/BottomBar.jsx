import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { useContext } from "react";
import BottomBarIcon from "./BottomBarIcon";
import { AppContext } from "../../../contexts/AppProvider";

const BottomBar = () => {
  const app = useContext(AppContext);
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colorScheme === "dark" ? "#000" : "#f9fdff",
      }}
    >
      <BottomBarIcon page="home" iconName="home" title="Home" />
      <BottomBarIcon page="category" iconName="view-grid" title="Category" />
      <BottomBarIcon page="add" iconName="note-plus" title="Add" />
      <BottomBarIcon
        page="chart"
        iconName="chart-timeline-variant"
        title="Chart"
      />
      <BottomBarIcon page="profile" iconName="account" title="Profile" />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 42,
    justifyContent: "space-around",
    backgroundColor: "#f9fdff",
    borderTopWidth: 1,
    borderTopColor: "#00000005",
  },
});
