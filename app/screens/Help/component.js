/* eslint-disable import/default */
import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import styles from './styles';
import IMAGES from '../../configs/images';
import Header from '../../components/elements/Header';
import Love from '../../../assets/svgs/Love';
import TopUp from '../../../assets/svgs/TopUp';
import Cart from '../../../assets/svgs/Cart';
import Promo from '../../../assets/svgs/Promo';
import Profil from '../../../assets/svgs/Profil';
import HumbergerMenu from '../../../assets/svgs/HumbergerMenu';
import I18n from '../../i18n';

export default class App extends Component {
  state = {
    contents: [
      {
        icon: <Image source={IMAGES.mail} style={styles.image} />,
        title: I18n.t('inbox'),
        body: I18n.t('contentInbox')
      },
      {
        icon: <Promo />,
        title: I18n.t('promo'),
        body: I18n.t('contentPromo')
      },
      {
        icon: <TopUp />,
        title: I18n.t('topUp'),
        body: I18n.t('contentTopUp')
      },
      {
        icon: <Cart />,
        title: I18n.t('order'),
        body: I18n.t('contentOrder')
      },
      {
        icon: <Cart />,
        title: I18n.t('orders'),
        body: I18n.t('contentOrders')
      },
      {
        icon: <Love />,
        title: I18n.t('favorite'),
        body: I18n.t('contentFavorite')
      },
      {
        icon: <Profil />,
        title: I18n.t('account'),
        body: I18n.t('contentAccount')
      },
      {
        icon: <HumbergerMenu />,
        title: I18n.t('other'),
        body: I18n.t('contentOther')
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={I18n.t('help')} />
        <View style={[styles.margin]} />
        <ScrollView style={{ alignSelf: 'stretch' }}>
          {this.state.contents
            ? this.state.contents.map((param, i) => (
                <DropDownItem
                  key={i}
                  style={styles.dropDownItem}
                  contentVisible={false}
                  invisibleImage={IMAGES.icon_down}
                  visibleImage={IMAGES.icon_up}
                  header={
                    <View style={styles.header}>
                      <View>{param.icon}</View>
                      <Text style={styles.judul}>{param.title}</Text>
                    </View>
                  }
                >
                  <View style={styles.isi}>
                    <Text style={[styles.txt]}>{param.body} </Text>
                  </View>
                </DropDownItem>
              ))
            : null}
          <View />
        </ScrollView>
      </View>
    );
  }
}
