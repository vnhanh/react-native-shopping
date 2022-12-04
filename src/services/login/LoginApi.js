import RequestAPI from '../common/RequestAPI';

const LoginApi = {
  async login(authData) {
    const path = 'login';

    return RequestAPI.post(path, authData);
  },
};

export default LoginApi;
