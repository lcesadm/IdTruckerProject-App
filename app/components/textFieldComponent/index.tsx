import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';

import useTextField from './hooks/useTextField';
import styles from './styles';

interface TextFieldProps {
  label: string;
  onChangeText: any;
  secondaryLabel?: string;
  pressableLabel?: boolean;
  onPressLabel?: () => void;
  placeholder?: string;
  keyboardType?: any;
  value?: string;
  validationText?: string;
}

const TextFieldComponent = ({
  label,
  onChangeText,
  secondaryLabel,
  pressableLabel,
  onPressLabel,
  placeholder,
  keyboardType,
  value,
  validationText,
}: TextFieldProps) => {
  const { showPassword, setShowPassword } = useTextField();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.containerField}>
          <TextInput
            style={{
              ...styles.input,
              borderColor:
                validationText!.substring(
                  validationText!.indexOf("'") + 1,
                  validationText!.lastIndexOf("'"),
                ) == label
                  ? '#f00'
                  : '#fff',
              borderWidth:
                validationText!.substring(
                  validationText!.indexOf("'") + 1,
                  validationText!.lastIndexOf("'"),
                ) == label
                  ? 2
                  : 0,
            }}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={label == 'Senha' ? showPassword : false}
            keyboardType={keyboardType}
            value={value}
          />
          {label == 'Senha' && (
            <Pressable
              style={styles.imageBtn}
              onPress={() => setShowPassword(!showPassword)}>
              <Image
                style={styles.image}
                source={
                  showPassword
                    ? require('../../assets/img/notvisible.png')
                    : require('../../assets/img/visible.png')
                }
              />
            </Pressable>
          )}
        </View>
        {secondaryLabel!.length > 0 && !pressableLabel && (
          <Text style={styles.label}>{secondaryLabel}</Text>
        )}
        {secondaryLabel!.length > 0 && pressableLabel && (
          <Pressable onPress={onPressLabel}>
            {({ pressed }) => (
              <Text style={pressed ? styles.labelPressed : styles.label}>
                {secondaryLabel}
              </Text>
            )}
          </Pressable>
        )}
        {validationText!.substring(
          validationText!.indexOf("'") + 1,
          validationText!.lastIndexOf("'"),
        ) == label && <Text style={styles.invalid}>Campo inválido!</Text>}
      </View>
    </View>
  );
};

TextFieldComponent.defaultProps = {
  secondaryLabel: '',
  pressableLabel: false,
  onPressLabel: () => {},
  placeHolder: '',
  keyboardType: 'default',
  value: undefined,
  validationText: '',
};

export default TextFieldComponent;
