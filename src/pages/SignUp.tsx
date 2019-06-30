import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {CTA} from '../styledComponents/Button';
import {Header} from '../styledComponents/Header';
import {Colors} from '../styles/Colors';

const {width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {}

export const SignUp = (props: Props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.bodyContainer}>
            <Header text="Sign Up" styles={styles.headerWrapper} />
            <View style={styles.inputWrapper}>
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
                <View style={styles.ctaWrapper}>
                    <CTA
                        background={Colors.green}
                        text="continue"
                        onClick={() => props.navigation.navigate('Metrics')}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    headerWrapper: {
        paddingHorizontal: 40,
    },
    inputWrapper: {
        alignItems: 'center',
    },
    ctaWrapper: {
        paddingTop: 50,
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
