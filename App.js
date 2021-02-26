import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { SafeAreaView, LogBox } from "react-native";
import Routes from "./src/routes";

import styles from "./globalStyles";
import store from "./src/store/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

LogBox.ignoreAllLogs(true);
