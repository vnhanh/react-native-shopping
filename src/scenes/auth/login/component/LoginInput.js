import React from 'react';
import {Text, TextInput, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {style} from '../style';

const LoginInput = props => {
  const {onChangeUserName, onChangePassword, validationError} = props;

  const emailError = validationError?.emailError;
  const passwordError = validationError?.passwordError;

  const renderEmailError = () =>
    emailError ? (
      <Text style={style.validationMessage}>{emailError}</Text>
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
          placeholder="Email"
          onChangeText={onChangeUserName}
          style={style.textInput}
        />
      </View>
      {renderEmailError()}
      <View style={style.inputLine}>
        <MaterialIcons name="lock" size={20} color="#666" style={style.icon} />
        <TextInput
          placeholder="Password"
          onChangeText={onChangePassword}
          secureTextEntry={true}
          style={style.textInput}
        />
        <Text style={style.forgotButton}>Forgot ?</Text>
      </View>
      {renderPasswordError()}
    </View>
  );
};

export default LoginInput;
