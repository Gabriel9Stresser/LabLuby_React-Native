import React, { useState, useMemo } from "react";

import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { EvilIcons } from "@expo/vector-icons";
import apiGithub from "../../services/apiGithub";
import styles from "./styles";
import Header from "../../components/Header";
import { toastError } from "../../components/Toast";
import Spinner from "react-native-loading-spinner-overlay";

export default function Repositories() {
  const numberRepos = useSelector((state) => state.user.user.public_repos);
  const [loading, setLoading] = useState(false);
  const userLogin = useSelector((state) => state.user.user.login);
  const [repos, setRepos] = useState([]);

  useMemo(() => {
    async function handleLoadRepositories() {
      try {
        setLoading(true);
        const responseRepositores = await apiGithub.get(
          `users/${userLogin}/repos`
        );
        const { data } = responseRepositores;
        setRepos(data);
        setLoading(false);
      } catch (error) {
        toastError("Ocorreu algo de errado, tente novamente.");
      }
    }

    handleLoadRepositories();
  }, [userLogin]);

  return (
    <View style={styles.container}>
      <Header number={numberRepos} title="Repositórios" />
      {!loading ? (
        <FlatList
          contentContainerStyle={styles.listStyle}
          data={repos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.boxRepository}>
              <View style={styles.boxTitle}>
                <View style={styles.detailYellowLeft} />
                <Text style={styles.textTitle}>{item.name}</Text>
              </View>

              <Text style={styles.textDescription}>{item.description}</Text>

              <View style={styles.boxFooter}>
                <View style={styles.boxFooterLeft}>
                  <EvilIcons name="star" size={24} color="yellow" />
                  <Text style={styles.footerText}>{item.stargazers_count}</Text>
                </View>

                <View style={styles.boxFooterHight}>
                  <EvilIcons name="unlock" size={28} color="green" />
                  <EvilIcons name="lock" size={28} color="red" />
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <Spinner
          visible={loading}
          textContent={"Carregando..."}
          textStyle={{ color: "#fff" }}
        />
      )}
    </View>
  );
}
