import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY, COLOR_PINK } from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.4,
    shadowRadius: 7.14,

    elevation: 6,
    height: Platform.OS === 'ios' ? 44 : 56
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftRightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_PINK
  }
});
