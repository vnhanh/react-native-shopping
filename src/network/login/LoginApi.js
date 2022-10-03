import RequestAPI from "../../services/api/RequestAPI";

const LoginApi = {
  async login(authData) {
    return RequestAPI.post(authData);
  }
}

export default LoginApi;
