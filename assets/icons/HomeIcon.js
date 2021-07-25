import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.674}
      height={18.304}
      viewBox="0 0 16.674 18.304"
      {...props}>
      <G
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}>
        <Path d="M1 6.707L8.337 1l7.337 5.707v8.967a1.63 1.63 0 01-1.63 1.63H2.63A1.63 1.63 0 011 15.674z" />
        <Path data-name="Shape" d="M5.891 17.304V9.152h4.891v8.152" />
      </G>
    </Svg>
  );
}

export default HomeIcon;
