import React from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import InputComponent from '../../components/textFieldComponent';
import LightButtonComponent from '../../components/lightButtonComponent';

import useLogin from './hooks/useLogin';
import styles from './styles';

const Login = ({ navigation }: any) => {
  const { onButtonPress } = useLogin(navigation);
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#34CBCB', '#438CB3', '#005190']}
        style={styles.backgroundContainer}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <Image
          style={styles.backgroundImage}
          source={require('../../assets/img/background.png')}
        />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textTitle}>IdTrucker</Text>
            <Image
              style={styles.userImage}
              source={require('../../assets/img/user.png')}
            />
            <Text style={styles.text}>Login</Text>
            <InputComponent label="Email" placeholder="janedoe@gmail.com" />
            <InputComponent
              label="Senha"
              secondaryLabel="Esqueci minha senha"
              placeholder="********"
              secureTextEntry={true}
            />
            <View style={styles.containerButton}>
              <LightButtonComponent
                title="Registrar"
                onPress={() => onButtonPress('RegisterScreen')}
              />
              <LightButtonComponent
                title="Login"
                onPress={() => onButtonPress('TabsNavigator')}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Login;
