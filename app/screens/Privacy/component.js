import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import I18n from '../../i18n';
import styles from './styles';

export default class Component extends React.Component {
  render() {
    return (
      <MainScreen style={styles.container}>
        <Header title={I18n.t('privacyTitle')} />
        <ScrollView>
          <View style={styles.mainContainer}>
            <Text style={styles.text}>{I18n.t('privacyText')}</Text>
            <Text style={styles.textDesc}>{I18n.t('privacyDesc')}</Text>
          </View>
        </ScrollView>
      </MainScreen>
    );
  }
}
