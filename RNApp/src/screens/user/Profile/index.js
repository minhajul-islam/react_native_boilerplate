import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Strings} from '../../../constants';
import {ToolBar} from '../../../components';
import Icons from '../../../assets/Icons';

const Profile = () => {
    const navigation = useNavigation();
    const goBack = ()=>navigation.pop();
    return (
        <SafeAreaView>
            <ToolBar
                ionLeft={Icons.IconBack}
                title={Strings.profile.title}
                onPressLeft={goBack}
            />
            <Text>{Strings.profile.title}</Text>
        </SafeAreaView>
    );
};

export default Profile;
