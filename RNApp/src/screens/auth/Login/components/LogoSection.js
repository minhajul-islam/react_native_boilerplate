import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default ({text, backgroundColor}) => {
    return (
        <View
            style={[styles.container,{backgroundColor}]}>
            <Text style={styles.text} >{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        height: 100,
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
