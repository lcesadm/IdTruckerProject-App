import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

interface LightButtonProps {
  onPress?: Function;
  title: string;
}

const LightButtonComponent = ({ onPress, title }: LightButtonProps) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? styles.btnPressed : styles.btnNormal
        }>
        {({ pressed }) => (
          <Text style={[{ color: pressed ? '#445AA7' : 'white' }, styles.text]}>
            {title}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

LightButtonComponent.defaultProps = {
  onPress: () => {},
};

export default LightButtonComponent;
