import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface SolidButtonProps {
  title: string;
  colorBtn: string;
  colorText: string;
  onPress?: () => void;
}

const SolidButtonComponent = ({
  title,
  colorBtn,
  colorText,
  onPress,
}: SolidButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: colorBtn }]}>
        <Text style={[styles.text, { color: colorText }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

SolidButtonComponent.defaultProps = {
  onPress: () => {},
};

export default SolidButtonComponent;
