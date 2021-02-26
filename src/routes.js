import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./pages/SignIn";
import TabBar from "./pages/TabBar";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="TabBar" component={TabBar} />
    </Stack.Navigator>
  );
}
