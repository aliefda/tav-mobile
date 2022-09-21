/* eslint-disable react/jsx-key */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { Card, CardItem } from 'native-base';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';
import I18n from '../../i18n';
import styles from './styles';
import IMAGES from '../../configs/images';

const db = openDatabase({ name: 'menu.db' });

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      descMenu: '',
      isLike: 0,
      label: '',
      insert: 'insert',
      allData: [],
      refreshing: true
    };
  }
  async componentDidMount() {
    await this._showAll();
  }
  _insert = () => {
    this._openDb();
    console.log(this.state.name);
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO favorite_menu (menuName, descMenu, imageMenu) VALUES (?,?,?)',
        [this.state.name, this.state.descMenu, this.state.url],
        (txn, result) => {
          console.log('result', result.rowsAffected);
        }
      );
    });
  };
  _openDb = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS favorite_menu(id INTEGER PRIMARY KEY AUTOINCREMENT, menuName VARCHAR(20), imageMenu VARCHAR(20), descMenu VARCHAR(100))',
        []
      );
    });
  };

  _delete = index => {
    // Alert.alert(index);
    this._openDb();
    db.transaction(tx => {
      tx.executeSql('DELETE FROM  favorite_menu where id=?', [index], (txn, result) => {
        console.log(index);
      });
    });
  };

  _searchById = () => {
    this._openDb();
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM favorite_menu where menuName = ?', [this.state.name], (txn, result) => {
        console.log(result.rows.length);
        {
          result.rows.length > 0 ? console.log('data udah ada') : this._insert();
        }
      });
    });
  };

  _showAll = () => {
    this._openDb();
    db.transaction(tx => {
      tx.executeSql('select * from favorite_menu', [], (txn, result) => {
        const temp = [];
        for (let i = 0; i < result.rows.length; i++) {
          temp.push(result.rows.item(i));
        }
        this.setState({
          allData: temp,
          refreshing: false
        });
        console.log(this.state.allData);
      });
    });
  };
  _settState = item => {
    console.log(item);
    this.setState({ nama: item });
    this._delete(this.state.name);
  };
  render() {
    return (
      <View>
        <Header title={I18n.t('favoriteFood')} />
        <FlatList
          data={this.state.allData}
          keyExtractor={item => item.menuName}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._showAll} />}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ flex: 1, width: undefined, height: undefined }}
                  resizeMode="cover"
                  source={{ uri: item.imageMenu }}
                />
              </View>
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.wordContainer}>
                    <Text style={styles.wordTitle}>{item.menuName}</Text>
                    <Text style={styles.wordDesc}>{item.descMenu}</Text>
                  </View>
                  <TouchableOpacity onPress={() => this._delete(item.id)}>
                    <View style={styles.loveContainer}>
                      <Image
                        style={{ flex: 1, width: undefined, height: undefined }}
                        source={IMAGES.loveIcon}
                        resizeMode="contain"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          )}
        />
      </View>
    );
  }
}
