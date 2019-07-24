import React, {Fragment, useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {PickerInput} from '../styledComponents/PickerInput';
import {SinglePicker} from '../styledComponents/SinglePicker';
import {Colors} from '../styles/Colors';

const {width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {
    icon: any;
    meal: string;
}

export const FoodInfo = (props: Props) => {
    const [foodData, setFoodData] = useState('');
    const [quantity, setQuantity] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [openQuantityPicker, setOpenQuantityPicker] = useState(false);
    const [openServingSizePicker, setOpenServingSizePicker] = useState(false);

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

    const getWeightArray = () => {
        const inchesArray = [];
        for (let i = 90; i < 300; i++) {
            inchesArray.push(i);
        }
        return inchesArray;
    };

    useEffect(() => {
        search();
    }, []);
    console.log(foodData.foods);

    return (
        <View style={styles.foodInfoWrapper}>
            <View style={styles.header} />
            {/*<View style={styles.logo} /> */}
            {foodData.foods && foodData.foods.length > 0 && (
                <Fragment>
                    <View>
                        <Image source={{uri: foodData.foods[0].photo.thumb}} style={styles.logo} />
                    </View>
                    <Text>{foodData.foods.nf_calories} cal</Text>
                    <View style={styles.macroWrapper}>
                        <View>
                            <Image source={require('../assets/fat.png')} style={styles.logoFat} />
                            <Text style={[styles.macrosText, {marginTop: 10}]}>Fat</Text>
                            <Text style={styles.macrosText}>
                                {foodData.foods[0].nf_total_fat} g
                            </Text>
                        </View>
                        <View>
                            <Image source={require('../assets/pro.png')} style={styles.logoMacro} />
                            <Text style={styles.macrosText}>Pro</Text>
                            <Text style={styles.macrosText}>{foodData.foods[0].nf_protein} g</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../assets/carb.png')}
                                style={styles.logoMacro}
                            />
                            <Text style={styles.macrosText}>Carb</Text>
                            <Text style={styles.macrosText}>
                                {foodData.foods[0].nf_total_carbohydrate} g
                            </Text>
                        </View>
                    </View>
                </Fragment>
            )}

            <PickerInput
                placeholder="quantity"
                value={quantity}
                openPicker={() => {
                    setOpenQuantityPicker(true);
                }}
            />
            <PickerInput
                placeholder="serving size"
                value={servingSize}
                openPicker={() => {
                    setOpenQuantityPicker(true);
                }}
            />
            {openQuantityPicker && (
                <SinglePicker
                    items={getWeightArray()}
                    value={quantity}
                    setValue={setQuantity}
                    close={() => setOpenQuantityPicker(false)}
                />
            )}
            {openServingSizePicker && (
                <SinglePicker
                    items={getWeightArray()}
                    value={servingSize}
                    setValue={setServingSize}
                    close={() => setOpenServingSizePicker(false)}
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    foodInfoWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        backgroundColor: Colors.green,
        height: 110,
        width,
    },
    logo: {
        height: 90,
        width: 90,
        borderRadius: 90 / 2,
        borderWidth: 1,
        marginTop: 50,
    },
    macroWrapper: {
        width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        paddingHorizontal: 60,
        paddingVertical: 50,
    },
    logoFat: {
        height: 40,
        width: 40,
    },
    macrosText: {
        textAlign: 'center',
    },
    logoMacro: {
        height: 45,
        width: 45,
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
