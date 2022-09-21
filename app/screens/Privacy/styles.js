import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { scale } from '../../utils/scaling';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: COLOR_WHITE
  },
  text: {
    flex: 1,
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: COLOR_BLACK,
    justifyContent: 'flex-start',
    marginTop: scale(36),
    marginHorizontal: scale(38)
  },
  textDesc: {
    fontSize: 12,
    marginLeft: scale(38),
    marginRight: scale(33),
    marginBottom: scale(36)
  }
});
