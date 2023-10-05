import React from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import InputComponent from '../../components/textFieldComponent';
import LightButtonComponent from '../../components/lightButtonComponent';
import LoadingComponent from '../../components/loadingComponent';

import useLogin from './hooks/useLogin';
import styles from './styles';

const Login = ({ navigation }: any) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    validation,
    isLoading,
    pressBtn,
    onNavigate,
  } = useLogin(navigation);
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
              source={require('../../assets/img/profile.png')}
            />
            <Text style={styles.text}>Login</Text>
            <View>
              <InputComponent
                label="Email"
                placeholder="janedoe@gmail.com"
                onChangeText={(value: any) => setEmail(value)}
                value={email}
                validationText={validation}
              />
              <InputComponent
                label="Senha"
                secondaryLabel="Esqueci minha senha"
                pressableLabel={true}
                onPressLabel={() => pressBtn(false)}
                placeholder="********"
                onChangeText={(value: any) => setPassword(value)}
                value={password}
                validationText={validation}
              />
              <View style={styles.containerButton}>
                <LightButtonComponent
                  title="Registrar"
                  onPress={() => onNavigate('RegisterScreen')}
                />
                <LightButtonComponent
                  title="Login"
                  onPress={() => pressBtn(true)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <LoadingComponent
          visible={isLoading}
          size={100}
          color="#fff"
          text="Carregando..."
        />
      </LinearGradient>
    </View>
  );
};

export default Login;
