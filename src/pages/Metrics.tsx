import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {CTA} from '../styledComponents/Button';
import {DoublePicker} from '../styledComponents/DoublePicker';
import {Header} from '../styledComponents/Header';
import {MealLoggerDatePicker} from '../styledComponents/MealLoggerDatePicker';
import {PickerInput} from '../styledComponents/PickerInput';
import {SinglePicker} from '../styledComponents/SinglePicker';
import {Colors} from '../styles/Colors';
import {FormatUtils} from '../utils/formatUtils';

const {width} = Dimensions.get('window');

const activityLevelItems = ['Sedentary', 'Lightly Active', 'Active', 'Very Active'];

interface Props extends NavigationScreenProps<any> {}

export const Metrics = (props: Props) => {
    const [userFeet, setUserFeet] = useState(0);
    const [userInches, setUserInches] = useState(0);
    const [heightPicker, setHeightPicker] = useState(false);
    const [weight, setWeight] = useState(0);
    const [weightPicker, setWeightPicker] = useState(false);
    const [userBday, setUserBday] = useState(null);
    const [bdayPicker, setBdayPicker] = useState(false);
    const [gender, setGender] = useState('');
    const [genderPicker, setGenderPicker] = useState(false);
    const [activityLevel, setActivityLevel] = useState('');
    const [activityLevelPicker, setActivityLevelPicker] = useState(false);

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

    const getWeightArray = () => {
        const inchesArray = [];
        for (let i = 90; i < 300; i++) {
            inchesArray.push(i);
        }
        return inchesArray;
    };

    const closePickers = () => {
        setActivityLevelPicker(false);
        setGenderPicker(false);
        setBdayPicker(false);
        setWeightPicker(false);
        setHeightPicker(false);
    };

    const continueToHome = () => {
        const user = {
            name: props.navigation.getParam('name'),
            email: props.navigation.getParam('email'),
            feet: `${userFeet}`,
            inches: `${userInches}`,
            weight: `${weight}`,
            bday: FormatUtils.localizePrettyDateFormat(userBday),
            gender,
            activityLevel,
        };

        // createUser(user);
        props.navigation.navigate('HomePage');
    };

    const createUser = async (user: any) => {
        try {
            const response = await fetch(
                'https://fh84ys69vl.execute-api.us-west-1.amazonaws.com/dev/user',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        user,
                    }),
                }
            );
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.bodyContainer}>
            <Header text="Metrics" styles={styles.headerWrapper} />
            <View style={styles.inputWrapper}>
                <PickerInput
                    openPicker={() => {
                        closePickers(), setHeightPicker(true);
                    }}
                    value={userFeet}
                    label="'"
                    secondValue={userInches}
                    secondLabel='"'
                    placeholder="height"
                />
                <PickerInput
                    placeholder="weight"
                    label="lbs"
                    value={weight}
                    openPicker={() => {
                        closePickers(), setWeightPicker(true);
                    }}
                />
                <PickerInput
                    placeholder="birthday"
                    value={userBday ? FormatUtils.localizePrettyDateFormat(userBday) : ''}
                    openPicker={() => {
                        closePickers(), setBdayPicker(true);
                    }}
                />
                <PickerInput
                    placeholder="gender"
                    value={gender}
                    openPicker={() => {
                        closePickers(), setGenderPicker(true);
                    }}
                />
                <PickerInput
                    placeholder="activity level"
                    value={activityLevel}
                    openPicker={() => {
                        closePickers(), setActivityLevelPicker(true);
                    }}
                />
                <View style={styles.ctaWrapper}>
                    <CTA background={Colors.green} text="continue" onClick={continueToHome} />
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
            {weightPicker && (
                <SinglePicker
                    items={getWeightArray()}
                    value={weight}
                    setValue={setWeight}
                    label="lbs"
                    close={() => setWeightPicker(false)}
                />
            )}
            {bdayPicker && (
                <MealLoggerDatePicker
                    selectedDate={userBday ? userBday : new Date()}
                    setDate={setUserBday}
                    close={() => setBdayPicker(false)}
                />
            )}
            {genderPicker && (
                <SinglePicker
                    items={['male', 'female']}
                    value={gender}
                    setValue={setGender}
                    close={() => setGenderPicker(false)}
                />
            )}
            {activityLevelPicker && (
                <SinglePicker
                    items={activityLevelItems}
                    value={activityLevel}
                    setValue={setActivityLevel}
                    close={() => setActivityLevelPicker(false)}
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
