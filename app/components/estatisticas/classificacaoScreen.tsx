import React from 'react';
import { View, Text, TouchableOpacity, Modal, StatusBar, Image } from 'react-native';
import styles from './styles';

interface ClassificacaoScreenProps {
    isVisible: boolean;
    onClose: () => void;
  }

const ClassificacaoScreen: React.FC<ClassificacaoScreenProps> = ({isVisible, onClose}) => {
   return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
        <View style={styles.pmodalContainer}>
            <View style={{ ...styles.modalContent, backgroundColor: '#2FB5B5'}}>
            
                <TouchableOpacity onPress={onClose}>
                <Image source={require('../icons/botao-excluir.png')} style={styles.close} />
                </TouchableOpacity>
                <Text style={styles.text}>Você conseguiu</Text>
                <Text style={styles.km}>1 conquista!</Text> 
                <View style={styles.whiteLine}></View>
                <View style={styles.line}>
                    <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                    <Text style={{...styles.textline, color: '#2FB5B5' }}>             Tartaruga velha   21k XP</Text><Image source={require('../icons/tartaruga-marinha.png')} style={{...styles.seta, tintColor: "#2FB5B5"}}/>
                </View>
            </View>
        </View>
        </Modal>
    );
};

export default ClassificacaoScreen;