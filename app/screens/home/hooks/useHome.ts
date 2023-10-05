import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

import User from '../../../models/User';

const useHome = (route: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState('');
  const [xpBase, setXpBase] = useState(100);
  const [xpFinal, setXpFinal] = useState(0);
  const [isTravel, setIsTravel] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const user: User = route.params.user;
  const [userLevel, setUserLevel] = useState(user.nivel);

  let lastLogin: number;
  database()
    .ref(`/Truckers/${user.token}/logins`)
    .on('value', data => {
      if (lastLogin == undefined) lastLogin = data.val();
      else if (lastLogin != data.val()) {
        showTripAlert(true);
        setIsTravel(true);
      }
    });

  let lastAval: number;
  database()
    .ref(`/Truckers/${user.token}/aval`)
    .on('value', data => {
      if (lastAval == undefined) lastAval = data.val();
      else if (lastAval != data.val()) {
        Alert.alert(
          'Última viagem',
          `Você foi avaliado por ${data.val()} estrelas!`,
        );
      }
    });

  useEffect(() => {
    storage()
      .ref('/Images')
      .child(`${user.token}.png`)
      .getDownloadURL()
      .then(url => setImage(url));
    calcularBarra();
  }, []);

  const calcularBarra = (pontos: number = 0) => {
    if (pontos) user.xp = user.xp + pontos;
    if ((Math.abs(user.xp - pontos) % xpBase) + pontos < xpBase)
      setXpFinal((user.xp % xpBase) / xpBase);
    else {
      setXpFinal(xpBase);
      setTimeout(() => setXpFinal(0), 500);
      setTimeout(() => {
        (Math.abs(user.xp - pontos) % xpBase) + pontos > xpBase
          ? setXpFinal((user.xp % xpBase) / xpBase)
          : setXpFinal(0);
      }, 1000);
      setUserLevel(
        userLevel +
          parseInt(((Math.abs(user.xp - pontos) % xpBase) + pontos) / xpBase),
      );
    }
  };

  const showTripAlert = (visible: boolean, value?: string) => {
    setIsVisible(visible);
    if (value == 'close') setIsCheck(true);
  };
  const isFinish = () => {
    calcularBarra(200);
    setIsCheck(false);
    setIsTravel(false);
    database()
      .ref(`/Truckers/${user.token}/viagens`)
      .set(user.viagens + 1);
  };

  return {
    userLevel,
    isFinish,
    isCheck,
    isVisible,
    image,
    user,
    xpFinal,
    isTravel,
    showTripAlert,
  };
};

export default useHome;
