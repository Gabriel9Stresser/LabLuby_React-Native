import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  userLogout,
  toggleProfileOtherUser,
  loadUserNewDataRequest,
} from "../../store/modules/user/actions";
import { Text, TouchableOpacity, ScrollView, View, Image } from "react-native";
import styles from "./styles";

export default function Profile({ profile, auth }) {
  const dispatch = useDispatch();
  const otherUser = useSelector((state) => state.user.otherUser);

  const slug = () => {
    const arrayName = String(profile.name).split(" ");

    return `#${arrayName[0]}${
      arrayName[1] !== undefined ? "." + arrayName[1] : ""
    }`.toLowerCase();
  };

  function handleListUsers() {
    dispatch(toggleProfileOtherUser(false));
  }

  function logout() {
    dispatch(userLogout());
  }

  
  function handleLoadNewUser(nickname) {
    dispatch(loadUserNewDataRequest(nickname));
    handleListUsers();
  }



  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 85 }}
    >
      <View style={styles.header}>
        <View style={styles.headerBar}>
          {!auth && otherUser && (
            <TouchableOpacity onPress={handleListUsers}>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </TouchableOpacity>
          )}

          <Text style={styles.headerBarTextLeft}>{slug()}</Text>
          <TouchableOpacity
            style={styles.headerBarRight}
            onPress={auth ? logout : () => handleLoadNewUser(profile.login)}
          >
            {auth ? (
              <>
                <Text style={styles.headerBarTextRight}>Sair</Text>
                <Feather name="log-out" size={24} color="red" />
              </>
            ) : (
              <>
                <Text style={styles.headerBarTextRight}>Salvar</Text>
                <Feather name="log-in" size={24} color="green" />
              </>
            )}
          </TouchableOpacity>
        </View>

        <Image source={{ uri: profile.avatar_url }} style={styles.avatar} />
      </View>

      <View style={styles.boxBasicInfo}>
        <View style={styles.boxTitle}>
          <View style={styles.detailYellowLeft} />
          <Text style={styles.textTitle}>
            {String(profile.name).toUpperCase()}
          </Text>
        </View>
        {profile.email && (
          <Text style={styles.basicInfoText}>{profile.email}</Text>
        )}

        <Text style={styles.basicInfoText}>{profile.location}</Text>
      </View>

      <View style={styles.engagement}>
        <View style={styles.boxEngagementInfoFollowers}>
          <Text style={styles.engagementNumberFollowers}>{profile.followers}</Text>
          <Text style={styles.engagementTextFollowers}>Seguidores</Text>
          
        </View>

        <View style={styles.boxEngagementInfoFollowing}>
          <Text style={styles.engagementNumberFollowing}>{profile.following}</Text>
          <Text style={styles.engagementTextFollowing}>Seguindo</Text>
        </View>

        <View style={styles.boxEngagementInfoPublic}>
          <Text style={styles.engagementNumberPublic}>{profile.public_repos}</Text>
          <Text style={styles.engagementTextPublic}>Repos</Text>
        </View>
      </View>

      <View style={styles.boxBio}>
        <View style={styles.boxTitle}>
          <View style={styles.detailYellowLeft} />
          <Text style={styles.textTitle}>BIO</Text>
        </View>
      </View>
      <Text style={styles.basicInfoTextBio}>{profile.bio}</Text>
    </ScrollView>
  );
}
