import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    // TODO: can not use Colors.black
    color: '#000000',
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 24,
    marginTop: 36,
    marginHorizontal: 16,
  },
  description: {
    color: '#6C757D',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
    marginHorizontal: 16,
  },
  portlet: {
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
  sectionTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  sectionNumber: {
    color: '#6C757D',
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 12,
    marginBottom: 4,
  },
  sectionSpace: {
    flex: 1,
  },
  seeAllButton: {
    alignSelf: 'flex-end',
  },
  seeAllText: {
    color: '#5D8AA8',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
});

export default styles;
