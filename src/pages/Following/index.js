import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import ListUsers from "../../components/ListUsers";
import { useSelector } from "react-redux";
import styles from "../Followers/styles";

export default function Following() {
  const numberFollowing = useSelector((state) => state.user.user.following);
  const otherUser = useSelector((state) => state.user.otherUser);

  return (
    <View style={styles.container}>
      {!otherUser && <Header number={numberFollowing} title="Seguindo" />}
      <ListUsers type="following" />
    </View>
  );
}
