import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Picker,
  Alert
} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';
import styles from './styles';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const { colors } = useTheme();

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleFiltersSubmit() {
    if(week_day === '0' || !week_day || subject === '0' || !subject || !time) {
      Alert.alert(
        'Opss...',
        'Preencha todos os campos.',
        [
          { text: 'OK', onPress: () => {} }
        ],
        { cancelable: true }
      );

      return;
    } else {

      loadFavorites();

      api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        }
      }).then(response => {
        if(!response.data[0]) {
          Alert.alert(
            'Nenhum professor encontrado',
            'Escolha uma opção diferente.',
            [
              { text: 'OK', onPress: () => {} }
            ],
            { cancelable: true }
          );
        } else {
          setIsFiltersVisible(false);
          setTeachers(response.data);
        }
      }).catch(() => {
        console.log('Erro ao buscar dados da api');
      });
    }
  }

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
            {/* <TextInput
              
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#AAAAAA80"
            /> */}

            <View style={[styles.input, {backgroundColor: colors.input}]}>
              <Picker
                mode="dropdown"
                style={{flex: 1}}
                selectedValue={subject}
                onValueChange={(itemValue) => setSubject(itemValue) }
              >
                <Picker.Item label="Qual matéria?" value="0" color="#AAAAAA80" />
                <Picker.Item label="Artes" value="Artes" />
                <Picker.Item label="Biologia" value="Biologia" />
                <Picker.Item label="Ciência" value="Ciência" />
                <Picker.Item label="Física" value="Física" />
                <Picker.Item label="Geografia" value="Geografia" />
                <Picker.Item label="História" value="História" />
                <Picker.Item label="Matemática" value="Matemática" />
                <Picker.Item label="Português" value="Português" />
                <Picker.Item label="Química" value="Química" />
              </Picker>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={[styles.label, {color: colors.label}]}>Dia da semana</Text>

                <View style={[styles.picker, {backgroundColor: colors.input}]}>
                  <Picker
                    mode="dropdown"
                    style={{flex: 1}}
                    selectedValue={week_day}
                    onValueChange={(itemValue) => setWeekDay(itemValue) }
                  >
                    <Picker.Item label="Qual o dia?" value="0" color="#AAAAAA80" />
                    <Picker.Item label="Segunda" value="1" />
                    <Picker.Item label="Terça" value="2" />
                    <Picker.Item label="Quarta" value="3" />
                    <Picker.Item label="Quinta" value="4" />
                    <Picker.Item label="Sexta" value="5" />
                    <Picker.Item label="Sábado" value="6" />
                  </Picker>
                </View>
              </View>
              
              <View style={styles.inputBlock}>
                <Text style={[styles.label, {color: colors.label}]}>Horário</Text>
                <TextInput
                  style={[styles.input, {backgroundColor: colors.input}]}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#AAAAAA80"
                />
              </View>
            </View>

            <RectButton
              style={[styles.submitButton, {backgroundColor: colors.secondary}]}
              onPress={handleFiltersSubmit}
            >
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
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;