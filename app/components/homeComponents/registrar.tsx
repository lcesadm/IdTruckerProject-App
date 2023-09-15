import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import styles from './styles'; // Importe os estilos apropriados
import ProgressBar from 'react-native-progress/Bar';

const RegistrarComponent = () => {
  return (
    <View style={styles.registrarContainer}>
        <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
            <View style={styles.fundo}>
            <Image source={require('../icons/caminhao.png')} style={styles.registrarImage} /> 
            <ProgressBar style={styles.progressBar}progress={10} width={250} height={10} color={'#ffff'} />
            <TouchableOpacity style={styles.registrarButton}>
                <Text style={styles.texto}>Iniciar</Text>
            </TouchableOpacity>
            </View>
    </View>
  );
};

export default RegistrarComponent;
