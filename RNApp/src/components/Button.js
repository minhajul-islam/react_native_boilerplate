import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default ({text, onPress, disabled, disabledColor, style,textStyle}) => {
    return (
        <TouchableOpacity
            // underlayColor={'transparent'}
            style={[styles.container, style]}
            disabled={disabled}
            onPress={onPress}>
            <View
                style={[styles.linearGradient]}>
                <Text style={ textStyle?textStyle:styles.text}>{text}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        height: 48,
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.36,
        color: "#008abc"
    }
});
