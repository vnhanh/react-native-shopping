import {StyleSheet} from 'react-native';

import Colors from '../../../common/constants/Colors';

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
  item: {
    width: 170,
    marginRight: 16,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 8,
  },
  discountBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 18,
    backgroundColor: Colors.green800,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  discountValue: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.white,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 4,
  },
  available: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 16,
    marginTop: 4,
  },
  availableCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  availableBgColor: {
    backgroundColor: Colors.green800,
  },
  unavailableBgColor: {
    backgroundColor: Colors.errorDark,
  },
  availableText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  availableTextColor: {
    color: Colors.green800,
  },
  unavailableTextColor: {
    color: Colors.errorDark,
  },
  price: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.gray600,
    marginTop: 4,
  },
});

export default style;
