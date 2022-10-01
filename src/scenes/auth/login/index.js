import React, {useState, useEffect} from 'react';
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
import Colors from '../../../constants/Colors';
import {validateUserName, validatePassword} from '../validation';

function LoginScene() {
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

  const [loginAction, setLoginAction] = useState(null);
  useEffect(() => {
    if (loginAction !== null) {
      console.log('Alan - fetching api...');
      fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then(r => {
          return r.json();
        })
        .then(res => {
          // TODO: navigate to Home Screen
        })
        .catch(e => {
          console.log(e);
          setLoginFailed(true);
        });
    }

    return () => {
      console.log('useEffect - loginAction - do nothing');
    };
    // suppress eslint because we only need observe changing from stateloginAction
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginAction]);

  const [loginFailed, setLoginFailed] = useState(null);

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
      style={[
        style.loginButton,
        isInputValidated === true
          ? style.loginButtonEnable
          : style.loginButtonDisable,
      ]}
      activeOpacity={0.6}
      underlayColor={Colors.purple}
      onPress={() => {
        setLoginAction(loginAction === null ? true: !loginAction);
      }}>
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

  return (
    <SafeAreaView style={style.root}>
      {renderTitle()}
      {renderInputGroup()}
      {renderLoginButton()}
      {renderLoginFailed()}
      {renderSocialLogin()}
      {renderRegisterNavigation()}
    </SafeAreaView>
  );
}

export default LoginScene;
