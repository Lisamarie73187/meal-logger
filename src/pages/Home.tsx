import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {CTA} from '../styledComponents/Button';
import {Login} from './Login';

const {height, width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {}

export const Home = (props: Props) => {
    return (
        <View style={styles.bodyContainer}>
            <Login />
            <CTA text="Sign Up" onClick={() => props.navigation.navigate('SignUp')} />
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
