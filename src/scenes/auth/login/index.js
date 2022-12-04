import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Animated,
  Dimensions,
} from 'react-native';

import VectorImage from 'react-native-vector-image';
import {useDispatch, useSelector} from 'react-redux';

import AppNavigator from '../../../navigation/AppNavigator';
import {validateUsername, validatePassword} from '../validation';
import {loginAction} from '../../../services/login/LoginAction';
import {style, HEIGHT_BUTTON_LOGIN} from './style';
import LoginInput from './component/LoginInput';
import LoginSocial from './component/LoginSocial';
import Colors from '../../../common/constants/Colors';

function LoginScreen(props) {
  const dispatch = useDispatch();
  const {componentId} = props;

  // animation durations
  const ANIM_DURATION_TO_CIRCLE_LOADING = 300;
  const ANIM_DURATION_RESTORE_TO_BUTTON = 150;
  // animation for Login Button
  const screenWidth = Dimensions.get('window').width;
  const AnimatedHighlight =
    Animated.createAnimatedComponent(TouchableHighlight);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animState = useRef(0);

  const [loginInput, setLoginInput] = useState({username: '', password: ''});
  const [validationError, setValidationError] = useState(null);

  const onChangeUsername = username => {
    const usernameError = validateUsername(username);

    setValidationError({
      ...validationError,
      usernameError,
    });

    setLoginInput({
      ...loginInput,
      username: username ? username : '',
    });
  };

  const onChangePassword = password => {
    const passwordValError = validatePassword(password);

    setValidationError({
      ...validationError,
      passwordError: passwordValError,
    });

    setLoginInput({
      ...loginInput,
      password: password ? password : '',
    });
  };

  /**
   * Requesting API
   */
  const isLoadingAPI = useSelector(state => state.loginReducer.isLoading);
  const loginResult = useSelector(state => state.loginReducer.result);

  const onPressLoginButton = () => {
    const validation = isFailedValidation();

    if (validation) {
      return null;
    }
    dispatch(loginAction(loginInput));
  };

  const isFailedValidation = () =>
    validationError === null ||
    validationError.usernameError !== '' ||
    validationError.passwordError !== '';

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
      forwardRef
      onChangeUserName={input => onChangeUsername(input)}
      onChangePassword={input => onChangePassword(input)}
      validationError={validationError}
      disabled={isLoadingAPI}
      onSubmitLogin={onPressLoginButton}
    />
  );

  const renderForgotPassword = () => (
    <View>
      <Text style={style.forgotButton}>Forgot ?</Text>
    </View>
  );

  const renderLoginButton = () => {
    const validation = isFailedValidation();

    if (isLoadingAPI) {
      animState.current = 1;
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: ANIM_DURATION_TO_CIRCLE_LOADING,
        useNativeDriver: false,
      }).start();
    } else if (!isLoadingAPI && animState.current === 1) {
      animState.current = 2;
      if (fadeAnim._value < 1) {
        Animated.timing(fadeAnim).stop();
      }
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: ANIM_DURATION_RESTORE_TO_BUTTON,
        useNativeDriver: false,
      }).start(() => {
        animState.current = 0;
        if (loginResult === false) {
          setTimeout(() => {
            AppNavigator.openErrorScreen(props.componentId);
          }, 300);
        } else {
          setTimeout(() => {
            AppNavigator.openShoppingScreen();
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
        disabled={validation || isLoadingAPI}
        onPress={onPressLoginButton}
        style={[
          style.loginButton,
          {
            width: animWidth,
            borderRadius: animRadius,
          },
          validation ? style.loginButtonDisable : style.loginButtonEnable,
        ]}>
        {isLoadingAPI ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <Text style={[style.loginText]}>LOG IN</Text>
        )}
      </AnimatedHighlight>
    );
  };

  const renderSocialLogin = () => <LoginSocial />;

  const renderRegisterNavigation = () => (
    <View style={style.registerComponent}>
      <Text style={style.registerSuggestion}>Don't have an account yet ?</Text>
      <Text
        style={style.registerNow}
        onPress={() => {
          AppNavigator.openRegisterScreen(componentId);
        }}>
        Register now
      </Text>
    </View>
  );

  return (
    <View style={style.root}>
      {renderTitle()}
      {renderInputGroup()}
      {renderForgotPassword()}
      {renderLoginButton()}
      {renderSocialLogin()}
      {renderRegisterNavigation()}
    </View>
  );
}

export default LoginScreen;
