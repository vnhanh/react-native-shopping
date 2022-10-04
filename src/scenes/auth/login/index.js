import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import VectorImage from 'react-native-vector-image';
import style from './style';
import Colors from '../../../constants/Colors';
import {validateUserName, validatePassword} from '../validation';
import { loginAction } from "../../../network/login/LoginAction";
import { useDispatch, useSelector } from "react-redux";

function LoginScene() {
  const dispatch = useDispatch();
  const [username, setUserName] = useState(null);
  const [usernameError, setUserNameError] = useState(null);
  useEffect(() => {
    if (username === null) {
      return;
    }

    const usernameValidation = validateUserName(username);

    setUserNameError(usernameValidation);
    setIsInputValidated(usernameValidation === '' && passwordError === '');
    // eslint-disable-next-line
  }, [username]);

  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  useEffect(() => {
    if (password === null) {
      return;
    }
    const passwordValidation = validatePassword(password);

    setPasswordError(passwordValidation);
    setIsInputValidated(usernameError === '' && passwordValidation === '');
    // eslint-disable-next-line
  }, [password]);

  const [isInputValidated, setIsInputValidated] = useState(false);

  const [loginFailed, setLoginFailed] = useState(null);

  const onSubmit = () => {
    dispatch(loginAction({username, password}));
  }

  const renderTitle = () => (
    <View>
      <VectorImage
        width={240}
        height={160}
        source={require('../../../assets/images/online-shopping.svg')}
        style={style.logo}
      />
      <Text style={style.title}>Login</Text>
    </View>
  );

  const renderInputGroup = () => (
    <View>
      <View style={style.inputLine}>
        <MaterialIcons
          name="alternate-email"
          size={20}
          color="#666"
          style={style.icon}
        />
        <TextInput
          placeholder="Email"
          onChangeText={input => setUserName(input)}
          style={style.textInput}
        />
      </View>
      {renderUserNameError()}
      <View style={style.inputLine}>
        <MaterialIcons name="lock" size={20} color="#666" style={style.icon} />
        <TextInput
          placeholder="Password"
          onChangeText={input => setPassword(input)}
          secureTextEntry={true}
          style={style.textInput}
        />
        <Text style={style.forgotButton}>Forgot ?</Text>
      </View>
      {renderPasswordError()}
    </View>
  );

  const renderUserNameError = () => {
    if (!usernameError) {
      return null;
    }

    return <Text style={style.validationMessage}>{usernameError}</Text>;
  };

  const renderPasswordError = () => {
    if (!passwordError) {
      return null;
    }

    return <Text style={style.validationMessage}>{passwordError}</Text>;
  };

  const renderLoginButton = () => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={Colors.purple}
      disabled={!isInputValidated}
      onPress={onSubmit}
      style={[
        style.loginButton,
        isInputValidated === true
          ? style.loginButtonEnable
          : style.loginButtonDisable,
      ]}>
      <Text style={style.loginText}>LOG IN</Text>
    </TouchableHighlight>
  );

  const renderLoginFailed = () => (
    <Text style={style.loginFailed}>
      {loginFailed === true ? 'Login failed' : ''}
    </Text>
  );

  const renderSocialLogin = () => (
    <View style={style.socialLoginLine}>
      <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
        <VectorImage
          width={24}
          height={24}
          source={require('../../../assets/images/google.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
        <VectorImage
          width={24}
          height={24}
          source={require('../../../assets/images/facebook.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={style.socialLoginButton}>
        <VectorImage
          width={24}
          height={24}
          source={require('../../../assets/images/twitter.svg')}
        />
      </TouchableOpacity>
    </View>
  );

  const renderRegisterNavigation = () => (
    <View style={style.registerComponent}>
      <Text style={style.registerSuggestion}>Don't have an account yet ?</Text>
      <Text style={style.registerNow}>Register now</Text>
    </View>
  );

  // TODO: separate this selector to another js file
  const result = useSelector(state => state.loginReducer.result);

  return (
    <View style={style.root}>
      {renderTitle()}
      {renderInputGroup()}
      {result && (<Text>Login success</Text>)}
      {result === false && (<Text>Login failed</Text>)}
      {renderLoginButton()}
      {renderLoginFailed()}
      {renderSocialLogin()}
      {renderRegisterNavigation()}
    </View>
  );
}

export default LoginScene;
