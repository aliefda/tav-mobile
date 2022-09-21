/* eslint-disable no-console */
import React from 'react';
import { View, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import Search from '../../components/elements/Input/TextArea';
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this._loadData();
  }

  _loadData = async () => {
    const isLogedIn = await AsyncStorage.getItem('isSignIn');
    this.props.navigation.navigate(isLogedIn !== '1' ? 'SignIn' : 'Onboarding');
  };

  _logout = async () => {
    await AsyncStorage.setItem('isSignIn', '0');
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="title" disabled={false} onPress={this._logout} type="raised-ripple" />
        <Search />
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
