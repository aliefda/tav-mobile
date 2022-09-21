import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BackPink from '../../../../assets/svgs/BackPink';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <BackPink />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
