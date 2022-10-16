import {Navigation} from 'react-native-navigation';

import ScreenConstant from '../constants/ScreenConstants';

const AppNavigator = () => {};

AppNavigator.openErrorScreen = componentId => {
  Navigation.push(componentId, {
    component: {
      name: ScreenConstant.ERROR_FULL,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  });
};

export default AppNavigator;
