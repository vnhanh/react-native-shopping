import {Navigation} from 'react-native-navigation';

import LoginScreen from './scenes/login';
import ShoppingScreen from './scenes/shopping';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Shopping', () => ShoppingScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  console.log('Launched app');

  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
            },
          },
        ],
      },
    },
  });
});
