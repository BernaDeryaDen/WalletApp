import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import { LinearGradient } from "expo-linear-gradient";
import Text from "../../components/Text";

const Top = () => {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <LinearGradient
      colors={["#5535b9", "#8f4ed6"]}
      style={{ ...styles.container, paddingTop: statusBarHeight }}
    >
      <Text>Add</Text>
    </LinearGradient>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 328,
  },
});
