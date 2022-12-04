import RequestAPI from '../common/RequestAPI';

// TODO: simulate success, error cases
const getProducts = async () => await RequestAPI.get('products');

export default {
  getProducts,
};
