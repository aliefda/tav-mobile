import { StyleSheet } from 'react-native';
import { COLOR_GREY_LIGHT } from '../../../styles';
import { scale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_GREY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgNone: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  imageContainer: {
    width: scale(250),
    height: scale(250)
  },
  txtNoData: {
    textAlign: 'center'
  }
});

export default styles;
