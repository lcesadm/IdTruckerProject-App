import { useState } from 'react';
import database from '@react-native-firebase/database';

const useRegister = (navigation: any) => {
  const onButtonPress = (screen: string) => {
    screen == 'Voltar' ? navigation.goBack() : navigation.navigate(screen);
  };

  return { onButtonPress };
};

export default useRegister;
