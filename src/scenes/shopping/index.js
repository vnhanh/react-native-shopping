import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './style';

import Portlet from './portlet';
import {useDispatch, useSelector} from 'react-redux';
import ProductActions from '../../services/product/ProductActions';

function ShoppingScreen() {
  const dispatch = useDispatch();
  const isLoadingProducts = useSelector(
    state => state.productReducer.isLoading,
  );
  const products = useSelector(state => state.productReducer.products);
  const onPressSeeAllButton = () => {
    console.log('you just pressed See All button');
  };

  useEffect(() => {
    console.log('Alan - ShoppingScreen - getProducts - useEffect');
    dispatch(ProductActions.getProducts());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Hi-Fi Shop & Service</Text>
      <Text style={styles.description}>
        Audio shop on Rustaveli Ave 57. This shop offers both products and
        services
      </Text>

      <Portlet
        list={products}
        onPressSeeAllButton={onPressSeeAllButton}
        styles={styles}
      />
    </SafeAreaView>
  );
}

export default ShoppingScreen;

// const mapDispatchToProps = dispatch => ({
//   loadProducts: () => dispatch(getProducts),
// });

// export default connect(null, mapDispatchToProps)(ShoppingScreen);
