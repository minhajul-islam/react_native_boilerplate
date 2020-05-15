import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile, EditProfile} from './index';
import AppRoutes from '../AppRoutes';
const UserStack = createStackNavigator();

const UserNavigator = () => {
  return (
    <UserStack.Navigator headerMode='none'>
      <UserStack.Screen
        name={AppRoutes.USER_PROFILE}
        component={Profile}
      />
      <UserStack.Screen
        name={AppRoutes.USER_EDIT_PROFILE}
        component={EditProfile}
      />
    </UserStack.Navigator>
  )
};

export default UserNavigator;
