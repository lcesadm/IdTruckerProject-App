import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
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
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text>Tela Modal</Text>
            {/* Conteúdo da tela modal */}
            <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
            </TouchableOpacity>
        </View>
        </View>
        </Modal>
    );
};

export default ClassificacaoScreen;