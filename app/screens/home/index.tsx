import React from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import HeaderComponent from '../../components/headerComponent';

import useHome from './hooks/useHome';
import styles from './styles';

const Home = () => {
  const {} = useHome();
  return (
    <View>
      <HeaderComponent />
    </View>
  );
};

export default Home;
