/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/first */
/* eslint-disable react/no-unused-state */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  StatusBar
} from 'react-native';
import SearchIconPink from '../../components/elements/Input/SearchIconPink';
import { Card } from 'native-base';
import IMAGES from '../../configs/images';
import Header from '../../components/elements/Header';
import I18n from '../../i18n';
import styles from './styles';
import PropTypes from 'prop-types';
import Checkout from '../../../assets/svgs/Checkout';
import { openDatabase } from 'react-native-sqlite-storage';
import { COLOR_WHITE, COLOR_GREY, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import Svg from 'react-native-svg';

const db = openDatabase({ name: 'menu.db' });

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      refreshing: true
    };
  }

  onPress = () => {
    this.props.navigation.navigate('DetailMenu');
  };

  onCheckout = () => {
    this.props.navigation.navigate('Checkout');
  };

  _openDb = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS favorite_menu(id INTEGER PRIMARY KEY AUTOINCREMENT, menuName VARCHAR(20), imageMenu VARCHAR(20), descMenu VARCHAR(100))',
        []
      );
    });
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View backgroundColor={COLOR_WHITE}>
        <StatusBar hidden />
        <Header
          title={I18n.t('category')}
          containerStyle={{ backgroundColor: COLOR_WHITE }}
          back={false}
          backpink
        />
        <ScrollView>
          <FlatList />
          <View style={styles.containerInput}>
            <SearchIconPink
              label=""
              placeholder={I18n.t('inputMenu')}
              editable
              colorInput={{ color: COLOR_BASE_PRIMARY_MAIN }}
            />
          </View>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ flex: 1, width: undefined, height: undefined }}
                  resizeMode="cover"
                  source={IMAGES.menu1}
                />
              </View>
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.wordContainer}>
                    <Text style={styles.wordTitle}>Beef Steak</Text>
                    <Text style={styles.wordDesc}>Blablabla</Text>
                    <Text style={styles.wordPrice}>50.000</Text>
                  </View>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ flex: 1, width: undefined, height: undefined }}
                  resizeMode="cover"
                  source={IMAGES.menu1}
                />
              </View>
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.wordContainer}>
                    <Text style={styles.wordTitle}>Beef Steak</Text>
                    <Text style={styles.wordDesc}>Blablabla</Text>
                    <Text style={styles.wordPrice}>50.000</Text>
                  </View>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ flex: 1, width: undefined, height: undefined }}
                  resizeMode="cover"
                  source={IMAGES.menu1}
                />
              </View>
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.wordContainer}>
                    <Text style={styles.wordTitle}>Beef Steak</Text>
                    <Text style={styles.wordDesc}>Blablabla</Text>
                    <Text style={styles.wordPrice}>50.000</Text>
                  </View>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ flex: 1, width: undefined, height: undefined }}
                  resizeMode="cover"
                  source={IMAGES.menu1}
                />
              </View>
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.wordContainer}>
                    <Text style={styles.wordTitle}>Beef Steak</Text>
                    <Text style={styles.wordDesc}>Blablabla</Text>
                    <Text style={styles.wordPrice}>50.000</Text>
                  </View>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ flex: 1, width: undefined, height: undefined }}
                  resizeMode="cover"
                  source={IMAGES.menu1}
                />
              </View>
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.wordContainer}>
                    <Text style={styles.wordTitle}>Beef Steak</Text>
                    <Text style={styles.wordDesc}>Blablabla</Text>
                    <Text style={styles.wordPrice}>50.000</Text>
                  </View>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ flex: 1, width: undefined, height: undefined }}
                  resizeMode="cover"
                  source={IMAGES.menu1}
                />
              </View>
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.wordContainer}>
                    <Text style={styles.wordTitle}>Beef Steak</Text>
                    <Text style={styles.wordDesc}>Blablabla</Text>
                    <Text style={styles.wordPrice}>50.000</Text>
                  </View>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ flex: 1, width: undefined, height: undefined }}
                  resizeMode="cover"
                  source={IMAGES.menu1}
                />
              </View>
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.wordContainer}>
                    <Text style={styles.wordTitle}>Beef Steak</Text>
                    <Text style={styles.wordDesc}>Blablabla</Text>
                    <Text style={styles.wordPrice}>50.000</Text>
                  </View>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.fab} onPress={this.onCheckout}>
            <Checkout />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
