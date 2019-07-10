import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationScreenProps} from 'react-navigation';

import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {}

export const AddMeal = (props: Props) => {
    const [searchValue, setSearchValue] = useState('');
    const meal = props.navigation.getParam('meal');

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="left" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.mealText}>{meal}</Text>
                <View style={{width: 30}} />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    value={searchValue}
                    onChangeText={(input: any) => setSearchValue(input)}
                    placeholder="search food"
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        width,
        backgroundColor: Colors.lightGray,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.green,
        width,
        paddingTop: 60,
        padding: 15,
    },
    mealText: {
        fontSize: 20,
        color: 'white',
    },
    input: {
        backgroundColor: 'white',
        width,
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 18,
    },
});
