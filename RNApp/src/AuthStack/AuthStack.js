import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppRoutes from './AppRoutes';
import {
  AuthScreen,
  AuthHomeScreen,
  AuthVerifyScreen,
  AuthTransferRateCheckScreen,
  AuthTransferRatePreviewScreen,
  ContryPicker
} from '../screens/auth/';
import {Language} from '../screens/more';

const AuthStack = createStackNavigator();

const TransferNavigator = () => {
  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen
        name={AppRoutes.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <AuthStack.Screen
        name={AppRoutes.AUTH_TRANSFER_RATE_CHECK}
        component={AuthTransferRateCheckScreen}
      />
      <AuthStack.Screen
        name={AppRoutes.AUTH_TRANSFER_RATE_PREVIEW}
        component={AuthTransferRatePreviewScreen}
      />
      <AuthStack.Screen
        name={AppRoutes.AUTH}
        component={AuthScreen}
        options={{
          headerShown:true
        }}
      />
      <AuthStack.Screen
        name={AppRoutes.COUNTRY_PICKER}
        component={ContryPicker}
        options={{
          headerShown:false
        }}
      />
      <AuthStack.Screen
        name={AppRoutes.AUTH_VERIFY}
        component={AuthVerifyScreen}
      />
      <AuthStack.Screen
        name={AppRoutes.AUTH_LANGUAGE}
        component={Language}
      />

    </AuthStack.Navigator>
  )
};

export default TransferNavigator;
