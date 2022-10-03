import { LOGIN_REQUEST} from "./LoginTypes";

export const loginAction = authData => {
  return {
    type: LOGIN_REQUEST,
    ...authData
  };
}
