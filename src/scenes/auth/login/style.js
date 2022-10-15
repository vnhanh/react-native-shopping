import {Platform, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.gray100,
  },
  logo: {
    transform: [{rotate: '-2deg'}],
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: Platform.OS === 'android' ? 32 : 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: Platform.OS === 'android' ? 30 : 40,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  inputLine: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 16,
    marginTop: 24,
    paddingBottom: 8,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
  },
  validationMessage: {
    color: Colors.red,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 16,
    marginTop: 8,
  },
  forgotButton: {
    color: Colors.violet,
    fontWeight: '700',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 32,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
  },
  loginButtonEnable: {
    backgroundColor: Colors.violet,
  },
  loginButtonDisable: {
    backgroundColor: Colors.disabled,
  },
  loginText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  loginFailed: {
    alignSelf: 'center',
    marginTop: 16,
    color: Colors.error,
  },
  socialLoginLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
  socialLoginButton: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 16,
    marginHorizontal: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  registerComponent: {
    marginHorizontal: 16,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerSuggestion: {
    color: '#333',
    fontWeight: '500',
    fontSize: 14,
  },
  registerNow: {
    color: Colors.violet,
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 4,
  },
});
