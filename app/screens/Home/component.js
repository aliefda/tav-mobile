/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Search from '../../components/elements/Input/Search';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import { ENDPOINT, IMAGES } from '../../configs';
import errors from '../../utils/errors';
import I18n from '../../i18n';
import METRICS from '../../constants/metrics';
import { ARRAYS } from '../../constants';
import { COLOR_BASE_PRIMARY_MAIN } from '../../styles';

const menu = [
  {
    id: 1,
    name: 'Junkfood',
    icon: IMAGES.fastFood
  },
  {
    id: 2,
    name: 'Drinks',
    icon: IMAGES.drinks
  },
  {
    id: 3,
    name: 'Seafood',
    icon: IMAGES.seafood
  },
  {
    id: 4,
    name: 'Dessert',
    icon: IMAGES.desert
  },
  {
    id: 5,
    name: 'Meal',
    icon: IMAGES.meal
  },
  {
    id: 6,
    name: 'Vegetarian food',
    icon: IMAGES.vegetable
  }
];

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      imageActiveSlide: 0
    };
  }

  async componentDidMount() {
    const { actions } = this.props;
    await actions.fetchGetListUser('1');
  }

  _loadData = async () => {
    try {
      await this.setState({ isLoading: true });
      // eslint-disable-next-line no-unused-vars
      const result = await ENDPOINT.getListUser('1');
    } catch (error) {
      errors.createError(I18n.t('error.timeOutConnection'));
    } finally {
      this.setState({ isLoading: false });
    }
  };

  _renderAutoSlider = ({ item }) => (
    <View style={styles.slide}>
      <TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer}>
        <Image style={styles.image} source={{ uri: item.avatar }} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );

  _keyExtractor = (item, index) => item.id;

  _onPressItem = id => {
    console.log(id);
  };

  _renderMenu = ({ item }) => (
    <TouchableOpacity onPress={() => this._screen(item.id)} style={styles.cardMenu}>
      <View style={styles.logoContainer}>
        <Image source={item.icon} resizeMode="contain" style={styles.logo} />
      </View>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  _screen = id => {
    let screen = '';
    switch (id) {
      case 1:
        screen = 'Junkfood';
        break;
      case 2:
        screen = 'Drink';
        break;
      case 3:
        screen = 'Seafood';
        break;
      case 4:
        screen = 'Desert';
        break;
      case 5:
        screen = 'Meal';
        break;
      case 6:
        screen = 'Vegetarian';
        break;
    }
    this.props.navigation.navigate(screen);
  };

  render() {
    const { listUsers } = this.props;
    const { imageActiveSlide } = this.state;
    return (
      <ImageBackground source={IMAGES.bgImage} style={styles.mainContainer}>
        <MainScreen isLoading={this.state.isLoading} style={styles.container}>
          <ScrollView>
            <View style={styles.head}>
              <View style={styles.containerInput}>
                <Search
                  label=""
                  placeholder={I18n.t('inputMenu')}
                  editable
                  colorInput={{ color: COLOR_BASE_PRIMARY_MAIN }}
                />
              </View>
              <TouchableOpacity>
                <View style={styles.topUp}>
                  <Image style={styles.topUp} source={IMAGES.topUp} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.head}>
              <View>
                <Text style={styles.greet}>{I18n.t('greet1')}</Text>
                <Text style={styles.greet}>{I18n.t('greet2')}</Text>
              </View>
              <View>
                <Text style={styles.balance}>{I18n.t('balance')}</Text>
              </View>
            </View>
            <View>
              <View style={styles.mainContainer}>
                <Carousel
                  data={listUsers}
                  renderItem={this._renderAutoSlider}
                  sliderWidth={METRICS.screenWidth}
                  itemWidth={METRICS.screenWidth}
                  onSnapToItem={i => this.setState({ imageActiveSlide: i })}
                  autoplay
                  loop
                />
                <Pagination
                  dotsLength={listUsers.length}
                  activeDotIndex={imageActiveSlide}
                  dotStyle={styles.dotStyle}
                  inactiveDotStyle={styles.activeDot}
                  inactiveDotScale={1}
                />
              </View>
              <Text style={styles.category}>{I18n.t('kategori')}</Text>
              <Text style={styles.categorydesc}>{I18n.t('kategoridesc')}</Text>
              <View>
                <FlatList
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderMenu}
                  data={menu}
                  numColumns={3}
                />
              </View>
            </View>
          </ScrollView>
        </MainScreen>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  listUsers: PropTypes.array,
  navigation: PropTypes.object.isRequired
};

Component.defaultProps = {
  listUsers: []
};
