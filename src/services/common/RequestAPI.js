import axios from 'axios';
import APIConstants from './APIConstants';
import HttpStatusConstants from './HttpStatusConstants';

// set exact IP address to connect to server on Android
const baseUrl = 'http://192.168.1.3:8080/';

const defaultHeader = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  timeout: APIConstants.TimeoutDefault,
  headers: defaultHeader,
  validateStatus(status) {
    return status === HttpStatusConstants.Success;
  },
});

axiosInstance.interceptors.response.use(
  originalRes => originalRes,
  async originalError => {
    console.log(
      `interceptors - response error: ${JSON.stringify(originalError)}`,
    );
    return Promise.reject(originalError);
  },
);

const RequestAPI = {
  get: path =>
    axiosInstance.get(baseUrl + path).then(response => response.data),
  // TODO: should change the param name authData to data for common post apis
  post(path, authData) {
    return axiosInstance
      .post(baseUrl + path, authData)
      .then(response => response.data);
  },
};

export default RequestAPI;
