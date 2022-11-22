import {StyleSheet} from 'react-native';

import Colors from '../../../constants/Colors';

const style = StyleSheet.create({
  root: {
    flexDirection: 'column',
    marginTop: 48,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    minHeight: 30,
    width: 'auto',
    marginHorizontal: 16,
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  number: {
    color: Colors.gray600,
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 12,
    marginBottom: 4,
  },
  space: {
    flex: 1,
  },
  seeAllButton: {
    alignSelf: 'flex-end',
  },
  seeAllText: {
    color: Colors.airBlue,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  // content
  list: {
    marginTop: 12,
    marginLeft: 16,
  },
  frame: {
    width: '45%',
    height: 100,
    backgroundColor: Colors.gray200,
    borderRadius: 4,
    marginTop: 8,
  },
  image: {
    height: 100,
  },
});

export default style;
