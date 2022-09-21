import React from 'react';
import Svg, { Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgBgImage = () => (
  <Svg width="360" height="213" viewBox="0 0 360 213" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="179.5" cy="-78.5" r="291.5" fill="#FF4057" />
  </Svg>
);

export default SvgBgImage;
