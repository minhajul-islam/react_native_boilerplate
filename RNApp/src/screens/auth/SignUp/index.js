import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ToolBar} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '../../../assets/Icons';
import {Strings} from '../../../constants';

const SignUp = ({navigation}) => {
    const {navigate} = navigation;
    const goBack = ()=>navigation.pop();

    return (
        <SafeAreaView>
            <ToolBar
                ionLeft={Icons.IconBack}
                title={Strings.signUp.title}
                onPressLeft={goBack}
            />
            <Text>{Strings.signUp.title}</Text>
        </SafeAreaView>
    );
};

export default SignUp;
