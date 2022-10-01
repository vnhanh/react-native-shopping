import React from 'react';
import {Navigation} from 'react-native-navigation';

import ScreenConstant from '../constants/ScreenConstants';

import LoginScreen from './auth/login';
import ShoppingScreen from './shopping';

const Screens = new Map();
Screens.set(ScreenConstant.LOGIN, LoginScreen);
Screens.set(ScreenConstant.SHOPPING, ShoppingScreen);

const registerScreens = () => {
  Screens.forEach((ScreenComponent, key) => {
    Navigation.registerComponent(
      key,
      props => <ScreenComponent {...props} />,
      () => ScreenComponent,
    );
  });
};

export default registerScreens;
