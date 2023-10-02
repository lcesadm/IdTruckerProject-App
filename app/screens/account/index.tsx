import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../../components/headerComponent';
import useAccount from './hooks/useAccount';
import styles from './styles';

const Account = () => {
  const {} = useAccount();

  return (
    <View style={styles.container}>
      <HeaderComponent title="Conta" />
    </View>
  );
};

export default Account;
