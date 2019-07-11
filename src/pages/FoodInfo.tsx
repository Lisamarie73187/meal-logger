import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

const {width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {
    icon: any;
    meal: string;
}

export const FoodInfo = (props: Props) => {
    const [foodData, setFoodData] = useState('');
    const food = props.navigation.getParam('food');
    console.log(food.food_name);

    const search = async () => {
        try {
            const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
                method: 'POST',
                headers: {
                    'x-app-id': '5f9988ed',
                    'x-app-key': 'adf7e3cb5713b62daf4cbff31488eaee',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: 'apples',
                    timezone: 'US/Eastern',
                }),
            });
            const responseJson = await response.json();
            setFoodData(responseJson);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        search();
    }, []);
    console.log(foodData);

    return (
        <View>
            <Text>test</Text>
        </View>
    );
};
const styles = StyleSheet.create({});
