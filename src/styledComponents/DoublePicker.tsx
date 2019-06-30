import React from 'react';
import {Dimensions, Picker, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

interface Props {
    items: any;
    value: string | number;
    setValue: any;
    secondItems: any;
    secondValue: string | number;
    secondSetValue: any;
    label: string;
    labelTwo: string;
    close: any;
}

export const DoublePicker = (props: Props) => {
    return (
        <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={props.close}>
                <Text style={styles.header}>Done</Text>
            </TouchableOpacity>
            <View style={styles.pickerWrapper}>
                <Picker
                    style={styles.pickerOne}
                    selectedValue={props.value}
                    onValueChange={itemValue => props.setValue(itemValue)}
                >
                    {props.items.map((item: string) => {
                        return (
                            <Picker.Item key={item} label={`${item} ${props.label}`} value={item} />
                        );
                    })}
                </Picker>
                <Picker
                    style={styles.pickerOne}
                    selectedValue={props.secondValue}
                    onValueChange={itemValue => props.secondSetValue(itemValue)}
                >
                    {props.secondItems.map((item: string) => {
                        return (
                            <Picker.Item
                                key={item}
                                label={`${item} ${props.labelTwo}`}
                                value={item}
                            />
                        );
                    })}
                </Picker>
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
        width: width / 3,
    },
});
