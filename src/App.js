import {Navigation} from 'react-native-navigation';

import registerScreens from './scenes';
import configureStore from './AppStore';
import ScreenConstants from './constants/ScreenConstants';
import initRealm from './database/initiation';

Navigation.events().registerAppLaunchedListener(async () => {
  configureStore(async store => {
    registerScreens(store);
    initRealm();

    // start app
    await Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: ScreenConstants.SHOPPING,
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
