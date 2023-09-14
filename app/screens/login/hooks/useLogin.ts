import { useState } from 'react';
import database from '@react-native-firebase/database';

const useLogin = () => {
  const [name, setName] = useState('');

  const onButtonPress = () => {
    let names: any = [];
    database()
      .ref('/Truckers')
      .once('value')
      .then(data => {
        for (let i in data.val()) {
          names.push(data.val()[i].nome);
        }
        const random: any = Math.floor(Math.random() * names.length);
        names[random][0] === 'J'
          ? setName('a ' + names[random])
          : setName('o ' + names[random]);
      })
      .catch(error => {
        setName(error);
      });
  };

  return { name, onButtonPress };
};

export default useLogin;
