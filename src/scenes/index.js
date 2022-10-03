import React from 'react';
import {Navigation} from 'react-native-navigation';

import ScreenConstant from '../constants/ScreenConstants';

import LoginScreen from './auth/login';
import ShoppingScreen from './shopping';
import { Provider } from "react-redux";

const Screens = new Map();
Screens.set(ScreenConstant.LOGIN, LoginScreen);
Screens.set(ScreenConstant.SHOPPING, ShoppingScreen);

const registerScreens = appStore => {
  Screens.forEach((ScreenComponent, key) => {
    Navigation.registerComponent(
      key,
      () => props => (
        <Provider store={appStore}>
          <ScreenComponent {...props} />
        </Provider>
      ),
      () => ScreenComponent,
    );
  });
};

export default registerScreens;
