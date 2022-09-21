/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import IMAGES from '../../configs/images';
import { ENDPOINT } from '../../configs';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isHidden: true,
      isLoading: false
    };
    this._showPass = this._showPass.bind(this);
  }

  _showPass = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  _forgetPass = () => {
    const { navigation } = this.props;
    navigation.navigate('OnBoarding');
  };

  _signUp = () => {
    // const email = 'zandi@gmail.com'
    // const password = 'abcde'
    // AsyncStorage.setItem('email',email);
    // AsyncStorage.setItem('password',password);
    const { navigation } = this.props;
    navigation.navigate('OnBoarding');
  };

  _signIn = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      this.setState({ isLoading: true });
      const result = await ENDPOINT.login(params);
      if (result.code === 200) {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data);
        this.props.navigation.navigate('Home');
      } else {
        ToastAndroid.show('Failed to login', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, email, password, isHidden } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <Text style={styles.appTitle}>{I18n.t('appTitle')}</Text>
        <Text style={styles.appDesc}>{I18n.t('appDesc')}</Text>
        <View style={styles.row}>
          <View style={styles.inputText}>
            <Image source={IMAGES.avatar} resizeMode="contain" style={styles.inputLogo} />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              textContentType="emailAddress"
              placeholder={I18n.t('email')}
              editable
              autoCapitalize="none"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
        </View>
        <View style={styles.inputText}>
          <Image source={IMAGES.lock} resizeMode="contain" style={styles.inputLogo} />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            secureTextEntry={isHidden}
            placeholder={I18n.t('password')}
            editable
            autoCapitalize="none"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity onPress={this._showPass} style={styles.showPassLogo}>
            <Image source={IMAGES.hide} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <Text onPress={this._forgetPass} style={styles.forgetPass}>
          {I18n.t('forgetPass')}
        </Text>
        <Button type="raised-ripple" title={I18n.t('login')} onPress={this._signIn} />
        <View style={styles.margin} />
        <Button
          customText={styles.outlinedText}
          customContainer={styles.outlined}
          title={I18n.t('signUp')}
          onPress={this._signUp}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
