import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import apiGithub from "../../services/apiGithub";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./styles";
import { toastError } from "../Toast";
import { toggleProfileOtherUser } from "../../store/modules/user/actions";

import Profile from "../../pages/Profile";

export default function ListUsers({ type }) {
  const dispatch = useDispatch();

  const [listUsers, setListUser] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const otherUser = useSelector((state) => state.user.otherUser);
  const userLogin = useSelector((state) => state.user.user.login);

  useMemo(() => {
    async function handleListUsers() {
      try {
        setLoading(true);
        const listUsersResponse = await apiGithub.get(
          `users/${userLogin}/${type}`
        );
        const { data } = listUsersResponse;
        setListUser(data);
        setLoading(false);
      } catch (error) {
        toastError("Usuário inválido, tente novamente.");
      }
    }

    handleListUsers();
  }, [userLogin]);

  async function handleProfile(nickname) {
    const newUserResponse = await apiGithub.get(`users/${nickname}`);
    setProfile(newUserResponse.data);
    dispatch(toggleProfileOtherUser(true));
  }

  return (
    <>
      {profile !== null && otherUser ? (
        <Profile profile={profile} auth={false} />
      ) : (
        <>
          {!loading ? (
            <FlatList
              contentContainerStyle={styles.listStyle}
              data={listUsers}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <View style={styles.boxListUsers}>
                  <View style={styles.detailYellowLeft} />
                  <TouchableOpacity
                    style={styles.boxButton}
                    onPress={() => handleProfile(item.login)}
                  >
                    <View style={styles.boxButtonLeft}>
                      <Image
                        source={{ uri: `${item.avatar_url}` }}
                        style={styles.avatar}
                      />
                      <Text style={styles.slug}>#{item.login}</Text>
                    </View>

                    <AntDesign name="arrowright" size={24} color="#fff" />
                  </TouchableOpacity>
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
        </>
      )}
    </>
  );
}
