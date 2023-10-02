import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './styles';

interface HeaderProps {
  title?: string;
  isUser?: boolean;
}

const HeaderComponent = ({ title, isUser }: HeaderProps) => {
  return (
    <View>
      <StatusBar backgroundColor="#3B63F1" barStyle="default" />
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {isUser && (
          <Progress.Bar
            style={styles.progressBar}
            progress={0.6}
            width={250}
            height={15}
            color={'#02fa44'}
          />
        )}
      </View>
    </View>
  );
};

HeaderComponent.defaltProps = {
  title: '',
  isUser: false,
};

export default HeaderComponent;
