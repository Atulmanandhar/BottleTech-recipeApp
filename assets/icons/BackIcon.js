import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function BackIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24.91}
      height={15.753}
      viewBox="0 0 24.91 15.753"
      {...props}>
      <G fill="#EC942A" fillRule="evenodd">
        <Path
          data-name="Path 32"
          d="M8.673.331a1.125 1.125 0 010 1.593L2.718 7.877l5.956 5.954a1.126 1.126 0 01-1.593 1.593L.331 8.677a1.125 1.125 0 010-1.593l6.75-6.75a1.125 1.125 0 011.593 0z"
        />
        <Path
          data-name="Path 33"
          d="M1.127 7.877a1.082 1.082 0 011.034-1.125h21.716a1.129 1.129 0 010 2.25H2.161a1.082 1.082 0 01-1.034-1.125z"
        />
      </G>
    </Svg>
  );
}

export default BackIcon;
