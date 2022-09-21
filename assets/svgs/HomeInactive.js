import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgHomeInactive = () => (
  <Svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19.5 7.98183V21.5H13.5V13.3415C13.5 12.9867 13.2082 12.7195 12.875 12.7195H7.125C6.79182 12.7195 6.5 12.9867 6.5 13.3415V21.5H0.5V7.98182L10 0.56719L19.5 7.98183Z"
      stroke="#FF4057"
    />
  </Svg>
);

export default SvgHomeInactive;
