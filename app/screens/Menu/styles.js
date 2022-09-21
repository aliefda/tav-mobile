/* eslint-disable react-native/no-color-literals */
/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN, FONT_CAPTION_PRIMARY, FONT_OVERLINE_PRIMARY} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: metrics.screenWidth,
    height: scale(100),
    marginTop: scale(5),
    paddingLeft: scale(22),
    paddingRight: scale(12)
  },
  headContainer: {
    backgroundColor: COLOR_WHITE
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
    fontSize: scale(12),
    fontWeight: 'bold',
    color: '#585656',
    marginTop: scale(3)
  },
  wordDesc: {
    ...FONT_OVERLINE_PRIMARY,
    marginTop: scale(2),
    fontSize: scale(10),
    color:'#BCBBBB'
  },
  wordPrice: {
    marginTop: scale(12),
    color: COLOR_BASE_PRIMARY_MAIN ,
    fontSize: scale(10)
  },
  fab: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(200),
    position: 'absolute',
    bottom: scale(65),
    right: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BASE_PRIMARY_MAIN 
  },
  actionText:{
    fontSize:30,
    color: COLOR_WHITE
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(30),
    borderWidth: 1,
    borderColor: COLOR_BASE_PRIMARY_MAIN ,
    alignSelf: 'center',
    width: scale(300),
    height: scale(40),
    paddingTop: scale(13),
    marginVertical: scale(15),
    backgroundColor: COLOR_WHITE
  }
});

export default styles;
