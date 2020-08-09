import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-community/picker';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

interface Filter {
    itemValue: string,
    itemIndex: string
}

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((favoritedTeacher: Teacher) => favoritedTeacher.id)

                setFavorites(favoritedTeachersIds);
            }
        });
    }

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={subject}
                                style={styles.picker}
                                itemStyle={styles.pickerItem}
                                mode="dropdown"
                                onValueChange={(itemValue, itemIndex) => {
                                    setSubject(String(itemValue));
                                }}
                            >
                                <Picker.Item color="#6A6180" label="Artes" value="Artes" />
                                <Picker.Item color="#6A6180" label="Biologia" value="Biologia" />
                                <Picker.Item color="#6A6180" label="Ciências" value="Ciências" />
                                <Picker.Item color="#6A6180" label="Educação Física" value="Educação Física" />
                                <Picker.Item color="#6A6180" label="Física" value="Física" />
                                <Picker.Item color="#6A6180" label="Geografia" value="Geografia" />
                                <Picker.Item color="#6A6180" label="História" value="História" />
                                <Picker.Item color="#6A6180" label="Matemática" value="Matemática" />
                                <Picker.Item color="#6A6180" label="Português" value="Português" />
                                <Picker.Item color="#6A6180" label="Química" value="Química" />
                            </Picker>
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        selectedValue={week_day}
                                        style={styles.picker}
                                        itemStyle={styles.pickerItem}
                                        mode="dropdown"
                                        onValueChange={(itemValue, itemIndex) => {
                                            setWeekDay(String(itemValue));
                                        }}
                                    >
                                        <Picker.Item color="#6A6180" label="Domingo" value="0" />
                                        <Picker.Item color="#6A6180" label="Segunda-feira" value="1" />
                                        <Picker.Item color="#6A6180" label="Terça-feira" value="2" />
                                        <Picker.Item color="#6A6180" label="Quarta-feira" value="3" />
                                        <Picker.Item color="#6A6180" label="Quinta-feira" value="4" />
                                        <Picker.Item color="#6A6180" label="Sexta-feira" value="5" />
                                        <Picker.Item color="#6A6180" label="Sábado" value="6" />
                                    </Picker>
                                </View>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        selectedValue={time}
                                        style={styles.picker}
                                        itemStyle={styles.pickerItem}
                                        mode="dropdown"
                                        onValueChange={(itemValue, itemIndex) => {
                                            setTime(String(itemValue));
                                        }}
                                    >
                                        <Picker.Item color="#6A6180" label="6 horas" value="6:00" />
                                        <Picker.Item color="#6A6180" label="7 horas" value="7:00" />
                                        <Picker.Item color="#6A6180" label="8 horas" value="8:00" />
                                        <Picker.Item color="#6A6180" label="9 horas" value="9:00" />
                                        <Picker.Item color="#6A6180" label="10 horas" value="10:00" />
                                        <Picker.Item color="#6A6180" label="11 horas" value="11:00" />
                                        <Picker.Item color="#6A6180" label="12 horas" value="12:00" />
                                        <Picker.Item color="#6A6180" label="13 horas" value="13:00" />
                                        <Picker.Item color="#6A6180" label="14 horas" value="14:00" />
                                        <Picker.Item color="#6A6180" label="15 horas" value="15:00" />
                                        <Picker.Item color="#6A6180" label="16 horas" value="16:00" />
                                        <Picker.Item color="#6A6180" label="17 horas" value="17:00" />
                                        <Picker.Item color="#6A6180" label="18 horas" value="18:00" />
                                        <Picker.Item color="#6A6180" label="19 horas" value="19:00" />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
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