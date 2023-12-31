import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import User from '../../../models/User';
import { verifyValidationField } from '../../../utils/StringUtil';

const useLogin = (navigation: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState('');
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (email.length != 0)
      if (verifyValidationField(validation) == 'Email') setValidation('');
  }, [email]);

  useEffect(() => {
    if (password.length != 0)
      if (verifyValidationField(validation) == 'Senha') setValidation('');
  }, [password]);

  useEffect(() => {
    if (validation.length != 0) {
      if (validation == 'ok') authLogin();
      else {
        setIsLoading(false);
        setPassword('');
        Alert.alert('Ops!', validation);
      }
    }
  }, [validation]);

  useEffect(() => {
    if (user != undefined) {
      onNavigate('TabsNavigator', user);
    }
  }, [user]);

  const pressBtn = (value: boolean) => {
    setValidation('');
    if (value) setTimeout(() => start(), 1);
    else setTimeout(() => forgotPassword(), 1);
  };

  const start = () => {
    setIsLoading(true);
    setValidation(checkValidation());
  };

  const authLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        database()
          .ref(`/Truckers/${res.user.uid}`)
          .once('value')
          .then(data => setUser(data.val()))
          .catch(error => setValidation(error));
      })
      .catch(error => {
        if (error.code == 'auth/invalid-login')
          setValidation("O 'Email' não foi encontrado.");
        else if (error.code == 'auth/invalid-email')
          setValidation("Preenche o campo 'Email' válido.");
        else if (error.code == 'auth/wrong-password')
          setValidation("A 'Senha' está incorreta!");
        else setValidation(error.code);
      });
  };

  const checkValidation: any = () => {
    if (!email) return "O campo 'Email' está vazio!";
    if (!password) return "O campo 'Senha' está vazio!";
    return 'ok';
  };

  const forgotPassword = () => {
    if (email.length != 0) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() =>
          Alert.alert(
            'Reiniciar senha',
            `Enviamos no email ${email} para prosseguir o reset da senha`,
          ),
        )
        .catch(error => {
          if (error.code == 'auth/invalid-email')
            setValidation("Preenche o campo 'Email' válido.");
          else setValidation(error.code);
        });
    } else setValidation("O campo 'Email' está vazio!");
  };

  const onNavigate = (screen: string, user?: any) => {
    setValidation('');
    clearFields();
    navigation.navigate(screen, { user: user });
  };

  const clearFields = () => {
    setEmail('');
    setPassword('');
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    validation,
    isLoading,
    pressBtn,
    onNavigate,
  };
};

export default useLogin;
