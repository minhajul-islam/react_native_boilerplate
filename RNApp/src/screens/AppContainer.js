import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator,AuthNavigator} from './index';


const AppContainer = props => {
    let isLoggedIn = true;
    let Navigation = AppNavigator;
    if (!isLoggedIn) {
        Navigation = AuthNavigator;
    } else {
        Navigation = AppNavigator;
    }
    return (
        <SafeAreaProvider >
            <NavigationContainer>
                <Navigation/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppContainer;
