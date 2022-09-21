/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_BASE_PINK, COLOR_TRANSPARENT, COLOR_WHITE, COLOR_BLACK, COLOR_GREY } from '../../styles';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  Main: {
    backgroundColor: COLOR_WHITE,
    height: '100%'
  },
  containerview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: metrics.extraSection
  },
  otpText: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(9),
    borderColor: COLOR_TRANSPARENT,
    borderWidth: scale(1),
    marginStart: metrics.baseMargin,
    color: COLOR_WHITE,
    fontSize: scale(24),
    marginEnd: metrics.baseMargin,
    paddingLeft: metrics.doubleBaseMargin,
    paddingRight: metrics.doubleBaseMargin,
    backgroundColor: COLOR_BASE_PINK
  },
  otpImage: {
    width: scale(227),
    height: scale(178)
  },
  imageOtpContainer: {
    alignItems: 'center',
    marginTop: scale(60)
  },
  viewOtpTitle: {
    marginTop: metrics.doubleSection,
    marginBottom: metrics.doubleSection
  },
  textOtpTitle: {
    fontSize: 22,
    alignSelf: 'center',
    color: COLOR_BLACK
  },
  textOtpDesc: {
    fontSize: 17,
    alignSelf: 'center',
    color: COLOR_GREY,
    marginTop: 5
  },
  ViewButton: {
    alignSelf: 'center'
  }
});

export default styles;
