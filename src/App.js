import {Navigation} from 'react-native-navigation';
import registerScreens from './scenes';
import configureStore from './AppStore';
import ScreenConstants from './constants/ScreenConstants';

Navigation.events().registerAppLaunchedListener(async () => {
  configureStore(async store => {
    registerScreens(store);

    // start app
    await Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: ScreenConstants.LOGIN,
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
  });
});
