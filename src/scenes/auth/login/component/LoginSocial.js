import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import VectorImage from 'react-native-vector-image';

import {style} from '../style';

const LoginSocial = () => {
  return (
    <View style={style.socialLoginLine}>
      <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
        <VectorImage
          width={24}
          height={24}
          source={require('../../../../assets/images/google.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
        <VectorImage
          width={24}
          height={24}
          source={require('../../../../assets/images/facebook.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
        <VectorImage
          width={24}
          height={24}
          source={require('../../../../assets/images/twitter.svg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LoginSocial;
