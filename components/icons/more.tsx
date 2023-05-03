import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={17} height={5} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M.428 2.788a2.074 2.074 0 1 1 4.149 0 2.074 2.074 0 0 1-4.149 0Zm5.926 0a2.074 2.074 0 1 1 4.148 0 2.074 2.074 0 0 1-4.148 0Zm8-2.074a2.074 2.074 0 1 1 0 4.149 2.074 2.074 0 0 1 0-4.149Z"
    />
  </Svg>
);
export default SvgComponent;
