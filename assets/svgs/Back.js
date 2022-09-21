import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../app/styles';

const SvgBack = props => {
  const color = props.active ? COLOR_BASE_PRIMARY_MAIN : COLOR_WHITE;
  return (
    <Svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M21.673 26.1456L28.1886 32.5193C28.603 32.925 29.275 32.925 29.6893 32.5193C30.1036 32.114 30.1036 31.4567 29.6893 31.0514L23.924 25.4117L29.6891 19.7721C30.1034 19.3667 30.1034 18.7094 29.6891 18.3041C29.2748 17.8986 28.6029 17.8986 28.1884 18.3041L21.6729 24.6779C21.4657 24.8806 21.3622 25.1461 21.3622 25.4116C21.3622 25.6773 21.4659 25.943 21.673 26.1456Z"
        fill={color}
      />
    </Svg>
  );
};

export default SvgBack;
