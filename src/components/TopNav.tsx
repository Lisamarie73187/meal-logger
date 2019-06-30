import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {Colors} from '../styles/Colors';

const {height, width} = Dimensions.get('window');

const tabs = {
    meals: 'meals',
    water: 'water',
    activity: 'activity',
};

interface Props {
    setTabMeals: any;
    setTabWater: any;
    setTabActivity: any;
    tab: string;
}

export const TopNav = (props: Props) => {
    return (
        <View style={styles.bodyContainer}>
            <TouchableOpacity
                onPress={props.setTabMeals}
                style={
                    props.tab === tabs.meals ? styles.tabTextWrapperSelected : styles.tabTextWrapper
                }
            >
                <Text style={styles.tabText}>Meals</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={props.setTabWater}
                style={
                    props.tab === tabs.water ? styles.tabTextWrapperSelected : styles.tabTextWrapper
                }
            >
                <Text style={styles.tabText}>Water</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={props.setTabActivity}
                style={
                    props.tab === tabs.activity
                        ? styles.tabTextWrapperSelected
                        : styles.tabTextWrapper
                }
            >
                <Text style={styles.tabText}>Activity</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 100,
        width,
        paddingHorizontal: 20,
    },
    tabTextWrapperSelected: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.yellow,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    tabTextWrapper: {
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    tabText: {
        fontSize: 18,
    },
});
