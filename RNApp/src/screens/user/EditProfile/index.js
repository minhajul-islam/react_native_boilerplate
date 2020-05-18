import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Strings} from '../../../constants';

const EditProfile = () => {

    return (
        <SafeAreaView>
            <Text>{Strings.EDIT_PROFILE_title}</Text>
        </SafeAreaView>
    );
};

export default EditProfile;
