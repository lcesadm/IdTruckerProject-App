import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './styles';

interface HeaderProps {
  title: string;
  isUser: boolean;
  urlPhoto?: string;
  level?: number;
  xp?: number;
  progressValue?: number;
}

const HeaderComponent = ({
  title,
  isUser,
  urlPhoto,
  level,
  xp,
  progressValue,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/img/background.png')}
      />

      <Image
        style={styles.profileImage}
        source={require('../../assets/img/user.png')}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {isUser && (
          <View>
            <Progress.Bar
              style={styles.progressBar}
              progress={progressValue}
              width={250}
              height={15}
              color={'#02fa44'}
            />
            <View style={styles.levelContainer}>
              <Text style={styles.level}>{xp} XP</Text>
              <Text style={styles.level}>Nível {level}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

HeaderComponent.defaltProps = {
  urlPhoto: '',
  level: 0,
  xp: 0,
  progressValue: 0,
};

export default HeaderComponent;
