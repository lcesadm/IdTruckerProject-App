import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  secureTextEntry: boolean;
}

const TextFieldComponent = ({label, placeholder, secureTextEntry} : TextFieldProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} />
      </View>
    </View>
  )

}

export default TextFieldComponent;
