import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function CartIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.304}
      height={18.304}
      viewBox="0 0 18.304 18.304"
      {...props}>
      <G
        data-name="Icon"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        transform="translate(1 1)">
        <Circle
          cx={1.482}
          cy={1.482}
          r={1.482}
          transform="translate(3.706 13.34)"
        />
        <Circle
          data-name="Oval"
          cx={1.482}
          cy={1.482}
          r={1.482}
          transform="translate(12.599 13.34)"
        />
        <Path d="M3.461 3.706H16.3l-1.241 6.217a1.482 1.482 0 01-1.482 1.193H5.744a1.482 1.482 0 01-1.482-1.29L3.135 1.29A1.482 1.482 0 001.667 0H0" />
      </G>
    </Svg>
  );
}

export default CartIcon;
