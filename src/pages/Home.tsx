import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {CTA} from '../styledComponents/Button';
import {Colors} from '../styles/Colors';
import {Login} from './Login';

const {height, width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {}

export const Home = (props: Props) => {
    return (
        <View style={styles.bodyContainer}>
            <Login />
            <View style={styles.signUpWrapper}>
                <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                    <Text style={styles.signUp}>
                        Don't have an account <Text style={styles.signUpGreen}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <CTA
                background={Colors.yellow}
                text="Continue"
                onClick={() => props.navigation.navigate('HomePage')}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: height / 7,
    },
    signUpWrapper: {
        width: width - 80,
        alignItems: 'flex-end',
        paddingBottom: 40,
    },
    signUp: {
        color: Colors.darkGray,
    },
    signUpGreen: {
        color: Colors.green,
        fontWeight: 'bold',
    },
});
