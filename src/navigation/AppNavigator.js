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

AppNavigator.openRegisterScreen = componentId => {
  Navigation.push(componentId, {
    component: {
      name: ScreenConstant.REGISTER,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  });
};

AppNavigator.openShoppingScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ScreenConstant.SHOPPING,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export default AppNavigator;
