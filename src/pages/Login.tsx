import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {Header} from '../styledComponents/Header';
import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

interface Props {}

export const Login = (props: Props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.bodyContainer}>
            <View style={styles.logoWrapper}>
                <Image source={require('../assets/logoNoWords.png')} style={styles.logo} />
            </View>
            <Header text="Sign In" styles={styles.headerWrapper} />
            <TextInput
                style={styles.input}
                value={userName}
                onChangeText={(input: any) => setUserName(input)}
                placeholder="username"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(input: any) => setPassword(input)}
                placeholder="password"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        paddingTop: height / 7,
    },
    logoWrapper: {
        alignItems: 'center',
    },
    logo: {
        width: width / 1.3,
        height: height / 3,
    },
    headerWrapper: {
        paddingTop: 30,
    },
    input: {
        height: 45,
        width: width / 1.2,
        borderWidth: 1,
        borderColor: Colors.placeholderText,
        marginVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
    },
});
