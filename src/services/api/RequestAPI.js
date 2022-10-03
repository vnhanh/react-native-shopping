import axios from "axios";
import APIConstants from "./APIConstants";

const baseUrl = 'http://192.168.1.4:8080/login';

const defaultHeader = {
  'Accept': '*/*',
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  timeout: APIConstants.TimeoutDefault,
  headers: defaultHeader,
  validateStatus(status) {
    return status === 200;
  }
});

axiosInstance.interceptors.response.use(
  originalRes => {
    console.log(`interceptors - response: ${JSON.stringify(originalRes)}`);
    return originalRes;
  }, originalError => {
    console.log(`interceptors - response error: ${JSON.stringify(originalError)}`);
    return originalError;
  }
)

const RequestAPI = {
  post(authData) {
    return axiosInstance.post(baseUrl, authData).then(response => response.data).catch(err  => {
      console.log(`LoginApi - error: ${JSON.stringify(err)}`);
    });
  }
}

export default RequestAPI;
