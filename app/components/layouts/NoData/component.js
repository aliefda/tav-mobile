/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { IMAGES } from '../../../configs';
import Header from '../../elements/Header';
import I18n from '../../../i18n';

export default class Component extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Header title={title} active />
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGES.nodata} resizeMode="center" style={styles.imgNone} />
          </View>
          <Text style={styles.txtNoData}>{I18n.t('noData')}</Text>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  title: PropTypes.string
};

Component.defaultProps = {
  title: ''
};
