import React from 'react';
import { View, Text, Modal, ScrollView, StatusBar } from 'react-native';

import SolidButtonComponent from '../solidButtonComponent';

import styles from './styles';

interface TermModalProps {
  isVisible: boolean;
  onClose?: () => void;
  onPress?: () => void;
}

const TermModalComponent = ({
  isVisible,
  onClose,
  onPress,
}: TermModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>
              Ao criar a conta, concorda os termos de uso de dados.
            </Text>
          </View>
          <ScrollView>
            <View style={styles.containerContent}>
              <Text style={styles.textContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
                varius dui. Pellentesque viverra mi sed arcu consequat mattis.
                Curabitur at porta neque, non euismod nibh. Duis ullamcorper
                ligula nec ipsum mollis, eu condimentum nulla eleifend.
                Vestibulum sit amet nibh mi. In hac habitasse platea dictumst.
                Quisque at sapien sed turpis feugiat cursus. Proin nec felis eu
                orci interdum dapibus. Vestibulum vestibulum imperdiet
                vestibulum. Praesent ornare diam nisl, eu euismod dui egestas
                non. Phasellus ligula diam, varius ultricies malesuada non,
                fermentum in sapien. Ut et ultrices risus, nec consequat nisi.
                Mauris eu dictum tellus, eget tincidunt mi. Sed nec libero sed
                metus venenatis dapibus a id enim. Duis rutrum id augue in
                pretium. Quisque dui sapien, suscipit non metus quis, aliquam
                elementum nunc. Proin tellus dolor, cursus nec malesuada eu,
                interdum quis eros. Nunc id laoreet turpis, quis cursus neque.
                Fusce et fermentum metus. Phasellus a imperdiet diam.
                Pellentesque a aliquam turpis. Curabitur ultrices tincidunt
                ligula a aliquam. Quisque lacinia tellus non turpis dignissim,
                id ullamcorper nisi pretium. Aenean porttitor aliquet gravida.
                Duis commodo blandit consectetur. Ut ac ipsum sem. In et leo
                enim. Etiam dignissim accumsan dui, vitae pellentesque magna
                hendrerit et. Donec diam urna, hendrerit luctus ante sed,
                volutpat vestibulum quam. Sed eleifend consequat augue, id
                vulputate arcu imperdiet ut. Donec pharetra, ante in convallis
                pharetra, arcu odio consectetur nunc, eu rutrum neque enim a
                arcu. Aliquam eu auctor nisi, quis congue arcu. Nunc ultrices,
                erat ultrices rutrum aliquam, nunc lectus faucibus odio, ut
                posuere tortor ante nec elit. Vivamus pellentesque eros quis
                mollis commodo. Nunc vel erat id lacus cursus egestas. Curabitur
                eget urna est. Aenean ac metus pretium, maximus urna et, auctor
                lacus. Integer odio eros, accumsan a mauris in, finibus
                tristique erat. Etiam turpis libero, pellentesque sollicitudin
                diam tempus, rutrum facilisis sem. Nulla quis est vitae leo
                scelerisque tincidunt. Nullam posuere interdum quam, vitae
                ornare est euismod id. Mauris commodo commodo rhoncus. Interdum
                et malesuada fames ac ante ipsum primis in faucibus. Phasellus
                elit urna, tristique sed ultricies id, luctus sed arcu. Mauris
                semper, ipsum et viverra bibendum, nibh risus finibus metus, ac
                suscipit risus ante vel sapien. Donec placerat, ligula a egestas
                tincidunt, mi libero vestibulum urna, vitae dapibus tellus neque
                nec nulla. Fusce a varius mauris. Proin auctor congue eros, nec
                bibendum orci cursus eu.
              </Text>
              <View style={styles.containerBtn}>
                <SolidButtonComponent
                  title="Concordo"
                  colorBtn="#1F73B3"
                  colorText="#fff"
                  onPress={onPress}
                />
              </View>
              <SolidButtonComponent
                title="Não Concordo"
                colorBtn="#1F73B3"
                colorText="#fff"
                onPress={onClose}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

TermModalComponent.defaultProps = {
  onClose: () => {},
  onPress: () => {},
};

export default TermModalComponent;
