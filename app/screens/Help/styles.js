/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE, COLOR_GREY_LIGHT } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_GREY_LIGHT
  },
  header: {
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderTopRightRadius: scale(10),
    borderTopLeftRadius: scale(10),
    marginRight: METRICS.doubleBaseMargin,
    marginLeft: METRICS.doubleBaseMargin
  },
  dropDownItem: {
    marginTop: METRICS.baseMargin,
    paddingRight: METRICS.baseMargin,
    marginBottom: METRICS.baseMargin
  },
  txt: {
    fontSize: 16,
    color: COLOR_BLACK
  },
  judul: {
    fontSize: 20,
    color: COLOR_BLACK,
    marginHorizontal: METRICS.marginHorizontal
  },
  margin: {
    marginBottom: METRICS.doubleBaseMargin
  },
  isi: {
    backgroundColor: COLOR_WHITE,
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    paddingVertical: scale(12),
    paddingHorizontal: scale(12),
    alignItems: 'center',
    marginTop: -METRICS.doubleBaseMargin,
    marginRight: 8,
    marginLeft: 8
  },
  icon: {
    width: scale(10),
    height: scale(28),
    marginTop: METRICS.baseMargin,
    marginBottom: METRICS.baseMargin
  },
  image: {
    width: scale(33),
    height: scale(28),
    marginRight: 8,
    marginLeft: METRICS.smallMargin,
    marginTop: scale(8),
    marginBottom: scale(8)
  }
});
export default styles;
