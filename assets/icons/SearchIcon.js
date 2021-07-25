import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24.992}
      height={24.992}
      viewBox="0 0 24.992 24.992"
      {...props}>
      <G
        data-name="Icon feather-search"
        fill="none"
        stroke="#EC942A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path
          data-name="Path 4"
          d="M21.069 11.034A10.034 10.034 0 1111.034 1a10.034 10.034 0 0110.035 10.034z"
        />
        <Path data-name="Path 5" d="M23.577 23.577l-5.456-5.456" />
      </G>
    </Svg>
  );
}

export default SearchIcon;
