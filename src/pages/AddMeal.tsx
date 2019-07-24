import React, {useState} from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationScreenProps} from 'react-navigation';

import {Colors} from '../styles/Colors';

const test = ['apple'];

const {height, width} = Dimensions.get('window');

interface Props extends NavigationScreenProps<any> {}

export const AddMeal = (props: Props) => {
    const [searchValue, setSearchValue] = useState('');
    const [dataCommon, setDataCommon] = useState('');
    const [dataBrand, setDataBrand] = useState('');
    const meal = props.navigation.getParam('meal');

    const search = async () => {
        try {
            const response = await fetch(
                `https://trackapi.nutritionix.com/v2/search/instant?query=${searchValue}`,
                {
                    method: 'GET',
                    headers: {
                        'x-app-id': '5f9988ed',
                        'x-app-key': 'adf7e3cb5713b62daf4cbff31488eaee',
                    },
                }
            );
            const responseJson = await response.json();
            setDataCommon(responseJson.common);
            setDataBrand(responseJson.branded);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="left" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.mealText}>{meal}</Text>
                <View style={{width: 30}} />
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    value={searchValue}
                    onChangeText={(input: any) => setSearchValue(input)}
                    placeholder="search food"
                />
                <TouchableOpacity onPress={search}>
                    <Icon name="search1" size={30} color={Colors.lightGray} />
                </TouchableOpacity>
            </View>
            {dataCommon.length > 0 && dataBrand.length > 0 && (
                <ScrollView>
                    {dataCommon.map((food: any) => {
                        return (
                            <TouchableOpacity
                                key={food.food_name}
                                onPress={() => props.navigation.navigate('FoodInfo', {food})}
                            >
                                <View style={styles.searchResultsWrapper}>
                                    <Text style={styles.food}>{food.food_name}</Text>
                                    <Icon name="right" size={20} color={Colors.lightGray} />
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            )}
            {/*{test.map((food: any) => {*/}
            {/*return (*/}
            {/*<TouchableOpacity*/}
            {/*key={food}*/}
            {/*onPress={() => props.navigation.navigate('FoodInfo', {food})}*/}
            {/*>*/}
            {/*<View style={styles.searchResultsWrapper}>*/}
            {/*<Text style={styles.food}>{food}</Text>*/}
            {/*<Icon name="right" size={20} color={Colors.lightGray} />*/}
            {/*</View>*/}
            {/*</TouchableOpacity>*/}
            {/*);*/}
            {/*})}*/}
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
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 18,
        width: width - 80,
    },
    searchResultsWrapper: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 1,
    },
    food: {
        fontSize: 16,
    },
});
