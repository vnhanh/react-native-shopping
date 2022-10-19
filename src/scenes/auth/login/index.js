import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Animated,
  Dimensions,
} from 'react-native';

import VectorImage from 'react-native-vector-image';
import Colors from '../../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import AppNavigator from '../../../navigation/AppNavigator';

import {validateUserName, validatePassword} from '../validation';
import {loginAction} from '../../../network/login/LoginAction';
import {style, HEIGHT_BUTTON_LOGIN} from './style';
import LoginInput from './component/LoginInput';
import LoginSocial from './component/LoginSocial';

function LoginScene(props) {
  const dispatch = useDispatch();
  const screenWidth = Dimensions.get('window').width;
  const AnimatedHighlight =
    Animated.createAnimatedComponent(TouchableHighlight);

  const [username, setUserName] = useState(null);
  const [usernameError, setUserNameError] = useState(null);
  useEffect(() => {
    if (username === null) {
      return;
    }

    const usernameValidation = validateUserName(username);

    setUserNameError(usernameValidation);
    setIsInputValidated(usernameValidation === '' && passwordError === '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  const [isInputValidated, setIsInputValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  const isLoadingAPI = useSelector(state => state.loginReducer.isLoading);

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
    <LoginInput
      onChangeUserName={input => setUserName(input)}
      onChangePassword={input => setPassword(input)}
      usernameError={usernameError}
      passwordError={passwordError}
    />
  );

  const onSubmit = () => {
    dispatch(loginAction({username, password}));
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const loginResult = useSelector(state => state.loginReducer.result);
  // animation states
  // const ANIM_NONE = 0;
  // const ANIM_TO_CIRCLE_LOADING = 1;
  // const ANIM_RESTORE_TO_BUTTON = 2;
  // const ANIM_IN_CIRCLE_LOADING = 3;
  // var animState = ANIM_NONE;
  // animation durations
  const ANIM_DURATION_TO_CIRCLE_LOADING = 1000;
  const ANIM_DURATION_RESTORE_TO_BUTTON = 1000;
  // var isJustRequestLogin = false;

  const renderLoginButton = () => {
    console.log(`Alan - renderLoginButton() - fadeAnim: ${fadeAnim._value}`);
    console.log(`Alan - renderLoginButton() - loginResult: ${loginResult}`);
    // console.log(`Alan - renderLoginButton() - animState: ${animState}`);
    console.log(`Alan - renderLoginButton() - isLoading: ${isLoading}`);
    console.log(`Alan - renderLoginButton() - isLoadingAPI: ${isLoadingAPI}`);

    if (isLoadingAPI === true && loginResult === null) {
      // animState = ANIM_TO_CIRCLE_LOADING;
      console.log('Alan - renderLoginButton() - case isLoadingAPI === true}');

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: ANIM_DURATION_TO_CIRCLE_LOADING,
        useNativeDriver: false,
      }).start(() => {
        // animState = ANIM_IN_CIRCLE_LOADING;
        console.log('Alan - complete animation transform to circle loading');
      });
    } else if (isLoadingAPI === false && isLoading) {
      // animState = ANIM_RESTORE_TO_BUTTON;
      console.log(
        `Alan - renderLoginButton() - case isLoadingAPI === false - isLoading: ${isLoading}`,
      );

      if (fadeAnim._value > 0) {
        Animated.timing(fadeAnim).stop();
      }
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: ANIM_DURATION_RESTORE_TO_BUTTON,
        useNativeDriver: false,
      }).start(() => {
        // animState = ANIM_NONE;
        setIsLoading(false);
        console.log(
          `Alan - complete animation restore transform - isLoading: ${isLoading}`,
        );
        if (loginResult === false) {
          console.log('Alan - will open failure screen');
          setTimeout(() => {
            AppNavigator.openErrorScreen(props.componentId);
          }, 300);
        }
      });
    }

    const animWidth = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [screenWidth - 32, HEIGHT_BUTTON_LOGIN],
    });
    const animRadius = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [8, 60],
    });

    return (
      <AnimatedHighlight
        activeOpacity={0.6}
        underlayColor={Colors.purple}
        disabled={isLoginDisabled}
        onPress={onSubmit}
        style={[
          style.loginButton,
          isInputValidated === true
            ? style.loginButtonEnable
            : style.loginButtonDisable,
          {
            width: animWidth,
            borderRadius: animRadius,
          },
        ]}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <Text style={[style.loginText]}>LOG IN</Text>
        )}
      </AnimatedHighlight>
    );
  };

  useEffect(() => {
    setIsLoginDisabled(isLoading || !isInputValidated);
  }, [isLoading, isInputValidated]);

  useEffect(() => {
    console.log(`Alan - isLoadingAPI changed to ${isLoadingAPI}`);
    if (isLoadingAPI) {
      setIsLoading(true);
    }
  }, [isLoadingAPI]);

  const renderSocialLogin = () => <LoginSocial />;

  const renderRegisterNavigation = () => (
    <View style={style.registerComponent}>
      <Text style={style.registerSuggestion}>Don't have an account yet ?</Text>
      <Text style={style.registerNow}>Register now</Text>
    </View>
  );

  return (
    <View style={style.root}>
      {renderTitle()}
      {renderInputGroup()}
      {renderLoginButton()}
      {renderSocialLogin()}
      {renderRegisterNavigation()}
    </View>
  );
}

export default LoginScene;
