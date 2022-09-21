/* eslint-disable react-native/no-color-literals */
/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';
import { FONT_CAPTION_PRIMARY, FONT_OVERLINE_PRIMARY } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: metrics.screenWidth,
    height: scale(100),
    marginTop: scale(20),
    paddingLeft: scale(12),
    paddingRight: scale(12)
  },
  imageContainer: {
    width: scale(94),
    height: scale(94)
  },
  card: {
    height: scale(70),
    marginTop: scale(9),
    marginRight: scale(12)
  },
  cardContainer: {
    flexDirection: 'row'
  },
  wordContainer: {
    flexDirection: 'column',
    marginLeft: scale(15),
    alignItems: 'flex-start',
    width: scale(190)
  },
  wordTitle: {
    ...FONT_CAPTION_PRIMARY,
    fontWeight: 'bold',
    color: '#585656'
  },
  wordDesc: {
    marginTop: scale(1),
    ...FONT_OVERLINE_PRIMARY,
    color:'#BCBBBB'
  },
  loveContainer: {
    marginTop: scale(49),
    width: scale(32),
    height: scale(12)
  }
});

export default styles;
