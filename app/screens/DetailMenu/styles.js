/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_WHITE,
  COLOR_TRANSPARENT,
  FONT_BODY1_PRIMARY,
  FONT_OVERLINE_PRIMARY,
  FONT_HEADLINE6_PRIMARY,
  FONT_BODY2_PRIMARY,
  COLOR_GREY_LIGHT,
  COLOR_BASE_PRIMARY_MAIN
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR_GREY_LIGHT
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    height: scale(200)
  },
  statusBar: {
    height: scale(100),
    backgroundColor: COLOR_TRANSPARENT
  },
  navBar: {
    height: scale(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR_TRANSPARENT
  },
  titleStyle: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    ...FONT_HEADLINE6_PRIMARY
  },
  contentDetail: {
    margin: scale(20),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(10)
  },
  titleDetail: {
    marginTop: scale(18),
    alignItems: 'center'
  },
  txtTitle: {
    fontWeight: 'bold',
    ...FONT_BODY1_PRIMARY
  },
  categoryDetail: {
    marginHorizontal: scale(16)
  },
  txtCategory: {
    ...FONT_OVERLINE_PRIMARY
  },
  descDetail: {
    marginHorizontal: scale(16),
    marginTop: scale(23)
  },
  txtDesc: {
    textAlign: 'justify',
    ...FONT_BODY2_PRIMARY
  },
  containerPrice: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // marginBottom: scale(10)
  },
  priceDetail: {
    // marginTop: scale(74),
    marginHorizontal: scale(16)
  },
  txtPrice: {
    marginTop: scale(74)
  },
  btnAdd: {
    marginTop: scale(74),
    marginHorizontal: scale(16)
  },
  numDetail: {
    marginHorizontal: scale(16),
    marginVertical: scale(10)
  },
  txtNum: {
    fontWeight: 'bold',
    ...FONT_BODY2_PRIMARY,
    color: COLOR_BASE_PRIMARY_MAIN
  },
  containerAddMenu: {
    flex: 2,
    flexDirection: 'row-reverse',
    marginHorizontal: scale(16),
    marginBottom: scale(25)
  },
  containerButtonAdd: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    borderRadius: scale(5),
    height: scale(40),
    width: scale(217)
  },
  containerShare: {
    marginHorizontal: scale(20),
    marginVertical: scale(5)
  }
});

export default styles;
