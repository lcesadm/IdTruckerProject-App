import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

interface HeaderProps {
  title?: string;
}

const HeaderComponent = ({ title = 'teste' }: HeaderProps) => {
  return (
    <View>
      <StatusBar backgroundColor="#3B63F1" barStyle="default" />
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
