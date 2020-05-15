import React from 'react';
import {TouchableOpacity, StyleSheet, StatusBar, View, Text, Image} from 'react-native';
import {Colors, Fonts} from '../constants';
import Icons from '../assets/Icons';

export default ({title, onPressLeft, onPressRight, iconRight, ionRightStyle, ionLeft, ionLeftStyle, backgroundColor}) => {
    const styleTypes = ['default', 'dark-content', 'light-content'];
    return (
        <View style={[styles.container, {backgroundColor: backgroundColor ? backgroundColor : Colors.background}]}>
            <StatusBar backgroundColor={backgroundColor ? backgroundColor : Colors.white} barStyle={styleTypes[1]}/>
            <View style={styles.container_row}>
                {ionLeft ?
                    <TouchableOpacity
                        underlayColor={'transparent'}
                        style={styles.back_button}
                        onPress={onPressLeft}>
                        <Image source={ionLeft == null ? Icons.IconBack : ionLeft}
                               style={[styles.back_button_icon, ionLeftStyle]}/>
                    </TouchableOpacity>
                    :
                    <View style={styles.back_button}/>
                }
                <View style={styles.container_title}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {iconRight ?
                    <TouchableOpacity
                        underlayColor={'transparent'}
                        style={styles.back_button}
                        onPress={onPressRight}>
                        <Image source={iconRight}
                               style={[styles.back_button_icon, ionRightStyle]}/>
                    </TouchableOpacity>
                    :
                    <View style={styles.back_button}/>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flexDirection: 'column',
        height: 56,
    },
    container_row: {
        flexDirection: 'row',
        height: 56,
    },
    back_button: {
        alignSelf: 'center',
        height: 36,
        marginRight: 16,
        justifyContent: 'center',
        width: 36,
    },
    ionLanguageStyle: {
        flexDirection: 'row',
    },
    language: {
        fontSize: 11,
        //fontFamily: Fonts.medium,
        fontWeight: '500',
        fontStyle: 'normal',
        alignSelf: 'center',
        textAlign: 'center',
        marginRight: 4,
        marginLeft: 6,
        letterSpacing: 0,
        color: Colors.white,
    },
    dropdownEnable: {
        width: 12,
        height: 12,
        alignSelf: 'center',
    },
    back_button_icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
        alignSelf: 'center',
    },
    back_country: {
        width: 20,
        height: 12.8,
        marginLeft: 16,
        alignSelf: 'center',
    },
    container_title: {
        flexDirection: 'column',
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        alignSelf: 'center',
        // fontFamily: Fonts.semiBold,
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0.48,
        color: Colors.tooBarText,
    },
});
