import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from "react-native";
import styles from "./styles";
import { loadUserDataRequest } from "../../store/modules/user/actions";
import * as NavigationService from "../../services/navigationService";

import Spinner from "react-native-loading-spinner-overlay";

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [statusInfo, setStatusInfo] = useState(false);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    NavigationService.setNavigator(navigation);
  }, []);

  function handleSignIn() {
    if (nickname === "") {
      setStatusInfo(true);
      return;
    }

    dispatch(loadUserDataRequest(nickname));
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "IOS" ? "padding" : "height"}
    >
      <FontAwesome5 name="github" size={100} color="#fc0" style={styles.logo} />

      <View style={styles.boxInput}>
        <TextInput
          value={nickname}
          placeholder="Usuário"
          style={styles.textInput}
          onChangeText={(text) => {
            setNickname(text), setStatusInfo(false);
          }}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={handleSignIn}
        />

        {statusInfo && <Text style={styles.info}>Campo obrigatório</Text>}
      </View>

      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR </Text>
        <AntDesign name="arrowright" size={24} color="black" />

        <Spinner
          visible={loading}
          textContent={"Carregando..."}
          textStyle={{ color: "#fff" }}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
