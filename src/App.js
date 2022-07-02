import React  from 'react';
import {AppRegistry, View, Text} from "react-native";
import {name as appName} from "../app.json";

const App = () => {
  return (
    <View>
      <Text>Hello world !</Text>
    </View>
  );
};

AppRegistry.registerComponent(appName, () => App);
