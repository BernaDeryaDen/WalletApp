import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppContext, AppSetterContext } from "../../../contexts/AppProvider";

const BottomBarIcon = ({
  page = "home",
  iconName = "home",
  iconColor = "#3e53e2",
  title = "Home",
}) => {
  const setApp = useContext(AppSetterContext);
  const app = useContext(AppContext);

  const color = app.page === page ? iconColor : "#b0b5cb";

  const handlePress = () => {
    setApp({ ...app, page: page });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <MaterialCommunityIcons
        style={styles.icon}
        // @ts-ignore
        name={iconName}
        size={32}
        color={color}
      />
      <Text style={{ ...styles.title, color: color }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BottomBarIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {},
  title: {
    fontSize: 10,
  },
});
