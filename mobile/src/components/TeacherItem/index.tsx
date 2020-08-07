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

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
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
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text
            style={[styles.name, {color: colors.textTitle}]}
          >
            { teacher.name }
          </Text>
          <Text
            style={[styles.subject, {color: colors.textBase}]}
          >
            { teacher.subject }
          </Text>
        </View>
      </View>

      <Text style={[styles.bio, {color: colors.textBase}]}>
        { teacher.bio }
      </Text>

      <View
        style={[ styles.footer, { backgroundColor: colors.footer }]}
      >
        <Text style={[styles.price, {color: colors.textBase}]}>
          Preço/Hora {'   '}
          <Text style={[styles.priceValue, {color: colors.primary}]}>R$ { teacher.cost}</Text>
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