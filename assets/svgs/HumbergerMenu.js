import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_PINK } from '../../app/styles';

const SvgHumbergerMenu = props => (
  <Svg width={48} height={30} viewBox="0 0 184 184" {...props}>
    <Path
      fill={COLOR_PINK}
      stroke={COLOR_PINK}
      strokeWidth={0.2}
      d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 44H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 44H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
    />
  </Svg>
);

export default SvgHumbergerMenu;
