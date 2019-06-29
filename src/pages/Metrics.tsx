import React, {useEffect, useState} from 'react';
import {
    Dimensions,
    Picker,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {CTA} from '../styledComponents/Button';
import {DoublePicker} from '../styledComponents/DoublePicker';
import {Header} from '../styledComponents/Header';
import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {}

export const Metrics = (props: Props) => {
    const [userFeet, setUserFeet] = useState(0);
    const [userInches, setUserInches] = useState(0);
    const [heightPicker, setHeightPicker] = useState(false);

    const getFeetArray = () => {
        const feetArray = [];
        for (let i = 3; i < 8; i++) {
            feetArray.push(i);
        }
        return feetArray;
    };

    const getInchesArray = () => {
        const inchesArray = [];
        for (let i = 0; i < 12; i++) {
            inchesArray.push(i);
        }
        return inchesArray;
    };

    return (
        <View style={styles.bodyContainer}>
            <Header text="Metrics" styles={styles.headerWrapper} />
            <View style={styles.inputWrapper}>
                <TouchableOpacity onPress={() => setHeightPicker(true)} style={styles.input}>
                    {userFeet || userInches ? (
                        <Text>
                            {userFeet}' {userInches}"
                        </Text>
                    ) : (
                        <Text style={styles.textPlaceholder}>height</Text>
                    )}
                </TouchableOpacity>
                <View style={styles.ctaWrapper}>
                    <CTA
                        background={Colors.green}
                        text="continue"
                        onClick={() => props.navigation.navigate('Metrics')}
                    />
                </View>
            </View>
            {heightPicker && (
                <DoublePicker
                    items={getFeetArray()}
                    value={userFeet}
                    setValue={setUserFeet}
                    secondItems={getInchesArray()}
                    secondValue={userInches}
                    secondSetValue={setUserInches}
                    label="ft"
                    labelTwo="in"
                    close={() => setHeightPicker(false)}
                />
            )}
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
        justifyContent: 'center',
    },
    textPlaceholder: {
        color: Colors.lightGray,
    },
});
