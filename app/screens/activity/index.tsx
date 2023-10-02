import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../../components/headerComponent';
import useActivity from './hooks/useActivity';
import styles from './styles';

const Activity = () => {
  const {} = useActivity();

  return (
    <View style={styles.container}>
      <HeaderComponent title="Atividades" />
    </View>
  );
};

export default Activity;
