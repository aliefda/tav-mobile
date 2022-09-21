import { StyleSheet } from 'react-native';
import { scale } from '../../../utils/scaling';

import {
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_FONT_PRIMARY_LIGHT,
  COLOR_WHITE,
  COLOR_PINK
} from '../../../styles';

const container = {
  width: scale(300),
  height: scale(40),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5
};

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: COLOR_PINK
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent'
  },
  containerPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  text: {
    color: COLOR_WHITE
  },
  textDisabled: {
    color: COLOR_FONT_PRIMARY_LIGHT
  },
  textPressed: {
    color: COLOR_FONT_PRIMARY_LIGHT
  },
  button: {
    lineHeight: 100
  },
  buttonPressed: {
    ...container,
    backgroundColor: COLOR_PINK
  },
  buttonDisabled: {}
});
