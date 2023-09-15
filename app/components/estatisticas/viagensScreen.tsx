import React from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StatusBar } from 'react-native';
import styles from './styles';

interface ViagensScreenProps {
    isVisible: boolean;
    onClose: () => void;
  }

const ViagensScreen: React.FC<ViagensScreenProps> = ({isVisible, onClose}) => {
   return ( 
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
    >
    <View style={styles.pmodalContainer}>
        <View style={{ ...styles.modalContent, backgroundColor: '#1F73B3'}}>
        
            <TouchableOpacity onPress={onClose}>
            <Image source={require('../icons/botao-excluir.png')} style={styles.close} />
            </TouchableOpacity>
            <Text style={styles.text}>Você fez</Text>
            <Text style={styles.km}>127 viagens!</Text>
            <View style={styles.whiteLine}></View>
            <View style={styles.line}>
                <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                <Text style={{...styles.textline, color: '#1F73B3' }}>A         10 viagens                15k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#1F73B3"}}/>
            </View>
            <View style={styles.line}>
                <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                <Text style={{...styles.textline, color: '#1F73B3' }}>B          3 viagens                3.5k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#1F73B3"}}/>
            </View>
            <View style={styles.line}>
                <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                <Text style={{...styles.textline, color: '#1F73B3' }}>C         5 viagens                 6.2k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#1F73B3"}}/>
            </View>
            <View style={styles.line}>
                <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                <Text style={{...styles.textline, color: '#1F73B3' }}>D         2 viagens                2.7k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#1F73B3"}}/>
            </View>
            <View style={styles.line}>
                <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                <Text style={{...styles.textline, color: '#1F73B3' }}>E         7 viagens                9k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#1F73B3"}}/>
            </View>
        </View>
    </View>
    </Modal>
);
};

export default ViagensScreen;