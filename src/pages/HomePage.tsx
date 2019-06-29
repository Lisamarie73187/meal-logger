import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {CTA} from '../styledComponents/Button';
import {Header} from '../styledComponents/Header';
import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {}

export const HomePage = (props: Props) => {
    return (
        <View style={styles.bodyContainer}>
            <Text>HJSFkajdsf</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
