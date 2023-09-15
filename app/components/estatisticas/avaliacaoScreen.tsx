import React from 'react';
import { View, Text, TouchableOpacity, Modal, StatusBar, Image } from 'react-native';
import styles from './styles';

interface AvaliacaoScreenProps {
    isVisible: boolean;
    onClose: () => void;
  }

const AvaliacaoScreen: React.FC<AvaliacaoScreenProps> = ({isVisible, onClose}) => {
    return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
        <View style={styles.pmodalContainer}>
            <View style={{ ...styles.modalContent, backgroundColor: '#033C91'}}>
            
                <TouchableOpacity onPress={onClose}>
                <Image source={require('../icons/botao-excluir.png')} style={styles.close} />
                </TouchableOpacity>
                <Text style={styles.text}>Você tem</Text>
                <Text style={styles.km}>4.97!</Text>
                <View style={styles.whiteLine}></View>
                <View style={styles.line}>
                    <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                    <Text style={{...styles.textline, color: '#033C91' }}>A         viagem 5                    5k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#033C91"}}/>
                </View>
                <View style={styles.line}>
                    <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                    <Text style={{...styles.textline, color: '#033C91' }}>B         viagem 4                    4k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#033C91"}}/>
                </View>
                <View style={styles.line}>
                    <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                    <Text style={{...styles.textline, color: '#033C91' }}>C         viagem 5                    5k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#033C91"}}/>
                </View>
                <View style={styles.line}>
                    <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                    <Text style={{...styles.textline, color: '#033C91' }}>D         viagem 5                   5k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#033C91"}}/>
                </View>
                <View style={styles.line}>
                    <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
                    <Text style={{...styles.textline, color: '#033C91' }}>E         viagem 4                   4k XP</Text><Image source={require('../icons/seta-direita.png')} style={{...styles.seta, tintColor: "#033C91"}}/>
                </View>
            </View>
        </View>
        </Modal>
    );
};

export default AvaliacaoScreen;