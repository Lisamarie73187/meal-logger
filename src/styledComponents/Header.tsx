import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
