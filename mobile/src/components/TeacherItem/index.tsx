import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Linking
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';

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
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const { colors } = useTheme();

  async function handleToggleFavorites() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = []

    if(favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if(isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    });
    
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

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
            onPress={handleToggleFavorites}
            style={[
              styles.favoriteButton,

              isFavorited ?
              { backgroundColor: colors.favorited } : { backgroundColor: colors.primary }
            ]}
          >
            { isFavorited
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutLineIcon} />
            }
          </RectButton>

          <RectButton
            style={[styles.contactButton, {backgroundColor: colors.secondary}]}
            onPress={handleLinkToWhatsapp}
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