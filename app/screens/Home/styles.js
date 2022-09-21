import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_TERTIARY_LIGHT,
  COLOR_BLACK,
  FONT_HEADLINE6_PRIMARY,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_BASE_PRIMARY_RED,
  FONT_SUBTITLE2_PRIMARY,
  FONT_BALANCE_PRIMARY,
  COLOR_WHITE_OPACITY50
} from '../../styles';
import { heightByScreen, widthByScreen } from '../../utils/dimensions';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const itemHeight = heightByScreen(32.8);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1
  },
  slide: {
    height: itemHeight,
    paddingHorizontal: scale(15)
  },
  slideInnerContainer: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: COLOR_WHITE,
    height: itemHeight
  },
  image: {
    borderRadius: 16,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  dotStyle: {
    width: 13,
    height: 7,
    borderRadius: 7,
    backgroundColor: COLOR_BASE_PRIMARY_RED
  },
  activeDot: {
    backgroundColor: COLOR_BASE_TERTIARY_LIGHT,
    width: 7
  },
  logoContainer: { width: scale(50), height: scale(50) },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: METRICS.baseMargin
  },
  cardMenu: {
    alignItems: 'center',
    width: widthByScreen(30),
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    shadowColor: COLOR_BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    elevation: 4,
    margin: METRICS.baseMargin / 2,
    padding: METRICS.baseMargin
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: METRICS.baseMargin,
    marginVertical: METRICS.doubleBaseMargin
  },
  title: {
    flex: 1,
    ...FONT_HEADLINE6_PRIMARY,
    fontWeight: 'bold',
    color: COLOR_BASE_PRIMARY_DARK,
    textAlign: 'left'
  },
  head: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scale(20),
    paddingHorizontal: scale(15)
  },
  greet: {
    ...FONT_SUBTITLE2_PRIMARY,
    color: COLOR_WHITE,
    fontWeight: 'bold'
  },
  balance: {
    ...FONT_BALANCE_PRIMARY,
    color: COLOR_WHITE,
    fontWeight: 'bold'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topUp: {
    width: scale(35),
    height: scale(35),
    paddingTop: scale(13),
    paddingVertical: scale(15)
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(30),
    borderWidth: 1,
    borderColor: COLOR_WHITE_OPACITY50,
    alignSelf: 'center',
    width: scale(280),
    height: scale(35),
    paddingTop: scale(13),
    marginVertical: scale(15),
    backgroundColor: COLOR_WHITE_OPACITY50
  },
  category: {
    fontSize: 28,
    paddingHorizontal: scale(15)
  },
  categorydesc: {
    fontSize: 15,
    paddingBottom: scale(5),
    paddingHorizontal: scale(15)
  }
});

export default styles;
