import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {Colors} from '../../styles/Colors';
import {Meal} from '../MealDashboard/Meal';

const {width} = Dimensions.get('window');

const mealIcons = {
    breakfast: require('../../assets/breakfastIcon.png'),
    snack: require('../../assets/snackIcon.png'),
    lunch: require('../../assets/lunchIcon.png'),
    dinner: require('../../assets/dinnerIcon.png'),
};

interface Props extends NavigationScreenProps<any> {}

export const MealsDashboard = (props: Props) => {
    return (
        <View style={styles.bodyContainer}>
            <View style={styles.mealWrapper}>
                <Meal meal="Breakfast" icon={mealIcons.breakfast} navigation={props.navigation} />
                <Meal meal="Morning Snack" icon={mealIcons.snack} navigation={props.navigation} />
                <Meal meal="Lunch" icon={mealIcons.lunch} navigation={props.navigation} />
                <Meal meal="Dinner" icon={mealIcons.dinner} navigation={props.navigation} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        width,
    },
    mealWrapper: {
        backgroundColor: Colors.lighterGray,
    },
});
