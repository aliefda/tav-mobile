import React from 'react';
import { View, Text, Image } from 'react-native';
import IMAGES from '../../configs/images';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';
import I18n from '../../i18n';

export default class Component extends React.Component {
  _onPress = () => {};

  render() {
    return (
      <MainScreen style={styles.container}>
        <Header title={I18n.t('aboutTittle')} back />
        <View style={styles.mainContainer}>
          <Text style={styles.appTitle}>{I18n.t('appName')}</Text>
          <Text style={styles.appVersion}>{I18n.t('appVersion')}</Text>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <Text style={styles.copyR}>{I18n.t('copyRight')}</Text>
        </View>
      </MainScreen>
    );
  }
}
