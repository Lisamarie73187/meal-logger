import React, {Component, useState} from 'react';
import {
    DatePickerIOS,
    Dimensions,
    Picker,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

interface Props {
    selectedDate: Date;
    setDate: (newDate: Date) => void;
    close: any;
}

export const MealLoggerDatePicker = (props: Props) => {
    return (
        <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={props.close}>
                <Text style={styles.header}>Done</Text>
            </TouchableOpacity>
            <View style={styles.pickerWrapper}>
                <DatePickerIOS
                    style={styles.pickerOne}
                    date={props.selectedDate}
                    onDateChange={date => props.setDate(date)}
                    mode="date"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pickerContainer: {
        position: 'absolute',
        bottom: 0,
        height: height / 3.5,
        right: 0,
        left: 0,
        backgroundColor: '#f1f1f1',
    },
    header: {
        textAlign: 'right',
        backgroundColor: Colors.lighterGray,
        paddingVertical: 8,
        color: Colors.blue,
        fontSize: 18,
        paddingRight: 10,
    },
    pickerWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerOne: {
        width,
    },
});
