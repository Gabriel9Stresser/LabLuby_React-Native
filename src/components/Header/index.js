import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Header({ number, title }) {
  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.goBack();
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleNavigationToHome}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.headerText}>
        {number} {title}
      </Text>
      <View />
    </View>
  );
}
