import React, {useRef} from 'react';
import {
  Text,
  ActivityIndicator,
  Animated,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Colors from '../../../../constants/Colors';

import {style, HEIGHT_BUTTON_LOGIN} from '../style';

const LoginButton = props => {
  const {
    isLoginDisabled,
    onSubmit,
    isAnimLoading,
    isAnimEndLoading,
    onEndAnimLoading,
    style: outStyle,
  } = props;

  const screenWidth = Dimensions.get('window').width;
  const AnimatedHighlight =
    Animated.createAnimatedComponent(TouchableHighlight);

  // animation durations
  const ANIM_DURATION_TO_CIRCLE_LOADING = 300;
  const ANIM_DURATION_RESTORE_TO_BUTTON = 150;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const state = useRef(0);

  console.log(`Alan - LoginButton - isAnimLoading: ${isAnimLoading}`);
  console.log(`Alan - LoginButton - isAnimEndLoading: ${isAnimEndLoading}`);
  console.log(`Alan - LoginButton - fadeAnim._value: ${fadeAnim._value}`);
  console.log(`Alan - LoginButton - state: ${state.current}`);

  if (isAnimLoading && state.current === 0) {
    console.log('Alan - LoginButton - start anim');
    state.current = 1;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: ANIM_DURATION_TO_CIRCLE_LOADING,
      useNativeDriver: false,
    }).start();
  } else if (isAnimEndLoading && state.current === 1) {
    state.current = 0;
    console.log(
      `Alan - LoginButton - start ending anim loading: ${isAnimEndLoading}`,
    );
    if (fadeAnim._value < 1) {
      Animated.timing(fadeAnim).stop();
    }
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: ANIM_DURATION_RESTORE_TO_BUTTON,
      useNativeDriver: false,
    }).start(() => {
      console.log(
        `Alan - LoginButton - end anim show loading - anim value: ${fadeAnim._value}`,
      );
      onEndAnimLoading();
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
        {
          width: animWidth,
          borderRadius: animRadius,
        },
        ...outStyle,
      ]}>
      {fadeAnim._value > 0 ? (
        <ActivityIndicator size="large" color={Colors.white} />
      ) : (
        <Text style={[style.loginText]}>LOG IN</Text>
      )}
    </AnimatedHighlight>
  );
};

export default LoginButton;
