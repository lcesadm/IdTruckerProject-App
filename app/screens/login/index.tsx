import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import HeaderComponent from "../../components/headerComponent";

import useLogin from "./hooks/useLogin";
import styles from "./styles";

const Login = () => {
  const { name, onButtonPress } = useLogin();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>IdTrucker</Text>
        <FontAwesomeIcon icon={faUserCircle} color={"white"} size={100}/>
        <Text style={styles.text}>Login</Text>
      </View>
    </View>
  );
};

export default Login;
