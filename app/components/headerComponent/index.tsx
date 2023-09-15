import React from "react";
import { View, Text, StatusBar} from "react-native";
import ProgressBar from 'react-native-progress/Bar';

import styles from "./styles";
// import RoundedImage from "./image";

interface HeaderProps {
  title?: string;
}

const HeaderComponent = ({title} : HeaderProps) => {
  return (
    <View>
      <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <ProgressBar style={styles.progressBar}progress={0.6} width={250} height={15} color={'#02fa44'} />
      </View>
    </View>
  )

}

export default HeaderComponent;
