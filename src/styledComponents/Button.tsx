import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

interface Props {
    text: string;
    onClick: any;
}

export const CTA = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onClick} style={styles.buttonContainer}>
            <Text style={styles.button}>{props.text}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.button,
        width: width / 2,
        paddingVertical: 10,
        marginVertical: 10,
    },
    button: {
        textAlign: 'center',
        fontSize: 18,
    },
});
