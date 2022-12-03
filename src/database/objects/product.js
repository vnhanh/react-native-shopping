const ProductSchema = {
  name: 'Product', // type
  properties: {
    name: 'string',
    discount: 'double?',
    available: 'bool?',
    imgUrl: 'string',
  },
  primaryKey: 'name',
};

export default ProductSchema;
