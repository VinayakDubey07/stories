import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import StoryList from "./app/components/StorList";
import Constants from "expo-constants";

const App = () => {
  return (
    <View style={styles.container}>
      <StoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default App;