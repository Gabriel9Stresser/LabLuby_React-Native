import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import ListUsers from "../../components/ListUsers";
import { useSelector } from "react-redux";
import styles from "./styles";


export default function Followers() {
  const numberFollowers = useSelector((state) => state.user.user.followers);
  const otherUser = useSelector((state) => state.user.otherUser);
  return (
    <View style={styles.container}>
      {!otherUser && <Header number={numberFollowers} title="Seguidores" />}
      <ListUsers type="followers" />
    </View>
  );
}
