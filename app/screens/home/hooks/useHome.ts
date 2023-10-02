import { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';

const useHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [url, setUrl] = useState('');

  // useEffect(() => {
  //   let login = 0;
  //   let newLogin = 0;
  //   database()
  //     .ref(url)
  //     .once('value')
  //     .then(data => {
  //       login = data.val();
  //       newLogin = data.val();
  //     });
  //   let i = setInterval(() => {
  //     if (login == newLogin) {
  //       database()
  //         .ref(url)
  //         .once('value')
  //         .then(data => {
  //           newLogin = data.val();
  //         });
  //     } else {
  //       showTripAlert(true);
  //       clearInterval(i);
  //     }
  //   }, 2000);
  // }, []);

  const showTripAlert = (visible: boolean) => {
    setIsVisible(visible);
  };

  return { isVisible, showTripAlert };
};

export default useHome;
