/* eslint-disable react-native/no-color-literals */
/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
// import metrics from '../../constants/metrics';
import { COLOR_GREY, COLOR_GREY_DARK, COLOR_PINK } from '../../styles';
// import { Row } from 'native-base';
// import { COLOR_PINK } from '../../styles';

const styles = StyleSheet.create({
  border1: {
    width: scale(240),
    height: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: scale(10)

  },
  beef: {
    paddingLeft: scale(70),
    fontSize: 15,
    color: COLOR_GREY_DARK, 
    fontWeight: 'bold' 
    // fontWeight: 20
  },
  tombol: {
    borderRadius: 5,
    width: scale(90),
    height: scale(30),
    marginTop: scale(-20),
    marginLeft: scale(250)
  },
  MEJA: {
    paddingLeft: scale(10),
    fontSize: 11,
    color: COLOR_GREY

  },
  MEJAicon:{
    // paddingLeft: scale(20)

  },
  num: {
    alignSelf: "flex-end"

  },
  butonmodal: {
    width: scale(20)

  },
  iconmeja: {
    paddingLeft: scale(10)
  },
  Modal: {
    marginTop: scale(-50),
    alignContent: 'center',
    marginLeft: scale(-10),
    width: scale(40)

  },
  Modal1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // Popup: {
  //   alignItems: 'center',
  //   padding: scale(30),
  //   justifyContent: 'center'

  // },
  textmodal: {
    alignContent: 'center',
    fontSize: 18

  },
  card2:{
    paddingLeft: scale(10),
    flexDirection: "row"
  },
  detail: {
    marginLeft: scale(160)
    // borderBottom: 10
  },
  detail1: {
    fontSize: 20
    // strokeWidth:"1" 
    // borderBottomColor: 'red',
    // borderBottomWidth: 2



  },
  diskon: {
    marginBottom: scale(-100),
    marginLeft: scale(-2)

  },
  carddiskon: {
    marginBottom: scale(100),
    flexDirection: 'column',
    marginLeft: scale(2)

  },
  cardtax: {
    marginBottom: scale(10),
    flexDirection: 'column',
    marginLeft: scale(2)

  },
  detailtext:{
    marginBottom: scale(-130),
    marginLeft: scale(-10)

  },
  detaildisc: {
    marginLeft: scale(210),
    marginTop: scale(80)
    // paddingTop: scale(-300)
  },
  detailtax: {
    marginLeft: scale(210),
    marginTop: scale(-20)

  },
  detailtot: {
    marginLeft: scale(210),
    marginTop: scale(-20)

  },
  tax: {
    marginTop: scale(-100),
    marginLeft: scale(-3)
  },
  total: {
    marginTop: scale(-90)
    //  marginBottom: scale(100)

  },
  tombol1: {
    borderRadius: scale(10),
    width: scale(80),
    // top: scale(10),
    // marginBottom: scale(-20),
    // paddingBottom: scale(-90),
    // marginTop: scale(-100),
    alignSelf: 'center'
  },
  carditem1:{
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    width: scale(310),
    height: scale(100),
    alignSelf:'center'
  },
  carditempromo: {
    width: scale(310),
    height: scale(50),
    alignSelf:'center'
  },
  carditem2:{
  width: scale(310),
  // height: scale(300),
  alignSelf: 'center'
  },
  header:{
    marginBottom: scale(-40)

  },
  icon:{
    alignItems: "flex-start",
    marginLeft: 20

  },
  cardheader: {
    borderRadius: 15,
    width: scale(310),
    alignSelf: 'center',
    marginTop: scale(20),
    marginBottom: scale(20)

  },
  imageContainer: {
    width: scale(94),
    height: scale(4)
  },
  card: {
    height: scale(70),
    marginTop: scale(900),
    marginRight: scale(12)
  },
  cardContainer: {
    flexDirection: 'row'
  },
  numericContainer:{
    position: 'absolute',
    marginBottom: 30
  },
  a: {
    marginTop: scale(-30),
    marginLeft: scale(160)
  },
  menu: {
    flexDirection:'column'

  },
  promo: {
    paddingLeft: scale(10),
    fontSize: 11,
    color: COLOR_GREY

  },
  makananContainer: {
    marginBottom: scale(0),
    marginLeft: scale(80)

  },
  hargaContainer: {
    marginLeft: scale(70),
    fontSize: 12,
    color: COLOR_PINK
  },
  hargacoret: {
    marginLeft: scale(70),
    // paddingTop: scale(30),
    fontSize: 12,
    color: COLOR_PINK
  },
  numeric: {
    justifyContent: 'space-between',
    alignItems: "flex-end",
    flexDirection: "row",
    flex: 1
    // backgroundColor: '#F5FCFF'
  },
  wordContainer: {
    flexDirection: 'column',
    marginLeft: scale(15),
    alignItems: 'flex-start',
    width: scale(190)
  },
  wordTitle: {
    fontFamily: 'Montserrat',
    fontSize: scale(12),
    fontWeight: 'bold',
    color: '#585656'
  },

  
  text:{
    alignSelf: "flex-start"
  }
});

export default styles;
