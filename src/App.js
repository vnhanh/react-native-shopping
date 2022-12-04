import {Navigation} from 'react-native-navigation';

import registerScreens from './scenes';
import configureStore from './AppStore';
import Screens from './common/constants/Screens';
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
                name: Screens.SHOPPING,
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
