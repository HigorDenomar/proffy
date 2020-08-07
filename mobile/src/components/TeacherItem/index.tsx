import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: colors.card,
        borderColor: colors.border,
      }
    ]}>
      <View style={styles.profile}>
        <Image
          style={[styles.avatar, {backgroundColor: colors.image}]}
          source={{uri: 'https://github.com/higordenomar.png'}}
        />

        <View style={styles.profileInfo}>
          <Text
            style={[styles.name, {color: colors.textTitle}]}
          >
            Higor Denomar
          </Text>
          <Text
            style={[styles.subject, {color: colors.textBase}]}
          >
            Matemática
          </Text>
        </View>
      </View>

      <Text style={[styles.bio, {color: colors.textBase}]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, qui rerum veritatis nulla maiores velit quo. Voluptatem, eveniet! Sit, temporibus.
      </Text>

      <View
        style={[ styles.footer, { backgroundColor: colors.footer }]}
      >
        <Text style={[styles.price, {color: colors.textBase}]}>
          Preço/Hora {'   '}
          <Text style={[styles.priceValue, {color: colors.primary}]}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[
              styles.favoriteButton,
              {
                // backgroundColor: colors.primary,
                backgroundColor: colors.favorited,
              }
            ]}
          >
            {/* <Image source={heartOutLineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton
            style={[styles.contactButton, {backgroundColor: colors.secondary}]}
          >
            <Image source={whatsappIcon} />
            <Text style={[styles.contactButtonText, {color: colors.text}]}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;