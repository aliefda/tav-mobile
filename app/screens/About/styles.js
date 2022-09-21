import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_RED, COLOR_WHITE } from '../../styles';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: {
    width: scale(100),
    height: scale(100)
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: metrics.baseMargin
  },
  appTitle: {
    fontSize: 22,
    fontFamily: 'Montserrat',
    color: COLOR_BASE_PRIMARY_RED
  },
  appVersion: {
    fontSize: 12
  },
  copyR: {
    fontSize: 10
  }
});
