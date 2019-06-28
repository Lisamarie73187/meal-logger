import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {Header} from '../styledComponents/Header';
import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

interface Props {}

export const Login = (props: Props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.bodyContainer}>
            <Header text="Login" styles={styles.headerWrapper} />
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerWrapper: {
        paddingBottom: 20,
    },
    input: {
        height: 50,
        width: width / 1.4,
        borderWidth: 1,
        borderColor: Colors.placeholderText,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
});
