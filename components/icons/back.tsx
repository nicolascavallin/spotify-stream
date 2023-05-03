import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#111"
      d="M2.335 7.193a1.144 1.144 0 0 0 0 1.617l6.855 6.855a1.144 1.144 0 0 0 1.617-1.617L4.759 8l6.044-6.048A1.144 1.144 0 0 0 9.186.335L2.331 7.19l.004.003Z"
    />
  </Svg>
);
export default SvgComponent;
