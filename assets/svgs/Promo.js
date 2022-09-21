import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_PINK } from '../../app/styles';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgPromo = props => (
  <Svg height={48} width={50} fill="none" viewBox="-2 -10 40 40" {...props}>
    <Path
      d="M26.995 1H8.598v2.394a.798.798 0 1 1-1.596 0V1H1.349a.798.798 0 0 0-.798.798v4.789c0 .441.357.798.798.798a2.397 2.397 0 0 1 2.394 2.394 2.397 2.397 0 0 1-2.394 2.395.798.798 0 0 0-.798.798v4.789c0 .44.357.798.798.798h5.587v-2.395a.798.798 0 1 1 1.596 0v2.395h18.463a.798.798 0 0 0 .798-.799V1.799A.798.798 0 0 0 26.995 1zM8.532 12.972a.798.798 0 1 1-1.596 0v-1.596a.798.798 0 1 1 1.596 0v1.596zm0-4.789a.798.798 0 1 1-1.596 0V6.587a.798.798 0 1 1 1.596 0v1.596zm4.895-1.596a2.397 2.397 0 0 1 2.394-2.395 2.397 2.397 0 0 1 2.395 2.395A2.397 2.397 0 0 1 15.82 8.98a2.397 2.397 0 0 1-2.394-2.394zm1.952 8.645a.797.797 0 0 1-.222-1.107l6.385-9.577a.798.798 0 1 1 1.328.885l-6.385 9.578a.798.798 0 0 1-1.106.221zm6.827.134a2.397 2.397 0 0 1-2.394-2.394 2.397 2.397 0 0 1 2.394-2.395 2.397 2.397 0 0 1 2.395 2.395 2.397 2.397 0 0 1-2.395 2.394z"
      stroke={COLOR_PINK}
      strokeWidth={1}
    />
  </Svg>
);

export default SvgPromo;
