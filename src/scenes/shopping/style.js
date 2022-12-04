import {StyleSheet} from 'react-native';

import Colors from '../../common/constants/Colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    color: Colors.black,
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 24,
    marginTop: 36,
    marginHorizontal: 16,
  },
  description: {
    color: Colors.gray600,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
    marginHorizontal: 16,
  },
});

export default styles;
