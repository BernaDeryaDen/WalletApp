import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Home from "../screens/Home/Home";

const CurrentPage = () => {
  const { page } = useContext(AppContext);
  switch (page) {
    case "home":
      return <Home />;
    case "category":
      return <Category />;
    case "add":
      return <Add />;
    case "chart":
      return <Chart />;
    case "profile":
      return <Profile />;
    default:
      return <Home />;
  }
};
const styles = StyleSheet.create({});

export default CurrentPage;
