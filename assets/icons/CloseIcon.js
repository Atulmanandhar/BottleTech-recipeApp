import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {View} from 'react-native';

const originalWidth = 24;
const originalHeight = 24;
const aspectRatio = originalWidth / originalHeight;

function CloseIcon(props) {
  return (
    <View style={{width: props.width, height: props.height, aspectRatio}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={originalWidth}
        height={originalHeight}
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        {...props}>
        <Path fill="none" d="M0 0h24v24H0z" data-name="Path 3730" />
        <Path
          fill="#fff"
          d="M15.741 17.61L12 13.87l-3.742 3.74a1.323 1.323 0 01-1.873-1.869L10.128 12 6.385 8.258a1.324 1.324 0 011.873-1.873L12 10.127l3.741-3.742a1.324 1.324 0 011.873 1.873L13.872 12l3.742 3.741a1.323 1.323 0 01-1.873 1.869z"
          data-name="Path 2645"
        />
      </Svg>
    </View>
  );
}
CloseIcon.defaultProps = {
  width: 30.992,
  height: 30.992,
};
export default CloseIcon;
