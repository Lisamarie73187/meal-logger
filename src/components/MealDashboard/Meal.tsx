import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {Colors} from '../../styles/Colors';

const {width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {
    icon: any;
    meal: string;
}

export const Meal = (props: Props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('AddMeal')}>
            <View style={styles.mealWrapper}>
                <Image source={props.icon} style={styles.logo} />
                <Text style={styles.meal}>{props.meal}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    mealWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width,
        backgroundColor: Colors.primaryBGMedium,
        marginVertical: 1,
    },
    logo: {
        height: 45,
        width: 45,
    },
    meal: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
});
