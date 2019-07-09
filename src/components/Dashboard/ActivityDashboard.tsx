import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height, width} = Dimensions.get('window');

interface Props {}

export const ActivityDashboard = (props: Props) => {
    return (
        <View style={styles.bodyContainer}>
            <Text>Activity</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
