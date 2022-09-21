/* eslint-disable react/sort-comp */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable no-console */
/* eslint-disable import/first */
/* eslint-disable react/no-unused-state */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Container, Content, Card, Item, CardItem, Body, Input, Text, View } from 'native-base';
import { IMAGES } from '../../configs';
import { Alert, ScrollView, Image } from 'react-native';
import I18n from '../../i18n';
import styles from './styles';
import NumericInput from 'react-native-numeric-input';
import Modal from 'react-native-modal';
// import { Root, Popup } from 'popup-ui';
import Meja from '../../../assets/svgs/Meja';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import { COLOR_WHITE, COLOR_PINK } from '../../styles';

export default class Component extends React.Component {
  state = {
    isVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  constructor(props) {
    console.log('fgfgf ');
    super(props);
    this.state = {
      value: 0,
      value1: 1
    };
    this.amount = 0;
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }
  _onPressButton() {
    Alert.alert('Pesananmu Sudah dikirim');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} title="Checkout" />
        {/* <Card> */}
        <ScrollView>
          <Container>
            <Item regular style={styles.cardheader}>
              {/* <Image source={IMAGES.MEJA} resizeMode="contain" style={styles.icon} /> */}
              <View style={styles.iconmeja}>
                <Meja />
              </View>
              <Input placeholder="Masukkan No Meja" style={styles.MEJA} keyboardType="numeric" />
            </Item>
            {/* </Card> */}
            <Content>
              <Card style={styles.carditem1}>
                <CardItem>
                  <View>
                    <Body>
                      <View style={styles.menu}>
                        <View style={styles.imageContainer}>
                          <Image source={IMAGES.menu} resizedMode="contain" style={styles.image} />
                        </View>
                        <Text style={styles.beef}>{I18n.t('beef')}</Text>
                        <Text style={styles.hargaContainer}>50.000</Text>
                        {/* <Text style={styles.hargacoret}>7000</Text> */}
                        <View style={styles.a}>
                          <NumericInput
                            value={this.state.value}
                            onChange={value => this.setState({ value })}
                            totalWidth={121}
                            totalHeight={28.37}
                            iconSize={25}
                            step={1}
                            minValue={0}
                            valueType="real"
                            rounded
                            textColor={COLOR_PINK}
                            iconStyle={{ color: COLOR_PINK }}
                            rightButtonBackgroundColor={COLOR_WHITE}
                            leftButtonBackgroundColor={COLOR_WHITE}
                          />
                        </View>
                      </View>
                    </Body>
                  </View>
                </CardItem>
              </Card>
              <Card style={styles.carditem1}>
                <CardItem>
                  <View>
                    <Body>
                      <View style={styles.menu}>
                        <View style={styles.imageContainer}>
                          <Image source={IMAGES.menu} resizedMode="contain" style={styles.image} />
                        </View>
                        <Text style={styles.beef}>{I18n.t('beef')}</Text>
                        <Text style={styles.hargaContainer}>50.000</Text>
                        <View style={styles.a}>
                          <NumericInput
                            value={this.state.value}
                            onChange={value => this.setState({ value })}
                            totalWidth={121}
                            totalHeight={28.37}
                            iconSize={25}
                            step={1}
                            minValue={0}
                            valueType="real"
                            rounded
                            textColor={COLOR_PINK}
                            iconStyle={{ color: COLOR_PINK }}
                            rightButtonBackgroundColor={COLOR_WHITE}
                            leftButtonBackgroundColor={COLOR_WHITE}
                          />
                        </View>
                      </View>
                    </Body>
                  </View>
                </CardItem>
              </Card>
              <Item regular style={styles.carditempromo}>
                <Image source={IMAGES.PROMO} resizeMode="contain" style={styles.icon} />
                <Input placeholder="Masukkan Kode Promo" style={styles.promo} />
              </Item>
              <Card style={styles.carditem2}>
                <CardItem>
                  <Body>
                    <View>
                      <Text style={styles.detail1}>{I18n.t('detail')}</Text>
                      <View style={styles.card2}>
                        <Text style={styles.detailtext}>{I18n.t('subtotal')}</Text>
                        <Text style={styles.detail}>RP. 40.000 </Text>
                      </View>
                      <View style={styles.carddiskon}>
                        <Text style={styles.diskon}>{I18n.t('discount')}</Text>
                        <Text style={styles.detaildisc}>RP. 25.000</Text>
                      </View>
                      <View style={styles.cardtax}>
                        <Text style={styles.tax}>{I18n.t('tax')}</Text>
                        <Text style={styles.detailtax}>RP. 4.000</Text>
                      </View>
                      <View>
                        <Text style={styles.total}>{I18n.t('total')}</Text>
                        <Text style={styles.detailtot}>RP. 19.000</Text>
                      </View>
                      <View style={styles.Modal}>
                        <Button title={I18n.t('Booking')} onPress={this.toggleModal} />
                        <Modal isVisible={this.state.isModalVisible}>
                          <View style={styles.Modal1}>
                            <View style={styles.border1}>
                              <Text style={styles.textmodal}> {I18n.t('pesanan')}</Text>
                              {/* <Button title="OK, SIAP !" onPress={this.toggleModal} /> */}
                              <Button
                                title={I18n.t('ok')}
                                customContainer={styles.tombol1}
                                onPress={this.toggleModal}
                              />
                            </View>
                          </View>
                        </Modal>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </ScrollView>
      </Container>
    );
  }
}
