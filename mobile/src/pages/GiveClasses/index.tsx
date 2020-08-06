import React from 'react';
import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';

function GiveClasses() {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se candidatar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={() => goBack()} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;