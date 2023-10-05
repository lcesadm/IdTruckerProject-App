// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
// import HeaderComponent from '../../components/headerComponent';
// import useAccount from './hooks/useAccount';
// import styles from './styles';

// const Account = () => {
//   const {} = useAccount();

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
//       <View style={styles.header}>
//         <Image source={require('../../components/icons/sair.png')} style={styles.sair} />
//       </View>
//       <View>
//         <Image source={require('../../components/icons/do-utilizador.png')} style={styles.user}/>
//         <Image source={require('../../components/icons/escrever.png')} style={styles.editar}/>
//         <View style={styles.label}>
//           <Text style={styles.texto}>Gustavo Kiyoto</Text>
//         </View>
//         <Text style={styles.texto}>Data de nacimento: 27/09/1973</Text>
//         <Text style={styles.texto}>Placa do Caminhão: AHJ2344</Text>
//         <Text style={styles.texto}>Tipo de Caminhão: Caminhão pipa</Text>

//       </View>

//     </View>
//   );
// };

// export default Account;

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import HeaderComponent from '../../components/headerComponent';
import useAccount from './hooks/useAccount';
import styles from './styles';

const Account = () => {
  const {} = useAccount();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3B63F1" barStyle="default"/>
      <View style={styles.header}>
        <Image source={require('../../components/icons/sair.png')} style={styles.sair} />
      </View>
      <View style={styles.userInfo}>
        <Image source={require('../../components/icons/do-utilizador.png')} style={styles.user}/>
        <Image source={require('../../components/icons/escrever.png')} style={{...styles.editar, tintColor: "#757575"}}/>
        <Text style={styles.nome}>Gustavo Kiyoto</Text>
        <View style={styles.espaco}>
          <View style={styles.divider}></View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Data de nascimento: 27/09/1973</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Placa do Caminhão: AHJ2344</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Tipo de Caminhão: Caminhão pipa</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Descrição</Text>
          </View>
          <Image source={require('../../components/icons/seta-direita.png')} style={styles.seta}/>
          

        </View>
      </View>
    </View>
  );
};

export default Account;

