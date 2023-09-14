import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

import InputComponent from '../../components/textFieldComponent';

import useLogin from './hooks/useLogin';
import styles from './styles';

const Login = () => {
  const { name, onButtonPress } = useLogin();
  return (
    <View>
      <StatusBar backgroundColor="#34CBCB" />
      <LinearGradient
        colors={['#34CBCB', '#438CB3', '#005190']}
        style={styles.container}>
        <Text style={styles.textTitle}>IdTrucker</Text>
        <FontAwesomeIcon icon={faUserCircle} color={'white'} size={100} />
        <Text style={styles.text}>Login</Text>
        <InputComponent
          label="Email"
          placeholder="janedoe@gmail.com"
          secureTextEntry={false}
        />
        <InputComponent
          label="Senha"
          placeholder="********"
          secureTextEntry={true}
        />
      </LinearGradient>
    </View>
  );
};

export default Login;
