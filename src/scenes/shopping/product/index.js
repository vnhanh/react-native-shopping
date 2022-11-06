import React from 'react';
import {View, Text} from 'react-native';

const Product = props => {
  const {name, price, discount, images} = props;

  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;
