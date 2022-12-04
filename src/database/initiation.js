import Realm from 'realm';

import ProductSchema from './objects/product';
import mockProducts from './mock/products';

const initRealm = async () => {
  const realm = await Realm.open({
    path: 'shoppingRealm',
    schema: [ProductSchema],
    schemaVersion: 1,
  });

  realm.write(() => {
    mockProducts.forEach((item, index) => {
      const productObject = realm.objectForPrimaryKey('Product', item.name);

      if (!productObject) {
        realm.create('Product', {
          name: item.name,
          discount: item.discount || 0,
          available: item.available || false,
          imgUrl: item.imgUrl || '',
        });
      }
    });
  });
};

export default initRealm;
