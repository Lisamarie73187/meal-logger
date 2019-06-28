import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {Header} from '../styledComponents/Header';
import {Colors} from '../styles/Colors';
import {CTA} from '../styledComponents/Button';
import {NavigationScreenProps} from "react-navigation";

const {height, width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {}

export const Metrics = (props: Props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.bodyContainer}>
            <Header text="Metrics" styles={styles.headerWrapper} />
            <TextInput
                style={styles.input}
                value={userName}
                onChangeText={(input: any) => setUserName(input)}
                placeholder="name"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(input: any) => setPassword(input)}
                placeholder="email"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(input: any) => setPassword(input)}
                placeholder="password"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(input: any) => setPassword(input)}
                placeholder="confirm password"
            />
            <CTA text="continue" onClick={() => props.navigation.navigate('Metrics')}/>
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
        height: 40,
        width: width / 1.4,
        borderWidth: 1,
        borderColor: Colors.placeholderText,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
});
