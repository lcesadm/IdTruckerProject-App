import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
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
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text>Tela Modal</Text>
            {/* Conteúdo da tela modal */}
            <TouchableOpacity onPress={onClose}>
            <Image style={styles.close}></Image>
            </TouchableOpacity>
        </View>
        </View>
        </Modal>
    );
};

export default AvaliacaoScreen;