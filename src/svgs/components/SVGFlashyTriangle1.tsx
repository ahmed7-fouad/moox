import React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Marker,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  Text,
  TextPath,
  TSpan as Tspan,
  Use,
} from 'react-native-svg'
type ReactFromSVGProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  style?: any;
};;
const SVGFlashyTriangle1 = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg  viewBox="0 0 446 354" width={width} height={height} fill={fill} stroke={stroke} style={style}><LinearGradient id="flashy-triangle-1-a" x1="10.535252%" x2="100%" y1="41.570814%" y2="62.384295%"><Stop offset="0" stopColor="#ffeb6e"/><Stop offset="0.724252546" stopColor="#ba417f"/><Stop offset="1" stopColor="#101d6d"/></LinearGradient><LinearGradient id="flashy-triangle-1-b" x1="100%" x2="5.334511%" y1="62.047966%" y2="38.250655%"><Stop offset="0" stopColor="#88efff"/><Stop offset="1" stopColor="#00efff"/></LinearGradient><Path d="m-6.4802969 24.7326781 429.2565399 221.4864919-333.630083 118.062095z" fill="url(#flashy-triangle-1-a)" stroke="url(#flashy-triangle-1-b)" strokeWidth="8.170213" transform="translate(13 -15.974917)"/></Svg>
);
};
export default SVGFlashyTriangle1;
