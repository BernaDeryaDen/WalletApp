import { View, Text } from "react-native";
import React from "react";
import AppProvider from "./AppProvider";
import FontProvider from "./FontProvider";

const Providers = ({ children }) => {
  return (
    <AppProvider>
      <FontProvider>{children}</FontProvider>
    </AppProvider>
  );
};

export default Providers;
