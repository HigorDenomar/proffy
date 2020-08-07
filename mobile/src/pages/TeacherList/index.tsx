import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput
} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const { colors } = useTheme();

  return (
    <View style={[
      styles.container, { backgroundColor: colors.background }
    ]}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={() => setIsFiltersVisible(!isFiltersVisible)}>
            <Icon name="filter" size={24} color="#fff" />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={[styles.label, {color: colors.label}]}>Matéria</Text>
            <TextInput
              style={[styles.input, {backgroundColor: colors.input}]}
              placeholder="Qual a matéria?"
              placeholderTextColor="#AAAAAA80"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={[styles.label, {color: colors.label}]}>Dia da semana</Text>
                <TextInput
                  style={[styles.input, {backgroundColor: colors.input}]}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#AAAAAA80"
                />
              </View>
              
              <View style={styles.inputBlock}>
                <Text style={[styles.label, {color: colors.label}]}>Horário</Text>
                <TextInput
                  style={[styles.input, {backgroundColor: colors.input}]}
                  placeholder="Qual horário?"
                  placeholderTextColor="#AAAAAA80"
                />
              </View>
            </View>

            <RectButton style={[styles.submitButton, {backgroundColor: colors.secondary}]}>
              <Text style={[styles.submitButtonText, {color: colors.text}]}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;