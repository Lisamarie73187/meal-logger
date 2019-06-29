import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height} = Dimensions.get('window');

interface Props {
    text: string;
    styles?: object;
}

export const Header = (props: Props) => {
    return (
        <View style={props.styles}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 35,
    },
});
