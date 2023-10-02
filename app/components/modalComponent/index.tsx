import React from 'react';
import { View, Text, Modal, ScrollView, StatusBar } from 'react-native';

import SolidButtonComponent from '../solidButtonComponent';

import styles from './styles';

interface ModalProps {
  isVisible: boolean;
  onClose?: () => void;
  onPress?: () => void;
}

const ModalComponent = ({ isVisible, onClose, onPress }: ModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <ScrollView>
            <View style={styles.containerTitle}>
              <Text style={styles.textTitle}>Viagem Detectada!</Text>
              <View style={styles.containerContent}>
                <Text style={styles.textContent}>
                  Remetente: São Paulo - Sp
                </Text>
                <Text style={styles.textContent}>
                  Destinatário: Itupeva - SP
                </Text>
                <Text style={styles.textContent}>Pesagem Inicial: 3600kg</Text>
                <Text style={styles.textContent}>Pesagem Final: 3597kg</Text>
                <Text style={styles.textContent}>Nota Fiscal: 1203</Text>
              </View>
              <SolidButtonComponent
                title="OK!"
                colorBtn="#000"
                colorText="#fff"
                onPress={onClose}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

ModalComponent.defaultProps = {
  onClose: () => {},
  onPress: () => {},
};

export default ModalComponent;
