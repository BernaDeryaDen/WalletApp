import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { LinearGradient } from "expo-linear-gradient";
import Text from "../../components/Text";

const Top = () => {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <LinearGradient
      colors={["#8f4ed6", "#5535b9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ ...styles.container, paddingTop: statusBarHeight }}
    >
      <View style={styles.backgroundDonut} />
    </LinearGradient>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 210,
  },
  backgroundDonut: {
    position: "absolute",
    top: -150,
    right: -170,
    borderWidth: 60,
    width: 400,
    height: 400,
    borderRadius: 400,
    borderColor: "#ffffff66",
  },
});
