import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height, width} = Dimensions.get('window');

interface WeekInterface {
    day: string;
    calories: number;
}

const week = [
    {
        day: 'Mon',
        calories: 1234,
    },
    {
        day: 'Tues',
        calories: 1234,
    },
    {
        day: 'Wed',
        calories: 1234,
    },
    {
        day: 'Thru',
        calories: 1234,
    },
    {
        day: 'Fri',
        calories: 1234,
    },
    {
        day: 'Sat',
        calories: 1234,
    },
    {
        day: 'Sun',
        calories: 1234,
    },
];

interface Props {}

export const MealsDashboard = (props: Props) => {
    return (
        <View style={styles.bodyContainer}>
            {week.map((day: WeekInterface) => {
                return (
                    <View key={day.day}>
                        <Text>{day.calories}</Text>
                        <Text>{day.day}</Text>
                    </View>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
    },
});
