import React from 'react';
import { View, Text, Modal, StatusBar, ActivityIndicator } from 'react-native';

import styles from './styles';

interface LoadingProps {
  visible: boolean;
  size?: number;
  color?: string;
  text: string;
}

const LoadingComponent = ({ visible, size, color, text }: LoadingProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <ActivityIndicator size={size} color={color} />
        <Text style={{ ...styles.text, color: color }}>{text}</Text>
      </View>
    </Modal>
  );
};

LoadingComponent.defaultProps = {
  size: 30,
  color: '#000',
};

export default LoadingComponent;
