import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'whitesmoke',
  },
  logo: {
    transform: [{rotate: '-2deg'}],
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 48,
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
  forgotButton: {
    color: Colors.violet,
    fontWeight: '700',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: Colors.violet,
    marginTop: 32,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
  },
  loginText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  socialLoginLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 24,
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
  registerLine: {
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
