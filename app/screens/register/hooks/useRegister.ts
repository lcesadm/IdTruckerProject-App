import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import User from '../../../models/User';

const useRegister = (navigation: any) => {
  const [name, setName] = useState('');
  const [document, setDocument] = useState({ cnh: '', cpf: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState('');
  const [user, setUser] = useState<User>();
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (name.length != 0)
      if (
        validation.substring(
          validation.indexOf("'") + 1,
          validation.lastIndexOf("'"),
        ) == 'Nome Completo'
      )
        setValidation('');
  }, [name]);

  useEffect(() => {
    if (document.cpf.length != 0) {
      if (
        validation.substring(
          validation.indexOf("'") + 1,
          validation.lastIndexOf("'"),
        ) == 'CPF'
      )
        setValidation('');
      const cpfRaw = document.cpf.replace(/[^\d]/g, '');
      if (document.cpf.length >= 11) {
        setDocument({
          ...document,
          cpf: cpfRaw
            .substring(0, 11)
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
        });
      } else setDocument({ ...document, cpf: cpfRaw });
    }
  }, [document.cpf]);

  useEffect(() => {
    if (document.cnh.length != 0) {
      if (
        validation.substring(
          validation.indexOf("'") + 1,
          validation.lastIndexOf("'"),
        ) == 'CNH'
      )
        setValidation('');
      const cnhRaw = document.cnh.replace(/[^\d]/g, '');
      if (document.cnh.length > 11)
        setDocument({ ...document, cnh: cnhRaw.substring(0, 11) });
      else setDocument({ ...document, cnh: cnhRaw });
    }
  }, [document.cnh]);

  useEffect(() => {
    if (email.length != 0)
      if (
        validation.substring(
          validation.indexOf("'") + 1,
          validation.lastIndexOf("'"),
        ) == 'Email'
      )
        setValidation('');
  }, [email]);

  useEffect(() => {
    if (password.length != 0)
      if (
        validation.substring(
          validation.indexOf("'") + 1,
          validation.lastIndexOf("'"),
        ) == 'Senha'
      )
        setValidation('');
  }, [password]);

  useEffect(() => {
    if (validation.length != 0) {
      if (validation == 'ok') authRegister();
      else {
        setIsLoading(false);
        Alert.alert('Erro ao cadastrar!', validation);
      }
    }
  }, [validation]);

  useEffect(() => {
    if (user != undefined)
      Alert.alert(
        'Usuário cadastrado com sucesso!',
        `${name}, bem-vindo ao IdTrucker!`,
        [
          {
            text: 'Obrigado!',
            onPress: () => onNavigate('TabsNavigator', user),
          },
        ],
      );
    clearFields();
  }, [user]);

  const start = () => {
    setIsLoading(true);
    setModalVisible(false);
    setValidation(checkValidation());
  };

  const authRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        database()
          .ref(`/Truckers/${res.user.uid}`)
          .set({
            nome: name,
            cnh: document.cnh,
            cpf: document.cpf,
            email: email,
            aval: 5,
            logins: 1,
            nivel: 1,
            xp: 0,
            dataCadastro: res.user.metadata.creationTime,
            token: res.user.uid,
            viagens: 0,
          })
          .then(() =>
            setUser({
              nome: name,
              cnh: document.cnh,
              cpf: document.cpf,
              email: email,
              aval: -1,
              logins: 1,
              nivel: 1,
              xp: 0,
              dataCadastro: res.user.metadata.creationTime,
              token: res.user.uid,
              viagens: 0,
            }),
          )
          .catch(error => {
            clearFields();
            setValidation(error);
          });
      })
      .catch(error => {
        if (error.code == 'auth/email-already-in-use')
          setValidation("O 'Email' já está sendo usado");
        else if (error.code == 'auth/invalid-email')
          setValidation("Preenche o campo 'Email' válido.");
        else if (error.code == 'auth/weak-password')
          setValidation("A 'Senha' tem que ter 6 caracteres no mínimo.");
        else setValidation(error.code);
      });
  };

  const checkValidation: any = () => {
    if (!name) return "O campo 'Nome Completo' está vazio!";
    if (!document.cnh) return "O campo 'CNH' está vazio!";
    if (document.cnh.length < 11) return "O campo 'CNH' está inválido!";
    if (!document.cpf) return "O campo 'CPF' está vazio!";
    if (document.cpf.length < 14) return "O campo 'CPF' está inválido!";
    if (!email) return "O campo 'Email' está vazio!";
    if (!password) return "O campo 'Senha' está vazio!";
    return 'ok';
  };

  const onNavigate = (screen: string, user?: any) => {
    if (screen === 'Voltar') navigation.goBack();
    else navigation.navigate(screen, { user: user });
  };

  const clearFields = () => {
    setIsLoading(false);
    setValidation('');
    setName('');
    setDocument({ cnh: '', cpf: '' });
    setEmail('');
    setPassword('');
  };

  return {
    name,
    setName,
    document,
    setDocument,
    email,
    setEmail,
    password,
    setPassword,
    validation,
    setValidation,
    modalVisible,
    setModalVisible,
    isLoading,
    start,
    onNavigate,
  };
};

export default useRegister;
