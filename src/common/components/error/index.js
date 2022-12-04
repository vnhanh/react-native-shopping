import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Navigation} from 'react-native-navigation';
import VectorImage from 'react-native-vector-image';

import Colors from '../../constants/Colors';
import styles from './style';

const ErrorScene = props => {
  const onPressTryAgain = async () => {
    const popResult = await Navigation.pop(props.componentId);

    console.log(`Alan - onPressTryAgain() - popResult: ${popResult}`);
  };

  return (
    <View>
      <VectorImage
        source={require('../../../common/assets/images/error.svg')}
        style={styles.icon}
      />
      <Text style={styles.title}>Login Failed</Text>
      <Text style={styles.description}>
        Your username or email is incorrect
      </Text>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={Colors.errorDark}
        onPress={onPressTryAgain}
        style={styles.tryAgainBtn}>
        <Text style={styles.tryAgainText}>Try again</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ErrorScene;
