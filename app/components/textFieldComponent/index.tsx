import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

interface TextFieldProps {
  label: string;
  secondaryLabel?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
}

const TextFieldComponent = ({
  label,
  secondaryLabel,
  placeholder,
  secureTextEntry,
  keyboardType,
}: TextFieldProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {secondaryLabel!.length > 0 && (
          <Text style={styles.label}>{secondaryLabel}</Text>
        )}
      </View>
    </View>
  );
};

TextFieldComponent.defaultProps = {
  secondaryLabel: '',
  placeHolder: '',
  secureTextEntry: false,
  keyboardType: 'default',
};

export default TextFieldComponent;
