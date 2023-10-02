import { useState } from 'react';
import database from '@react-native-firebase/database';

const useRegister = (navigation: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const onButtonPress = (screen: string) => {
    if (screen === 'Voltar') navigation.goBack();
    else {
      changeModal(false);
      navigation.navigate(screen);
    }
  };
  const changeModal = (visible: boolean) => setIsVisible(visible);

  return { isVisible, onButtonPress, changeModal };
};

export default useRegister;
