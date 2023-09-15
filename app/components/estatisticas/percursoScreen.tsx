// PercursoScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, StatusBar } from 'react-native';
import styles from './styles';

interface PercursoScreenProps {
    isVisible: boolean;
    onClose: () => void;
  }

const PercursoScreen: React.FC<PercursoScreenProps> = ({isVisible, onClose}) => {
   return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
        <View style={styles.pmodalContainer}>
            <View style={styles.pmodalContent}>
            
                <TouchableOpacity onPress={onClose}>
                <Image source={require('../icons/botao-excluir.png')} style={styles.close} />
                </TouchableOpacity>
                <Text style={styles.text}>Você percorreu</Text>
                <Text style={styles.km}>6782km!</Text> 
                <View style={styles.whiteLine}></View>
                <View style={styles.line}>
                    <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                    <Text style={styles.textline}>A</Text><Image source={require('../icons/seta-direita.png')} style={styles.seta}/>
                </View>
            </View>
        </View>
        </Modal>
    );
};

export default PercursoScreen;
