import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Colors} from '../styles/Colors';

const {width} = Dimensions.get('window');

interface Props {
    openPicker: () => void;
    value: string | number;
    label?: string;
    placeholder: string;
    secondValue?: string | number;
    secondLabel?: string;
}

export const PickerInput = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.openPicker} style={styles.input}>
            {props.value || props.secondValue ? (
                <Text>
                    {props.value} {props.label} {props.secondValue} {props.secondLabel}
                </Text>
            ) : (
                <Text style={styles.textPlaceholder}>{props.placeholder}</Text>
            )}
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    textPlaceholder: {
        color: Colors.lightGray,
    },
    input: {
        height: 45,
        width: width / 1.2,
        borderWidth: 1,
        borderColor: Colors.placeholderText,
        marginVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        justifyContent: 'center',
    },
});
