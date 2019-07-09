import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height, width} = Dimensions.get('window');

interface Props {}

export const AddMeal = (props: Props) => {
    return (
        <View style={styles.bodyContainer}>
            <Text>ADD</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        width,
    },
});
