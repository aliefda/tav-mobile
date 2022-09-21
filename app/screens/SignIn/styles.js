/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_HEADLINE6_PRIMARY,
  FONT_SUBTITLE2_PRIMARY,
  FONT_BODY2_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_BUTTON_PRIMARY
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: { width: scale(150), height: scale(150) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  appTitle: { ...FONT_HEADLINE6_PRIMARY, color: COLOR_BLACK },
  appDesc: { ...FONT_SUBTITLE2_PRIMARY, color: COLOR_BASE_PRIMARY_MAIN, marginBottom: METRICS.doubleSection },
  forgetPass: {
    marginLeft: METRICS.fPass,
    marginRight: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection,
    color: COLOR_BASE_PRIMARY_MAIN,
    ...FONT_CAPTION_PRIMARY
  },
  inputContainer: {
    width: scale(300),
    height: scale(40)
  },
  inputText: {
    margin: scale(10),
    width: scale(300),
    height: scale(40),
    borderRadius: scale(5),
    borderColor: '#c4c4c4',
    borderWidth: scale(1)
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  input: { marginLeft: scale(30), ...FONT_BODY2_PRIMARY },
  inputLogo: { width: scale(20), height: scale(20), position: 'absolute', margin: scale(8) },
  showPassLogo: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    marginLeft: METRICS.marginHide,
    top: METRICS.topHide
  },
  margin: { marginBottom: METRICS.baseMargin },
  outlined: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_BASE_PRIMARY_MAIN,
    borderWidth: 2,
    ...FONT_BUTTON_PRIMARY
  },
  outlinedText: { color: COLOR_BASE_PRIMARY_MAIN }
});

export default styles;
