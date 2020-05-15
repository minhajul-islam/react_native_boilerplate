import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserNavigator from './user/UserNavigator';
import AuthNavigator from './auth/AuthNavigator';
const MainNavigator = createStackNavigator();
const Stack={
    AUTH_STACK:'AUTH_STACK',
    USER_STACK:'USER_STACK',
};

const AppNavigator = () => (
    <MainNavigator.Navigator headerMode='none'>
        <MainNavigator.Screen
            name={Stack.AUTH_STACK}
            component={AuthNavigator}
        />
        <MainNavigator.Screen
            name={Stack.USER_STACK}
            component={UserNavigator}
        />
    </MainNavigator.Navigator>
);

export  {
    AppNavigator,
    AuthNavigator
};
