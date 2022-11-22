import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './style';

import Portlet from './portlet';

const ShoppingScreen = () => {
  const onPressSeeAllButton = () => {
    console.log('you just pressed See All button');
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Hi-Fi Shop & Service</Text>
      <Text style={styles.description}>
        Audio shop on Rustaveli Ave 57. This shop offers both products and
        services
      </Text>

      <Portlet onPressSeeAllButton={onPressSeeAllButton} styles={styles} />
    </SafeAreaView>
  );
};

export default ShoppingScreen;
