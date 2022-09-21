import React from 'react';
import { View, TextInput, Image, Text, Alert, KeyboardAvoidingView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MainScreen from '../../components/layouts/MainScreen';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';
import I18n from '../../i18n';

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      all: 0
    };
  }

  _onPress = () => {
    this.props.navigation.navigate('App');
  };
  async _addValue() {
    await this.setState({
      all: this.state.one + this.state.two + this.state.three + this.state.four
    });
    this._handlePress();
  }
  _handlePress() {
    if (this.state.all.length === 4) {
      const a = this.state.all;
      Alert.alert(a);
    } else Alert.alert(I18n.t('recheck'));
  }
  _move() {
    this.secondTextInput.focus();
  }
  _move2() {
    this.thirdTextInput.focus();
  }
  _move3() {
    this.fourthTextInput.focus();
  }
  render() {
    return (
      <MainScreen>
        <View style={styles.Main}>
          <StatusBar />
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.imageOtpContainer}>
              <Image source={IMAGES.otpIlus} style={styles.otpImage} />
            </View>
            <View style={styles.viewOtpTitle}>
              <Text style={styles.textOtpTitle}>{I18n.t('otpTitle')}</Text>
              <Text style={styles.textOtpDesc}>{I18n.t('otpDesc')}</Text>
            </View>
            <View style={styles.containerview}>
              <TextInput
                keyboardType="phone-pad"
                maxLength={1}
                underlineColorAndroid="transparent"
                style={styles.otpText}
                returnKeyType="next"
                onChangeText={text => this.setState({ one: text })}
              >
                {this.state.one.length >= 1 ? this._move() : null}
              </TextInput>
              <TextInput
                keyboardType="phone-pad"
                maxLength={1}
                underlineColorAndroid="transparent"
                style={styles.otpText}
                ref={input => {
                  this.secondTextInput = input;
                }}
                returnKeyType="next"
                onChangeText={text => this.setState({ two: text })}
              >
                {this.state.two.length >= 1 ? this._move2() : null}
              </TextInput>
              <TextInput
                keyboardType="phone-pad"
                maxLength={1}
                underlineColorAndroid="transparent"
                style={styles.otpText}
                ref={input => {
                  this.thirdTextInput = input;
                }}
                returnKeyType="next"
                onChangeText={text => this.setState({ three: text })}
              >
                {this.state.three.length >= 1 ? this._move3() : null}
              </TextInput>
              <TextInput
                keyboardType="phone-pad"
                maxLength={1}
                underlineColorAndroid="transparent"
                style={styles.otpText}
                ref={input => {
                  this.fourthTextInput = input;
                }}
                onChangeText={text => this.setState({ four: text })}
              />
            </View>
            <View style={styles.ViewButton}>
              <Button title={I18n.t('verify')} type="raised-ripple" onPress={() => this._addValue()} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
