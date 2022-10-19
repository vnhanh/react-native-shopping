import React from 'react';
import {Text, TextInput, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {style} from '../style';

const LoginInput = props => {
  const {onChangeUserName, onChangePassword, usernameError, passwordError} =
    props;

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

    return <Text style={style.validationMessage}>{usernameError}</Text>;
  };

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
      {renderUserNameError()}
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
