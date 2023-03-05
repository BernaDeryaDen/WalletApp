import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React, { useContext } from "react";
import BalanceItem from "./BalanceItem";
// @ts-ignore
import { AppContext } from "../../../contexts/AppProvider";

const BalanceOperations = () => {
  const app = useContext(AppContext);

  const data = app.transactions;
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={data}
        renderItem={({ item }) => <BalanceItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -38,
    // flex: 1,
    width: "100%",
  },
  list: {},
  listContent: {
    marginHorizontal: 14,
  },
  separator: {
    height: 12,
  },
});

export default BalanceOperations;
