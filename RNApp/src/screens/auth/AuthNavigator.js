import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUp} from '.';
import AppRoutes from '../AppRoutes';
const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen
        name={AppRoutes.AUTH_LOGIN}
        component={Login}
      />
      <AuthStack.Screen
        name={AppRoutes.AUTH_SIGN_UP}
        component={SignUp}
      />
    </AuthStack.Navigator>
  )
};

export default AuthNavigator;
