import React from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TextFieldComponent from '../../components/textFieldComponent';
import LightButtonComponent from '../../components/lightButtonComponent';
import TermModalComponent from '../../components/termModalComponent';
import LoadingComponent from '../../components/loadingComponent';

import useRegister from './hooks/useRegister';
import styles from './styles';

const Register = ({ navigation }: any) => {
  const {
    name,
    setName,
    document,
    setDocument,
    email,
    setEmail,
    password,
    setPassword,
    validation,
    setValidation,
    modalVisible,
    setModalVisible,
    isLoading,
    start,
    onNavigate,
  } = useRegister(navigation);
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
            <Text style={styles.text}>Registrar</Text>
            <View>
              <TextFieldComponent
                label="Nome Completo"
                onChangeText={(value: any) => setName(value)}
                value={name}
                validationText={validation}
              />
              <TextFieldComponent
                label="CNH"
                placeholder="00000000000"
                keyboardType="numeric"
                onChangeText={(value: any) =>
                  setDocument({ ...document, cnh: value })
                }
                value={document.cnh}
                validationText={validation}
              />
              <TextFieldComponent
                label="CPF"
                placeholder="000.000.000-00"
                keyboardType="numeric"
                onChangeText={(value: any) =>
                  setDocument({ ...document, cpf: value })
                }
                value={document.cpf}
                validationText={validation}
              />
              <TextFieldComponent
                label="Email"
                onChangeText={(value: any) => setEmail(value)}
                value={email}
                validationText={validation}
              />
              <TextFieldComponent
                label="Senha"
                onChangeText={(value: any) => setPassword(value)}
                value={password}
                validationText={validation}
              />
              <View style={styles.containerButton}>
                <LightButtonComponent
                  title="Voltar"
                  onPress={() => onNavigate('Voltar')}
                />
                <LightButtonComponent
                  title="Registrar"
                  onPress={() => {
                    setValidation('');
                    setModalVisible(true);
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <TermModalComponent
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          onPress={() => start()}
        />
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

export default Register;
