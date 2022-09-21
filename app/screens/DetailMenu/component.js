/* eslint-disable import/first */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import NumericInput from 'react-native-numeric-input';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import styles from './styles';
import { IMAGES } from '../../configs';
import ShareBtn from '../../../assets/svgs/Share';
import Love from '../../../assets/svgs/Love';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import { COLOR_TRANSPARENT, COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import I18n from '../../i18n';
import { scale } from '../../utils/scaling';
import arrays from '../../constants/arrays';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'menu.db' });

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isFav: false
    };
  }

  _openDbFav = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS favorite_menu(id INTEGER PRIMARY KEY AUTOINCREMENT, menuName VARCHAR(20), imageMenu VARCHAR(20), descMenu VARCHAR(100))',
        []
      );
    });
  };
  _openDbCheckOut = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS checkout_menu(uuid VARCHAR(255) PRIMARY KEY, menuName VARCHAR(20), imageMenu VARCHAR(20), qty INTEGER)',
        []
      );
    });
  };
  _onPressFav = () => {
    try {
      this.state.isFav ? this._delete(arrays.DETAIL[0].titleMenu) : this._searchById();
    } catch (error) {
      console.log(error);
    }
  };
  _searchById = () => {
    this._openDbFav();
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM favorite_menu where menuName = ?',
        // data ini nantinya di rubah dengan props
        [arrays.DETAIL[0].titleMenu],
        (txn, result) => {
          console.log(result.rows.length);
          // eslint-disable-next-line no-lone-blocks
          {
            result.rows.length > 0 ? console.log('data udah ada') : this._insertToFav();
          }
        }
      );
    });
  };
  _delete = index => {
    // Alert.alert(index);
    this._openDbFav();
    db.transaction(tx => {
      tx.executeSql('DELETE FROM  favorite_menu where menuName=?', [index], (txn, result) => {
        console.log(index);
        console.log(txn);
        console.log(result);
        this.setState({ isFav: false });
      });
    });
  };
  _insertToFav = () => {
    this._openDbFav();
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO favorite_menu (menuName, descMenu, imageMenu) VALUES (?,?,?)',
        // data ini nantinya di rubah dengan props
        [arrays.DETAIL[0].titleMenu, arrays.DETAIL[0].descMenu, arrays.DETAIL[0].imageUri],
        (txn, result) => {
          console.log('result', result.rowsAffected);
          this.setState({ isFav: true });
        }
      );
    });
  };

  _searchByName = () => {
    this._openDbCheckOut();
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM checkout_menu where menuName = ?',
        // data ini nantinya di rubah dengan props
        [arrays.DETAIL[0].titleMenu],
        (txn, result) => {
          console.log(result.rows.length);
          // eslint-disable-next-line no-lone-blocks
          {
            result.rows.length > 0 ? this._updateQtyCheckOut : this._insertToFav();
          }
        }
      );
    });
  };

  _updateQtyCheckOut = () => {
    this._openDbCheckOut();
    db.transaction(tx => {
      tx.executeSql('UPDATE checkout_menu set qty=? where menuName=?', [this.state.value], (txn, result) => {
        console.log('resultupdae', result.rowsAffected);
      });
    });
  };

  _insertToCheckout = () => {
    this._openDbCheckOut();
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO checkout_menu(uuid,menuName,imageMenu,qty) VALUES (?,?,?,?)',
        [],
        (txn, result) => {
          console.log('result', result.rowsAffected);
        }
      );
    });
  };
  _onPressShare = async () => {
    try {
      await Share.share({
        message: `${arrays.DETAIL[0].imageUri} *${arrays.DETAIL[0].titleMenu}*
        ${arrays.DETAIL[0].descMenu}`
      });
    } catch (error) {
      alert(error.message);
    }
  };

  _onPressButtonAdd = () => {
    try {
      this.setState({ value: 1 });
      console.log('Add Item');
    } catch (error) {
      console.log(error.message);
    }
  };

  renderNavBar = () => (
    <View style={styles.navContainer}>
      <Header containerStyle={{ backgroundColor: COLOR_TRANSPARENT }} />
      <View style={styles.statusBar} />
    </View>
  );

  renderContent = () => (
    <View style={styles.container}>
      <View style={styles.contentDetail}>
        <View style={styles.titleDetail}>
          <Text style={styles.txtTitle}>{arrays.DETAIL[0].titleMenu}</Text>
        </View>
        <View style={styles.categoryDetail}>
          <Text style={styles.txtCategory}>{arrays.DETAIL[0].category}</Text>
        </View>
        <View style={styles.descDetail}>
          <Text style={styles.txtDesc}>{arrays.DETAIL[0].descMenu}</Text>
        </View>
        <View style={styles.containerPrice}>
          <View style={styles.priceDetail}>
            <Text style={styles.txtPrice}>{I18n.t('price')}</Text>
          </View>
          <View style={styles.btnAdd}>
            <Button
              title="OK"
              isUpperCase={false}
              onPress={this._searchByName}
              customContainer={{
                backgroundColor: COLOR_BASE_PRIMARY_MAIN,
                borderRadius: scale(5),
                width: scale(50),
                height: scale(30)
              }}
              customText={{ color: COLOR_WHITE, fontWeight: '500' }}
            />
          </View>
        </View>
        <View style={styles.numDetail}>
          <Text style={styles.txtNum}>{arrays.DETAIL[0].price}</Text>
        </View>
      </View>
      <View style={styles.containerAddMenu}>
        <TouchableOpacity onPress={this._onPressShare} style={styles.containerShare}>
          <ShareBtn width={scale(25)} height={scale(27)} />
        </TouchableOpacity>
        {this.state.value === 0 ? (
          <Button
            title="Tambah"
            isUpperCase={false}
            onPress={this._onPressButtonAdd}
            customContainer={{
              backgroundColor: COLOR_BASE_PRIMARY_MAIN,
              borderRadius: scale(5),
              height: scale(40),
              width: scale(180)
            }}
            customText={{ color: COLOR_WHITE, fontWeight: '500' }}
          />
        ) : (
          <NumericInput
            value={this.state.value}
            onChange={value => this.setState({ value })}
            totalWidth={scale(180)}
            totalHeight={scale(40)}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor={COLOR_BASE_PRIMARY_MAIN}
            iconStyle={{ color: COLOR_WHITE }}
            rightButtonBackgroundColor={COLOR_BASE_PRIMARY_MAIN}
            leftButtonBackgroundColor={COLOR_BASE_PRIMARY_MAIN}
          />
        )}
        <TouchableOpacity onPress={this._onPressFav} style={styles.containerShare}>
          {this.state.isFav ? (
            <Love active width={scale(25)} height={scale(27)} />
          ) : (
            <Love width={scale(25)} height={scale(27)} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={scale(50)}
          headerMaxHeight={scale(250)}
          extraScrollHeight={scale(20)}
          navbarColor={COLOR_BASE_PRIMARY_MAIN}
          titleStyle={styles.titleStyle}
          backgroundImage={IMAGES.detail}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
        />
      </View>
    );
  }
}
