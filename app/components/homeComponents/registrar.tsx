import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import styles from './styles'; // Importe os estilos apropriados

const RegistrarComponent = () => {
  return (
    <View style={styles.registrarContainer}>
        <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
            <View>
            <Text style={styles.titulo}>Nenhuma entrega no momento</Text>
            <Text style={styles.textoRegistrar}>Inicie o processo de pesagem do seu caminhão em uma balança Guardian</Text>
            </View>
    </View>
  );
};

export default RegistrarComponent;
