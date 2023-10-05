import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles'; // Importe os estilos apropriados
<<<<<<< HEAD
=======
import * as Progress from 'react-native-progress';
>>>>>>> 1b8e3f6 (Adicionando a visão do motorista)

interface RegistrarProps {
  isTravel: boolean;
  isCheck: boolean;
  isFinish: any;
}

const RegistrarComponent = ({
  isTravel,
  isCheck,
  isFinish,
}: RegistrarProps) => {
  let progress = 0;
  const check = () => {
    const time = setInterval(() => {
      progress = progress + 0.1;
    }, 50000);
    if ((progress = 1)) {
      clearInterval(time);
    }
    isCheck = false;
  };

  if (isCheck) check();
  else progress = 0;
  return (
    <View style={styles.registrarContainer}>
      {isTravel ? (
        <View>
          <Image
            source={require('../icons/caminhao.png')}
            style={styles.registrarImage}
          />
          <Progress.Bar
            style={styles.progressBar}
            progress={progress}
            width={250}
            height={10}
            color={'#394C92'}
          />
          {isCheck ? (
            <Text style={styles.title}>Iniciando viagem...</Text>
          ) : (
            <View style={styles.travelContainer}>
              <Text style={styles.text}>{'São Paulo ======> Itupeva'}</Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert('Cuidado!', 'Tem certeza que quer finalizar?', [
                    {
                      text: 'SIM',
                      onPress: () => isFinish(),
                    },
                    {
                      text: 'NãO',
                    },
                  ])
                }
                style={styles.registrarButton}>
                <Text style={styles.texto}>Finalizar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Nehuma entrega no momento</Text>
          <Text style={styles.text}>
            Inicie o processo de pesagem do seu caminhão em uma balança Guardian
          </Text>
        </View>
      )}
    </View>
  );
};

export default RegistrarComponent;
