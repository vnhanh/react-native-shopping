import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import VectorImage from 'react-native-vector-image';
import style from './style';
import Colors from '../../constants/Colors';

const LoginScene = () => {
  return (
    <SafeAreaView style={style.root}>
      <VectorImage
        width={240}
        height={160}
        source={require('../../assets/images/online-shopping.svg')}
        style={style.logo}
      />
      <Text style={style.title}>Login</Text>
      <View style={style.inputLine}>
        <MaterialIcons
          name="alternate-email"
          size={20}
          color="#666"
          style={style.icon}
        />
        <TextInput placeholder="Email" style={style.textInput} />
      </View>
      <View style={style.inputLine}>
        <MaterialIcons name="lock" size={20} color="#666" style={style.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={style.textInput}
        />
        <Text style={style.forgotButton}>Forgot ?</Text>
      </View>
      <TouchableHighlight
        style={style.loginButton}
        activeOpacity={0.6}
        underlayColor={Colors.purple}
        onPress={() => {
          alert('Hello');
        }}>
        <Text style={style.loginText}>LOG IN</Text>
      </TouchableHighlight>
      <View style={style.socialLoginLine}>
        <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
          <VectorImage
            width={24}
            height={24}
            source={require('../../assets/images/google.svg')}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
          <VectorImage
            width={24}
            height={24}
            source={require('../../assets/images/facebook.svg')}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
          <VectorImage
            width={24}
            height={24}
            source={require('../../assets/images/twitter.svg')}
          />
        </TouchableOpacity>
      </View>
      <View style={style.registerLine}>
        <Text style={style.registerSuggestion}>
          Don't have an account yet ?
        </Text>
        <Text style={style.registerNow}>Register now</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScene;
