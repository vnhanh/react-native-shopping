import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import ScreenConstant from '../constants/ScreenConstants';

import LoginScreen from './auth/login';
import ErrorScreen from './error';
import ShoppingScreen from './shopping';

const Screens = new Map();
Screens.set(ScreenConstant.LOGIN, LoginScreen);
Screens.set(ScreenConstant.ERROR_FULL, ErrorScreen);
Screens.set(ScreenConstant.SHOPPING, ShoppingScreen);

const registerScreens = appStore => {
  Screens.forEach((ScreenComponent, key) => {
    Navigation.registerComponent(
      key,
      () => props =>
        (
          <Provider store={appStore}>
            <ScreenComponent {...props} />
          </Provider>
        ),
      () => ScreenComponent,
    );
  });
};

export default registerScreens;
