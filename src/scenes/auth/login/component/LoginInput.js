import React, {useRef, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome';

import {style} from '../style';

const LoginInput = props => {
  const {
    onChangeUserName,
    onChangePassword,
    validationError,
    disabled,
    onSubmitLogin,
  } = props;
  const refPassword = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const usernameError = validationError?.usernameError;
  const passwordError = validationError?.passwordError;

  const renderUsernameError = () =>
    usernameError ? (
      <Text style={style.validationMessage}>{usernameError}</Text>
    ) : null;

  const renderPasswordError = () =>
    passwordError ? (
      <Text style={style.validationMessage}>{passwordError}</Text>
    ) : null;

  return (
    <View>
      <View style={style.inputLine}>
        <MaterialIcons
          name="alternate-email"
          size={20}
          color="#666"
          style={style.icon}
        />
        <TextInput
          placeholder="username"
          onChangeText={onChangeUserName}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            refPassword.current?.focus();
          }}
          editable={!disabled}
          style={style.textInput}
        />
      </View>
      {renderUsernameError()}
      <View style={style.inputLine}>
        <MaterialIcons name="lock" size={20} color="#666" style={style.icon} />
        <TextInput
          ref={refPassword}
          placeholder="Password"
          onChangeText={onChangePassword}
          secureTextEntry={!showPassword}
          editable={!disabled}
          onSubmitEditing={onSubmitLogin}
          style={style.textInput}
        />
        <Icons
          name={showPassword ? 'eye' : 'eye-slash'}
          size={20}
          color="#666"
          onPress={() => {
            if (disabled) {
              return;
            }
            setShowPassword(!showPassword);
          }}
        />
      </View>
      {renderPasswordError()}
    </View>
  );
};

export default LoginInput;
