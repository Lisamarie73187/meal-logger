import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const {width} = Dimensions.get('window');

interface Props {
    text: string;
    onClick: any;
    background: string;
}

export const CTA = (props: Props) => {
    return (
        <TouchableOpacity
            onPress={props.onClick}
            style={[styles.buttonContainer, {backgroundColor: props.background}]}
        >
            <Text style={styles.button}>{props.text}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    buttonContainer: {
        width: width - 60,
        borderRadius: 30,
        paddingVertical: 10,
        marginVertical: 10,
    },
    button: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});
