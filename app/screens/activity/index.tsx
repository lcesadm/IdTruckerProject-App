import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import HeaderComponent from '../../components/headerComponent';
import useActivity from './hooks/useActivity';
import styles from './styles';
import Rating from './rating';

const Activity = () => {
  const {} = useActivity();

  return (
    <View>
      <ScrollView>
        <View style={{...styles.container,  backgroundColor: "#533BBF"}}>
          <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
          <View style={styles.star}>
            <Rating stars={5} size={24} />
          </View>
            <View style={styles.subir}>
              <Image source={require('../../components/icons/entrega.png')} style={styles.entrega} />
              <Text style={styles.trasejado}>................................</Text>
              <Image source={require('../../components/icons/pointer.png')} style={styles.pointer} />
              <Text style={styles.texto1}>Barra Funda</Text>
              <Text style={styles.texto2}>Campinas</Text>
              <Text style={styles.status}>Em andamento...</Text>
            </View>
        </View>
        <View style={{...styles.container,  backgroundColor: "#1F73B3"}}>
          <StatusBar backgroundColor="#1F73B3" barStyle="default"/>
            <View style={styles.star}>
              <Rating stars={5} size={24} />
            </View>
            <View style={[styles.subir, { top: 20 }]}>
              <Image source={require('../../components/icons/entrega.png')} style={styles.entrega1} />
              <Image source={require('../../components/icons/marca-de-verificacao.png')} style={styles.vertif}/>
              <Text style={styles.trasejado1}>___________________</Text>
              <Image source={require('../../components/icons/pointer.png')} style={styles.pointer2} />
              <Text style={styles.texto3}>Manaus-AM</Text>
              <Text style={styles.texto4}>Santos-SP</Text>
              <Text style={styles.status1}>Finalizado</Text>
            </View>
        </View>
        <View style={{...styles.container,  backgroundColor: "#2FB5B5"}}>
          <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
            <View style={styles.star}>
              <Rating stars={5} size={24} />
            </View>
            <View style={[styles.subir, { top: 20 }]}>
              <Image source={require('../../components/icons/entrega.png')} style={styles.entrega1} />
              <Image source={require('../../components/icons/marca-de-verificacao.png')} style={styles.vertif}/>
              <Text style={styles.trasejado1}>___________________</Text>
              <Image source={require('../../components/icons/pointer.png')} style={styles.pointer2} />
              <Text style={styles.texto3}>Manaus-AM</Text>
              <Text style={styles.texto4}>Santos-SP</Text>
              <Text style={styles.status1}>Finalizado</Text>
            </View>
        </View>
      </ScrollView>
      
    </View>
  );
};

export default Activity;

