import {StyleSheet, Dimensions, Platform} from 'react-native';

import Colors from '../../constants/Colors';

const padding = 24;
const width = Dimensions.get('window').width - padding * 2;
const height = (width * 530) / 430;

export default StyleSheet.create({
  icon: {
    marginTop: 24,
    width: width,
    height: height,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
    color: Colors.error,
    marginTop: 32,
    alignSelf: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray500,
    marginTop: 12,
    alignSelf: 'center',
  },
  tryAgainBtn: {
    backgroundColor: Colors.errorDark,
    borderWidth: 1,
    borderColor: Colors.errorDark,
    borderRadius: 8,
    shadowColor: Platform.OS === 'android' ? Colors.black : Colors.gray600,
    shadowOpacity: 0.5, // iOS
    shadowRadius: 8, // iOS
    shadowOffset: {
      width: 0,
      height: 4,
    }, // iOS
    elevation: 8, // for android < 9
    marginTop: 24,
    marginHorizontal: 24,
    paddingVertical: 16,
  },
  tryAgainText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '600',
    fontSize: 18,
  },
});
