// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// interface RatingProps {
//   stars: number;
//   color?: string;
//   size?: number;
// }

// const Rating: React.FC<RatingProps> = ({ stars, color = 'white', size = 20 }) => {
//   const starIcons = [];

//   const starStyle = {
//     color: color,
//     fontSize: size,
//   };

//   for (let i = 0; i < stars; i++) {
//     starIcons.push(<Text key={i} style={starStyle}>⭐</Text>);
//   }

//   return <View style={{ flexDirection: 'row' }}>{starIcons}</View>;
// };

// export default Rating;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RatingProps {
  stars: number;
  size?: number;  // Tamanho das estrelas (opcional)
}

const Rating: React.FC<RatingProps> = ({ stars, size = 20 }) => {
  const starIcons = [];

  const starStyle = {
    color: 'white', // Defina a cor como branca
    fontSize: size,
  };

  for (let i = 0; i < stars; i++) {
    starIcons.push(<Text key={i} style={{ ...starStyle, ...styles.star }}>⭐</Text>);
  }

  return <View style={{ flexDirection: 'row' }}>{starIcons}</View>;
};

const styles = StyleSheet.create({
  star: {
    // Adicione estilos adicionais das estrelas, se necessário
  },
});

export default Rating;
