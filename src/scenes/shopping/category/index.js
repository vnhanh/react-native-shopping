import React from 'react';
import {View, Text} from 'react-native';
import Product from '../product';

const Category = props => {
  const {title, prouctItems} = props;

  return (
    <View>
      <Text>Category</Text>
    </View>
  );
};

export default Category;
