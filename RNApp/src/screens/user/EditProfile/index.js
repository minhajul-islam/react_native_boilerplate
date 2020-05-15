import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Strings} from '../../../constants';

const EditProfile = () => {

    return (
        <SafeAreaView>
            <Text>{Strings.editProfile.title}</Text>
        </SafeAreaView>
    );
};

export default EditProfile;
